import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import {Navbar, Nav } from "react-bootstrap";

class RoutedNavBar extends Component {
  render() {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand to="/">CM</Navbar.Brand>
            <Nav className="mr-auto">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/webdev">Web Development</NavLink>
                <NavLink to="/games">Games</NavLink>
            </Nav>    
        </Navbar>
    );
  }
}

export default RoutedNavBar;