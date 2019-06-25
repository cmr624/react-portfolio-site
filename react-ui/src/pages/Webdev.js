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
          detailsLink={element.detailsLink}
          imgLink={element.imgLink}
        />
        )
      }
    render() {
        return (
            <div className="container webdev">
                <Container style={{textAlign: "center", padding: "30px 30px 10px 30px"}}>
                  <h1 style={{fontSize: "48px"}}>Web Development</h1>
                  <Container style={{maxWidth: "580px", fontSize:"20px"}}><p>While NYU's Computer Science program has exposed me to C, Java, Python and more, my experience in a variety of web development courses, along with my web programming minor, makes me well-equipped as a full stack developer to jump from framework to framework, backend to frontend, and deliver a quality product.</p></Container>
                  <h2>Project Previews</h2>
                </Container>
                  <Container style={{color: "black", marginLeft: "auto", marginRight: "auto" }}>
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