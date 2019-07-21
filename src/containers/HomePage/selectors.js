/**
 * App selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectDomain = state => state.homePage || initialState;

const makeSelectorHomePage = () =>
  createSelector(
    selectDomain,
    state => state
  );

export { 
  selectDomain, 
  makeSelectorHomePage
};
