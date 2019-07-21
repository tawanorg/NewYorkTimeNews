/* eslint-disable */
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from 'components/Header';

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route path="/" render={() => <div>Home</div>} />
        </Switch>
      </React.Fragment>
    )
  }
}

App.propTypes = {}

App.defaultProps = {}

export default App;
