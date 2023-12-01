/* eslint-disable react/prop-types */
import { Container } from './styles.js'

export function ButtonText({title,isActive=false,...elements}) {
    return(
        <Container type='button' $isactive={isActive} {...elements}>
            {title}
        </Container>
    )
}