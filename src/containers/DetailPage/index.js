import DetailPageView from "views/DetailPage";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import {
	makeSelectorDetailPage,
	makeSelectorArticleContent
} from "./selectors";
import * as detailPageAction from "./actions";

const mapStateToProps = createStructuredSelector({
	detailPage: makeSelectorDetailPage(),
	article: makeSelectorArticleContent()
});

export function mapDispatchToProps(dispatch) {
	return {
		getArticleContent: articleId =>
			dispatch(detailPageAction.detailRequest(articleId))
	};
}

const withConnect = connect(
	mapStateToProps,
	mapDispatchToProps
);

export default compose(withConnect)(DetailPageView);
