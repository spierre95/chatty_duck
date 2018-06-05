import React, {Component} from 'react';

class ChatBar extends Component{
  render(){
    const chatbar = (
        <div className="message">
          <input id="comment" placeholder="Type a message and hit ENTER" />
        </div>
    );
    return(
      <footer>
        {chatbar}
      </footer>
    )
  }
}

export default ChatBar;