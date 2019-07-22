import React from "react";
import PropTypes from "prop-types";
import styled from "styled-jss";
import Avatar from "../Avatar";
import SearchBox from "../SearchBox";

const Wrapper = styled("div")({
	minHeight: 50,
	backgroundColor: props => props.theme.secondary,
	borderTopWidth: 0,
	borderBottomWidth: 1,
	borderLeftWidth: 0,
	borderRightWidth: 0,
	borderStyle: "solid",
	borderColor: props => props.theme.borderColor,
	display: "flex",
	flexDirection: "row",
	justifyContent: "space-between",
	padding: 10,
	alignItems: 'center',
});

const Header = ({ onSearchInputChange, userName, userPhotoUrl }) => {
	return (
		<Wrapper>
			<SearchBox onChange={onSearchInputChange} style={{ marginRight: 15 }} />
			<Avatar name={userName} photoUrl={userPhotoUrl} />
		</Wrapper>
	);
};

Header.propTypes = {
	userName: PropTypes.string,
	userPhotoUrl: PropTypes.string,
	onSearchInputChange: PropTypes.func,
};

Header.defaultProps = {
	userName: null,
	userPhotoUrl: null,
	onSearchInputChange: null
};

export default Header;
