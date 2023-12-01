import styled from 'styled-components';

export const Container = styled.section`
    margin: 56px 0px 28px;
    > h2 {
        border-top-width:  2px;
        border-top-style: solid;
        border-top-color: ${({theme})=>theme.colors.bg7};
        padding-top: 24px;
        margin-bottom: 16px;
        color: ${({theme})=>theme.colors.grey1};
        font-size: 20px;
        font-weight: 400 !important;
    }
`