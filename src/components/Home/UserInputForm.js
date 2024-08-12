import React from 'react'
import {InputGroup, Form,} from 'react-bootstrap'

export const UserInputForm = ({ name, setName, setErrorMessage, setEmail, email, address, getInputAddress,}) => {
  return (
    <>
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
    </>
  )
}
