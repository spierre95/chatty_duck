import React, {Component} from 'react';
import TripInfo from './TripInfo.jsx';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';


class Chat extends Component{
  render(){
    return(
      <div id="chat">
        <TripInfo />
        <MessageList />
        <ChatBar />
      </div>
    )
  }
}

export default Chat;







