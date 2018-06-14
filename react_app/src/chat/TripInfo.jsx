import React, {Component} from 'react';
import UpcomingEvent from './UpcomingEvent.jsx'
import Countdown from './Countdown.jsx'
import axios from 'axios';
import {Link} from 'react-router-dom';

class TripInfo extends Component{


  render(){

  const imgStyle = {
   border: "1px solid #1cd2d0",
   borderRadius: "50%",
   width: "45px",
   height: "auto",
  }
    return(
      <header>
        <p className="title">Group Name here</p>
        <ul>
          <li>
            <a href="#" data-toggle="modal" data-target="#itinerary"><i className="fa fa-calendar"></i></a></li>
          <li>
            <a href="#" data-toggle="modal" data-target="#event-form"><i className="fa fa-plus"></i></a></li>
          <li>
            <Link to={`/user/${this.props.currentUser.id}/profile`}><img src={this.props.currentUser.image_url} style={imgStyle}/></Link>
          </li>
        </ul>
        <div className="trip-details">
          <div className="schedule">
            <ul><li>schedule bar will be here.</li></ul>
          </div>
          <div>
            <Countdown trip={this.props.trip} />
            <span>days left</span>
            <div className="upcoming"><UpcomingEvent currentUser={this.props.currentUser} trip={this.props.trip} /></div>
          </div>
        </div>
      </header>
    )
  }
}
export default TripInfo;
