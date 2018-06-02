import React, { Component } from 'react';
import ChatBar from './ChatBar.js';
import MessageList from './MessageList.js';
import SideBar from './SideBar.js';
import './App.css';

class App extends Component {

  constructor() {
    super();

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
          Stien
        </nav>


{
        // <MessageList messages={ this.state.messages } />
        // <ChatBar addMessage={ this.addMessage} user={this.state.currentUser} />
}
        <SideBar />
      </div>
    );
  }
}





export default App;

