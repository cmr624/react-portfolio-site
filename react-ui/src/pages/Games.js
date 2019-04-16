import React, { Component } from 'react';
import GameBoy from "../components/Previews/GameBoy";
import { Container, Row } from 'react-bootstrap';
import "./Game.css";

import {PacmanLoader, PulseLoader} from "react-spinners";
class Games extends Component {

  constructor(props) {
    super(props);
    this.state = {
      message: "",
      games: [],
      loading: true
    };
    this.toGameBoy = this.toGameBoy.bind(this);
  }
  componentDidMount() {
    fetch('/api/games')
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }
        return response.json();
      })
      .then(json => {      
        //right now, this gets every webdev item in the db 
        //and returns the full item
        this.setState({games: json,
          loading: false
          });
      }).catch(e => {
        this.setState({
          message: `API call failed: ${e}`,
          loading: false
        });
      })
  }
  toGameBoy=(element, i) =>{
    return(
      <GameBoy
        key = {i}
        name= {element.name}
        blurb= {element.blurb}
        detailsLink= {element.detailsLink}
        playURL ={element.playURL}
        gifURL ={element.gifURL}/>
    )
  }
  render() {
    return (
      <span className="games-index">
      <Container className ="games-desc" style={{textAlign: "center", padding: "30px 30px 10px 30px"}}>
        <h1 style={{fontSize: "48px"}}>Game Design and Development</h1>
        <h2>By Carlos-Michael</h2>
        <br></br>
        <Container style={{maxWidth: "580px", fontSize:"20px"}}><p>With my minor in Game Design and access to the NYU Game Center, I have been able to use my programming and design skills to make interesting and creative interactive experiences. My portfolio of games demonstrates my ability to build and design a variety of types of experiences in different programming languages and development environments, including Unity and C#, Javascript, web-based VR and more.</p></Container>
        <Container style={{display: "block", maxWidth: "80px", height: "100px"}}>
         <div style={{position: "relative", right: "70px"}}>
          <PacmanLoader
                color={"yellow"}
                loading={true}
                size={40}
                />
         </div>
        </Container>
          
        <h2>Game Previews</h2>
        <h3 style={{fontSize:"14px"}}>Press <b>START</b> to <b>PLAY</b></h3>
       </Container>
      <Container>
        <Row>
        {this.state.games.map(this.toGameBoy)}
          <Container style={{textAlign: "center", margin: "auto"}}>
            <PulseLoader
              color={'#8EC8E7'}
              loading = {this.state.loading}
              size={30}
              />
          </Container>
        </Row>
      </Container>

      </span>
    );
  }
}

export default Games;
