/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Container,Form } from './styles.js'
import { api } from '../../services/api.js'
import { useNavigate } from 'react-router-dom'

export function New() {
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [links,setLinks] = useState([])
    const [newLink,setNewLink] = useState('')
    const [tags,setTags] = useState([])
    const [newTag,setNewTag] = useState('')
    const navigate = useNavigate()
    function handleReturnHome() {
        navigate(-1)
    }
    function addLink() {
        setLinks(prevState=>[...prevState,newLink])
        setNewLink('')
    }
    function removeLink(deleted) {
        setLinks(prevState=>prevState.filter(link=>link!==deleted))
    }
    function addTag() {
        setTags(prevState=>[...prevState,newTag])
        setNewTag('')
    }
    function removeTag(deleted) {
        setTags(prevState=>prevState.filter(tag=>tag!==deleted))
    }
    async function handleNewNote() {
        if(!title) {
            return alert('O título da nota está vazio')
        }
        if(newLink) {
            return alert('Você deixou um link no campo para adicionar mas não clicou no ícone + para adicionar. Clique no + se quiser incluir e salvar o link')
        }
        if(newTag) {
            return alert('Você deixou uma tag no campo para adicionar mas não clicou no ícone + para adicionar. Clique no + se quiser incluir e salvar a tag')
        }
        await api.post('/notes',{title,description,tags,links})
        alert('Nota postada')
        navigate(-1)
    }
    return(
        <Container>
            <Header></Header>
            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <ButtonText title="Voltar" onClick={handleReturnHome}></ButtonText>
                    </header>
                    <Input placeholder="Título" onChange={e=>setTitle(e.target.value)}></Input>
                    <Textarea placeholder="Observações" onChange={e=>setDescription(e.target.value)}></Textarea>
                    <Section title="Links úteis">
                        {links.map((link,index)=>(
                            <NoteItem key={String(index)} value={link} readOnly onClick={()=>{removeLink(link)}}></NoteItem>
                        ))}
                        <NoteItem isNew placeholder="Novo link" value={newLink} onChange={e=>setNewLink(e.target.value)} onClick={addLink}></NoteItem>
                    </Section>
                    <Section title="Marcadores">
                        <div className='tags'>
                            {tags.map((tag,index)=>(
                                <NoteItem key={String(index)} value={tag} readOnly onClick={()=>{removeTag(tag)}}></NoteItem>
                            ))}
                            <NoteItem isNew placeholder="Nova tag" value={newTag} onChange={e=>setNewTag(e.target.value)} onClick={addTag}></NoteItem>
                        </div>
                    </Section>
                    <Button title="Salvar" onClick={handleNewNote}></Button>
                </Form>
            </main>
        </Container>
    )
}