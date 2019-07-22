import {
  REQUEST, 
  UPDATE,
  ERROR,
  SEARCH_INPUT_CHANGE,
} from './actionTypes';

export const appRequest = () => ({
  type: REQUEST,
});

export const appUpdate = user => ({
  type: UPDATE,
  payload: user,
});

export const appError = error => ({
  type: ERROR,
  payload: error,
});

export const appSearchInputChange = (input) => ({
  type: SEARCH_INPUT_CHANGE,
  payload: input
})