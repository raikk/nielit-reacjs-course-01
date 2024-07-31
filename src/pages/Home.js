import React, { useEffect, useState } from 'react'
import useDocumentTitle from './useDocumentTitle'
import { Button, Image, Badge, Carousel, Card, Table } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Home() {
  useDocumentTitle("Home page")
  let [nvalue, setNValue] = useState(4)
  useEffect(() => {
    setTimeout(() => {
      setNValue(35);
    }, 3000)
  }, [])
  return (
    <Container fluid="md">
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
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
        </Row>
    </Container>
  )
}
