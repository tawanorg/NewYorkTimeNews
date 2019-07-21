/* eslint-disable */
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

// components
import Header from 'components/Header';

// containers
import HomePage from 'containers/HomePage';
import DetailPage from 'containers/DetailPage';
import tawanImage from 'images/avatar.jpeg';

const mockUser = {
  name: 'Tim Tawan',
  photoUrl: tawanImage
}

function App() {
  return (
    <React.Fragment>
      <Header
        userName={mockUser.name}
        userPhotoUrl={mockUser.photoUrl}
      />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/detail/:id" component={DetailPage} />
      </Switch>
    </React.Fragment>
  )
}

App.propTypes = {}

App.defaultProps = {}

export default App;
