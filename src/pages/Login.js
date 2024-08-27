import React, { useState } from 'react';
import {Button, Alert} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import { auth } from '../firebase';
import { NavLink, useNavigate } from 'react-router-dom';
import { loginUser } from '../api/authService';
function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [emessage, setErrorMessage] = useState('');
    const onLogin = async(e) => {
        e.preventDefault();
        const msg = await loginUser(email, password);
        if(msg.status){
            navigate("/")
        }else{
            setErrorMessage(msg.message)
        }
    }
    return (

        <Container fluid="md">
            <h1>Login Form</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                </Form.Group>
                {emessage?.length > 0 && <Alert variant={"danger"}>
                        {emessage}
                    </Alert>}
                <Button  onClick={onLogin} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>

    );
}

export default Login;