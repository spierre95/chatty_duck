import React, {Component} from 'react';
import Countdown from './Countdown.jsx';

class TripInfo extends Component{
  constructor() {
    super();
    this.state = {
      start_date: "",
      end_date: ""
    }
  }



  render(){

    return(
      <header>
        <p className="title">Group Name here</p>
        <ul>
          <li><a href="#"><i className="fa fa-camera-retro"></i></a></li>
          <li><a href="#"><i className="fa fa-calendar"></i></a></li>
          <li><a href="#"><i className="fa fa-plus"></i></a></li>
        </ul>
        <div className="trip-details">
          <div className="schedule">
            <ul><li>schedule bar will be here.</li></ul>
          </div>
          <div>
            <p className="date"><span>
              <Countdown />
            </span>
            </p>
            <p>Upcoming:</p>
            <p>Concert 7pm - 9pm</p>
          </div>
        </div>
      </header>
    )
  }
}
export default TripInfo;







