import React, { Component } from 'react';
import {CardDeck, Container} from "react-bootstrap";
import PreviewCard from "../components/PreviewCard";
import { PulseLoader}  from "react-spinners";
import "./Webdev.css";

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
          imgLink={element.imgLink}
        />
        )
      }
    render() {
        return (
            <div className="container webdev">
                <Container style={{textAlign: "center", padding: "30px 30px 30px 30px"}}>
                  <h1>Web Development</h1>
                  <p>While NYU's Computer Science program has exposed me to C, Java, Python and more, my experience in a variety of APIs through developing web apps and other projects makes me well-equipped as a developer to jump from framework to framework and deliver a quality product.</p>
                  <h2>Project Previews</h2>
                </Container>
                    <Container style={{color: "black"}}>
                      <CardDeck>
                      {this.state.cards.map(this.toPreview)}
                      </CardDeck>
                      <Container style={{textAlign: "center"}}>
                        <PulseLoader
                        color={'#8EC8E7'}
                        loading = {this.state.loading}
                        size={30}
                      />
                      </Container>
                      
                    </Container>
                    
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