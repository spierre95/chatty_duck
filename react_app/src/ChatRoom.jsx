import React, {Component} from 'react';
import Channel from './chat/Channel.jsx';
import Chat from './chat/Chat.jsx';
import axios from 'axios';
import ModalItinerary from './modal/ModalItinerary.jsx';
import CreateEvent from './modal/ModalCreateEvent.jsx';

class ChatRoom extends Component{

constructor(props) {
  super(props);
  this.state = {
    trip: {},
    events: [],
  }
}

getInitialState() {
    return {
      now: new Date(),
    };
    this.interval = null;
  }




componentDidMount() {
// debugger
  // const self = this;
  //   self.interval = setInterval(function() {
  //     self.setState({
  //       now: new Date(),
  //     });
  //   }, 1000);

  const { match: { params } } = this.props;

  axios.get(`http://localhost:3000/api/v1/trips/${params.trip}`)
    .then( res => {
      this.setState({ trip : res.data,
                      events: res.data.events
       })
      console.log("mount", this.stat)
    })

  //   axios.post('http://localhost:3000/api/v1/events', {
  //   trip_id: params.trip,
  //   // user_id: params.username
  //   })
  //   .then(res => {
  //     this.setState({ events: res.data })
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });
  }


  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }

  render(){
    return(
        <body>
          <div id="chat-wrapper">
            <Channel currentUser={this.props.currentUser} />
            <Chat currentUser={this.props.currentUser} trip={this.state.trip} />
          </div>
          <ModalItinerary trip={this.state.trip} events={this.state.events} />
          <CreateEvent />
          <ModalItinerary />
        </body>
    )
  }
}
export default ChatRoom;