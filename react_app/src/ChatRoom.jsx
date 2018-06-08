import React, {Component} from 'react';
import Channel from './chat/Channel.jsx';
import Chat from './chat/Chat.jsx';
import ModalItinerary from './modal/ModalItinerary.jsx';

class ChatRoom extends Component{
  render(){
    return(
        <body>
          <div id="chat-wrapper">
            <Channel />
            <Chat />
          </div>
          <ModalItinerary />
        </body>
    )
  }
}
export default ChatRoom;