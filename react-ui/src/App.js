import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainRouter from "./components/MainRouter";
import RoutedNavBar from "./components/RoutedNavBar";
class App extends Component {
  render() {
    return (
      <div>
        <RoutedNavBar/>
        <MainRouter/>
      </div>
    );
  }
}

export default App;
