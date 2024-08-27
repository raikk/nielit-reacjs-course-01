import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Alert } from 'react-bootstrap';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { registerUser } from '../api/authService';
function Signup() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [emessage, setErrorMessage] = useState('');

    const onSubmit = async(e) => {
        console.log("hello....")
        e.preventDefault()
        const msg = await registerUser(email, password);
        if(msg.status){
            navigate("/")
        }else{
            setErrorMessage(msg.message)
        }
    }
    return (
        <Container fluid="md">
            <h1>Sign Up Form</h1>
            <Form>
          
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                </Form.Group>
                {emessage?.length > 0 && <Alert variant={"danger"}>
                        {emessage}
                    </Alert>}
                <Button
                    onClick={onSubmit} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default Signup;