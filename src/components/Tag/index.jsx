/* eslint-disable react/prop-types */
import { Container } from './styles.js'

export function Tag({title,...elements}) {
    return(
        <Container {...elements}>
            {title}
        </Container>
    )
}