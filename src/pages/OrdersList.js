import React, { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db, auth } from '../firebase'; // Adjust the path to your firebase configuration
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
const OrdersList = () => {
  const [orders, setOrders] = useState([]);
  const uinfo =useSelector(state => state.user.userInfo);
  useEffect(() => {
    
    fetchOrders();
  }, []);
  const fetchOrders = async () => {
 

    if (uinfo) {
      try {
        console.error('No user is logged in///////');
        // Create a reference to the orders collection
        const ordersRef = collection(db, 'orders');
        
        // Create a query against the collection where user_id matches the logged-in user's ID
        const q = query(ordersRef, where('userId', '==', uinfo.uid));

        // Execute the query
        const querySnapshot = await getDocs(q);
        const ordersList = querySnapshot.docs.map(doc => {
          const data = doc.data();
          return {
            id: doc.id,
            ...data,
            // Convert any Firestore Timestamp fields to JS Date objects
            timestamp: data.timestamp?.toDate().toLocaleString(), // Assuming you have a timestamp field
          };
        });

        setOrders(ordersList);
      } catch (error) {
        console.error('Error fetching orders: ', error);
      }
    } else {
      console.error('No user is logged in');
    }
  };


  return (
    <Container fluid="md">
      <h2>Your Orders</h2>
      <hr/>
      {orders?.length > 0 ? (
        <ul>
          {orders.map(order => (
            <li key={order.id}>
              <p>Order ID: {order.id}</p>
              <p>Order Date: {order.timestamp}</p>
              <p>Payment Mode: {order.paymentMode}</p>
              <p>Payment Amount: {order.paymentAmount}</p>
              <b>Item List:- </b>
             { order?.cart?.map(item => (
          <div key={item.id} >
          <div style={{ display: 'flex' }}>
           
             
              <p><b>{item.name}</b> &nbsp;|&nbsp; Price: ₹{item.price} &nbsp;|&nbsp; Qty: {item.quantity}</p>

             </div>
             </div>))}

            </li>
          ))}
        </ul>
      ) : (
        <p>No orders found.</p>
      )}
    </Container>
  );
};

export default OrdersList;
