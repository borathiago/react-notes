/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState,useEffect } from 'react'
import { Container,Links,Content } from './styles.js'
import { useParams,useNavigate } from 'react-router-dom'
import { Tag } from '../../components/Tag'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { ButtonText } from '../../components/ButtonText'
import { api } from '../../services/api.js'

export function Details() {
  const [data,setData] = useState(null)
  const params = useParams()
  const navigate = useNavigate()
  function handleReturnHome() {
    navigate(-1)
  }
  async function handleDeleteNote() {
    const confirm = window.confirm('Deseja realmente remover a nota?')
    if(confirm) {
      await api.delete(`/notes/${params.id}`)
      navigate('/')
    }
  }
  useEffect(()=>{
    async function fethNote() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }
    fethNote()
  },[])
  return(
    <div>
      <Container>
        <Header></Header>
        {data&&
        <main>
          <Content>
            <ButtonText title="&times;" onClick={handleDeleteNote}></ButtonText>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            {data.links&&
              <Section title="Links úteis">
                <Links>
                  {data.links.map(link=>(
                    <li key={String(link.id)}><a href={link.url} target="_blank" rel="noreferrer">{link.url}</a></li>
                  ))}
                </Links>
              </Section>
            }
            {data.tags&&
              <Section title="Marcadores">
                {data.tags.map(tag=>(
                  <Tag key={String(tag.id)} title={tag.name}></Tag>
                ))}
              </Section>
            }
            <Button title="Voltar" onClick={handleReturnHome}></Button>
          </Content>
        </main>
        }
      </Container>
    </div>
  )
}