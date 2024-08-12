import React from 'react'

import { Button, Modal, Alert } from 'react-bootstrap'


import { UserInputForm } from './UserInputForm'


export const UserModel = ({ show, handleClose, editFlag, emessage, name, setName, setErrorMessage, setEmail, email, address, getInputAddress, handleUpdate, handleSubmit }) => {
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{editFlag ? "Update Student" : "Add New Student"} </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {emessage.length > 0 && <Alert variant={"danger"}>
                        {emessage}
                    </Alert>}


                   
                    <UserInputForm name={name} setName={setName} setErrorMessage={setErrorMessage} setEmail={setEmail} email={email} address={address} getInputAddress={getInputAddress} />

                    {editFlag ? <Button size='sm' variant="primary" onClick={handleUpdate} >Update Submit</Button> : <Button size='sm' variant="primary" onClick={handleSubmit} >Submit</Button>}
                </Modal.Body>
                <Modal.Footer>

                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    )
}
