import {
  REQUEST, 
  UPDATED,
  ERROR,
} from './actionTypes';

export const appRequest = () => ({
  type: REQUEST,
});

export const appUpdate = user => ({
  type: UPDATED,
  payload: user,
});

export const appError = error => ({
  type: ERROR,
  payload: error,
});
