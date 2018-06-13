import React, {Component} from 'react';
import {Link,Redirect} from 'react-router-dom';
import Modal from '../modal/Modal.jsx';
import AuthService from '.././forms/AuthService';
import withAuth from '.././forms/withAuth'

class Header extends Component {

  render(){

    let auth
    if(this.props.currentUser){
      auth =
     <div><button type="button" className="btn btn-primary" onClick={this.props.handleLogout}>Logout</button>
     <Link to={`/user/${this.props.currentUser.id}/profile`}><img className="profile-img" src={this.props.currentUser.image_url} /></Link></div>
    }else{
      auth =
      <div><button type="button" className="btn btn-primary" data-toggle="modal" data-target="#signup">
        Signup
      </button>
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#login">
        Login
      </button></div>
    }

  let header = (
      <div className="container-fluid">
        <div className="row">
          <div className="top col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <Link className="logo" to="/"><img src="/images/logo.png" alt="logo" /></Link>
            <h1>Chatty Duck</h1>
            {auth}
          </div>
        </div>
      </div>
    );
    return (
      <header>
        {header}
        <Modal />
      </header>
    );
  }
}

export default Header;