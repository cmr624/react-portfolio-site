import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./IndividualProject.css";
class IndividualProject extends Component {
  
  constructor(props)
  {
    super(props);
    this.toSection = this.toSection.bind(this);
  }

  toSection = (element, i) => {
    return (
      <Col md={6} style={{padding: "20px"}}>
        <h3>{element.title}</h3>
        <p>{element.description}</p>
        <ul>
          {element.list && element.list.map((e) => {return(<li>{e}</li>)})}
        </ul>
      </Col>
    )
  }

  render() {
    return (
      <Container className="main">
              <h1 style={{textAlign: "center", padding: "20px", fontSize:"54px"}}>{this.props.name}</h1>
       <Row>
          {this.props.sections.map(this.toSection)}
          <Col md={6}>
          <h3>Links</h3>
          {this.props.links.map((e)=>{return(<a href={e.link}>{e.description}</a>)})}
        </Col>
       </Row>

      </Container>
    );
  }
}
export default IndividualProject;

/*
    {
        "name": "Clarify",
        "coverURL": "/images/projects/clarifyMockUp.gif",
        "sections":[
          {
            "title": "Project Description",
            "description":"Created for HackNYU 2018, this presentation application allows for users to create a presentation or join an existing one, and view live what the presenter is presenting. You are able to send anonymous questions to the professor and they can answer them live. Clarify won in the Education Technology track, with judges noting its commercial viablity and simple and effective idea that could be rapidly adopted in higher education.",
            "list": null
          },
          {
            "title": "Technologies Used",
            "description":null,
            "list": ["Node JS", "Socket.io", "MongoDB", "HTML5 + CSS3", "Passport", "Handlebars Templating", "Github"]
          },
          {
            "title": "More Information",
            "description":"Our app was for the Education Technology track at HackNYU 2018. We had a team of five of us that all had specific tasks. I was in charge of creating and delegating tasks, writing out the task requirements, and working on all aspects to make sure the vision was consistent. We broke up the design based on its core tenets of functionality: the design, user authentication and saving user data in a database (MongoDB), socket.io for real-time 'chatroom' like features, node.js to run the app, and HTML and CSS to implement the design.",
            "list": null
          }
        ],
        "links":[
          {
            "type":"fa fa-newspaper-o",
            "description":"Article Link",
            "link":"https://nyulocal.com/hundreds-participate-in-annual-nyu-hackathon-ac269bc4db92"
          }
        ],
        "images":[
          {
            "path":"/images/projects/clarifyLogo.png",
            "topCaption":"Clarify",
            "bottomCaption":"Won top prize at HackNYU 2018",
            "active":"active"
          }
        ]
    },
*/