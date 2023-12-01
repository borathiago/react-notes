import { Link } from 'react-router-dom'
import styled from 'styled-components';

export const Container = styled.header`
    grid-area: header;
    align-items: center;
    justify-content: space-between;
    height: 165px;
    width: 100%;
    background-color: ${({theme})=>theme.colors.bg8};
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: ${({theme})=>theme.colors.bg7};
    display: flex;
    padding: 80px;
`

export const Profile = styled(Link)`
    display: flex;
    align-items: center;
    > img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
    }
    > div {
        display: flex;
        flex-direction: column;
        margin-left: 16px;
        line-height: 24px;
        > span {
            font-size: 14px;
            color: ${({theme})=>theme.colors.grey1};
        }
        > strong {
            font-size: 18px;
            color: ${({theme})=>theme.colors.white};
            font-weight: 400 !important;
        }
    }
`

export const Logout = styled.button`
    border: none;
    background: none;
    > svg {
        color: ${({theme})=>theme.colors.grey1};
        font-size:36px;
    }
`