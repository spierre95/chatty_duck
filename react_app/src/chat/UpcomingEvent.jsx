import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import AuthService from '../forms/AuthService';
import withAuth from '../forms/withAuth';

class UpcomingEvent extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     events:
  //   };
  // }



componentDidMount(){


        }

render() {

  // console.log(new Date())

 return(
  <div className="event">
    <p>Concert 7pm - 9pm</p>
  </div>
    );
  }
}


export default UpcomingEvent;