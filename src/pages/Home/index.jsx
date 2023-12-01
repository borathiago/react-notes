/* eslint-disable no-unused-vars */
import { useState,useEffect } from 'react'
import { FiPlus, FiSearch } from 'react-icons/fi'
import { Container,Brand,Menu,Search,Content,NewNote } from './styles.js'
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { Note } from '../../components/Note'
import { useNavigate } from 'react-router-dom'
import { api } from '../../services/api.js'

export function Home() {
    const [search,setSearch] = useState([])
    const [tags,setTags] = useState([])
    const [selectedTags,setSelectedTags] = useState([])
    const [notes,setNotes] = useState([])
    const navigate = useNavigate()
    function handleSelectedTags(tagName) {
        if(tagName==='all') {
            return setSelectedTags([])
        }
        const alreadySelected = selectedTags.includes(tagName)
        if(alreadySelected) {
            const filteredTags = selectedTags.filter(tag=>tag!==tagName)
            setSelectedTags(filteredTags)
        } else {
            setSelectedTags(prevState=>[...prevState,tagName])
        }
    }
    function handleDetails(id) {
        navigate(`/details/${id}`)
    }
    useEffect(()=>{
        async function fetchTags() {
            const response = await api.get('/tags')
            setTags(response.data)
        }
        fetchTags()
    },[])
    useEffect(()=>{
        async function fetchNotes() {
            const response = await api.get(`/notes?title=${search}&tags=${selectedTags}`)
            setNotes(response.data)
        }
        fetchNotes()
    },[selectedTags,search])
    return(
        <Container>
            <Brand>
                <h1>Notes</h1>
            </Brand>
            <Header></Header>
            <Menu>
                <li><ButtonText title="Todos" isActive={selectedTags.length===0} onClick={()=>handleSelectedTags('all')}></ButtonText></li>
                {tags&&tags.map(tag=>(<li key={String(tag.id)}><ButtonText title={tag.name} onClick={()=>handleSelectedTags(tag.name)} isActive={selectedTags.includes(tag.name)}></ButtonText></li>))}
            </Menu>
            <Search>
                <Input placeholder="Pesquisar nota" onChange={(e)=>setSearch(e.target.value)} icon={FiSearch}></Input>
            </Search>
            <Content>
                <Section title="Minhas notas">
                    {notes.map(note=>(<Note key={String(note.id)} data={note} onClick={()=>handleDetails(note.id)}></Note>))}
                </Section>
            </Content>
            <NewNote to="/new">
                <FiPlus></FiPlus>
                Criar nota
            </NewNote>
        </Container>
    )
}