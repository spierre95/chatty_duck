import React, {Component} from 'react';
import Header from './lp/Header.jsx';
import Footer from './lp/Footer.jsx';
import SelectTrip from './forms/SelectTrip.jsx'
import {Link} from 'react-router-dom';
import AuthService from './forms/AuthService';
import withAuth from './forms/withAuth'
import axios from 'axios';

class Profile extends Component{
 constructor(){
  super()
  this.state = {
    currentUser:""
  }
  this.Auth = new AuthService();
 }

 componentWillMount(){
   this.Auth.getCurrentUser()
   .then((res)=>{
      const currentUser = res.data
      this.setState({currentUser})
      console.log(this.state.Currentuser)
   })
   .catch((err)=>{
    console.log(err)
   })
}
  render(){
    const {data} = this.state;
    let detail = (
        <div className="container">
          <div className="row">
              <h1>Your Profile</h1>
              <div className="col-xs-2 col-sm-2 col-md-3 col-ls-3">
                <img src="/images/profile/profile.png" />
              </div>
              <div className="col-xs-10 col-sm-10 col-md-9 col-ls-9">
                <ul>
                  <li>Name: {this.state.currentUser.first_name} </li>
                  <li>Username: {this.state.currentUser.username}</li>
                  <li>Email: {this.state.currentUser.email}</li>
                </ul>
              </div>
          </div>
        </div>
      );
    return (
      <div className="profile">
        <Header />
        <section>
          {detail}
        </section>
        <SelectTrip />
        <Footer />
      </div>
    );
  }
}

export default Profile;