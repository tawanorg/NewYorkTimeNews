import { createSelector } from 'reselect';
import get from 'lodash/get';
import { initialState } from './reducer';

const selectDomain = state => state.homePage || initialState;

const makeSelectorHomePage = () =>
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

const makeSelectorSortBy = () =>
  createSelector(
    selectDomain,
    ({
      sortBy,
    }) => sortBy
  );

const makeSelectorArticleList = () =>
  createSelector(
    selectDomain,
    state => {
      let articles = get(state, 'data.entities.articles', []);
      return Object.values(articles);
    }
  );

export { 
  selectDomain, 
  makeSelectorHomePage,
  makeSelectorArticleList,
  makeSelectorSortBy,
};
