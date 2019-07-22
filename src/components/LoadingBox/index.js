import React from 'react';
import PropTypes from 'prop-types';
import { Main, Section } from '../Layouts';

const LoadingBox = ({ message }) => (
    <Main>
        <Section>
            <h1>{message}</h1>
        </Section>
    </Main>
);

LoadingBox.propTypes = {
    message: PropTypes.string,
}

LoadingBox.defaultProps = {
    message: 'Loading...',
}

export default LoadingBox