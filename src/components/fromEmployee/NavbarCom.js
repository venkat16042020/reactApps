
import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './Home';
import Item from './Item';
import Login from './Login';
import Signup from './Signup';
import Order from './Order';






export default class NavbarCom extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>KLN Hotels</h1>
          <Navbar bg="warning" variant="purple" expand="lg">
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
                  <Nav.Link as={Link} to={"/item"}>Item</Nav.Link>
                  <Nav.Link as={Link} to = {"/order"}>Order</Nav.Link>
                  </Nav>
                  <Nav >
                  <Nav.Link as={Link} to={"/login"}>Login</Nav.Link>
                  <Nav.Link as={Link} to={"/signup"}>Signup</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Routes>
            <Route path="/home" element={<Home />} />
            
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            
           
            <Route path="/item" element={<Item/>}/>
            <Route path="/order" element={<Order/>} />
            
          </Routes>
        </div>
      </Router>
    );
  }
}
