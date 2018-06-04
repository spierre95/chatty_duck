import React, {Component} from 'react';
import { API_ROOT, HEADERS } from '../constants';

class ChatBar extends Component{
  state = {
    content: '',
    chatroom_id: 1
  };

   handleChange = e => {
    this.setState({ content: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    fetch(`${API_ROOT}/messages`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(this.state)
    });
    this.setState({ content: '' });
  };


  render(){

    const chatbar = (
        <div class="message">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.content}
              onChange={this.handleChange}
              placeholder="Type a message and hit ENTER"
            />
          </form>
        </div>
    );

    return(
      <footer>
        {chatbar}
      </footer>
    );
  }
}

export default ChatBar;