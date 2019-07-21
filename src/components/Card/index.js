import React from "react";
import PropTypes from "prop-types";
import styled from "styled-jss";

const Box = styled("div")({
	borderBottom: "1px solid #eee",
	display: "flex",
	justifyContent: "flex-start",
	overflow: "hidden",
	flexDirection: "column",
	padding: 10,
	borderRadius: 3,
	cursor: "pointer",
	boxSizing: "border-box",
	"&:hover": {
		background: "#f1f1f1"
	}
});

const Title = styled("h3")({
	fontFamily: props => props.theme.fontFamily,
	lineHeight: 1.5,
	color: props => props.theme.primary,

	"&:hover": {
		textDecoration: "underline"
	}
});

const SubTitle = styled("span")({
	fontFamily: props => props.theme.fontFamily,
	lineHeight: 1.5,
	color: props => props.theme.primary,
	fontSize: 14
});

const truncate = (input, max = 255) =>
	input.length > max ? `${input.substring(0, max)}...` : input;

const Card = ({ style, title, subtitle }) => {
	return (
		<Box style={style}>
			<Title>{truncate(title, 120)}</Title>
			{subtitle && <SubTitle>{truncate(subtitle)}</SubTitle>}
		</Box>
	);
};

Card.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string
};

Card.defaultProps = {
	subtitle: null
};

export default Card;
