import React from "react";
import PropTypes from "prop-types";
import styled from "styled-jss";

const Box = styled("div")({
	display: "flex",
	justifyContent: "flex-start",
	overflow: "hidden",
	flexDirection: "column",
	padding: 10,
	borderRadius: 3,
	cursor: "pointer",
	boxSizing: "border-box",
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

const truncate = (string, max = 255) =>
	string && string.length > max ? `${string.substring(0, max)}...` : string;

const Card = ({ style, title, subtitle }) => {
	return (
		<Box style={style}>
			{title && <Title>{truncate(title, 120)}</Title>}
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
