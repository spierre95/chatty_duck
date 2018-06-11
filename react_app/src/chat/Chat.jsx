import React, {Component} from 'react';
import TripInfo from './TripInfo.jsx';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';


class Chat extends Component{

  render(){
    return(
      <div id="chat">
        <TripInfo currentUser={this.props.currentUser} trip={this.props.trip} />
        <MessageList trip={this.props.trip} />
        <ChatBar trip={this.props.trip} />
      </div>
    )
  }
}

export default Chat;







