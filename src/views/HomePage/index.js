import React from "react";
import PropTypes from "prop-types";

import Card from "components/Card";
import Button from "components/Button";
import { Main, Section } from "components/Layouts";
import ErrorBox from "components/ErrorBox";
import LoadingBox from "components/LoadingBox";

import shallowEqual from "utils/shallowEqual";

import StyledLink from "./StyledLink";
import ArticleBox from "./ArticleBox";
import HeroSection from "./HeroSection";

class HomePage extends React.Component {
	state = {
		shouldShowHeroSection: true
	};

	componentDidMount() {
		this.props.getArticleList();
		this.getHeroSection();
	}

	shouldComponentUpdate(nextProps, nextState) {
		if (!shallowEqual(nextProps.articles, this.props.articles)) {
			return true;
		}

		if (!shallowEqual(nextProps.sortBy, this.props.sortBy)) {
			return true;
		}

		if (!shallowEqual(nextProps.homePage, this.props.homePage)) {
			return true;
		}

		if (
			!shallowEqual(
				nextState.shouldShowHeroSection,
				this.state.shouldShowHeroSection
			)
		) {
			return true;
		}

		return false;
	}

	handleToggleSortBy(sortBy) {
		if (typeof sortBy !== "string") return;
		this.props.sortArticleList(sortBy.toLowerCase());
	}

	handleCloseHero() {
		this.setState(
			{
				shouldShowHeroSection: false
			},
			() => {
				localStorage.setItem("shouldShowHeroSection", JSON.stringify(0));
			}
		);
	}

	async getHeroSection() {
		let shouldShowHeroSection = await localStorage.getItem(
			"shouldShowHeroSection"
		);
		if (shouldShowHeroSection === "0") {
			this.setState({
				shouldShowHeroSection: false
			});
		}
	}

	render() {
		let { shouldShowHeroSection } = this.state;
		let { sortBy, homePage } = this.props;
		let { isError, isFetched, isFetching } = homePage;

		let isLoading = !isFetched && isFetching;

		if (isError) {
			return <ErrorBox />;
		}

		if (isLoading) {
			return <LoadingBox />;
		}

		return (
			<Main>
				{shouldShowHeroSection && (
					<HeroSection>
						<h1>Hi, there!</h1>
						<p>
							It's Tawan, thank you for the opportunity to get to know you'll.
							This is my test application for 7Peaks Software. I kinda rush to
							finish the test, I am on the move. I definitely could do better on
							real project. Please feel free to provide ANY feedback, do not
							hesitate to contact me tim@tawan.me
						</p>
						<Button onClick={() => this.handleCloseHero()}>Close</Button>
					</HeroSection>
				)}
				<Section>
					<Button
						kind={sortBy === "newest" ? "primary" : "default"}
						style={{ marginRight: 10 }}
						onClick={() => this.handleToggleSortBy("Newest")}
					>
						Newest
					</Button>
					<Button
						kind={sortBy === "oldest" ? "primary" : "default"}
						style={{ marginRight: 10 }}
						onClick={() => this.handleToggleSortBy("Oldest")}
					>
						Oldest
					</Button>
				</Section>
				<Section>{this.renderArticleList()}</Section>
			</Main>
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
