import React, { Component } from 'react';
import './Nintendo.css';
import { Image, Row, Col, Container} from 'react-bootstrap';
import GifPlayer from "react-gif-player";

class Nintendo extends Component {
  
  render() {
    return (
      <div className="Nintendo">
      <Container id="header-nintendo" className="heading">
        <h1><b>Game Designer - Assignment</b></h1>
        <h2>By Carlos-Michael Rodriguez</h2>
        <p>The assignment is broken down into three parts, which you can access by clicking each:
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
        <p>The intention of this format is to define key words as <b>core mechanics</b>, and <i>key user interactions</i> so we can later refer to a set of core terminology as previously defined.</p>
      </Container>

      <Container className = "assignment-part" id="part1">
        <h2>Global Gameplay Mechanics</h2>
        <Row className="header-row">
            <Col md={4} lg={4} className="assignment-col"><h3>Example Footage</h3></Col>
            <Col md={4} lg={4} className="assignment-col" id="mechanic"><h3><b>Gameplay Mechanic</b></h3></Col>
            <Col md={4} lg={4} className="assignment-col"><h3>Mechanic Description and Controls</h3></Col>
        </Row>

        <Row className="assignment-row">
            <Col md={4} lg={4} className="assignment-col">
            <GifPlayer 
                style={{maxWidth:"300px", maxWidth:"300px"}}
                gif={"/images/nintendo/run.gif"}
                autoplay={true}>
            </GifPlayer>
            </Col>
            <Col md={4} lg={4} className="assignment-col" id="mechanic"><b>Run</b></Col>
            <Col md={4} lg={4} className="assignment-col"><i>Without pressing any buttons</i>, Mario automatically 
            runs to the right of the screen. This is the central rule in <i>Super Mario Run</i>, and informs many 
            of the other mechanics.</Col>
        </Row>
        <Row className="assignment-row">
            <Col md={4} lg={4} className="assignment-col"><GifPlayer 
                style={{maxWidth:"300px", maxWidth:"300px"}}
                gif={"/images/nintendo/vault.gif"}
                autoplay={true}>
            </GifPlayer></Col>
            <Col md={4} lg={4} className="assignment-col" id="mechanic"><b>Vault</b></Col>
            <Col md={4} lg={4} className="assignment-col"><i>Without pressing any buttons</i>, Mario 
            automatically vaults over any ground-based enemies (such as Goombas) and small ledges.</Col>
        </Row>
        <Row className="assignment-row">
            <Col md={4} lg={4} className="assignment-col"><GifPlayer 
                style={{maxWidth:"300px", maxWidth:"300px"}}
                gif={"/images/nintendo/tapjump.gif"}
                autoplay={true}>
            </GifPlayer></Col>
            <Col md={4} lg={4} className="assignment-col" id="mechanic"><b>Tap Jump</b></Col>
            <Col md={4} lg={4} className="assignment-col">One of the two fundamental jumps that 
            the player can use to interact with Mario. The tap jump lets Mario do a standard 
            jump with just a <i>single, simple tap</i>, and can clear small gaps and jumps.</Col>
        </Row>
        <Row className="assignment-row">
            <Col md={4} lg={4} className="assignment-col"><GifPlayer 
                style={{maxWidth:"300px", maxWidth:"300px"}}
                gif={"/images/nintendo/longjump.gif"}
                autoplay={true}>
            </GifPlayer></Col>
            <Col md={4} lg={4} className="assignment-col" id="mechanic"><b>Long Jump</b></Col>
            <Col md={4} lg={4} className="assignment-col">Here, Mario is controlled with a long tap. 
            The <i>length of time the player holds the tap</i> determines the height and length of Mario's jump. 
            This is important for more higher skilled, timing-based jumps.</Col>
        </Row>
        <Row className="assignment-row">
            <Col md={4} lg={4} className="assignment-col"><GifPlayer 
                style={{maxWidth:"300px", maxWidth:"300px"}}
                gif={"/images/nintendo/walljump.gif"}
                autoplay={true}>
            </GifPlayer></Col>
            <Col md={4} lg={4} className="assignment-col" id="mechanic"><b>Wall Jump</b></Col>
            <Col md={4} lg={4} className="assignment-col">By performing a <b>Tap Jump</b> or <b>Long Jump</b> 
            while Mario is on a wall, Mario will flip directions, and jump towards the left. This is often
             used in chains to jump back and forth between two opposite facing walls.</Col>
        </Row>
        <Row className="assignment-row">
            <Col md={4} lg={4} className="assignment-col"><GifPlayer 
                style={{maxWidth:"300px", maxWidth:"300px"}}
                gif={"/images/nintendo/floatjump.gif"}
                autoplay={true}>
            </GifPlayer></Col>
            <Col md={4} lg={4} className="assignment-col" id="mechanic"><b>'Float' Jump</b></Col>
            <Col md={4} lg={4} className="assignment-col">By <i>tapping once while in the air</i>, Mario will 
            "float" giving a small amount of extra horizontal distance. This can be used to recover from a poorly
             timed jump, or avoid a dangerous obstacle. This can be done multiple times throughout a jump.</Col>
        </Row>
        <Row className="assignment-row">
            <Col md={4} lg={4} className="assignment-col"><GifPlayer 
                style={{maxWidth:"300px", maxWidth:"300px"}}
                gif={"/images/nintendo/environmentalinteraction.gif"}
                autoplay={true}>
            </GifPlayer></Col>
            <Col md={4} lg={4} className="assignment-col" id="mechanic"><b>Environmental Interaction</b></Col>
            <Col md={4} lg={4} className="assignment-col">This refers to a variety of environmental interactions 
            that can mainly be accessed by Mario jumping. These include <b>Pause Blocks</b>, which stop Mario if 
            he runs over them, and gives the player brief time to decide what path to take. Another example of an
             environmental interaction is the classic <b>Question Block</b> which, if Mario hits, will spit out 
             coins or a <b>Power Up</b> like a Mushroom, which will give Mario an extra hit point.</Col>
        </Row>
      </Container>
      <Container className = "assignment-part" id="part2">
        <h2>Mario's Behaviors</h2>
            <Row className="header-row">
                <Col md={4} lg={4} className="assignment-col"><h3>Example Footage</h3></Col>
                <Col md={4} lg={4} className="assignment-col" id="mechanic"><h3>Specific Behavior</h3></Col>
                <Col md={4} lg={4} className="assignment-col"><h3>Description and Design Implications</h3></Col>
            </Row>
            <Row className="assignment-row">
                <Col md={4} lg={4}><GifPlayer 
                style={{maxWidth:"300px", maxWidth:"300px"}}
                gif={"/images/nintendo/run.gif"}
                autoplay={true}>
            </GifPlayer></Col>
                <Col md={4} lg={4} id="mechanic"><b>Running Animation</b></Col>
                <Col md={4} lg={4}>Mario's run animation demonstrates his central movement - he is hunched forward,
                 always running towards the right, from the left. Whenever this changes, there are dramatic changes 
                 to his behavior.</Col>
            </Row>
            <Row className="assignment-row">
                <Col md={4} lg={4}><GifPlayer 
                style={{maxWidth:"300px", maxWidth:"300px"}}
                gif={"/images/nintendo/vault.gif"}
                autoplay={true}>
            </GifPlayer></Col>
                <Col md={4} lg={4} id="mechanic"><b>Vaulting Animation</b></Col>
                <Col md={4} lg={4}>Mario vaults here with style, and a couple of particle effects mainly
                 to convey to the player dramatically that Mario is <b>safe</b> by just running into an 
                 enemy that would normally kill him in any other Mario game. Notice how the multiple types 
                 of vaulting gives the player the indication that it is a safe practice, and this won't mess up their run.</Col>
            </Row>
            <Row className="assignment-row">
                <Col md={4} lg={4}><GifPlayer 
                style={{maxWidth:"300px", maxWidth:"300px"}}
                gif={"/images/nintendo/walljump.gif"}
                autoplay={true}>
            </GifPlayer></Col>
                <Col md={4} lg={4} id="mechanic"><b>Wall Jumping Animation</b></Col>
                <Col md={4} lg={4}>Mario's wall jump needs to convey that the central rule of the game (that Mario is always running to the right) is being broken for this specific move, which is why this action is accentuated with a dramatic flip.</Col>
            </Row>
            <Row className="assignment-row">
                <Col md={4} lg={4}><GifPlayer 
                style={{maxWidth:"300px", maxWidth:"300px"}}
                gif={"/images/nintendo/reversedirection.gif"}
                autoplay={true}>
            </GifPlayer></Col>
                <Col md={4} lg={4} id="mechanic"><b>Reverse Direction with Momentum</b></Col>
                <Col md={4} lg={4}>As discussed above, Mario's momentum of running towards the right is a central gameplay rule, so Mario needs to communicate this to the player if he is running in the wrong direction in certain instances. He will skid to a stop, pivot, and continue in his regular run animation if you are running towards the left, showing he is affected by this global, <b>run</b> momentum.</Col>
            </Row>
      </Container>
      <Container className = "assignment-part" id="part3">
        <h2>Detailed Level Design Analysis</h2>
        <h3 id="level">Level 1-1 - "Up and Over"</h3>
            <Row className="header-row">
                <Col md={5} lg={5} className="assignment-col"><h3>Level Footage</h3></Col>
                <Col md={7} lg={7} className="assignment-col"><h3>Description and Interesting Design Interactions</h3></Col>
            </Row>
            <Row className="assignment-row">
                <Col md={5} lg={5}><GifPlayer 
                style={{maxWidth:"300px", maxWidth:"300px"}}
                gif={"/images/nintendo/environmentalinteraction.gif"}
                autoplay={true}>
            </GifPlayer></Col>
                <Col md={7} lg={7}>We first see how jump can interact with the environment. 
                By jumping and hitting the item question block,
                 we can begin how <b>environmental interactions</b> work. This ensures the player understands the rule that jumping will fundamentally 
                 be the main way to interact with the world around Mario. This gives 
                 you the Mushroom power up, which makes Mario grow, gives an extra hit point, and acts similarly 
                 to any other 2D Mario game.</Col>
            </Row>
            <Row className="assignment-row">
                <Col md={5} lg={5}><GifPlayer 
                style={{maxWidth:"300px", maxWidth:"300px"}}
                gif={"/images/nintendo/1-1-2.gif"}
                autoplay={true}>
            </GifPlayer></Col>
                <Col md={7} lg={7}>Here we see a series of multiple ledges where Mario 
                is not required to jump, so he automatically <b>vaults</b>. 
                We can see this clearly demonstrated in the first two ledges, with coins guiding our way.</Col>
            </Row>
            
            <Row className="assignment-row">
                <Col md={5} lg={5}><GifPlayer 
                style={{maxWidth:"300px", maxWidth:"300px"}}
                gif={"/images/nintendo/1-1-3.gif"}
                autoplay={true}>
            </GifPlayer></Col>
                <Col md={7} lg={7}>This first pipe is fairly important, it gives us a clear indication 
                of what is considered <b>vaultable</b> versus what is 
             <b> jumpable</b>. Because you cannot <b>vault</b> over this, this is the first time the game requires the player to know how to <b>jump</b> to advance. This pipe is actually 
                clearable with a simple <i>tap jump</i>, but Mario will <b>vault</b> over 
                the edge, demonstrating to the player that Mario can reach ledges 
                he can't normally reach by simply hitting the block he's trying to reach.</Col>
            </Row>
            
            <Row className="assignment-row">
                <Col md={5} lg={5}><GifPlayer 
                style={{maxWidth:"300px", maxWidth:"300px"}}
                gif={"/images/nintendo/1-1-4.gif"}
                autoplay={true}>
            </GifPlayer></Col>
                <Col md={7} lg={7}>We then reach a pause block, another <b>environmental interaction</b> 
                which is triggered simply by allowing Mario to run over it.
                This then stops Mario and gives the player a window of 
                time to choose the path. Taking away the central 
                rule that Mario is always running to the right gives
                 players a brief time to think about which path they can 
                 go on - in this instance, a top or bottom route.</Col>
            </Row>
            <Row className="assignment-row">
                <Col md={5} lg={5}><GifPlayer 
                style={{maxWidth:"300px", maxWidth:"300px"}}
                gif={"/images/nintendo/1-1-5.gif"}
                autoplay={true}>
            </GifPlayer></Col>
                <Col md={7} lg={7}>We can see an oddly placed purple coin, 
                which can actually teach us a Level 1-2 mechanic, 
                <b>wall jumping</b>, by discovering it naturally. We can run towards it, and can actually <b>wall jump </b>backwards to collect it, 
                 giving us the first indication that Mario can actually travel backwards in <i>Run</i>.</Col>
            </Row>
            <h3 id="level">Level 1-2 - "Wall-Kicking it Underground"</h3>
            <Row className="header-row">
                <Col md={5} lg={5} className="assignment-col"><h3>Level Footage</h3></Col>
                <Col md={7} lg={7} className="assignment-col"><h3>Description and Interesting Design Interactions</h3></Col>
            </Row>
            <Row className="assignment-row">
                <Col md={5} lg={5}><GifPlayer 
                style={{maxWidth:"300px", maxWidth:"300px"}}
                gif={"/images/nintendo/2-1-1.gif"}
                autoplay={true}>
            </GifPlayer></Col>
                <Col md={7} lg={7}>Here, 1-2 gives us our first necessary 
                <b> wall-jumping</b> lesson because it is required to clear the first area. 
                By placing coins in the exact places we need to <b>wall jump</b>, the player
                 knows exactly when to time the jumps in order to traverse up the wall.</Col>
            </Row>
            <Row className="assignment-row">
                <Col md={5} lg={5}><GifPlayer 
                style={{maxWidth:"300px", maxWidth:"300px"}}
                gif={"/images/nintendo/2-1-2.gif"}
                autoplay={true}>
            </GifPlayer></Col>
                <Col md={7} lg={7}>These Goombas then encourage us to 
                jump on them into the coin-filled walls, 
                which if we traverse above, will give us a purple coin 
                and also teach us about the important mechanic of <b>wall sliding </b>in order 
                to get down (with the coins to guide the player).</Col>
            </Row>
            <Row className="assignment-row">
                <Col md={5} lg={5}><GifPlayer 
                style={{maxWidth:"300px", maxWidth:"300px"}}
                gif={"/images/nintendo/2-1-3.gif"}
                autoplay={true}>
            </GifPlayer></Col>
                <Col md={7} lg={7}>The player is then greeted with a pipe which 
                Mario automatically goes through, and the next mechanic comes 
                almost entirely naturally because of the game's communication 
                with how jumping affects the world. The <b>jump pad</b> is triggered
                the same way all other <b>environmental interactions</b> in the game are, simply 
                by <i>tapping</i> to jump. It also follows the <b>long jump</b> rule by giving extra 
                control to players who <i>press and hold.</i></Col>
            </Row>
            <h3 id="level">Level 1-3 - "Paratroopas in Mushroom Valley"</h3>
            <Row className="header-row">
                <Col md={5} lg={5} className="assignment-col"><h3>Level Footage</h3></Col>
                <Col md={7} lg={7} className="assignment-col"><h3>Description and Interesting Design Interactions</h3></Col>
            </Row>
            <Row className="assignment-row">
                <Col md={5} lg={5}><GifPlayer 
                style={{maxWidth:"300px", maxWidth:"300px"}}
                gif={"/images/nintendo/3-1-1.gif"}
                autoplay={true}>
            </GifPlayer></Col>
                <Col md={7} lg={7}>This level demonstrates a variety of the mechanics previously learned in 1-1 and 1-2, 
                but with the added addition of flying enemies that can be <b>jumped</b> on. 
                Since these enemies cannot be <b>vaulted</b> over, 
                we know we are supposed to <b>jump</b> on them, 
                and the timing of these <b>jumps</b> are significantly more important now.</Col>
            </Row>
            <Row className="assignment-row">
                <Col md={5} lg={5}><GifPlayer 
                style={{maxWidth:"300px", maxWidth:"300px"}}
                gif={"/images/nintendo/3-1-2.gif"}
                autoplay={true}>
            </GifPlayer></Col>
                <Col md={7} lg={7}>We are also introduced to the new 
                <b> environmental interaction</b> of a forward launcher, 
                which acts similarly to the jump pads, 
                but in this case throwing you with forward momentum. </Col>
            </Row>
            <Row className="assignment-row">
                <Col md={5} lg={5}><GifPlayer 
                style={{maxWidth:"300px", maxWidth:"300px"}}
                gif={"/images/nintendo/3-1-3.gif"}
                autoplay={true}>
            </GifPlayer></Col>
                <Col md={7} lg={7}>We can now see a new consequence of using the pause blocks
                - in this case, to line up the timing to <b>jump</b> on the flying Paratroopas. 
                Going too fast may mean you miss your <b>jump</b> and fall below, 
                but going too slow could make you hit the Paratroopa.</Col>
            </Row>
            <h3 id="level">Overall</h3>
            <p style={{maxWidth:"800px", textAlign:'center', margin:'auto'}}>Overall, the progression from 1-1 to 1-2 to 1-3 organically 
                builds on the two central mechanics - 
                that jumping with Mario interacts with the world, and Mario
                will always run to the right with forward momentum. 
                The game teaches its new mechanics gradually through the level design 
                and enemy placement alone. The designers also included hints at 
                future mechanics with the placement of some of the Purple coins, 
                which are for experienced players who may understand the 
                fundamentals more than newcomers. There are also clever
                ways the designers added layered challenge, 
                such as increasing combos for landing multiple jumps on Goombas in a row.</p>
      </Container>
      </div>
    );
  }
}

export default Nintendo;
