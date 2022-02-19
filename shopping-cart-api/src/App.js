import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Buy from './components/Buy';
import Cart from './components/Cart';
import { Container, Row, Col } from 'reactstrap'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [cartItem, setCartItem] = useState([])

  const addToCart = item => {
    // Check if item is already in the cart - based on id
    const alreadyInCart = cartItem.findIndex(function (array) {
      return array.id === item.id
    })

    // If already in cart, return error
    if (alreadyInCart !== -1) {
      toast("Already in cart!", {
        type: "error"
      })
      return
    }

    // Else add the item to the cart
    setCartItem([...cartItem, item])
  }

  const buy = () => {
    // Handle purchasing of items in the cart
    setCartItem([])
    toast("Cart Purchased!", {
      type: "success"
    })
  }

  const removeItem = itemToBeRemoved => {
    // Remove individual items from the cart
    setCartItem(cartItem.filter(item => item.id !== itemToBeRemoved.id))
  }

  return (
    <Container fluid>
      <ToastContainer />
      <Row>
        <Col md="8">
          <Buy addToCart={addToCart} />
        </Col>
        <Col md="4">
          <Cart cartItem={cartItem} removeItem={removeItem} buy={buy} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
