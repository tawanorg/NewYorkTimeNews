import {
  REQUEST, 
  UPDATE,
  ERROR,
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
