/* eslint-disable react/prop-types */
import { Container } from './styles.js'
import { Tag } from '../Tag'

export function Note({data,...elements}) {
    return(
        <Container {...elements}>
            <h1>{data.title}</h1>
            {
                data.tags &&
                <footer>
                    {
                        data.tags.map(tag=><Tag key={tag.id} title={tag.name}></Tag>)
                    }
                </footer>
            }
        </Container>
    )
}