import React from "react";
import PropTypes from "prop-types";
import styled from "styled-jss";

const Box = styled("div")({
	backgroundColor: "#eee",
	borderRadius: 50,
	width: props => props.size,
	height: props => props.size,
	borderRadius: props => props.size / 2,
	position: "relative",
	display: "flex",
	alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
});

const Image = styled("img")({
	backgroundColor: "#eee",
	width: props => props.size,
	height: props => props.size,
	borderRadius: props => props.size / 2
});

const Text = styled("span")({
	display: "flex",
	fontFamily: props => props.theme.fontFamily,
});

const Circle = styled("div")({
	backgroundColor: "green",
	width: 10,
	height: 10,
	position: "absolute",
	right: -3,
	borderRadius: 50,
	bottom: 0,
	borderWidth: 2,
	borderColor: "white",
	borderStyle: "solid"
});

function createInitial(name) {
	return name
		.split(/\s/)
		.map(s => s.substring(0, 1).toUpperCase())
		.filter(v => !!v)
		.slice(0, 1)
		.join("");
}

const renderAvatar = ({ name, size, photoUrl }) => {
	if (!name || !photoUrl) return null;

	if (photoUrl) {
		return <Image src={photoUrl} size={size} />;
	}

  let username = createInitial(name);
  return <Text>{username}</Text>;
};

const Avatar = props => {
	let { size } = props;
	return (
		<Box size={size}>
			{renderAvatar(props)}
			<Circle />
		</Box>
	);
};

Avatar.propTypes = {
	size: PropTypes.number,
	photoUrl: PropTypes.string,
	name: PropTypes.string
};

Avatar.defaultProps = {
	size: 40,
	photoUrl: null,
	name: null
};

export default Avatar;
