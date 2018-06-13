import React, {Component} from 'react';
import { API_ROOT, HEADERS } from '../constants';
import axios from 'axios';

class ChatBar extends Component{
  constructor(props) {
  super(props);
  this.state = {
    content: '',
  };
}

   handleChange = e => {
    this.setState({ content: e.target.value });
    console.log(this.state);
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("Submitting")
    const that = this;
    if( parseInt(that.props.chatroom_id) === parseInt(that.props.trip.chatroom_id)){
      axios.post(`http://localhost:3000/api/v1/messages`, {content: e.target.content.value , chatroom_id: that.props.trip.chatroom_id , user_id: that.props.currentUser.id } )
        .then(res => {
        console.log(res);
        this.setState({content: ''})
      });
    }else{
      alert("Sorry, you are not apart of this Trip");
    }
}


  render(){
    const chatbar = (
        <div className="message">
          <form onSubmit={this.handleSubmit}>
            <input
              id="comment"
              type="text"
              name="content"
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