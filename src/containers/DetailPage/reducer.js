import defaultState from "utils/defaultState";
import { REQUEST, UPDATE, ERROR } from "./actionTypes";

export const initialState = defaultState;

/* eslint-disable default-case, no-param-reassign */
export default (state = initialState, action) => {
	switch (action.type) {
		case REQUEST:
			return Object.assign({}, state, {
				isFetched: false,
				isFetching: true,
			});
		case UPDATE:
			return Object.assign({}, state, {
				isFetched: true,
				isFetching: false,
				data: action.payload
			});
		case ERROR:
			return Object.assign({}, initialState, {
				isError: true,
				errorMessage: action.payload.message,
			});
		default:
			return state;
	}
};
