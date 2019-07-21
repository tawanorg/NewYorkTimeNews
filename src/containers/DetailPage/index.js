import DetailPageView from 'views/DetailPage';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectorDetailPage,
} from './selectors';
import * as detailPageAction from './actions';

const mapStateToProps = createStructuredSelector({
  detailPage: makeSelectorDetailPage(),
});
 
export function mapDispatchToProps(dispatch) {
  return {
    request: () => dispatch(detailPageAction.appRequest()),
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
)(DetailPageView);
