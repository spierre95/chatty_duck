import React, {Component} from 'react';
import { ActionCable } from 'react-actioncable-provider';
import { API_ROOT } from '../constants';
import ChatBar from './ChatBar.jsx';

class MessageList extends Component{

  constructor() {
    super()
    state = {
      messages: []
    }
  }

  handleRecievedMessage = response => {
    const { message } = response;
    this.setState ({
      messages: [...this.state.messages, message]
    })
  }

  componentDidMount = () => {
    fetch(`${API_ROOT}/messages`)
      .then(res => res.json())
      .then(messages => this.setState({ messages }));
  };


  render(){
    const main = (
            <div>
              <ul className="message-wrapper">
                <li className="thumb">
                  <img src="/images/lhl-duck.png" />
                </li>
                <li className="message">
                  { orderedMessages(messages) }
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

const orderedMessages = messages => {
  const sortedMessages = messages.sort(
    (a, b) => new Date(a.created_at) - new Date(b.created_at)
  );
  return sortedMessages.map(message => {
    return <li key={message.id}>{message.text}</li>;
  });
};