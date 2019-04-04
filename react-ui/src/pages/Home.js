import React, { Component } from 'react';
import './Home.css';
import { Image, Row, Col, ButtonGroup, Button, Container, Navbar} from 'react-bootstrap';
class Home extends Component {
  
  render() {
    return (
      <div className="Home">
      <Container>

          <Row className="header-and-pic">
            <Col xs={12} md={7} className = "justHeader">
                <h1>Carlos Michael Rodriguez</h1>
                <div className="right-side">
                  <h2>Game Designer.</h2>
                  <h2>Full Stack Web Developer.</h2>
                  <h2>Software Engineer.</h2>
                  <br></br>
                  <br></br>
                  <h2>B.A. NYU Computer Science</h2>
                  <h2>Minor in <a href="/webdev">Web Programming</a>, <a href="/games">Game Design</a></h2>
                </div>
            </Col>
            <Col xs={12} md={5}>
                <div className="container">
                  <Image src="/images/me/meIRL.jpg" fluid></Image>
                </div>
            </Col>
          </Row>
          </Container>
        <div className="container bottom-blurb">
          <p>Looking for positions in game design, backend and frontend web development, and game development. <br></br><br></br>Available for positions <b>after graduation June 2019.</b></p>
      </div>
      </div>
    );
  }
}

export default Home;
/*
        <div className="container">
          <div className="d-flex flex-column">
            <ButtonGroup size="lg" className="buttons">
              <Button href="/webdev" style={{backgroundColor: "#1d1a1a", color: "white", borderWidth: "0px"}}>WebDev</Button>
              <Button href="/games" style={{backgroundColor: "#1d1a1a", color: "white", borderWidth: "0px"}}>Games</Button>
              <Button href="/contact" style={{backgroundColor: "#1d1a1a", color: "white", borderWidth: "0px"}}>Contact</Button>
            </ButtonGroup>
          </div>
        </div>
*/