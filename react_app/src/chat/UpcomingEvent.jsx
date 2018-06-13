import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import AuthService from '../forms/AuthService';
import withAuth from '../forms/withAuth';
import moment from 'moment';

class UpcomingEvent extends Component {


render() {
  let filterEvents = this.props.events.filter((event) => {
    let unixTime = moment(event.start_time).unix()
    console.log("unix", unixTime);
    if (unixTime < moment().unix()) {
     console.log("event", event);
    }
  })

    // let times = moment.utc(event.start_time).format();
    // for (let i = 0, i <= times.length, )
    // if (moment.utc() > )

 return(
  <div className="event">
    <p>Concert 7pm - 9pm</p>
  </div>
    );
  }
}


export default UpcomingEvent;