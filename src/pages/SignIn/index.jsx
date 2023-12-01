import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container,Form,BackgroundImage } from './styles.js'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { /* FiLogIn, */FiMail,FiLock } from 'react-icons/fi'
import { useAuth } from '../../hooks/auth'

export function SignIn() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const { signIn } = useAuth()
    function handleSignIn() {
        signIn({email,password})
    }
    return(
        <Container>
            <Form>
                <h1>Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis</p>
                <h2>Faça seu login</h2>
                <Input placeholder="E-mail" type="text" icon={FiMail} onChange={e=>setEmail(e.target.value)}></Input>
                <Input placeholder="Password" type="password" icon={FiLock} onChange={e=>setPassword(e.target.value)}></Input>
                {/* <Input placeholder="E-mail" type="text" icon={FiMail}></Input> */}
                <Button title="Entrar" onClick={handleSignIn}></Button>
                <Link to="/register">Criar conta</Link>
            </Form>
            <BackgroundImage></BackgroundImage>
        </Container>
    )
}