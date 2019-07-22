import {
  REQUEST,
  UPDATE,
  ERROR,
  SORTBY_REQUEST,
  SORTBY_UPDATE,
} from './actionTypes';
import { sortByDefault } from './reducer';

export const homeRequest = () => ({
  type: REQUEST,
});

export const homeUpdate = (articles) => ({
  type: UPDATE,
  payload: articles
});

export const homeError = (error) => ({
  type: ERROR,
  payload: error
});

export const sortByRequest = (sortedBy = sortByDefault) => ({
  type: SORTBY_REQUEST,
  payload: sortedBy
});

export const sortByUpdate = (sortedBy = sortByDefault) => ({
  type: SORTBY_UPDATE,
  payload: sortedBy
});
