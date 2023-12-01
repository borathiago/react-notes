/* eslint-disable react/prop-types */
import { Container } from './styles.js'

export function Input({icon:Icon,...elements}) {
    return(
        <Container>
            {Icon&&<Icon size={20}></Icon>}
            <input {...elements}/>
        </Container>
    )
}