/**
 * App selectors
 */

import { createSelector } from 'reselect';
import get from 'lodash/get';
import { initialState } from './reducer';

const selectDomain = state => state.app || initialState;

const makeSelectAppStatus = () =>
  createSelector(
    selectDomain,
    ({
      errorMessage,
      isError,
      isFetched,
      isFetching,
    }) => ({
      errorMessage,
      isError,
      isFetched,
      isFetching,
    })
  );

const makeSelectCurrentUserInfo = () => 
  createSelector(
    selectDomain,
    state => get(state, 'data.entities.currentUser.user', null)
  )

export { 
  selectDomain, 
  makeSelectAppStatus,
  makeSelectCurrentUserInfo
};
