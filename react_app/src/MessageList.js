import React, { Component } from 'react';
import Message from "./Message.js";

class MessageList extends React.Component {
  render() {

    // maps through the new messages to post on the list
    const messageComponent = this.props.messages.map((message, index) => {

      if ( message.type === "incomingNotification") {
        return (<div key={message.id}>{message.content}</div>);
      } else if ( message.type === "incomingMessage") {
          return (
            <Message username={ message.username } content={ message.content } color={ message.color } key={ message.id } />
          );
      } else {
        console.log('TYPE:' , message.type, message.content);
      }

    });

    return (

      <main className='messages'>
        {messageComponent}
      </main>
    );

  }
}

export default MessageList;