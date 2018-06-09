import React, {Component} from 'react';
import Channel from './chat/Channel.jsx';
import Chat from './chat/Chat.jsx';

class ChatRoom extends Component{
  constructor(props){
    super(props)
    debugger
  }
  render(){
    return(
        <body>
          <div id="chat-wrapper">
            <Channel />
            <Chat />
          </div>
        </body>
    )
  }
}
export default ChatRoom;