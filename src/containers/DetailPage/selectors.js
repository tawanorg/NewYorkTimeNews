import { createSelector } from 'reselect';
import get from 'lodash/get';
import { initialState } from './reducer';

const selectDomain = state => state.detailPage || initialState;

const makeSelectorDetailPage = () =>
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

const makeSelectorArticleContent = () =>
  createSelector(
    selectDomain,
    state => {
      let article = get(state, 'data.entities.article', []);
      return Object.values(article)
    }
  );

export { 
  selectDomain, 
  makeSelectorDetailPage,
  makeSelectorArticleContent
};
