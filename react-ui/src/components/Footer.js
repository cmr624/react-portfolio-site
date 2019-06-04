import React, { Component } from 'react';
import {Container, Row} from "react-bootstrap";
import {FaGithubSquare, FaLinkedin, FaTwitterSquare, FaRegEnvelope, FaInstagram}from "react-icons/fa";
import {MdGamepad} from "react-icons/md";
import "./Footer.css";
class Footer extends Component {
    render()
    {
        return(
        <Container className="footer">
         <Row>
          <div className="icons-footer">
            <a href="https://github.com/cmr624">
              <FaGithubSquare
              size={this.props.size}
              />
            </a>
            <a href="https://www.linkedin.com/in/carlos-michael/">
              <FaLinkedin
              size={this.props.size}
              />
            </a>
            <a href="https://twitter.com/carlos_michael">
              <FaTwitterSquare
              size={this.props.size}
              />
            </a>
            <a href="https://www.instagram.com/carlosmichael22/">
              <FaInstagram
              size={this.props.size}
              />
            </a>
            <a href="https://cmr624.itch.io/">
              <MdGamepad
              size={this.props.size}
              />
            </a>
            <a href="mailto:cmr624@nyu.edu">
              <FaRegEnvelope
              size={this.props.size}
              />
            </a>
          </div>
          </Row>
          <Row>
          <Container style={{maxWidth:"500px"}}>
          <p style={{color: "white", textAlign:"center"}}>
          <br></br>
          This website is powered with the M.E.R.N. stack - MongoDB, Express, React, and Node.js. Please check out the GitHub repository 
          <a href="https://github.com/cmr624/react-portfolio-site.git"> here!</a>
          </p>
          <p style={{color: "white", textAlign:"center"}}>Programmed and designed by Carlos-Michael Rodriguez 2019</p>
          </Container>
          </Row>
        </Container>
        );
    }
}
export default Footer;