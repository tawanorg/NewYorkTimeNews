import React from "react";
// import PropTypes from 'prop-types';
import styled from "styled-jss";

const Box = styled("div")({
	backgroundColor: "#eee",
	borderRadius: 30,
	border: 0,
	flex: 1,
	display: "flex",
	justifyContent: "center",
	overflow: "hidden"
});

const Input = styled("input")({
	backgroundColor: "#eee",
	border: 0,
	width: "100%",
	borderRadius: 30,
	overflow: "hidden",
	padding: "13px 20px",
	outline: "none",
});

const SearchBox = ({ style }) => {
	return (
		<Box style={style}>
			<Input placeholder="Search for article..." />
		</Box>
	);
};

SearchBox.propTypes = {};

SearchBox.defaultProps = {};

export default SearchBox;
