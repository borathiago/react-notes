import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 256px auto;
    grid-template-rows: 165px 128px auto 64px;
    grid-template-areas: "brand header" "menu search" "menu content" "newnote content";
    background-color: ${({theme})=>theme.colors.bg8};
`
export const Brand = styled.div`
    grid-area: brand;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({theme})=>theme.colors.bg9};
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: ${({theme})=>theme.colors.bg7};
    > h1 {
        font-size: 24px;
        color: ${({theme})=>theme.colors.orange};
    }
`
export const Menu = styled.ul`
    grid-area: menu;
    background-color: ${({theme})=>theme.colors.bg9};
    padding-top: 64px;
    text-align: center;
    > li {
        margin-bottom: 24px;
    }
`
export const Search = styled.div`
    grid-area: search;
    padding: 64px 64px 0;
`
export const Content = styled.div`
    grid-area: content;
    padding: 0 64px;
    overflow-y: auto;
`
export const NewNote = styled(Link)`
    grid-area: newnote;
    background-color: ${({theme})=>theme.colors.orange};
    color: ${({theme})=>theme.colors.bg9};
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
        margin-right: 8px;
    }
`