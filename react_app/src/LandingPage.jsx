import React, {Component} from 'react';
import Header from './lp/Header.jsx';
import Main from './lp/Main.jsx';
import Footer from './lp/Footer.jsx';
import Signup from './forms/Signup.jsx';
import Modal from './modal/Modal.jsx';
import AuthService from './forms/AuthService';
import withAuth from './forms/withAuth'
import {Link} from 'react-router-dom';


class LandingPage extends Component {
  render(){
    return (
        <div>
          <Header currentUser={this.props.currentUser} handleLogout={this.props.handleLogout}  />
          <Main />
          <Footer/>
          <Modal/>
        </div>
      );
  }
}
export default LandingPage;