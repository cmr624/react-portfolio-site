import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import MainRouter from "./components/MainRouter";
import RoutedNavBar from "./components/RoutedNavBar";
import Footer from "./components/Footer";

class App extends Component {
  constructor() {
      super()
      this.state = {
        loggedIn: false,
        userData: null
      }

      this.getUser = this.getUser.bind(this)
      this.componentDidMount = this.componentDidMount.bind(this)
      this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    //this.getUser()
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          userData: response.data.user,
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          userData: null,
        })
      }
    })
}
  render() {
    return (
      <div className="App">
        <RoutedNavBar loggedIn = {this.state.loggedIn} updateUser={this.updateUser}/>
        <MainRouter loggedIn = {this.state.loggedIn} updateUser={this.updateUser} userData={this.state.userData}/>
        <Footer size={60} 
        loggedIn= {this.state.loggedIn} 
        userData={this.state.userData}/>
      </div>
    );
  }
}

export default App;
