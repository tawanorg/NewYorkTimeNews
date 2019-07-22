import { all, take, put, call, fork, select, throttle } from "redux-saga/effects";
import { REQUEST, SORTBY_REQUEST } from "./actionTypes";
import * as actions from "./actions";
import articleListSchema from "./schemas";
import { normalize } from "normalizr";
import request from "utils/request";
import createBaseApiUrl from "api";
import { makeSelectorSortBy } from "./selectors";
import { SEARCH_INPUT_CHANGE } from 'containers/App/actionTypes';

const DEFAULT_FILTER_SEARCH = {
	fq: `type_of_material:("News")`
}

function fetchArticleList(params) {
	return new Promise(async (resolve, reject) => {
		const articles = request(createBaseApiUrl(params));
		articles.then(res => resolve(res)).catch(err => reject(err));
	});
}

function* handleInput({ payload }) {
	try {
		const sortBy = yield select(makeSelectorSortBy());
		const params = Object.assign({}, DEFAULT_FILTER_SEARCH, {
			sort: sortBy,
			q: payload,
		});

		const { response } = yield call(fetchArticleList, params);
		let data = normalize(response, articleListSchema);
		yield put(actions.homeUpdate(data));
	} catch (error) {
		yield put(actions.homeError(error));
	}
}

export function* getArticleList() {
	try {
		const sortBy = yield select(makeSelectorSortBy());
		const params = Object.assign({}, DEFAULT_FILTER_SEARCH, {
			sort: sortBy,
			fq: `type_of_material:("News")`
		});

		const { response } = yield call(fetchArticleList, params);
		let data = normalize(response, articleListSchema);
		yield put(actions.homeUpdate(data));
	} catch (error) {
		console.log('error', error)
		yield put(actions.homeError(error));
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
	yield throttle(500, SEARCH_INPUT_CHANGE, handleInput)
}

export default function* root() {
	yield all([
		watchGetArticleList(), 
		watchUpdateSortArticleList(),
		watchInput(),
	]);
}
