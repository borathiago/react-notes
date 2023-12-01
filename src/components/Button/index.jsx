import { Container } from './styles.js'

// eslint-disable-next-line react/prop-types
export function Button({title,loading = false,...properties}) {
    return(
        <Container type='button' disabled={loading} {...properties}>
            {loading?'Carregando':title}
        </Container>
    )
}