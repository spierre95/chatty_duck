import React, {Component} from 'react';
import Channel from './chat/Channel.jsx';
import Chat from './chat/Chat.jsx';
import axios from 'axios';
import ModalItinerary from './modal/ModalItinerary.jsx';
import CreateEvent from './modal/ModalCreateEvent.jsx';
import moment from 'moment'
import {withRouter} from 'react-router-dom';

class ChatRoom extends Component{

constructor(props) {
  super(props);
  this.state = {
    trip: {},
    events: [],
    schedule:{},
    users: []
  }
this.handleSubmit = this.handleSubmit.bind(this);
}

getInitialState() {
    return {
      now: new Date(),
    };
    this.interval = null;
  }

handleSubmit(e){

    e.preventDefault()
    console.log(this.state.trip.id)

    const event = {
      name:e.target.name.value,
      date:e.target.date.value,
      start_time:e.target.start_time.value,
      end_time:e.target.end_time.value,
      details:e.target.details.value,
      user_id:this.props.currentUser.id,
      trip_id:this.state.trip.id
    }


    axios.post("http://localhost:3000/api/v1/events/create",{event})
    .then((res)=>{
          console.log('success!')
          axios.post('http://localhost:3000/api/v1/events', {trip_id:this.state.trip.id})
          .then(res => {
            console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
            console.log(res.data, 'RESPONSE')
            this.setState({ events: res.data })
          })
          .catch(error => {
            console.log(error);
          });
    })
    .catch((err)=>{
      console.log(err)
    })

}


componentDidMount() {

  const { match: { params } } = this.props;

  axios.get(`http://localhost:3000/api/v1/trips/${params.trip}`)
    .then( res => {
      this.setState({ trip : res.data, users: res.data.users })
    })

    axios.post('http://localhost:3000/api/v1/events', {trip_id: params.trip,})
    .then(res => {
      this.setState({ events: res.data })
    })
    .catch(error => {
      console.log(error);
    });

  }

  render(){

    return(
        <body>
          <div id="chat-wrapper">
            <Channel currentUser={this.props.currentUser} users={this.state.users} />
            <Chat currentUser={this.props.currentUser} trip={this.state.trip} props={this.props} chatroom_id={this.props.match.params.trip} />
          </div>
          <ModalItinerary events={this.state.events} trip={this.state.trip}/>
          <CreateEvent currentUser={this.props.currentUser} trip={this.state.trip} handleSubmit={this.handleSubmit}/>
        </body>
    )
  }
}
export default withRouter(ChatRoom);