import React, {Component} from 'react';
import TripInfo from './TripInfo.jsx';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';


class Chat extends Component{

  render(){

    return(
      <div id="chat">
        <TripInfo currentUser={this.props.currentUser} events={this.props.events} trip={this.props.trip} />
        <MessageList trip={this.props.trip} props={this.props} />
        <ChatBar trip={this.props.trip} currentUser={this.props.currentUser} chatroom_id={this.props.chatroom_id}/>
      </div>
    )
  }
}

export default Chat;







