import React from "react";
import Card from "components/Card";
class DetailPage extends React.Component {
	componentDidMount() {
		let {
			match: { params }
		} = this.props;
		let { id } = params;
		if (!id) return null;
		this.props.getArticleContent(id);
	}

	render() {
		return <div style={{ padding: 15 }}>{this.renderArticleContent()}</div>;
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
				<h1>{title}</h1>
				<div>
					<span>{author}</span>
					<span>{publishedDate}</span>
				</div>
				<span>{types}</span>
				<span>{subTitle}</span>
				<span>{source}</span>
				<a href={webUrl} title={title} target="_blank">
					Read more
				</a>
			</article>
		);
	}
}

export default DetailPage;
