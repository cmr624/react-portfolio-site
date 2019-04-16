import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import { Next } from 'react-bootstrap/PageItem';

class UserDashboard extends Component {

    constructor(props)
    {
        super(props);
        this.state={
            redirectTo:"/",
            loggedIn:null
        }
    }
    render() {
        console.log(this.props.loggedIn);
        if (!this.props.loggedIn)
        {
            return <Redirect to ={{pathname: this.state.redirectTo}}/>
        }
        else
        {
            return (
                <React.Fragment>
                    <div style={{padding: "20px", textAlign:"center", margin: "auto", color: "white"}}>
                        <h1>User Dashboard</h1>
                    </div>
                </React.Fragment>
            );
        }
        
    }
}

export default UserDashboard;