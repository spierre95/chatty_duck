import React, { Component } from 'react';
// import './App.css'; <-- commented out for styling
import ChatroomsList from './components/ChatroomsList';


class App extends Component {
  render() {
    return (
      <div calssName="App">
        <ChatroomsList />
      </div>
    );
  }
}

export default App;
