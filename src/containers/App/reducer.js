import defaultState from "utils/defaultState";
import { REQUEST, UPDATE, SEARCH_INPUT_CHANGE } from "./actionTypes";

export const initialState = Object.assign({}, defaultState, {
	keyword: '',
});

/* eslint-disable default-case, no-param-reassign */
export default (state = initialState, action) => {
	switch (action.type) {
		case REQUEST:
			return Object.assign({}, state, {
				isFetching: true,
				isFetched: false,
			});
		case UPDATE:
			return Object.assign({}, state, {
				isFetched: true,
				isFetching: false,
				data: action.payload
			});
		case SEARCH_INPUT_CHANGE:
			return Object.assign({}, state, {
				keyword: action.payload,
			})
		default:
			return state;
	}
};
