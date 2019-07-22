import defaultState from 'utils/defaultState';
import {
  REQUEST,
  UPDATED
} from './actionTypes'

export const initialState = defaultState;
 
/* eslint-disable default-case, no-param-reassign */
export default (state = initialState, action) => {
	switch (action.type) {
    case REQUEST:
	  return state;
	case UPDATED:
		return Object.assign({}, state, {
			records: action.payload,
		});
	default:
		return state;
	}
};

