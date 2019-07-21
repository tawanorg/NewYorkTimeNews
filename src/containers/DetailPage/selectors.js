/**
 * App selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectDomain = state => state.detailPage || initialState;

const makeSelectorDetailPage = () =>
  createSelector(
    selectDomain,
    state => state
  );

export { 
  selectDomain, 
  makeSelectorDetailPage
};
