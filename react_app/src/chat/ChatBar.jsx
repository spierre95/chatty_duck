import React, {Component} from 'react';
import { API_ROOT, HEADERS } from '../constants';
import axios from 'axios';

class ChatBar extends Component{
  constructor() {
  super();
  this.state = {
    content: '',
    chatroom_id: 1
  };
}

   handleChange = e => {
    this.setState({ content: e.target.value });
    console.log(this.state);
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("Submitting")

    axios.post(`${API_ROOT}/api/v1/messages`, this.state )
      .then(res => {
      this.setState({ content: '' });
      console.log(res.data);
  });
}


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