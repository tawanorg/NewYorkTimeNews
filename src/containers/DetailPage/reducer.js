import defaultState from 'utils/defaultState';
import {
  REQUEST
} from './actionTypes'

export const initialState = defaultState;

/* eslint-disable default-case, no-param-reassign */
export default (state = initialState, action) => {
	switch (action.type) {
    case REQUEST:
      return state;
		default:
			return state;
	}
};

