import { take, put, call, fork } from "redux-saga/effects";
import { REQUEST } from "./actionTypes";
import * as actions from "./actions";
import articleContentSchema from "./schemas";
import { normalize } from "normalizr";
import request from "utils/request";
import createBaseApiUrl from "api";

function fetchArticleContent(params) {
	return new Promise(async (resolve, reject) => {
		const articles = request(createBaseApiUrl(params));
		articles.then(res => resolve(res)).catch(err => reject(err));
	});
}

export function* getArticleContent(articleId) {
	try {
		let buildParams = {
			fq: `_id:("nyt://article/${articleId}")`,
		}

    	let { response } = yield call(fetchArticleContent, buildParams);
		let data = normalize(response, articleContentSchema);
		yield put(actions.detailUpdate(data));
	} catch (error) {
		console.error("ArticleContent: error", error);
		yield put(actions.detailError(new Error('Something weng wrong!')));
	}
}

export function* watchGetArticleContent() {
	while (true) {
		const task = yield take(REQUEST);
		const articleId = task.payload;
		if (task) {
			yield fork(getArticleContent, articleId);
		}
	}
}

export default function* root() {
	yield fork(watchGetArticleContent);
}
