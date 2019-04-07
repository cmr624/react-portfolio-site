import React, { Component } from 'react';
import "./GameBoy.css";
import GifPlayer from "react-gif-player";

class GameBoy extends Component {
    //ALL CREDIT FOR CSS https://codepen.io/luismsf/pen/FCGKc
    render() {
        return (
            <div className="gameboi">
                <div id="GBbody">
                    <div id="side">
                        <hr></hr><hr></hr><hr></hr><hr></hr>
                    </div>
                    <div id="com">▲ COMM.</div>
                    <div id="volume"></div>
                    <a href={this.props.detailsLink} id="screenWrapper">
                        <div id="screenReflection"></div>
                        <div id="screen">
                            <GifPlayer 
                            style={{ objectFit: "cover", height: "150px", width: "200px"}} 
                            gif={"/images/gifs" + this.props.gifURL}
                            still="/images/me/meIRL.jpg" 
                            autoplay={true}
                            ></GifPlayer>
                        </div>
                        <div id="logo">
                            <span className="logoName"><i>{this.props.name}</i></span>
                            <span className="logoModel">
                                <b>
                                    <span id="c"> B</span><span id="o1">Y</span><span id="l">: </span><span id="o2">C</span><span id="r">M</span>
                                </b>
                            </span>
                        </div>
                    </a>
                    
                    <div id="nintendo">
                        <span>{this.props.blurb}</span>
                    </div>
                    
                    <ul id="arrows">
                        <li id="center">●</li>
                        <li id="up">▲</li>
                        <li id="right">►</li>
                        <li id="down">▼</li>
                        <li id="left">◀</li>
                    </ul>
                    
                        <ul id="ABbtns">
                            <li>A</li>
                            <li>B</li>
                        </ul>
                   
                    <div id="SSbtns">
                        <ul>
                           <a id="moreInfo" href={this.props.detailsLink}></a>
                           <a id="start" href={this.props.playURL}></a>
                        </ul>
                    </div>
                    <div className="power">
                        <div id="powerLight"></div>
                        <div id="powerSymbols">)))</div>
                        <div id="powerWord">POWER</div>
                    </div>

                    <div id="holes">
                        ・・・・<br></br>
                        ・・・・・・<br></br>
                        ・・・・・<br></br>
                        ・・・・・・<br></br>
                        ・・・・・<br></br>
                        ・・・・・・<br></br>
                        ・・・・<br></br>
                    </div>
                    
                    <div id="GBbodyBottomWrapper">
                        <div id="GBbodyBottomLeft"></div>
                        <div id="GBbodyBottomRight"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GameBoy;
