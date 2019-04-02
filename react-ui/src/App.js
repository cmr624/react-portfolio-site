import React, { Component } from 'react';
import './App.css';

import MainRouter from "./components/MainRouter";
import RoutedNavBar from "./components/RoutedNavBar";
import Footer from "./components/Footer";
class App extends Component {
  render() {
    return (
      <div className="App">
        <RoutedNavBar/>
        <MainRouter/>
        <Footer size={60}/>
      </div>
    );
  }
}

export default App;
