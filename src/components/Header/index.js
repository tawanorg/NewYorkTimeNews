import React from "react";
import PropTypes from "prop-types";
import styled from "styled-jss";
import Avatar from "../Avatar";
import { Main } from '../Layouts';
import SearchBox from "../SearchBox";

const Box = styled("div")({
	backgroundColor: props => props.theme.secondary,
	borderTopWidth: 0,
	borderBottomWidth: 1,
	borderLeftWidth: 0,
	borderRightWidth: 0,
	borderStyle: "solid",
	borderColor: props => props.theme.borderColor,
	padding: 10,
});

const Wrapper = styled("div")({
	display: "flex",
	flexDirection: "row",
	justifyContent: "space-between",
	alignItems: 'center',
});

const Header = ({ onSearchInputChange, userName, userPhotoUrl }) => {
	return (
		<Box>
			<Main>
				<Wrapper>
					<SearchBox onChange={onSearchInputChange} style={{ marginRight: 15 }} />
					<Avatar name={userName} photoUrl={userPhotoUrl} />
				</Wrapper>
			</Main>
		</Box>
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
