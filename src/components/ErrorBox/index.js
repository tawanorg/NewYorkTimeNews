import React from 'react';
import PropTypes from 'prop-types';
import { Main, Section } from '../Layouts';

const ErrorBox = ({ message, subtitle }) => (
    <Main>
        <Section>
            <h1>{message}</h1>
            <span>{subtitle}</span>
        </Section>
    </Main>
);

ErrorBox.propTypes = {
    message: PropTypes.string,
    subtitle: PropTypes.string,
}

ErrorBox.defaultProps = {
    message: 'Oops!. Something went wrong!',
    subtitle: 'Quota limit exceeded. Refresh the page in 10-20 seconds',
}

export default ErrorBox