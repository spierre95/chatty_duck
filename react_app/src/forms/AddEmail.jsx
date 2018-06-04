import React, {Component} from 'react';

class EmailInput extends Component {
  // when press enter <input> for msg
  _handleKeyPress = (e) => {
    if (e.key === 'Enter' && e.target.value) {
      const userName = (!document.getElementById('user').value) ? 'Anonymous' : document.getElementById('user').value;

      const newMsg = {
        type: 'postMessage',
        username: userName,
        content: e.target.value
      };

      this.props.addMsg(newMsg);
      document.getElementById('comment').value = '';
    }
  }
  // when press enter <input> for username
  _handleKeyPressUsername = (e) => {
    if (e.key === 'Enter' && e.target.value !== this.props.currentUser.name) {
        if (e.target.value) {
        const userName = (!e.target.value) ? 'Anonymous' : e.target.value;
        const colour = (!this.props.colour) ? '' : this.props.colour;console.log('Color:', this.props);
        const newMsg = {
          type: 'postNotification',
          username: e.target.value,
          content: ''
        };
        this.props.addUserName(newMsg);
      }
    }
  }
  render(){
    return (
      <footer className="chatbar">
        <input id="user" className="chatbar-username" placeholder="Your Name (Optional)" onKeyPress={this._handleKeyPressUsername} defaultValue={this.props.currentUser.name} />
        <input id="comment" className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyPress={this._handleKeyPress} />
      </footer>
    );
  }
}
export default ChatBar;