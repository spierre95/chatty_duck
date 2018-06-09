import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AuthService from './AuthService';
import withAuth from './withAuth'
import axios from 'axios';

class SelectTrip extends Component{

  render(){

    if(this.props.currentUser){
      return <Link to={`/user/${this.props.currentUser.id}/trips/${trip.id}`}>
    }else{
      return <button></button>
    }

    let thumbs = (
        <div className="container">
          <div className="row">
              <h2>Select your trip</h2>
              <Link to="/user/:username/create"><i className="fa fa-plus"></i>&nbsp;&nbsp;Create Trip</Link>
              <ul className="thumbs row">
                {this.props.userTrips.map(trip => (
                  <li class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                    <Link to={`/user/${this.props.currentUser.id}/trips/${trip.id}`}>
                      <div className="trip-details">
                        <span className="title">{trip.name}</span>
                      </div>
                      <div className="overlay"></div>
                      <img src={trip.image_url} alt={trip.name} />
                    </Link>
                  </li>
                ))}
              </ul>
          </div>
        </div>
      );
    return (
        <section>
          {thumbs}
        </section>
    );
  }
}


export default SelectTrip;