/* eslint-disable react/prop-types */
import { FiPlus,FiX } from 'react-icons/fi'
import { Container } from './styles.js'

export function NoteItem({isNew=false,value,onClick,...elements}) {
    return(
        <Container isNew={isNew}>
            <input type="text" value={value} readOnly={!isNew} {...elements}/>
            <button type='button' onClick={onClick} className={isNew?'button-add':'button-delete'}>
                {isNew ? <FiPlus></FiPlus> : <FiX></FiX>}
            </button>
        </Container>
    )
}