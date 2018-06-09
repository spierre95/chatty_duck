import React, {Component} from 'react';
import Channel from './chat/Channel.jsx';
import Chat from './chat/Chat.jsx';
import ModalItinerary from './modal/ModalItinerary.jsx';
import CreateEvent from './forms/CreateEvent.jsx';

class ChatRoom extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
        <body>
          <div id="chat-wrapper">
            <Channel />
            <Chat />
          </div>
          <CreateEvent />
          <ModalItinerary />
        </body>
    )
  }
}
export default ChatRoom;