import AppView from 'views/App';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectAppStatus,
  makeSelectCurrentUserInfo,
} from './selectors';
import * as appActions from './actions';

const mapStateToProps = createStructuredSelector({
  app: makeSelectAppStatus(),
  currentUser: makeSelectCurrentUserInfo(),
});
 
export function mapDispatchToProps(dispatch) {
  return {
    initialApp: () => dispatch(appActions.appRequest()),
    appSearchInputChange: (input) => dispatch(appActions.appSearchInputChange(input))
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
)(AppView);
