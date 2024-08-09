import React, { useEffect, useState } from 'react'
import useDocumentTitle from './useDocumentTitle'
import { Button, Image, Badge, Carousel, Card, Table, Modal, InputGroup, Form, Alert } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ClipLoader from "react-spinners/ClipLoader";
import HomeSection1 from '../components/Home/HomeSection1';
import HomeSection2 from '../components/Home/HomeSection2';
import HomeSection3 from '../components/Home/HomeSection3';

export default function Home() {
  useDocumentTitle("Home page");
  let [users, setUsers] = useState([])
  let [loading, setLoader] = useState(true)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [editFlag, setEditFlag] = useState(false);

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [emessage, setErrorMessage] = useState("")
  const [editId, setEditId] = useState("")

  const getData = () => {
    fetch('https://66b08ccf6a693a95b53923eb.mockapi.io/api/users/user_list', {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
      // handle error
    }).then(data => {
      //console.log("user list " + JSON.stringify(tasks))
      setUsers(data)
      setLoader(false)
      // Do something with the list of tasks
    }).catch(error => {
      // handle error
      setLoader(false)
    })
  }
  useEffect(() => {
    getData()
  }, [])

  const getInputAddress = (e) => {
    setAddress(e.target.value)
  }

  const handleSubmit = () => {
    if (name === "" || email === "" || address === "") {
      setErrorMessage("All fields are required!")
    } else {
      const submitData = {
        name: name,
        email: email,
        address: address
      }
      fetch('https://66b08ccf6a693a95b53923eb.mockapi.io/api/users/user_list', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        // Send your data in the request body as JSON
        body: JSON.stringify(submitData)
      }).then(res => {
        if (res.ok) {
          return res.json();
        }
        // handle error
      }).then(task => {
        // do something with the new task
        setShow(false)
        setName("");
        setEmail("");
        setAddress("");

        getData();

      }).catch(error => {
        // handle error
        setShow(false)
      })
    }

  }

  const deleteHandle = (id) => {
    console.log("ID " + id)
    fetch('https://66b08ccf6a693a95b53923eb.mockapi.io/api/users/user_list/' + id, {
      method: 'DELETE',
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
      // handle error
    }).then(task => {
      // Do something with deleted task
      getData();
    }).catch(error => {
      // handle error
      console.log("Error " + JSON.stringify(error))
    })
  }

  const handleUpdate = () => {
    //console.log("edt id " + editId)
    if (name === "" || email === "" || address === "") {
      setErrorMessage("All fields are required!")
    } else {
      const submitData = {
        name: name,
        email: email,
        address: address
      }
      fetch('https://66b08ccf6a693a95b53923eb.mockapi.io/api/users/user_list/'+editId, {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        // Send your data in the request body as JSON
        body: JSON.stringify(submitData)
      }).then(res => {
        if (res.ok) {
          return res.json();
        }
        // handle error
      }).then(task => {
        // do something with the new task
        setShow(false)
        setName("");
        setEmail("");
        setAddress("");
        
        getData();

      }).catch(error => {
        // handle error
        setShow(false)
      })
    }

  }

  return (
    <Container fluid="md">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{editFlag ? "Update Student" : "Add New Student"} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {emessage.length > 0 && <Alert variant={"danger"}>
            {emessage}
          </Alert>}
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">Name</InputGroup.Text>
            <Form.Control
              name={"name"}
              value={name}
              onChange={(e) => {
                setName(e.target.value)
                setErrorMessage("")
              }}
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
            />
          </InputGroup>
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">Email</InputGroup.Text>
            <Form.Control
              onChange={(e) => {
                setEmail(e.target.value)
                setErrorMessage("")
              }}
              value={email}
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
            />
          </InputGroup>
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">Address</InputGroup.Text>
            <Form.Control
              value={address}
              onChange={getInputAddress}
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
            />
          </InputGroup>

          {editFlag ? <Button size='sm' variant="primary" onClick={handleUpdate} >Update Submit</Button> : <Button size='sm' variant="primary" onClick={handleSubmit} >Submit</Button>}
        </Modal.Body>
        <Modal.Footer>

          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>
      <div className='display: flex;  
    justify-content: center;  
    align-items: center;'>
        <ClipLoader
          color={"blue"}
          loading={loading}
          cssOverride={{
            display: "block",
            margin: "0 auto",
            textAlign: 'center',
            borderColor: "red"
          }}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        /></div>
      {users.length > 0 && <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users?.map((item, index) => <tr key={index}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.address}</td>
            <td><Button size='sm' variant='primary' onClick={() => {
              setName(item.name)
              setEmail(item.email)
              setAddress(item.address)
              setEditFlag(true)

              setEditId(item.id)
              setShow(true)

            }} >Edit</Button>&nbsp;<Button size='sm' variant='danger' onClick={() => deleteHandle(item.id)}>Delete</Button></td>
          </tr>)}
        </tbody>
      </Table>}


      <Button size='sm' variant="primary" onClick={() => {
          setName("")
          setEmail("")
          setAddress("")
          setEditFlag(false)
          setEditId("")
          setShow(true)
      }}>Add New</Button>

      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />





      <Row className='my-5'>

      </Row>
    </Container>
  )
}
