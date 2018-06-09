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


componentDidMount() {

  const { match: { params } } = this.props;

  axios.get(`http://localhost:3000/api/v1/trips/${params.trip}`)
    .then( res => {
      const trip = res.data;
      this.setState({ trip })
    })

  }

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