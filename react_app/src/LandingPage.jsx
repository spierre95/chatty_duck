import React, {Component} from 'react';
import Header from './lp/Header.jsx';
import Main from './lp/Main.jsx';
import Footer from './lp/Footer.jsx';
import Signup from './forms/Signup.jsx';
import Login from './forms/Login.jsx';
import SelectTrip from './forms/SelectTrip.jsx';


class LandingPage extends Component {
  render(){
    return (
        <div>
          <Header />
          <Main />
          <Login />
          <SelectTrip />
          <Footer />
        </div>
      );
  }
}
export default LandingPage;