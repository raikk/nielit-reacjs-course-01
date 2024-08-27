
import React, { useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux';
import { auth, db } from "../firebase";
import { doc, setDoc, addDoc, collection } from 'firebase/firestore';
import { clearCart } from "../store/cartSlice";
import { useNavigate } from "react-router-dom";
const AddressForm = () => {
  const cartInfo = useSelector(state=>state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getTotalPrice = () => {
    return cartInfo.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  const [formData, setFormData] = useState({
    address1: "",
    landmark: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  useEffect(() => {
    const user = auth.currentUser; // Get the current logged-in user

    if (!user) {
        navigate("/")
    }
  }, []);

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to a server or update state
    console.log("Form data:", formData);
    //console.log("user info "+JSON.stringify(userInfo))

    const user = auth.currentUser; // Get the current logged-in user

    if (user) {
      try {
        // // Reference to the user's document in Firestore
        // const userDocRef = doc(db, 'users', user.uid);
        // const uref = await setDoc(userDocRef, {
        //   address1: formData.address1,
        //   landmark: formData.landmark,
        //   timestamp: new Date(),
        // });
        // console.log("user reference id "+JSON.stringify(uref))

        // console.log('Document written with ID: ', user.uid);
        // Reference to a subcollection under the user's document, e.g., "addresses"
        const docRef = await addDoc(collection(db, 'users', user.uid, 'addresses'), {
            address1: formData.address1,
            landmark: formData.landmark,
            timestamp: new Date(),
        });

        console.log('Document written with ID: ', docRef.id);
        const docRef1 = await addDoc(collection(db, 'orders'), {
            cart: cartInfo,
            addressId: docRef.id,
            userId: user.uid,
            paymentMode: "COD",
            timestamp: new Date(),
            status: "Pending",
            totalAmount: getTotalPrice()
        }); 
        dispatch(clearCart())
      } catch (error) {
        console.error('Error adding document: ', error);
      }
    } else {
      console.error('No user is logged in');
    }
  };

  return (
    <Container fluid="md">
        <h1 className="mt-5">Shipping Address</h1>
        <hr/>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" >
        <Form.Label>Shipping Address</Form.Label>
        <Form.Control
          type="text"
          name="address1"
          value={formData.address1}
          onChange={handleChange}
          required
          placeholder="Address"
        />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Landmark</Form.Label>
        <Form.Control
          type="text"
          name="landmark"
          value={formData.landmark}
          onChange={handleChange}
          required
          placeholder="Landmark"
        />
      </Form.Group>

      <Button variant="primary" type="submit">Submit</Button>
    </Form>
    </Container>
  );
};

export default AddressForm;
