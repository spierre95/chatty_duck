import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  render(){
    let header = '';
    header = (
      <div className="row">
        <div className="top col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <a className="logo" href=""><img src="/images/logo.png" alt="logo" /></a>
          <h1>Travel Chat App</h1>
          <a className="btn btn-primary" href="">Login</a>
          <Link className="btn btn-primary" to="/user/:username/create">Create Trip</Link>

        </div>
      </div>
    );
    return (
      <header>
        {header}
      </header>
    );
  }
}

export default Header;