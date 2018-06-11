import React, {Component} from 'react';
import { ActionCable } from 'react-actioncable-provider';
import { API_ROOT } from '../constants';
import { API_WS_ROOT } from '../constants';
import ChatBar from './ChatBar.jsx';
import axios from 'axios';

class MessageList extends Component{

  constructor() {
    super();
    this.state = {
      messages: [],
      chatroom_id: 3,
    };
    this.handleReceivedMessage = this.handleReceivedMessage.bind(this)
  }

  handleReceivedMessage = response => {
    const { message } = response;
    console.log('Triggered')
    this.setState ({
      messages: [...this.state.messages, message]
    })
  }

  componentDidMount() {

  const { match: { params } } = this.props.props.props;

  axios.get(`http://localhost:3000/api/v1/chatrooms/${params.trip}`)
    .then(res => {
      const messages = res.data.messages;
      this.setState({ messages: messages , chatroom_id: res.data.id });
    });
  }



  render(){
    console.log("render state", this.state)
   const messageComponent = this.state.messages.map((message, index) => {
      return <li key={message.id}>{ message.content }</li>
   })
    const main = (
            <div>
            <ActionCable channel={{ channel: 'MessagesChannel', room: this.state.chatroom_id }} onReceived={this.handleReceivedMessage} />
              <ul className="message-wrapper">
                <li className="thumb">
                  <img src="/images/lhl-duck.png" />
                  <i className="fa fa-commenting-o"></i>
                </li>
                <li className="message">
                  <span className="user">Monica<span>12:50pm</span></span>
                  { messageComponent }
                </li>
              </ul>
            </div>
    );
    return(
      <main>
        {main}
      </main>
    )
  }
}

export default MessageList;

//helpers

// const orderedMessages = messages => {
//   const sortedMessages = messages.sort(
//     (a, b) => new Date(a.created_at) - new Date(b.created_at)
//   );
//   return sortedMessages.map(message => {
//     return <li key={message.id}>{message.text}</li>;
//   });
// };