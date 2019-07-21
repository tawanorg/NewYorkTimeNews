import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-jss';

const Box = styled('div')({
	backgroundColor: '#eee',
	borderRadius: 50,
});

const Image = styled('img')({
	backgroundColor: '#eee',
});

const Avatar = ({ size, photoUrl }) => {
	return (
		<Box size={size}>
			<Image src={photoUrl} />
		</Box>
	)
};

Avatar.propTypes = {
  size: PropTypes.number,
  photoUrl: PropTypes.string,
};

Avatar.defaultProps = {
  size: 40,
  photoUrl: null,
};

export default Avatar;
