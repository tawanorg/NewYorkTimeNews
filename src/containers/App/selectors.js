/**
 * App selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectApp = state => state.app || initialState;

const makeSelectorApp = () =>
  createSelector(
    selectApp,
    state => state
  );

export { 
  selectApp, 
  makeSelectorApp
};
