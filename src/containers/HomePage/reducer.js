import defaultState from "utils/defaultState";
import { REQUEST, UPDATE, SORTBY_UPDATE, SORTBY_REQUEST } from "./actionTypes";

export const sortByDefault = "newest";
export const initialState = Object.assign({}, defaultState, {
	sortBy: sortByDefault
});

/* eslint-disable default-case, no-param-reassign */
export default (state = initialState, action) => {
	switch (action.type) {
		case REQUEST:
			return Object.assign({}, state, {
				isFetched: false,
				isFetching: true
			});
		case UPDATE:
			return Object.assign({}, state, {
				isFetched: true,
				isFetching: false,
				data: action.payload
			});
		case SORTBY_REQUEST:
			return Object.assign({}, state, {
				isFetching: true,
			});
		case SORTBY_UPDATE:
			return Object.assign({}, state, {
				sortBy: action.payload,
				isFetching: false,
			});
		default:
			return state;
	}
};
