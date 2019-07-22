import {
	all,
	take,
	put,
	call,
	fork,
	select,
	throttle,
	cancel
} from "redux-saga/effects";
import { REQUEST, SORTBY_REQUEST } from "./actionTypes";
import * as actions from "./actions";
import articleListSchema from "./schemas";
import { normalize } from "normalizr";
import request from "utils/request";
import history from "utils/history";
import createBaseApiUrl from "api";
import { makeSelectorSortBy } from "./selectors";
import { SEARCH_INPUT_CHANGE } from "containers/App/actionTypes";

const DEFAULT_FILTER_SEARCH = {
	fq: `type_of_material:("News")`
};

function fetchArticleList(params) {
	return new Promise(async (resolve, reject) => {
		const articles = request(createBaseApiUrl(params));
		articles.then(res => resolve(res)).catch(err => reject(err));
	});
}

function* handleSearchInput({ payload }) {
	const buildParams = Object.assign({}, DEFAULT_FILTER_SEARCH, {
		q: payload
	});
	const { location: { pathname } } = history;

	yield fork(getArticleList, buildParams);
	
	// redirect to homepage when user typing
	if (pathname !== "/") {
		let changePageTask = yield fork(history.push, "/");
		yield cancel(changePageTask);
	}
}

export function* getArticleList(params = null) {
	try {
		const sortBy = yield select(makeSelectorSortBy());
		const buildParams = Object.assign({}, DEFAULT_FILTER_SEARCH, {
			sort: sortBy,
			...params
		});

		const { response } = yield call(fetchArticleList, buildParams);
		let data = normalize(response, articleListSchema);
		yield put(actions.homeUpdate(data));
	} catch (error) {
		console.error("ArticleList: error", error);
		yield put(actions.homeError(new Error("Something went wrong")));
	}
}

export function* sortArticleList(payload) {
	let task = yield put(actions.sortByUpdate(payload));
	if (task) {
		yield fork(getArticleList);
	}
}

export function* watchGetArticleList() {
	while (true) {
		const task = yield take(REQUEST);
		if (task) {
			yield fork(getArticleList);
		}
	}
}

export function* watchUpdateSortArticleList() {
	while (true) {
		const task = yield take(SORTBY_REQUEST);
		const sortBy = task.payload;
		if (task) {
			yield fork(sortArticleList, sortBy);
		}
	}
}

function* watchInput() {
	yield throttle(500, SEARCH_INPUT_CHANGE, handleSearchInput);
}

export default function* root() {
	yield all([
		watchGetArticleList(),
		watchUpdateSortArticleList(),
		watchInput()
	]);
}
