import 'utils/animation-polyfill';
import 'normalize.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { ThemeProvider } from 'styled-jss'
import App from 'containers/App';

import history from './history';
import configureStore from './configureStore';
import themes from './theme';

const initialState = {};

const store = configureStore(initialState, history);
 
const Root = ({ store }) => {
	let defaultTheme = themes.light;

	return (
		<Provider store={store}>
			<ThemeProvider theme={defaultTheme}>
				<ConnectedRouter history={history}>
					<App />
				</ConnectedRouter>
			</ThemeProvider>
		</Provider>
	)
}

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
