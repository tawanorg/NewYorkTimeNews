import {
  REQUEST,
  UPDATE,
  ERROR
} from './actionTypes';

export const detailRequest = (articleId) => ({
  type: REQUEST,
  payload: articleId,
});

export const detailUpdate = (articleContent) => ({
  type: UPDATE,
  payload: articleContent
});

export const detailError = (error) => ({
  type: ERROR,
  payload: error
});
