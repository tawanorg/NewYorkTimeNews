import styled from 'styled-jss';

const Tag = styled('span')(({ kind, theme }) => ({
    background: '#EEE',
    border: '1px solid #EEE',
    color: theme.primary,
    padding: '5px 10px',
    fontSize: 14,
    borderRadius: 4,
}));

export default Tag;