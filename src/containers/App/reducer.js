import defaultState from "utils/defaultState";
import { REQUEST, UPDATE } from "./actionTypes";

export const initialState = defaultState;

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
		default:
			return state;
	}
};
