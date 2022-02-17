import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import { login } from '../Redux/apiCalls'

function Login(props) {
    const{ categories} = props
    const user = useSelector(state =>  state.users.currentUser)
    const [username,setUserName] = useState("")
    const [password,setPassWord] = useState("")
    const dispatch = useDispatch()
    const navigated = useNavigate()

    const handleLogin = e => {
        e.preventDefault()
        login(dispatch,{username,password})

        user && navigated('/')
    }
  return (
    <Container>
        <NavBar  categories={categories} />
        <Wrapper>
            <div>
            <Title>ĐĂNG NHẬP</Title>
            <Form>
                <Input placeholder="Tên đăng nhập" onChange={e => setUserName(e.target.value)} />
                <Input type='password' placeholder="Mật khẩu" onChange={e => setPassWord(e.target.value)}/>
                <Button onClick = {e => handleLogin(e)}>Đăng nhập</Button>
            </Form>
            <BackText>Quên mật khẩu ?</BackText>
            <BackText>Đăng ký</BackText>
            </div>
        </Wrapper>
        <Footer />
    </Container>
  )
}

const Container = styled.div`
    margin-top: 60px;
`
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 0;
`

const Title = styled.h4`
    text-align: center;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    margin: 12px 0;
    width: 500px;
    padding: 18px 12px;
    border: none;
    outline: none;
    background-color: #dddbdb;
`

const BackText = styled.span`
    font-size: 14px;
    text-decoration: underline;
    cursor: pointer;
`

const Button = styled.button`
    outline: none;
    border: none;
    padding: 12px 24px;
    background-color: #000;
    color:#fff;
    font-weight: 700;
    margin-bottom: 12px;
`

export default Login