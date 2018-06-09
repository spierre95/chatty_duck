import React, {Component} from 'react';
import TripInfo from './TripInfo.jsx';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';


class Chat extends Component{

  render(){
    console.log("here",this.props)
    return(
      <div id="chat">
        <TripInfo currentUser={this.props.currentUser} trip={this.props.trip} />
        <MessageList />
        <ChatBar />
      </div>
    )
  }
}

export default Chat;







