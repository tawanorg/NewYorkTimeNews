/**
 * Create the store with all reducers
 */

import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { routerMiddleware } from "connected-react-router";
import rootReducers from "./reducers";
import rootSagas from "./sagas";

export default function configureStore(initialState = {}, history) {
	const sagaMiddleware = createSagaMiddleware();
	const middlewares = [
		sagaMiddleware,
		routerMiddleware(history),
	];

	const store = createStore(
		rootReducers,
		initialState,
		compose(applyMiddleware(...middlewares))
	);

	sagaMiddleware.run(rootSagas);

	return store;
}
