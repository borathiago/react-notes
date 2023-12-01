import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    background-color: ${({theme})=>theme.colors.orange};
    color: ${({theme})=>theme.colors.bg8};
    height: 56px;
    border: 0;
    padding: 0 16px;
    margin-top: 16px;
    border-radius: 10px;
    border: none;
    font-weight: 400 !important;
    font-family: 'Manrope', sans-serif;
    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`