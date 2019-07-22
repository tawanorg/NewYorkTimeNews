import React from "react";

import { Main, Section } from "components/Layouts";
import Button from "components/Button";
import Tag from "components/Tag";
import ErrorBox from "components/ErrorBox";
import LoadingBox from "components/LoadingBox";

import shallowEqual from "utils/shallowEqual";
import { formatDate } from "utils/helpers";
import history from "utils/history";

import StyledColumn from "./StyledColumn";
import StyledRow from "./StyledRow";

class DetailPage extends React.Component {
	componentDidMount() {
		let {
			match: { params }
		} = this.props;
		let { id } = params;
		if (!id) return null;
		this.props.getArticleContent(id);
	}

	shouldComponentUpdate(nextProps, nextState) {
		if (!shallowEqual(nextProps.article, this.props.article)) {
			return true;
		}

		if (!shallowEqual(nextProps.detailPage, this.props.detailPage)) {
			return true;
		}

		if (!shallowEqual(nextProps.match, this.props.match)) {
			return true;
		}

		return false;
	}

	render() {
		let { detailPage } = this.props;
		let { isFetched, isFetching, isError } = detailPage;

		let isLoading = !isFetched && isFetching;

		if (isError) {
			return <ErrorBox />;
		}

		if (isLoading) {
			return <LoadingBox />;
		}

		return (
			<Main>
				<Section>
					<Button onClick={() => history.goBack()}>Back</Button>
				</Section>
				{this.renderArticleContent()}
			</Main>
		);
	}

	renderArticleContent() {
		let { article } = this.props;
		if (article.length === 0) {
			return <div />;
		}
		let content = article.reduce(i => i);
		let {
			title,
			subTitle,
			author,
			source,
			webUrl,
			types,
			publishedDate
		} = content;

		return (
			<article>
				<StyledColumn>
					<h1>{title}</h1>
					<StyledRow>
						<Tag style={{ marginRight: 5, marginBottom: 5 }}>{author}</Tag>
						<Tag style={{ marginRight: 5, marginBottom: 5 }}>
							{formatDate(publishedDate)}
						</Tag>
						<Tag style={{ marginRight: 5, marginBottom: 5 }}>{types}</Tag>
						<Tag style={{ marginRight: 5, marginBottom: 5 }}>{source}</Tag>
					</StyledRow>
					<p>{subTitle}</p>
				</StyledColumn>
				<StyledColumn>
					<Button onClick={() => (window.location = webUrl)}>Read more</Button>
				</StyledColumn>
			</article>
		);
	}
}

export default DetailPage;
