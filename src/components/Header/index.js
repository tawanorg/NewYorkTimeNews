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

const Header = ({ userName, userPhotoUrl }) => {
	return (
		<Wrapper>
			<SearchBox style={{ marginRight: 15 }} />
			<Avatar name={userName} photoUrl={userPhotoUrl} />
		</Wrapper>
	);
};

Header.propTypes = {
	userName: PropTypes.string,
	userPhotoUrl: PropTypes.string
};

Header.defaultProps = {
	userName: null,
	userPhotoUrl: null
};

export default Header;
