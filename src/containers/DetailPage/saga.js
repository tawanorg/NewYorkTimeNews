import { take, put, call, fork } from 'redux-saga/effects';
import { REQUEST } from './actionTypes';
import * as actions from './actions';
import articleContentSchema from './schemas';
import { normalize } from 'normalizr';

import articlesearchmockdata from 'mockdata/articlesearch_detail.json';

export function* getArticleContent(articleId) {
  try {
    let { response } = articlesearchmockdata;
    let data = normalize(response, articleContentSchema);
    yield put(actions.detailUpdate(data));
  } catch (error) {
    yield put(actions.detailError(error));
  }
}

export function* watchGetArticleContent() {
  while (true) {
    const task = yield take(REQUEST);
    const articleId = task.payload;
    if (task) {
      yield call(getArticleContent, articleId)
    }
  }
}

export default function* root() {
	yield fork(watchGetArticleContent);
}
