import React, {Component} from 'react';
import Channel from './chat/Channel.jsx';
import Chat from './chat/Chat.jsx';

class ChatRoom extends Component{

  render(){
    return(
        <body>
          <div id="chat-wrapper">
            <Channel currentUser={this.props.currentUser}/>
            <Chat currentUser={this.props.currentUser}/>
          </div>
        </body>
    )
  }
}
export default ChatRoom;