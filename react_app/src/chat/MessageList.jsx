import React, {Component} from 'react';
import { ActionCable } from 'react-actioncable-provider';
import { API_ROOT } from '../constants';
import { API_WS_ROOT } from '../constants';
import ChatBar from './ChatBar.jsx';
import axios from 'axios';
import moment from 'moment'

class MessageList extends Component{

  constructor() {
    super();
    this.state = {
      messages: [],
      chatroom_id: null,
    };
    this.handleReceivedMessage = this.handleReceivedMessage.bind(this)
  }

  handleReceivedMessage = response => {
    console.log(response)
    console.log('Triggered')
    this.setState ({
      messages: [...this.state.messages, response]
    })
  }

  componentWillMount() {
    const { match: { params } } = this.props.props.props;
    const that = this;
    console.log("params", this.props)
    axios.post(`http://localhost:3000/api/v1/getusermessages`, { id: params.trip })
    .then(res => {
      console.log('res', res)
      const messages = res.data.messages;
      that.setState({ messages: messages , chatroom_id: res.data.id });
    });
  }



  render(){
   const messageComponent = this.state.messages.map((message, index) => {
      return  <ul className="message-wrapper">
                <li className="thumb">
                  <img src={message.image_url} />
                  <i className="fa fa-commenting-o"></i>
                </li>
                <li className="message">
                  <span className="user">{message.user}<span>{moment(message.created_at).fromNow()}</span></span>
                  {message.content}
                </li>
              </ul>
   })
    let main = (
            <div>
            <ActionCable channel={{ channel: 'MessagesChannel', room: this.state.chatroom_id }} onReceived={this.handleReceivedMessage} />
              {messageComponent}
            </div>
    );

    if(this.state.chatroom_id === null){

      main = <div>asdasdasdds</div>
    }

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