import React, { Component } from 'react';
import Message from "./Message.js";

class MessageList extends React.Component {
  render() {

    const messageComponent = this.props.messages.map((message, index) => {
        return <div>{ message }</div>;
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