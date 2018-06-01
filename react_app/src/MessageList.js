import React, { Component } from 'react';
import Message from "./Message.js";

class MessageList extends React.Component {
  render() {

    const messageComponent = this.props.messages.map((message, index) => {
        return <li>message</li>;
    });
    return (

      <main className='messages'>
        <ol>
          { messageComponent }
        </ol>
      </main>
    );

  }
}

export default MessageList;