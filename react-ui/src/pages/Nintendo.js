import React, { Component } from 'react';
import './Nintendo.css';
import { Image, Row, Col, Container} from 'react-bootstrap';
class Nintendo extends Component {
  
  render() {
    return (
      <div className="Nintendo">
      <Container id="header-nintendo" className="heading">
        <h1><b>Game Designer - Assignment</b></h1>
        <h2>By Carlos-Michael Rodriguez</h2>
        <p style={{paddingTop: "10px"}}>The assignment is broken down into three parts:
            <ol>
                <li>
                <a href="#part1">
                    Global gameplay mechanics and their descriptions as implemented in <i>Super Mario Run</i>.
                </a>
                </li>
                <li>
                <a href="#part2">
                    Detailed description of Mario's behaviors and how they affect gameplay.
                </a>
                </li>
                <li>
                <a href="#part3">
                    Detailed analysis of each of the three levels played for this assignment.
                </a>
                </li>
            </ol>
        </p>
      </Container>

      <Container className = "assignment-part" id="part1">
        <h2>Global Gameplay Mechanics</h2>
        <Row className="header-row">
            <Col md={4} lg={4} className="assignment-col"><h3>Example Footage</h3></Col>
            <Col md={4} lg={4} className="assignment-col" id="mechanic"><h3><b>Gameplay Mechanic</b></h3></Col>
            <Col md={4} lg={4} className="assignment-col"><h3>Mechanic Description and Controls</h3></Col>
        </Row>

        <Row className="assignment-row">
            <Col md={4} lg={4} className="assignment-col">Gif</Col>
            <Col md={4} lg={4} className="assignment-col" id="mechanic"><b>Run</b></Col>
            <Col md={4} lg={4} className="assignment-col"><i>Without pressing any buttons</i>, Mario automatically runs to the right of the screen. This is the central rule in <i>Super Mario Run</i>, and informs many of the other mechanics.</Col>
        </Row>
        <Row className="assignment-row">
            <Col md={4} lg={4} className="assignment-col">Gif</Col>
            <Col md={4} lg={4} className="assignment-col" id="mechanic"><b>Vault</b></Col>
            <Col md={4} lg={4} className="assignment-col"><i>Without pressing any buttons</i>, Mario automatically vaults over any ground-based enemies (such as Goombas) and small ledges.</Col>
        </Row>
        <Row className="assignment-row">
            <Col md={4} lg={4} className="assignment-col">Gif</Col>
            <Col md={4} lg={4} className="assignment-col" id="mechanic"><b>Tap Jump</b></Col>
            <Col md={4} lg={4} className="assignment-col">One of the two fundamental jumps that the player can use to interact with Mario. The tap jump lets Mario do a standard jump with just a <i>single, simple tap</i>, and can clear small gaps and jumps.</Col>
        </Row>
        <Row className="assignment-row">
            <Col md={4} lg={4} className="assignment-col">Gif</Col>
            <Col md={4} lg={4} className="assignment-col" id="mechanic"><b>Long Jump</b></Col>
            <Col md={4} lg={4} className="assignment-col">Here, Mario is controlled with a long tap. The <i>length of time the player holds the tap</i> determines the height and length of Mario's jump. This is important for more higher skilled, timing-based jumps.</Col>
        </Row>
        <Row className="assignment-row">
            <Col md={4} lg={4} className="assignment-col">Gif</Col>
            <Col md={4} lg={4} className="assignment-col" id="mechanic"><b>Wall Jump</b></Col>
            <Col md={4} lg={4} className="assignment-col">By performing a <b>Tap Jump</b> or <b>Long Jump</b> while Mario is on a wall, Mario will flip directions, and jump towards the left. This is often used in chains to jump back and forth between two opposite facing walls.</Col>
        </Row>
        <Row className="assignment-row">
            <Col md={4} lg={4} className="assignment-col">Gif</Col>
            <Col md={4} lg={4} className="assignment-col" id="mechanic"><b>'Float' Jump</b></Col>
            <Col md={4} lg={4} className="assignment-col">By <i>tapping once while in the air</i>, Mario will "float" giving a small amount of extra horizontal distance. This can be used to recover from a poorly timed jump, or avoid a dangerous obstacle. This can be done multiple times throughout a jump.</Col>
        </Row>
      </Container>
      <Container className = "assignment-part" id="part2">
      <h2>Mario's Behaviors</h2>
      <Row className="header-row">
            <Col md={4} lg={4} className="assignment-col"><h3>Example Footage</h3></Col>
            <Col md={4} lg={4} className="assignment-col" id="mechanic"><h3>Mario's Behavior</h3></Col>
            <Col md={4} lg={4} className="assignment-col"><h3>Description and Design Implications</h3></Col>
        </Row>
        <Row className="assignment-row">
            <Col md={4} lg={4}>Gif</Col>
            <Col md={4} lg={4} id="mechanic"><b>Run</b></Col>
            <Col md={4} lg={4}></Col>
        </Row>
      </Container>
      <Container className = "assignment-part" id="part3">
        <Row>
            <Col md={4} lg={4}>part 3</Col>
            <Col md={4} lg={4}>part tres</Col>
            <Col md={4} lg={4}>How are you</Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default Nintendo;
