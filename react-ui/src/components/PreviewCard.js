import React, { Component } from 'react';
import {NavLink, Route, Switch} from "react-router-dom";
import IndividualProject from "../pages/IndividualProject";
class PreviewCard extends Component {

    
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <h2>{this.props.blurb}</h2>
                <NavLink to={this.props.linkRel}>More Details</NavLink>
            </div>
        );
    }
}

export default PreviewCard;

/*
<Switch>
    <Route path={this.props.linkRel} component={IndividualProject}/> 
</Switch>
*/