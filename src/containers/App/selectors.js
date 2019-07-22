/**
 * App selectors
 */

import { createSelector } from 'reselect';
import get from 'lodash/get';
import { initialState } from './reducer';

const selectDomain = state => state.app || initialState;

const makeSelectorApp = () =>
  createSelector(
    selectDomain,
    state => state
  );

const makeSelectCurrentUserInfo = () => 
  createSelector(
    makeSelectorApp(),
    state => get(state, 'records.entities.currentUser.user', null)
  )

export { 
  selectDomain, 
  makeSelectorApp,
  makeSelectCurrentUserInfo
};
