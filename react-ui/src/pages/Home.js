import React, { Component } from 'react';
import './Home.css';
import { Image, Row, Col, ButtonGroup, Button, Container, Navbar} from 'react-bootstrap';
import {FaGithubSquare, FaLinkedin, FaTwitterSquare, FaInstagram, FaRegEnvelope}from "react-icons/fa";
class Home extends Component {
  
  render() {
    return (
      <div className="Home">
      <div className="container">
          <Row className="header-and-pic">
            <Col xs={12} lg={6}>
              <div className="container-fluid">
                <h1>Carlos Michael Rodriguez</h1>
              </div>

                  <div className="right-side">
                    <h2>Web Developer</h2>
                    <h2>Web Designer</h2>
                    <h2>Game Developer</h2>
                    <h2>NYU CS Major</h2>
                  </div>


            </Col>
            <Col xs={12} md={6}>
                <div className="container">
                  <Image src="/images/me/meIRL.jpg" fluid></Image>
                </div>
            </Col>
          </Row>
          </div>

        <div className="container">
          <div className="d-flex flex-column">
            <ButtonGroup size="lg" className="buttons">
              <Button href="/webdev" style={{backgroundColor: "#1d1a1a", color: "white", borderWidth: "0px"}}>WebDev</Button>
              <Button href="/games" style={{backgroundColor: "#1d1a1a", color: "white", borderWidth: "0px"}}>Games</Button>
              <Button href="/contact" style={{backgroundColor: "#1d1a1a", color: "white", borderWidth: "0px"}}>Contact</Button>
            </ButtonGroup>
          </div>
        </div>    
        <div className="container bottom-blurb">
          <p>Looking for positions in software engineering, backend and frontend web development, and game development. <br></br>Looking for positions beginning after graduation June 2019.</p>
          <br></br><p>This website is powered with the MERN stack - MongoDB, Express, React, and Node.js. Please check out the github repository <a href="https://github.com/cmr624/react-portfolio-site.git">here!</a></p>
        </div>
        <Container>
          <Navbar collapseOnSelect expand="sm" 
          style={{backgroundColor:"#242424"}}>
          <div className="icons-footer container">
            <a href="https://github.com/cmr624">
              <FaGithubSquare
              size={80}
              />
            </a>
            <a href="https://www.linkedin.com/in/carlos-michael/">
              <FaLinkedin
              size={80}
              />
            </a>
            <a href="https://twitter.com/carlos_michael">
              <FaTwitterSquare
              size={80}
              />
            </a>
            <a href="https://www.instagram.com/carlosmichael22">
              <FaInstagram
              size={80}
              />
            </a>
            <a href="mailto:cmr624@nyu.edu">
              <FaRegEnvelope
              size={80}
              />
            </a>

          </div>
          
          </Navbar>

        </Container>
      </div>
    );
  }
}

export default Home;
