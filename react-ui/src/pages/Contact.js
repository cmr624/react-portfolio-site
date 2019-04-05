import React, { Component } from 'react';
import './Contact.css';
import { Image, Row, Col, Container} from 'react-bootstrap';
import {FaGithubSquare, FaLinkedin, FaTwitterSquare, FaRegEnvelope}from "react-icons/fa";
import {MdGamepad} from "react-icons/md";

class Contact extends Component {
  constructor(props)
  {
      super(props);
      this.state={size: 80};
  }
  render() {
    return (
      <div className="Contact">
        <Container>
          <h1>Contact Information</h1>
          <h2>Please reach out to me for any job opportunities, along with any questions about projects.</h2>
          <Row className="icons">
           <Col md={2} style={{margin: "auto"}}>
            <a href="https://github.com/cmr624">
                <FaGithubSquare
                size={this.state.size}
                />
            </a>
            <h4>Check out my GitHub!</h4>
           </Col>
           <Col md={2} style={{margin: "auto"}}>
            <a href="https://www.linkedin.com/in/carlos-michael/">
              <FaLinkedin
              size={this.state.size}
              />
            </a>
            <h4>Connect with me!</h4>
            </Col>
            <Col md={2} style={{margin: "auto"}}>
            <a href="https://twitter.com/carlos_michael">
              <FaTwitterSquare
              size={this.state.size}
              />
            </a>
            <h4>Follow my Twitter!</h4>
            </Col>
            <Col md={2} style={{margin: "auto"}}>
            <a href="https://cmr624.itch.io/">
              <MdGamepad
              size={this.state.size}
              />
            </a>
            <h4>Play my games!</h4>
            </Col>
            <Col md={2} style={{margin: "auto"}}>
            <a href="mailto:cmr624@nyu.edu">
              <FaRegEnvelope
              size={this.state.size}
              />
            </a>
            <h4>For my CV, email me!</h4>
            </Col>
          </Row>
          <div style={{padding: "20px", maxHeight:"400px", maxWidth:"400px", margin: "auto"}}>
          <Image style={{margin: "auto", display: "block", padding: "5px"}}
          src="/images/me/meAPRIL.jpg" 
          thumbnail
          fluid
          ></Image>
          <h6 style={{textAlign: "center", paddingTop: "10px"}}>April!!!!</h6>
          </div>
          
        </Container>
      </div>
    );
  }
}

export default Contact;