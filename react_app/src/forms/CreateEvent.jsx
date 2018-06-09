import React, {Component} from 'react';
import Header from '../lp/Header.jsx';
import Footer from '../lp/Footer.jsx';
import AuthService from './AuthService';
import withAuth from './withAuth'

class CreateEvent extends Component {
  render(){
   let form = (
        <form>
          <p>Create an event.</p>
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
          <button type="submit" className="btn btn-primary">Create</button>
        </form>
    );
    return (
      <div className="form-page">
        <Header currentUser ={this.props.currentUser} handleLogout={this.props.handleLogout} />
          <section>
            {form}
          </section>
        <Footer />
      </div>
    );
  }
}
export default CreateEvent;