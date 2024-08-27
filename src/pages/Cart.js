// src/components/Cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../store/cartSlice';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../store/userSlice';
const Cart = () => {
  const cart = useSelector(state => state.cart.items);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  console.log("Cart contents:", cart);

  return (
    <Container fluid="md">
      <h2>Your Cart</h2>
      <hr/>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map(item => (
          <div key={item.id} >
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <div>
              <h4>{item.name}</h4>
              <p>Price: ₹{item.price}</p>
             
              <button onClick={() => dispatch(decrementQuantity(item.id))}>-</button>&nbsp;{item.quantity}&nbsp;
              <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
              &nbsp;&nbsp;&nbsp;
              
            </div>
            <div>
            <p>₹{item.price * item.quantity}</p>
            <Button variant='danger' size='sm' onClick={() => dispatch(removeFromCart(item.id))}>Remove</Button>
            </div>
          </div>
          <hr/>
          </div>
        ))
      )
      
      
      }
      <h3 className='mt-5 mb-5'>Total: ₹{getTotalPrice()}</h3>
     {isLoggedIn ?  <Button variant='primary' onClick={()=>{navigate("/address")}} size='lg'>Checkout</Button>: <Button variant='success' onClick={()=>{
    
    navigate("/login")
  }} size='lg'>Checkout</Button>}
     
    </Container>
  );
};

export default Cart;
