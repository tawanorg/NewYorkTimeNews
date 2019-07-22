import { take, put, call, fork } from 'redux-saga/effects';
import { REQUEST } from './actionTypes';
import * as actions from './actions';
import tawanImage from 'images/avatar.jpeg';
import appUserSchema from './schemas';
import { normalize } from 'normalizr';

export function* getCurrentUser() {
  const mockUser = {
    currentUser: {
      name: 'Tim Tawan',
      photoUrl: tawanImage
    }
  }

  let user = normalize(mockUser, appUserSchema);

  try {
    yield put(actions.appUpdate(user));
  } catch (error) {
    yield put(actions.appError(error));
  }
}

export function* watchGetCurrentUser() {
  while (true) {
    const task = yield take(REQUEST);
    if (task) {
      yield call(getCurrentUser)
    }
  }
}

export default function* root() {
	yield fork(watchGetCurrentUser);
}
