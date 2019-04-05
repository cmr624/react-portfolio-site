import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import {Navbar, Nav } from "react-bootstrap";
import './RoutedNavBar.css';

class RoutedNavBar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="sm" className = "navContainer">
      <Navbar.Brand className="navBrand" to="/">CM</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" id="toggle"/>
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/webdev">Web Development</NavLink>
                <NavLink to="/games">Games</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </Nav>    
            </Navbar.Collapse>
        </Navbar>
    );
  }
}

export default RoutedNavBar;