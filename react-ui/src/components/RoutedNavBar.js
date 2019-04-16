import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import {Navbar, Nav } from "react-bootstrap";
import './RoutedNavBar.css';
import axios from 'axios';

class RoutedNavBar extends Component {

  constructor(props){
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout(event)
  {
    event.preventDefault();
    console.log('logging out!!! SEE YA');
    axios.post('/user/logout').then(response => {
      //console.log(response.data);
      if(response.status === 200)
      {
        this.props.updateUser({
          loggedIn: false,
          username: null
        })
      }
    }).catch(error => {
      console.log("logging out caused " + error);
    })
  }
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
            {!this.props.loggedIn  && [
            <NavLink style={{float: "right"}} to="/signup">Sign Up</NavLink>,
            <NavLink style={{float: "right"}} to="/login">Login</NavLink>
            ]}
            {this.props.loggedIn && (
            <>
              <NavLink style={{float: "right"}} onClick={this.logout}>Logout</NavLink>
              <NavLink to = "/dashboard">Dashboard</NavLink>
            </>)}
            </Navbar.Collapse>
        </Navbar>
    );
  }
}

export default RoutedNavBar;