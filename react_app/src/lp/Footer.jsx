import React, {Component} from 'react';

class Footer extends Component {
  render(){
    let footer = '';
    footer = (
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <p className="copyright">© Chatty Duck inc.<a className="logo" to="/"><img src="/images/logo.png" alt="logo" /></a></p>
        </div>
      </div>
    );
    return (
      <footer className="container-fluid">
        {footer}
      </footer>
    );
  }
}

export default Footer;