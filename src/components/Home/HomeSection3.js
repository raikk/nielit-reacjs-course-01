import React from 'react'
import { Row, Col, Carousel, Image, Card, Button } from 'react-bootstrap'
export default function HomeSection3() {
  return (
    <Row>
        <Col md={4}>
          <Card >
            <Card.Img variant="top" src="https://picsum.photos/300/130" />
            <Card.Body>
              <Card.Title>Card Title 2222</Card.Title>
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
  )
}
