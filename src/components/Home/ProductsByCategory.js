import React, {useEffect, useState} from 'react'
import { Card, Button, Row, Col, Container } from 'react-bootstrap'
import { useParams, Link } from 'react-router-dom';
import { fetchProductsByCategory } from '../../api/api';
import { useDispatch } from 'react-redux';

import { addToCart } from '../../store/cartSlice';

export default function ProductsByCategory() {
  const { id } = useParams(); 
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

 

  const loadProducts = async (id) => {
    const plist = await fetchProductsByCategory(id);
    console.log(plist)
    setProducts(plist)
  };
useEffect(() => {
  loadProducts(id)
  }, [])

  return (
    <Container fluid="md">
    <Row className='my-5'>
      <h1>Products</h1>
    
    {products.length > 0 ? (products?.map((item, index)=><Col key={index} md={3}><Card  style={{ width: '18rem' }}>
    <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
        ₹ {item.price}
        </Card.Text>
        
        <Button variant="success" onClick={() => dispatch(addToCart(item))}>Add</Button>
      </Card.Body>
    </Card></Col>)): (
        <p>No products found for this category.</p>
      )}
    
  
    <Link to="/cart">Show Cart</Link>
    </Row>
    </Container>
  )
}
