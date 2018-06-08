import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import AuthService from '../forms/AuthService';
import withAuth from '../forms/withAuth';

class UpcomingEvent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };

    this.Auth = new AuthService();
  }

componentWillMount(){
  axios.post('http://localhost:3000/api/v1/users')
            .then(res => {
              this.Auth.getProfile(this.props.user)
              // res.data = Auth.getProfile();
              console.log(res.data)
              // this.setState({
              //   user:profile
              // })
            })
        }

render() {
 // const trip = this.props.params.match;
 // console.log({ trip });
 return(
  <div className="event">
    text
  </div>
    );
  }
}


export default UpcomingEvent;