/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

// Reducers
import appReducer from 'containers/App/reducer';
import homePageReducer from 'containers/HomePage/reducer';
import detailPageReducer from 'containers/DetailPage/reducer';

import history from './history';

const rootReducers = combineReducers({
	app: appReducer,
	homePage: homePageReducer,
	detailPage: detailPageReducer,
	router: connectRouter(history),
});

export default rootReducers;
