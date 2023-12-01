import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-weight: 200 !important;
        -webkit-font-smoothing: antialiased;
        transition: all ease-out 325ms;
    }
    body {
        background-color: ${({theme})=>theme.colors.bg8};
        color: ${({theme})=>theme.colors.white};
        /* font-family: 'Manrope', sans-serif; */
        font-family: 'Nunito Sans', sans-serif;
        /* font-family: 'IBM Plex Mono', monospace; */
    }
    a {
        text-decoration: none;
        font-weight: 400 !important;
    }
    button,a {
        cursor: pointer;
        /* font-family: 'Manrope', sans-serif; */
        /* font-family: 'Nunito Sans', sans-serif; */
        font-family: 'IBM Plex Mono', monospace;
        font-weight: 400 !important;
    }
    button:hover,a:hover {
        filter: brightness(0.9);
    }
    input,textarea {
        /* font-family: 'Manrope', sans-serif !important; */
        /* font-family: 'Nunito Sans', sans-serif !important; */
        font-family: 'IBM Plex Mono', monospace !important;
    }
`