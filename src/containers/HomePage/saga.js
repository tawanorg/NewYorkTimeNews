import { take, put, call, fork } from 'redux-saga/effects';
import { REQUEST, SORTBY_REQUEST } from './actionTypes';
import * as actions from './actions';
import articleListSchema from './schemas';
import { normalize } from 'normalizr';

import articlesearchmockdata from 'mockdata/articlesearch.json';

export function* getArticleList() {
  try {
    let { response } = articlesearchmockdata;
    let data = normalize(response, articleListSchema);
    yield put(actions.homeUpdate(data));
  } catch (error) {
    yield put(actions.homeError(error));
  }
}

export function* sortArticleList(payload) {
  try {
    yield put(actions.sortByUpdate(payload));
  } catch (error) {
    // yield put(actions.homeError(error));
  }
}

export function* watchGetArticleList() {
  while (true) {
    const task = yield take(REQUEST);
    if (task) {
      yield call(getArticleList)
    }
  }
}

export function* watchUpdateSortArticleList() {
  while (true) {
    const task = yield take(SORTBY_REQUEST);
    const sortBy = task.payload;
    if (task) {
      yield call(sortArticleList, sortBy)
    }
  }
}

export default function* root() {
	yield fork(watchGetArticleList);
	yield fork(watchUpdateSortArticleList);
}
