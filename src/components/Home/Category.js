import React, {useEffect, useState} from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap'
import { fetchCategory } from '../../api/api';
import {  useNavigate } from 'react-router-dom'
export default function Category() {
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const loadCategories = async () => {
        const categories = await fetchCategory();
        console.log(categories)
        setCategories(categories)
      };
    useEffect(() => {
       loadCategories()
      }, [])
   
  return (
    <Row className='my-5'>
    
    {categories?.map((item, index)=><Col key={index} md={3}><Card  style={{ width: '18rem' }}>
    
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        
        <Button variant="primary" onClick={()=>{
            navigate(`/productsbycategory/${item.id}`)
        }}>Views</Button>
      </Card.Body>
    </Card></Col>)}
    
    </Row>
  )
}
