/**
 * Gets the repositories of the user from Github
 */

import { call, put, all, takeLatest, delay } from 'redux-saga/effects';
import request from 'utils/request';
import { REQUEST } from './actionTypes';

export function* requestSaga() {
  console.log('requestSaga');
}

export default function* root() {
	yield takeLatest(REQUEST, requestSaga);
}
