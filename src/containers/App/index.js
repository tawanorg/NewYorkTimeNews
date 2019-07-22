import AppView from 'views/App';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectorApp,
  makeSelectCurrentUserInfo,
} from './selectors';
import * as appActions from './actions';

const mapStateToProps = createStructuredSelector({
  app: makeSelectorApp(),
  currentUser: makeSelectCurrentUserInfo(),
});
 
export function mapDispatchToProps(dispatch) {
  return {
    initialApp: () => dispatch(appActions.appRequest()),
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
)(AppView);
