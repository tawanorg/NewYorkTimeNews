import { all } from 'redux-saga/effects';

import appSaga from 'containers/App/saga';
import homePageSaga from 'containers/HomePage/saga';

export default function* root() {
  yield all([
    appSaga(),
    homePageSaga(),
  ])
}