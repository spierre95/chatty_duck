import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AuthService from './AuthService';
import withAuth from './withAuth'
import axios from 'axios';

class SelectTrip extends Component{

  constructor(){
  super()
    this.state = {
      trip_id:"",
      trips:[]
    }
     this.handleSubmit = this.handleSubmit.bind(this)

  }

handleSubmit(event){
  event.preventDefault()

  axios.post("http://localhost:3000/api/v1/add_to_trip",{user_id:this.state.user_id,
  trip_id:event.target.trip.value})
  .then((res)=>{
    console.log(res)
  })
  .catch((err)=>{
    console.log(err)
  })
}

 componentWillReceiveProps(nextProps){
    if(this.props !== nextProps)
    this.setState({user_id: nextProps.currentUser.id} , ()=>{
});
}

 componentDidMount() {

    axios.get(`http://localhost:3000/api/v1/trips`)
      .then(res => {
        const trips = res.data;
        this.setState({ trips })
    })
}

render(){

let nextTrip = (this.state.trips.length + 1)

let DisplayTrip = this.props.userTrips.map(trip => {
                if (this.props.currentUser.id === this.props.profile.id){
                  return (<li class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                    <Link to={`/user/${this.props.currentUser.id}/trips/${trip.id}`}>
                      <div className="trip-details">
                        <span className="title">{trip.name}</span>
                      </div>
                      <div className="overlay"></div>
                      <img src={trip.image_url} alt={trip.name} />
                    </Link>
                  </li>)
                }else{
                 return (<li class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                    <div>
                      <div className="trip-details">
                        <span className="title">{trip.name}</span>
                      </div>
                      <div className="overlay"></div>
                      <img src={trip.image_url} alt={trip.name} />
                      <form onSubmit={this.handleSubmit}>
                        <input name='trip' type="hidden" value={trip.id}/>
                        <button type="submit" className="btn btn-primary">Submit</button>
                      </form>
                    </div>
                  </li>)
                }})

    let thumbs = (
        <div className="container">
          <div className="row">
              <h2>Select your trip</h2>
              <Link to={`/user/${this.props.currentUser.id}/create/${nextTrip}`}><i className="fa fa-plus"></i>&nbsp;&nbsp;Create Trip</Link>
              <ul className="thumbs row">
                {DisplayTrip}
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