import React from "react";
import PropTypes from "prop-types";
import Card from "components/Card";
import StyledLink from "./StyledLink";
import ArticleBox from "./ArticleBox";
class HomePage extends React.Component {
	componentDidMount() {
		this.props.getArticleList();
	}

	handleToggleSortBy(sortBy) {
		this.props.sortArticleList(sortBy);
	}

	render() {
		console.log("HomePage", this.props, this.state);
		let { sortBy } = this.props;
		return (
			<main style={{ padding: 15 }}>
				<section>
					<span>Sort by: </span>
					<button onClick={() => this.handleToggleSortBy("newest")}>
						Newest {sortBy === 'newest' && 'selected'}
					</button>
					<button onClick={() => this.handleToggleSortBy("oldest")}>
						Oldest {sortBy === 'oldest' && 'selected'}
					</button>
				</section>
				<section>{this.renderArticleList()}</section>
			</main>
		);
	}

	renderArticleList() {
		let { articles } = this.props;

		if (articles.length == 0) return <div />;

		return articles.map(({ id, title, subTitle }, index) => (
			<StyledLink to={`/detail/${id}`} title={title} key={`${id}-${index}}`}>
				<ArticleBox>
					<Card title={title} subtitle={subTitle} />
				</ArticleBox>
			</StyledLink>
		));
	}
}

HomePage.propTypes = {
	articles: PropTypes.array
};

HomePage.defaultProps = {
	articles: []
};

export default HomePage;
