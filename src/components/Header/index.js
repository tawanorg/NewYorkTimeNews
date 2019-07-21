import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-jss';
import Avatar from '../Avatar';
import SearchBox from '../SearchBox';

const Wrapper = styled('div')({
	minHeight: 50,
	backgroundColor: props => props.theme.secondary,
	borderTopWidth: 0,
	borderBottomWidth: 1,
	borderLeftWidth: 0,
	borderRightWidth: 0,
	borderStyle: 'solid',
	borderColor: props => props.theme.borderColor,
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	padding: 15,
});

const Header = ({ name, photoUrl }) => {
	return (
		<Wrapper>
			<SearchBox />
			<Avatar
				name={name}
				photoUrl={photoUrl}
			/>
		</Wrapper>
	)
};


Header.propTypes = {
	name: PropTypes.string,
	photoUrl: PropTypes.string,
};
  
Header.defaultProps = {
	name: null,
	photoUrl: null,
};

export default Header;
