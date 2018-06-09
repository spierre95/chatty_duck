import React, {Component} from 'react';
import Channel from './chat/Channel.jsx';
import Chat from './chat/Chat.jsx';
import axios from 'axios';

class ChatRoom extends Component{

constructor(props) {
  super(props);
  this.state = {
    trip: [],
  }
}

getInitialState() {
    return {
      now: new Date(),
    };
    this.interval = null;
  }




componentDidMount() {

  // const self = this;
  //   self.interval = setInterval(function() {
  //     self.setState({
  //       now: new Date(),
  //     });
  //   }, 1000);

  const { match: { params } } = this.props;

  console.log("props", this.props.match.params.username)

  axios.get(`http://localhost:3000/api/v1/trips/${params.trip}`)
    .then( res => {
      const trip = res.data;
      this.setState({ trip })
    })

  axios.post('http://localhost:3000/api/v1/events', {
    // trip_id: params.trip,
    user_id: params.username
  })
    .then(res => {
      console.log("res", res);
    })
    .catch(error => {
      console.log(error);
    });

  }

  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }

  render(){

    return(
        <body>
          <div id="chat-wrapper">
            <Channel currentUser={this.props.currentUser}/>
            <Chat currentUser={this.props.currentUser} trip={this.state.trip}/>
          </div>
        </body>
    )
  }
}
export default ChatRoom;