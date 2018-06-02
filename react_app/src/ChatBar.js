import React, {Component} from 'react';

class ChatBar extends React.Component {


// captures the text inputed in the message bar
captureText = event => {
  if( event.key === "Enter" ) {
  this.props.addMessage(event.target.value);
  event.target.value = "";
  }
}

// captures the name inputed in the name bar
captureName = event => {
  if( event.key === "Enter" ) {
  this.props.changeUser(event.target.value);
  }
}

  render() {
    return (
      <footer className="chatbar">
        <input
            className="chatbar-message"
            placeholder="Type a message and hit ENTER"
            onKeyPress={this.captureText}
        />
      </footer>
    );
  }
}


export default ChatBar;