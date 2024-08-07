import React from 'react'
import { Row, Col, Badge, Accordion } from 'react-bootstrap'


export default function HomeSection1() {
  return (
    <Row className='my-4 px-4'>
    <Col md={6}>
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </Col>
    <Col md={6}>
      <h3>Headline Text Here</h3>
      <p>Get the same random image every time based on a seed, by adding, Get the same random image every time based on a seed, by adding. Get the same random image every time based on a seed, by adding, Get the same random image every time based on a seed, by adding. Get the same random image every time based on a seed, by adding, Get the same random image every time based on a seed, by adding.</p>
      <h1><Badge bg="primary">Explore now</Badge></h1>
    </Col>
  </Row>
  )
}
