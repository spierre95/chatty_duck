import React, {Component} from 'react';
import Header from './lp/Header.jsx';
import Main from './lp/Main.jsx';
import Footer from './lp/Footer.jsx';
import Signup from './forms/Signup.jsx';
import Modal from './modal/Modal.jsx';

class LandingPage extends Component {
  render(){
    return (
        <div>
          <Header />
          <Main />
          <Footer />
          <Modal />
        </div>
      );
  }
}
export default LandingPage;