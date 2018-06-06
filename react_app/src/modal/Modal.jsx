import React, { Component } from 'react';
import Login from '../forms/Login.jsx';
import Signup from '../forms/Signup.jsx';

class Modal extends Component {

  render() {

    return (
      <div id="modal">
        <div className="modal fade" id="login" tabindex="-1" role="dialog" aria-labelledby="loginModal" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <Login />
              </div>
              <div className="modal-footer">
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="signup" tabindex="0" role="dialog" aria-labelledby="signupModal" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <Signup />
              </div>
              <div className="modal-footer">
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
