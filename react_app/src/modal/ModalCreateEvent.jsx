import React, { Component } from 'react';

class CreateEvent extends Component {
  render(){
   let form = (
        <form>
          <p>Add a new event!</p>
          <div className="form-group">
            <label htmlFor="event name">Event Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter trip name" />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input type="date" className="form-control" id="date" placeholder="yyyy-mm-dd" />
          </div>
          <div className="form-group">
            <label htmlFor="start time">Start Time</label>
            <input type="time" className="form-control" id="start_time" placeholder="" />
          </div>
          <div className="form-group">
            <label htmlFor="end time">End Time</label>
            <input type="time" className="form-control" id="end_time" placeholder="" />
          </div>
          <div className="form-group">
            <label for="event contents">Event Details</label>
            <textarea className="form-control" id="event_details" rows="3"></textarea>
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