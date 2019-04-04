import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import "./IndividualProject.css";
class IndividualProject extends Component {
  
  constructor(props)
  {
    super(props);
    this.toSection = this.toSection.bind(this);
  }

  toSection = (element, i) => {
    if (i === 1)
    {
      return[
        this.props.images && <Col md={6} style={{padding: "20px"}}>
          <Image src={"/images"+ this.props.images[0]} rounded fluid/>
        </Col>
        ,<Col md={6} style={{padding: "20px"}}>
        <h3>{element.title}</h3>
        <p>{element.description}</p>
        <ul>
          {element.list && element.list.map((e) => {return(<li>{e}</li>)})}
        </ul>
      </Col>
      ]
    }
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
            <Container>
              <h1 style={{textAlign: "center", padding: "20px 20px 10px 20px", fontSize:"54px"}}>{this.props.name}</h1>
              <h2 style={{textAlign: "center", padding: "0px 0px 20px 0px", fontSize:"24px"}}>{this.props.credits}</h2>
            </Container>
       <Row>
          {this.props.sections.map(this.toSection)}
          <Col md={6}>
          <h3>Links</h3>
          <ul>
          {this.props.links.map((e)=>{return(<li><a href={e.link}>{e.description}</a></li>)})}
          </ul>
        </Col>
       </Row>

      </Container>
    );
  }
}
export default IndividualProject;

/*
*/