import React, { Component } from 'react';
import moment from 'moment';
import axios from 'axios';

class CreateEvent extends Component {

constructor(){
  super()
}


  render(){

let departure = moment(this.props.trip.depature).format("YYYY-MM-DD")
let arrival =  moment(this.props.trip.arrival).format("YYYY-MM-DD")

   let form = (
        <form onSubmit={this.props.handleSubmit}>
          <p>Add a new event!</p>
          <div className="form-group">
            <label htmlFor="event name">Event Name</label>
            <input type="text" name="name" className="form-control" id="name" placeholder="Enter trip name" />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input max={arrival} min={departure} type="date" name="date" className="form-control" id="date" placeholder="yyyy-mm-dd" />
          </div>
          <div className="form-group">
            <label htmlFor="start time">Start Time</label>
            <input type="time" name="start_time" className="form-control" id="start_time" placeholder="" />
          </div>
          <div className="form-group">
            <label htmlFor="end time">End Time</label>
            <input type="time" name="end_time"className="form-control" id="end_time" placeholder="" />
          </div>
          <div className="form-group">
            <label for="event contents">Event Details</label>
            <textarea className="form-control" name="details" id="event_details" rows="3"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Create</button>
        </form>
    );
    return (
      <div id="modal">
        <div className="modal fade" id="event-form" tabindex="-1" role="dialog" aria-labelledby="eventForm" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body chat">
                {form}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CreateEvent;