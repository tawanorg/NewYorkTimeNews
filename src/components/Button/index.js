import styled from 'styled-jss';

const buttonThemeMapper = (theme) => ({
    default: {
        background: '#EEE',
        border: '1px solid #EEE',
        color: theme.primary,
    },
    primary: {
        background: theme.primary,
        border: `1px solid ${theme.primary}`,
        color: 'white',
    },
})

const Button = styled('button')(({ kind, theme }) => ({
    ...buttonThemeMapper(theme)[kind || 'default'],
    padding: '8px 20px',
    borderRadius: 4,
}));

export default Button;