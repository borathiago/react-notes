/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft,FiUser,FiMail,FiLock,FiCamera } from 'react-icons/fi'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Container,Form,Avatar } from './styles.js'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { api } from '../../services/api.js'
import { useAuth } from '../../hooks/auth.jsx'
import { useNavigate } from 'react-router-dom'

export function Profile() {
    const { user,updateProfile } = useAuth()
    const [name,setName] = useState(user.name)
    const [email,setEmail] = useState(user.email)
    const [psswrd,setPsswrd] = useState()
    const [password,setPassword] = useState()
    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
    const [avatar,setAvatar] = useState(avatarURL)
    const [avatarFile,setAvatarFile] = useState(null)
    const navigate = useNavigate()
    function handleReturnHome() {
        navigate(-1)
    }
    async function handleUpdate() {
        const updated = {name,email,password,psswrd}
        const userUpdated = Object.assign(user,updated)
        await updateProfile({user:userUpdated,avatarFile})
    }
    async function handleAvatar(event) {
        const file = event.target.files[0]
        setAvatarFile(file)
        const imagePreview = URL.createObjectURL(file)
        setAvatar(imagePreview)
    }
    return(
        <Container>
            <header>
                <button type='button' onClick={handleReturnHome}>
                    <FiArrowLeft></FiArrowLeft>
                </button>
            </header>
            <Form>
                <Avatar>
                    <img src={avatar} alt="Foto do usuário" />
                    <label htmlFor="avatar">
                        <FiCamera></FiCamera>
                        <input id="avatar" type="file" onChange={handleAvatar}></input>
                    </label>
                </Avatar>
                <Input placeholder="Nome" type="text" icon={FiUser} value={name} onChange={e=>setName(e.target.value)}></Input>
                <Input placeholder="E-mail" type="text" icon={FiMail} value={email} onChange={e=>setEmail(e.target.value)}></Input>
                <Input placeholder="Senha atual" type="password" icon={FiLock} onChange={e=>setPsswrd(e.target.value)}></Input>
                <Input placeholder="Nova senha" type="password" icon={FiLock} onChange={e=>setPassword(e.target.value)}></Input>
                <Button title="Salvar" onClick={handleUpdate}></Button>
            </Form>
        </Container>
    )
}