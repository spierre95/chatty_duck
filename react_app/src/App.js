import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import LandingPage from './LandingPage.jsx';
import Profile from './Profile.jsx';
import CreateTrip from './forms/CreateTrip.jsx';
import UserInvite from './UserInvite.jsx';
import ChatRoom from './ChatRoom.jsx';

class App extends Component {



  render() {
    return (
   <Router>
    <div>
      <Route path="/user/invite" exact strict component={UserInvite}/>
      <Route path="/" exact strict component={LandingPage}/>
      <Route path="/user/:id/profile" exact strict component={Profile}/>
      <Route path="/user/:username/create" exact strict component={CreateTrip}/>
      <Route path="/user/:username/trips/:trip" exact strict component={ChatRoom}/>
    </div>
  </Router>
  );
  }
}

export default App;
