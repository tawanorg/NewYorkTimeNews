import HomePageView from 'views/HomePage';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectorHomePage,
} from './selectors';
import * as homePageAction from './actions';

const mapStateToProps = createStructuredSelector({
  homePage: makeSelectorHomePage(),
});
 
export function mapDispatchToProps(dispatch) {
  return {
    request: () => dispatch(homePageAction.appRequest()),
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
)(HomePageView);
