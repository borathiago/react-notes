/* eslint-disable no-unused-vars */
import styled from 'styled-components'

export const Container = styled.button`
    background: none;
    color: ${({theme,$isactive})=>$isactive?theme.colors.orange:theme.colors.grey1};
    border: none;
    font-size: 18px;
`