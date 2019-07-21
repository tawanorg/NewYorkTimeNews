import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-jss';

const Box = styled('div')({
	backgroundColor: '#eee',
	borderRadius: 30,
	border: 0,
	flex: 1,
	display: 'flex',
	justifyContent: 'center',
	overflow: 'hidden',
});

const Input = styled('input')({
	backgroundColor: '#eee',
	border: 0,
	width: '100%',
	borderRadius: 30,
	overflow: 'hidden',
	padding: '0 20px',
	outline: 'none',
	fontSize: 16,
	lineHeight: 1.6,
});

const SearchBox = () => {
	return (
		<Box>
			<Input placeholder="Search for article..." />
		</Box>
	)
};

SearchBox.propTypes = {
};


SearchBox.defaultProps = {
};

export default SearchBox;
