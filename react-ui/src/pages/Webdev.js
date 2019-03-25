import React, { Component } from 'react';
import logo from '.././logo.svg';
import PreviewCard from "../components/PreviewCard";
import { PulseLoader}  from "react-spinners";
import {Switch} from "react-router-dom";
import MainRouter from "../components/MainRouter";

class Webdev extends Component {

    constructor(props) {
        super(props);
        this.state = {
          message: "",
          cards: [],
          loading: true
        };
        this.toPreview = this.toPreview.bind(this);
    }
    componentDidMount() {
        fetch('/api/webdev')
          .then(response => {
            if (!response.ok) {
              throw new Error(`status ${response.status}`);
            }
            return response.json();
          })
          .then(json => {      
            //right now, this gets every webdev item in the db 
            //and returns the full item
            this.setState({cards: json,
              loading: false
              });
          }).catch(e => {
            this.setState({
              message: `API call failed: ${e}`,
              loading: false
            });
          })
      }
      toPreview = (element, i) => {
        return (
          <PreviewCard 
          key = {i}
          name = {element.name}
          blurb = {element.blurb}
          skills={element.skills}
          linkRel={element.linkRel}
        />
        )
      }
    render() {
        return (
            <div className="container">
                <h1>WEBDEV</h1>
                <h2>Lorem Lorem ipsum Lorem ipsum Lorem ipsum ipsumLorem ipsum Lorem ipsum ipsumLorem ipsum Lorem ipsum ipsumLorem ipsum Lorem ipsum ipsum </h2>
                  <div>
                    <h2>Project Previews</h2>
                    {this.state.cards.map(this.toPreview)}
                    <PulseLoader
                      color={'#8EC8E7'}
                      loading = {this.state.loading}
                    />
                  </div>
            </div>
        );
  }
}

export default Webdev;

/*
class App extends Component {
  

  {this.state.loading && 
                <PulseLoader
                    loading = {this.state.loading}
                />}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          { process.env.NODE_ENV === 'production' ?
              <p>
                This is a production build from create-react-app.
              </p>
            : <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
          }
          <p>{'« '}<strong>
            {this.state.fetching
              ? 'Fetching message from API'
              : this.state.message}
          </strong>{' »'}</p>
          <p><a
            className="App-link"
            href="https://github.com/mars/heroku-cra-node"
          >
            React + Node deployment on Heroku
          </a></p>
          <p><a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a></p>
        </header>
      </div>
    );
  }
}

*/