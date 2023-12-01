/* eslint-disable react/prop-types */
import { Container } from './styles.js'

export function Textarea({value,...elements}) {
    return(
        <Container {...elements}>
            {value}
        </Container>
    )
}