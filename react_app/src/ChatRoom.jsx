import React, {Component} from 'react';
import Channel from './chat/Channel.jsx';
import Chat from './chat/Chat.jsx';
import axios from 'axios';

class ChatRoom extends Component{

constructor(props) {
  super(props);
  this.state = {
    events: [],
  }
}

 getInitialState() {
    return {
      now: new Date(),
    };
    this.interval = null;
  },

componentDidMount() {

  const { match: { params } } = this.props;

  axios.get(`http://localhost:3000/api/v1/trips/${params.trip}`)
    .then( res => {
      const events = res.data.events;
      this.setState({ events })
    })

  }

  render(){
    console.log(getInitialState())
    return(
        <body>
          <div id="chat-wrapper">
            <Channel currentUser={this.props.currentUser}/>
            <Chat currentUser={this.props.currentUser} events={this.state.events}/>
          </div>
        </body>
    )
  }
}
export default ChatRoom;