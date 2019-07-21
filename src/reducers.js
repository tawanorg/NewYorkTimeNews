/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import appReducer from 'containers/App/reducer';
import { connectRouter } from 'connected-react-router';
import history from './history';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
	const rootReducer = combineReducers({
		app: appReducer,
		router: connectRouter(history),
		...injectedReducers,
	});

	return rootReducer;
}
