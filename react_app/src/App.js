import React, { Component } from 'react';
import ChatBar from './ChatBar.js';
import MessageList from './MessageList.js'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: "John"},
      messages: ["Wow look at me", "No way jose"]
    };
  }

  addMessage = message => {
  const newMessage = {
    type: "postMessage",
    username: this.state.name,
    content: message
  };
}


  render() {
    return (
      <div>

        <nav className="navbar">
        </nav>

        <MessageList messages={ this.state.messages } />
        <ChatBar addMessage={ this.addMessage} />

      </div>
    );
  }
}





export default App;

