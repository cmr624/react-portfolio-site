import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import {Navbar, Nav } from "react-bootstrap";

class RoutedNavBar extends Component {
  render() {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand to="/">CM</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link><NavLink to="/">Home</NavLink></Nav.Link>
                <Nav.Link><NavLink to="/webdev">Web Development</NavLink></Nav.Link>
                <Nav.Link><NavLink to="/games">Games</NavLink></Nav.Link>
            </Nav>    
        </Navbar>
    );
  }
}

export default RoutedNavBar;