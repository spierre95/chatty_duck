import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import AuthService from '../forms/AuthService';
import withAuth from '../forms/withAuth';

class UpcomingEvent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      events: this.props.trip.events
    };

    this.Auth = new AuthService();
  }



componentDidMount(){

  // const events = this.props.trip.events;
  // this.setState({ events })

        }

render() {

  // console.log(new Date())

 return(
  <div className="event">
    text
  </div>
    );
  }
}


export default UpcomingEvent;