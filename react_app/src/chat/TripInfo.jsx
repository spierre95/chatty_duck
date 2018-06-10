import React, {Component} from 'react';
import UpcomingEvent from './UpcomingEvent.jsx'
import Countdown from './Countdown.jsx'
import axios from 'axios';

class TripInfo extends Component{


  render(){
    return(
      <header>
        <p className="title">Group Name here</p>
        <ul>
          <li>
          <a href="#" data-toggle="modal" data-target="#itinerary"><i className="fa fa-calendar"></i></a></li>
          <li><a href="#"><i className="fa fa-plus"></i></a></li>
        </ul>
        <div className="trip-details">
          <div className="schedule">
            <ul><li>schedule bar will be here.</li></ul>
          </div>
          <div>
            <p className="date"><span><Countdown trip={this.props.trip} /></span> days left</p>
            <div className="upcoming"><UpcomingEvent currentUser={this.props.currentUser} trip={this.props.trip} /></div>
            <p>Concert 7pm - 9pm</p>
          </div>
        </div>
      </header>
    )
  }
}
export default TripInfo;
