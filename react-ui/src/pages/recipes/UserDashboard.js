import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import {Form, Button} from "react-bootstrap";
import axios from 'axios';

class UserDashboard extends Component {

    constructor(props)
    {
        super(props);
        this.state={
            redirectTo:'/',
            favorites:[]
            //newFavorite:{name:""}
        }
        //this.handleSubmit = this.handleSubmit.bind(this)
        //this.handleChange = this.handleChange.bind(this)
  
    }
    componentWillMount()
    {
        axios.get('/user/favorites').then(response => {
            if (response.data.favorites) {
              console.log('favorites');
              this.setState({
                favorites: response.data.favorites
              })
            } else {
              console.log('no favorites');
            }
          })
    }
    /*handleChange(event) {
        if (event.target.name === "name")
        {
            this.state.newFavorite.name += event.target.value;
        }
        console.log(this.state.newFavorite);
        
    }*/

    /*handleSubmit(event) {
        event.preventDefault()
        console.log('handleSubmit')

        axios.post('/user/favorites', {
                data: this.state.newFavorite
            })
            .catch(error => {
                console.log(error);
            })
    }*/

    render() {
        if (!this.props.loggedIn)
        {
            return <Redirect to ={{pathname: this.state.redirectTo}}/>
        }
        else
        {
            return (
                <React.Fragment>
                    <div style={{padding: "20px", textAlign:"center", margin: "auto", color: "white"}}>
                        <h1>User Dashboard</h1>
                        <h2>Welcome, {this.props.userData.username}!!!</h2>
                        <h3>Favorites</h3>
                        <ul>
                            {this.state.favorites.map((fav) => {return <li>{fav.name}</li>})}
                        </ul>               
                    </div>
                </React.Fragment>
            );
        }
        
    }
}

export default UserDashboard;

/*
<Form onSubmit={this.handleSubmit}>
                                <label style={{color: "white", padding: "5px 0px 5px 0px"}} htmlFor="Name">Name of Recipe</label>
                                <Form.Group>
                                    <Form.Control id="name" 
                                    name="name"
                                    placeholder="Name"
                                    onChange={this.handleChange} 
                                    value={this.state.newFavorite.name}
                                    />
                                </Form.Group>    
                                <Button
                                    type="submit"
                                >
                                    Add
                                </Button>

                            </Form>
*/