import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-jss';
import Card from "components/Card";

const StyledLink = styled(Link)({
    textDecoration: 'none',
});

class HomePage extends React.Component {
	render() {
		console.log("HomePage", this.props);
		return (
			<div style={{ padding: 15 }}>
				<StyledLink to="/detail/1" title="test">
					<Card
						title="The New York Times’s Paris theater critic sampled three productions on a visit to the Australian city."
						subtitle="SYDNEY, Australia — Even when you know little about a country’s internal politics, aspects of it can seem eerily familiar. “How to Rule the World,” a new play by Nakkiah Lui for Sydney Theater Company, is deeply rooted in Australia’s cultural landscape: Jokes about the former prime minister, Julia Gillard, or the state of Tasmania may well escape visiting foreigners. Yet much else in this smart comedy resonates across borders."
					/>
				</StyledLink>
				<StyledLink to="/detail/1" title="test">
					<Card
						title="The New York Times’s Paris theater critic sampled three productions on a visit to the Australian city."
						subtitle="SYDNEY, Australia — Even when you know little about a country’s internal politics, aspects of it can seem eerily familiar. “How to Rule the World,” a new play by Nakkiah Lui for Sydney Theater Company, is deeply rooted in Australia’s cultural landscape: Jokes about the former prime minister, Julia Gillard, or the state of Tasmania may well escape visiting foreigners. Yet much else in this smart comedy resonates across borders."
					/>
				</StyledLink>
				<StyledLink to="/detail/1" title="test">
					<Card
						title="The New York Times’s Paris theater critic sampled three productions on a visit to the Australian city."
						subtitle="SYDNEY, Australia — Even when you know little about a country’s internal politics, aspects of it can seem eerily familiar. “How to Rule the World,” a new play by Nakkiah Lui for Sydney Theater Company, is deeply rooted in Australia’s cultural landscape: Jokes about the former prime minister, Julia Gillard, or the state of Tasmania may well escape visiting foreigners. Yet much else in this smart comedy resonates across borders."
					/>
				</StyledLink>
				<StyledLink to="/detail/1" title="test">
					<Card
						title="The New York Times’s Paris theater critic sampled three productions on a visit to the Australian city."
						subtitle="SYDNEY, Australia — Even when you know little about a country’s internal politics, aspects of it can seem eerily familiar. “How to Rule the World,” a new play by Nakkiah Lui for Sydney Theater Company, is deeply rooted in Australia’s cultural landscape: Jokes about the former prime minister, Julia Gillard, or the state of Tasmania may well escape visiting foreigners. Yet much else in this smart comedy resonates across borders."
					/>
				</StyledLink>
			</div>
		);
	}
}

export default HomePage;
