import styled from 'styled-components'

export const Container = styled.button`
    width: 100%;
    background-color: ${({theme})=>theme.colors.bg7};
    border: none;
    border-radius: 10px;
    padding: 21px;
    margin-bottom: 18px;
    > h1 {
        flex: 1;
        text-align: left;
        font-weight: 400 !important;
        font-size: 24px;
        color: ${({theme})=>theme.colors.white};
    }
    > footer {
        width: 100%;
        display: flex;
        margin-top: 24px;
    }
`