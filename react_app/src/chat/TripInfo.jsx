import React, {Component} from 'react';

class TripInfo extends Component{
  render(){

    return(
      <header>
        <p className="title">Group Name here</p>
        <ul>
          <li>
            <a href="#" data-toggle="modal" data-target="#itinerary"><i className="fa fa-calendar"></i></a></li>
          <li>
            <a href="#" data-toggle="modal" data-target="#event-form"><i className="fa fa-plus"></i></a></li>
        </ul>
        <div className="trip-details">
          <div className="schedule">
            <ul><li>schedule bar will be here.</li></ul>
          </div>
          <div>
            <p className="date"><span>10</span> days left</p>
            <p>Upcoming:</p>
            <p>Concert 7pm - 9pm</p>
          </div>
        </div>
      </header>
    )
  }
}
export default TripInfo;
