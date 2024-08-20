import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { auth } from '../firebase';

function NavigationBar() {
  const [userInfo, setUserInfo] = useState({});
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("users informations "+JSON.stringify(user))
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      setUserInfo(user);
      setIsLogin(true)
      // ...
    } else {
      // User is signed out
      // ...
      setIsLogin(false)
    }
  });
  }, []);



  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Cloud Club</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/blogs">Blogs</Nav.Link>
            <Nav.Link as={NavLink} to="/contact">Contact Us</Nav.Link>
            <>
            {isLogin? <><Navbar.Text>{"Hello "+userInfo.email}</Navbar.Text> &nbsp;<button onClick={()=>auth.signOut()}>Sign Out</button></>: <> <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
            <Nav.Link as={NavLink} to="/signup">Sign up</Nav.Link></>}
            </>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;