import React from 'react'
import { Row, Col, Badge, Image, Card, Button } from 'react-bootstrap'
export default function HomeSection2() {
  return (
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
  )
}
