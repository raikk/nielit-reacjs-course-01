import React, { useEffect, useState, CSSProperties } from 'react'
import useDocumentTitle from './useDocumentTitle'
import { Button, Image, Badge, Carousel, Card, Table } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ClipLoader from "react-spinners/ClipLoader";



export default function Home() {
  useDocumentTitle("Home page");

 
  let [users, setUsers] = useState([])

  let [loading, setLoader] = useState(true)

  useEffect(() => {
    fetch('https://66aa0588613eced4eba73a23.mockapi.io/api/users/user_list', {
      method: 'GET',
      headers: { 'content-type': 'application/json'},
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
      // handle error
    }).then(tasks => {
      //console.log("user list " + JSON.stringify(tasks))
      setUsers(tasks)
      setLoader(false)
      // Do something with the list of tasks
    }).catch(error => {
      // handle error
      setLoader(false)
    })
  }, [])

  return (
    <Container fluid="md">
       <div className='display: flex;  
    justify-content: center;  
    align-items: center;'>
        <ClipLoader
        color={"blue"}
        loading={loading}
        cssOverride={{display: "block",
          margin: "0 auto",
          textAlign: 'center',
          borderColor: "red"}}
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
          </tr>
        </thead>
       
        <tbody>
          {users?.map((item, index) => <tr key={index}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.address}</td>
          </tr>)}
        </tbody>
      </Table>}
      <Row className='my-4 px-4'>
        <Col md={6}><Image src="https://picsum.photos/700/300" fluid rounded /></Col>
        <Col md={6}>
          <h3>Headline Text Here</h3>
          <p>Get the same random image every time based on a seed, by adding, Get the same random image every time based on a seed, by adding. Get the same random image every time based on a seed, by adding, Get the same random image every time based on a seed, by adding. Get the same random image every time based on a seed, by adding, Get the same random image every time based on a seed, by adding.</p>
          <h1><Badge bg="primary">Explore now</Badge></h1>
        </Col>
      </Row>

      <Row>
        <Col md={4}>
          <Card >
            <Card.Img variant="top" src="https://picsum.photos/300/130" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={8}>
          <Carousel>
            <Carousel.Item>
              <Image src="https://picsum.photos/900/340" fluid rounded />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <Image src="https://picsum.photos/900/340" fluid rounded />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>

      </Row>

      <Row className='my-5'>
        <Col md={4}>
          <Card >
            <Card.Img variant="top" src="https://picsum.photos/300/130" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card >
            <Card.Img variant="top" src="https://picsum.photos/300/130" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card >
            <Card.Img variant="top" src="https://picsum.photos/300/130" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className='my-5'>

      </Row>
    </Container>
  )
}
