import React, { Component } from 'react';
import Message from "./Message.js";
import axios from 'axios';

class MessageList extends React.Component {

  constructor() {
    super();
    this.state = {
      messages: [],
  };

}

  componentDidMount() {

    axios.get('http://localhost:3000/api/v1/messages.json')
    .then(res => {
      const messages = res.data;
      this.setState({ messages });
    });
  }

  render() {

    const messageComponent = this.state.messages.map((message, index) => {
        return <li key={message.id}>{ message.content }</li>
    });

    return (

      <main className='messages'>
        <ul>
          { messageComponent }
        </ul>
      </main>
    );

  }
}

export default MessageList;