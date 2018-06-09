import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import AuthService from '../forms/AuthService';
import withAuth from '../forms/withAuth';

class UpcomingEvent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };

    this.Auth = new AuthService();
  }



// componentWillMount(){

//   axios.get(`http://localhost:3001/user/${this.props.currentUser}`)
//     .then(res => {
//       console.log(res)
//     })
//         }

render() {


 return(
  <div className="event">
    text
  </div>
    );
  }
}


export default UpcomingEvent;