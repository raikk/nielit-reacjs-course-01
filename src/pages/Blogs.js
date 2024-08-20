import React from 'react'
import { useState, useEffect } from 'react';
import { Container, Form, Card } from 'react-bootstrap';
import useDocumentTitle from './useDocumentTitle'
import { collection, addDoc, getDocs } from "firebase/firestore";
import Button from 'react-bootstrap/Button';

// import { db } from '../firebase';
// import { collection, addDoc } from "firebase/firestore";
// import DataServices from './services/DataServices';
import { db } from '../firebase';
export default function Blogs() {

  useDocumentTitle("Blogs")
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  const addBlog = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "books"), {
        title: title,
        body: body
      });
      console.log("Document written with ID: ", docRef.id);
      setTitle("")
      setBody("")
      fetchPost();
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  const [blogs, setBlogs] = useState([]);

  const fetchPost = async () => {

    await getDocs(collection(db, "books"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }));
        setBlogs(newData);
        //console.log(todos, newData);
      })

  }

  useEffect(() => {
    fetchPost();
  }, [])



  return (
    <Container fluid="md">
      <h1>CRUD Firebase | Blogs</h1>
      <section >
        <div >
          <div>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control onChange={(e) => setTitle(e.target.value)} value={title} type="title" placeholder="Enter Title" />

              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Body</Form.Label>
                <Form.Control onChange={(e) => setBody(e.target.value)} value={body} type="textarea" placeholder="Enter Body" />

              </Form.Group>




              <Button onClick={(e) => addBlog(e)} variant="primary" type="submit">
                Submit
              </Button>

            </Form>
          </div>

          <div >
            ...
          </div>
        </div>
        <div >
          {
            blogs?.map((item, i) => (
              <Card className='mt-2' >
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>
                    {item.body}
                  </Card.Text>
                  <Button variant="primary">View</Button>

                </Card.Body>
              </Card>
            ))
          }
        </div>
      </section>
    </Container>
  )
}
