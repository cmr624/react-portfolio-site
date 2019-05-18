import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {Container, Form, Button} from "react-bootstrap";
import axios from 'axios';

class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            redirectTo: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
  
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log('handleSubmit')

        axios.post('/user/login', {
                username: this.state.username,
                password: this.state.password
            })
            .then(response => {
                console.log('login response: ')
                console.log(response)
                if (response.status === 200) {
                    // update App.js state
                    this.props.updateUser({
                        loggedIn: true,
                        userData: response.data
                    })
                    // update the state to redirect to home
                    this.setState({
                        redirectTo: '/dashboard'
                    })
                }
            }).catch(error => {
                console.log('login error: ')
                console.log(error);
                
            })
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <Container style={{maxWidth: "400px", color: "white"}}>
                    <Form onSubmit={this.handleSubmit}>
                        <h1>Log in</h1>
                        <h2 style={{fontSize:"15px"}}>Mollit fugiat aliquip enia nostrud consectetur culpa irure cupidatat voluptate. Reprehenderit eu commodo cupidatat duis fugiat esse ea laborum veniam aliqua et.</h2>
                        <Form.Group>
                        <label style={{color: "white" , padding: "5px 0px 5px 0px"}} htmlFor="username">Username</label>
                            <Form.Control id="username" 
                            name="username"
                            placeholder="Username"
                            onChange={this.handleChange} 
                            value={this.state.username}/>
                        <label style={{color: "white", padding: "5px 0px 5px 0px"}} htmlFor="Password">Password</label>
                            <Form.Control 
                            id="password" 
                            name="password"
                            placeholder="Password"
                            onChange={this.handleChange} 
                            value={this.state.password} 
                            type="password"/>
                            </Form.Group>
                        <Button
                            
                            type="submit"
                        >
                            Sign In
                        </Button>
                    </Form>
                </Container>
            )
        }
    }
}

export default Login;