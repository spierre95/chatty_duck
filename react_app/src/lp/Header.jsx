import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Modal from '../modal/Modal.jsx';

class Header extends Component {
  render(){
    let header = '';
    header = (
      <div className="container-fluid">
        <div className="row">
          <div className="top col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <Link className="logo" to="/"><img src="/images/logo.png" alt="logo" /></Link>
            <h1>Travel Chat App</h1>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#signup">
            Signup
            </button>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#login">
            Login
            </button>
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