import React, {Component} from 'react';
import Header from './lp/Header.jsx';
import Footer from './lp/Footer.jsx';
import SelectTrip from './forms/SelectTrip.jsx'
import {Link} from 'react-router-dom';

class Profile extends Component{
  state = {
    name: 'Bob',
    username: 'Bobby',
    email: 'sample@sample.com',
    imgUrl: 'images/profile/profile.png'
  };

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
                  <li>Name: {this.state.name} </li>
                  <li>Username: {this.state.username}</li>
                  <li>Email: {this.state.email}</li>
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