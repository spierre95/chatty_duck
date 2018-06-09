import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import LandingPage from './LandingPage.jsx';
import Profile from './Profile.jsx';
import CreateTrip from './forms/CreateTrip.jsx';
import UserInvite from './UserInvite.jsx';
import ChatRoom from './ChatRoom.jsx';
import AuthService from './forms/AuthService';
import withAuth from './forms/withAuth'

const DeleteToken = new AuthService();
class App extends Component {

constructor(){
  super()
  this.state = {
    currentUser:"",
    redirect:"",
    profile:false
  }
  this.Auth = new AuthService();
  this.handleLogout = this.handleLogout.bind(this);
 }


 handleLogout(){
    DeleteToken.logout()
    this.setState({redirect:'/',currentUser:""})
 }

componentWillMount(){
if(localStorage.getItem("id_token") !== null){
  this.Auth.getCurrentUser()
   .then((res)=>{
      const currentUser = res.data
      this.setState({currentUser})
   })
   .catch((err)=>{
    console.log(err)
   })
}
}

  render() {
    return (
   <Router>
    <div>
      <Route path="/" exact strict render={()=><LandingPage currentUser={this.state.currentUser} handleLogout={this.handleLogout}/>}/>
      <Route path="/user/:id/profile" exact strict render={()=><Profile currentUser={this.state.currentUser} handleLogout={this.handleLogout} redirect={this.state.redirect}/>}/>
      <Route path="/user/:username/create" exact strict render={()=><CreateTrip currentUser={this.state.currentUser} handleLogout={this.handleLogout} redirect={this.state.redirect}/>}/>
      <Route path="/" exact strict render={()=><LandingPage currentUser={this.state.currentUser} handleLogout={this.handleLogout}/>}/>
      <Route path="/user/:id/profile" exact strict render={()=><Profile currentUser={this.state.currentUser} handleLogout={this.handleLogout} redirect={this.state.redirect}/>}/>
      <Route path="/user/:username/create" exact strict render={()=><CreateTrip currentUser={this.state.currentUser} handleLogout={this.handleLogout} redirect={this.state.redirect}/>}/>
      <Route path="/user/:username/trips/:trip" component={ ChatRoom } />
    </div>
  </Router>
  );
  }
}

export default App;
      // exact strict render={()=><ChatRoom currentUser={this.state.currentUser} handleLogout={this.handleLogout} redirect={this.state.redirect}/>}
