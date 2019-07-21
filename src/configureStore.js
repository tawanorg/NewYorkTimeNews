/**
 * Create the store with dynamic reducers
 */

import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import createReducer from './reducers';
import rootSagas from './sagas';
import { normalizrMiddleware } from './middlewares';

export default function configureStore(initialState = {}, history) {
	let composeEnhancers = compose;
	// If Redux Dev Tools and Saga Dev Tools Extensions are installed, enable them
	/* istanbul ignore next */
	if (process.env.NODE_ENV !== 'production' && typeof window === 'object') { // eslint-disable-line
		/* eslint-disable no-underscore-dangle */
		if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});}
		/* eslint-enable */
	}

	const sagaMiddleware = createSagaMiddleware();
	const middlewares = [sagaMiddleware, normalizrMiddleware(), routerMiddleware(history)];
	const enhancers = [applyMiddleware(...middlewares)];

	const store = createStore(
		createReducer(),
		initialState,
		composeEnhancers(...enhancers),
  );
  
  sagaMiddleware.run(rootSagas)

	return store;
}
