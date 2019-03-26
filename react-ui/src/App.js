import React, { Component } from 'react';
import './App.css';

import MainRouter from "./components/MainRouter";
import RoutedNavBar from "./components/RoutedNavBar";
class App extends Component {
  render() {
    return (
      <div className="App">
        <RoutedNavBar/>
        <MainRouter/>
      </div>
    );
  }
}

export default App;
