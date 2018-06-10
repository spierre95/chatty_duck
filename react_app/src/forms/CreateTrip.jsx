import React, {Component} from 'react';
import Header from '../lp/Header.jsx';
import Footer from '../lp/Footer.jsx';
import AuthService from './AuthService';
import withAuth from './withAuth'

class CreateTrip extends Component {
  render(){
   let form = (
        <form>
          <p>Create a new trip.</p>
          <div className="form-group">
            <label htmlFor="trip name">TripName</label>
            <input type="text" className="form-control" id="trip-name" placeholder="Enter trip name" />
          </div>
          <div className="form-group">
            <label htmlFor="start date">Start Date</label>
            <input type="date" className="form-control" id="start-name" placeholder="yyyy-mm-dd" />
          </div>
          <div className="form-group">
            <label htmlFor="end date">End Date</label>
            <input type="date" className="form-control" id="end-date" placeholder="yyyy-mm-dd" />
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
export default CreateTrip;