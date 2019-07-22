import HomePageView from 'views/HomePage';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectorHomePage,
  makeSelectorArticleList,
  makeSelectorSortBy,
} from './selectors';
import * as homePageAction from './actions';

const mapStateToProps = createStructuredSelector({
  homePage: makeSelectorHomePage(),
  articles: makeSelectorArticleList(),
  sortBy: makeSelectorSortBy(),
});
 
export function mapDispatchToProps(dispatch) {
  return {
    getArticleList: () => dispatch(homePageAction.homeRequest()),
    sortArticleList: (sortBy) => dispatch(homePageAction.sortByRequest(sortBy))
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
)(HomePageView);
