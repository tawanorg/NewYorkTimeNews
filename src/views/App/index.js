/* eslint-disable */
import React from "react";
import { Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";

// components
import Header from "components/Header";

// containers
import HomePage from "containers/HomePage";
import DetailPage from "containers/DetailPage";

class App extends React.Component {
	componentDidMount() {
		this.props.initialApp();
	}

	render() {
		let { currentUser } = this.props;
		if (!currentUser) return null;

		let { name, photoUrl } = currentUser;

		return (
			<React.Fragment>
				<Header userName={name} userPhotoUrl={photoUrl} />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/detail/:id" component={DetailPage} />
				</Switch>
			</React.Fragment>
		);
	}
}

App.propTypes = {
	userName: PropTypes.string,
	userPhotoUrl: PropTypes.string
};

App.defaultProps = {
	userName: null,
	userPhotoUrl: null
};

export default App;
