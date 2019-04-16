import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Webdev from '../pages/Webdev';
import Games from '../pages/Games';
import Contact from '../pages/Contact';
import IndividualProject from "../pages/IndividualProject";
import Signup from './auth/Signup';
import Login from "./auth/Login";
import UserDashboard from '../pages/recipes/UserDashboard';
class MainRouter extends Component {

  constructor(props)
  {
    super(props);
    this.state={
      webdevroutes: [],
      gameroutes:[],
      message:'',
      loggedIn:this.props.loggedIn
    }
    this.toRoute = this.toRoute.bind(this);
  }
  componentDidMount() {
      fetch('/api/webdev').then(response => {
          if (!response.ok) {
            throw new Error(`status ${response.status}`);
          }
          return response.json();
        }).then(json => {      
          //right now, this gets every webdev item in the db 
          //and returns the full item
          this.setState({webdevroutes: json,
            });
        }).catch(e => {
          this.setState({
            message: `API call failed: ${e}`,
          });
        });
        fetch('/api/games').then(response => {
          if (!response.ok) {
            throw new Error(`status ${response.status}`);
          }
          return response.json();
        }).then(json => {      
          //right now, this gets every webdev item in the db 
          //and returns the full item
          this.setState({gameroutes: json,
            });
        }).catch(e => {
          this.setState({
            message: `API call failed: ${e}`,
          });
        });
    }
  
  toRoute = (element, i) => {
    return (
      <Route path={element.detailsLink} 
        key={i}
        render={(props) => <IndividualProject {...props} 
        name = {element.name}
        sections = {element.sections}
        links={element.links}
        images={element.images} 
        credits={element.credits}/>}/>
    )
  }

    render() {
        return (
            <main>
            <Switch>
              <Route exact path="/dashboard" render={() => <UserDashboard updateUser = {this.props.updateUser} loggedIn = {this.props.loggedIn}/>}/>
              <Route exact path="/signup" component={Signup}/>
              <Route exact path="/login" render={() => <Login updateUser = {this.props.updateUser}/>}/>
              <Route exact path='/' component={Home}/>
              <Route exact path='/webdev' component={Webdev}/>
              <Route exact path='/games' component={Games}/>
              <Route exact path='/contact' component={Contact}/>
              {this.state.webdevroutes.map(this.toRoute)}
              {this.state.gameroutes.map(this.toRoute)}
            </Switch>
          </main>
        );
    }
};

export default MainRouter;