import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Alert } from 'react-bootstrap';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
function Signup() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [emessage, setErrorMessage] = useState('');

    const onSubmit = async (e) => {
        console.log("hello....")
        e.preventDefault()

        await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            navigate("/login")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            setErrorMessage(errorMessage);
            // ..
        });
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
                {emessage.length > 0 && <Alert variant={"danger"}>
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