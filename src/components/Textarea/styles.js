import styled from 'styled-components'

export const Container = styled.textarea`
    width: 100%;
    height: 165px;
    background-color: ${({theme})=>theme.colors.bg9};
    color: ${({theme})=>theme.colors.white};
    border: none;
    resize: none;
    margin-bottom: 8px;
    border-radius: 10px;
    padding: 16px;
    &::placeholder {
        color: ${({theme})=>theme.colors.grey3};
    }
`