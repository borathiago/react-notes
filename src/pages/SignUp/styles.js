import styled from 'styled-components'
import backgroundIMG from '../../assets/background.png'

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`

export const Form = styled.form`
    padding: 0 136px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    > h1 {
        font-size: 48px;
        color: ${({theme})=>theme.colors.orange};
    }
    > h2 {
        font-size: 24px;
        margin: 48px 0;
    }
    > p {
        font-size: 14px;
        color: ${({theme})=>theme.colors.grey1};
    }
    > a {
        margin-top: 24px;
        color: ${({theme})=>theme.colors.orange};
    }
`
export const BackgroundImage = styled.div`
    flex: 1;
    background: url(${backgroundIMG}) no-repeat center center;
    background-size: cover;
`