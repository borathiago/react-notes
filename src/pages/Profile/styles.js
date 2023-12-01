import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    > header {
        width: 100%;
        height: 156px;
        background: ${({theme})=>theme.colors.bg9};
        display: flex;
        align-items: center;
        padding: 0 124px;
        svg {
            font-size: 24px;
            color: ${({theme})=>theme.colors.grey1};
        }
        button {
            background: none;
            border: none;
        }
    }
`

export const Form = styled.form`
    max-width: 340px;
    margin: -87px auto 0;
    > div:nth-child(4) {
        margin-top: 24px;
    }
`

export const Avatar = styled.div`
    position: relative;
    margin: 0 auto 32px;
    width: 187px;
    height: 187px;
    > img {
        width: 187px;
        height: 187px;
        border-radius: 50%;
    }
    > label {
        width: 48px;
        height: 48px;
        background-color: ${({theme})=>theme.colors.orange};
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        bottom: 7px;
        right: 7px;
        cursor: pointer;
        input {
            display: none;
        }
        svg {
            width: 21px;
            height: 21px;
            color: ${({theme})=>theme.colors.bg8};
        }
    }
`