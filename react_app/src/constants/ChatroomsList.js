import React from 'react';
import { ActionCable } from 'react-actioncable-provider';
import { API_ROOT } from '../constants';
import NewChatroomForm from './NewChatroomForm';
import MessagesArea from './MessagesArea';
import Cable from './Cable';

class ChatroomsList extends React.Component {
  state = {
    chatrooms: [],
    activeChatroom: null
  };

  componentDidMount = () => {
    fetch(`${API_ROOT}/chatrooms`)
      .then(res => res.json())
      .then(chatrooms => this.setState({ chatrooms }));
  };

  handleClick = id => {
    this.setState({ activeChatroom: id });
  };

  handleReceivedChatroom = response => {
    const { chatroom } = response;
    this.setState({
      chatrooms: [...this.state.chatrooms, chatroom]
    });
  };

  handleReceivedMessage = response => {
    const { message } = response;
    const chatrooms = [...this.state.chatrooms];
    const chatroom = chatrooms.find(
      chatroom => chatroom.id === message.chatroom_id
    );
    chatroom.messages = [...chatroom.messages, message];
    this.setState({ chatrooms });
  };

  render = () => {
    const { chatrooms, activeChatroom } = this.state;
    return (
      <div className="chatroomsList">
        <ActionCable
          channel={{ channel: 'ChatroomsChannel' }}
          onReceived={this.handleReceivedChatroom}
        />
        {this.state.chatrooms.length ? (
          <Cable
            chatrooms={chatrooms}
            handleReceivedMessage={this.handleReceivedMessage}
          />
        ) : null}
        <h2>Chatrooms</h2>
        <ul>{mapChatrooms(chatrooms, this.handleClick)}</ul>
        <NewConversationForm />
        {activeConversation ? (
          <MessagesArea
            conversation={findActiveChatroom(
              chatrooms,
              activeChatroom
            )}
          />
        ) : null}
      </div>
    );
  };
}

export default ChatroomsList;

// helpers

const findActiveChatroom = (chatrooms, activeChatroom) => {
  return chatrooms.find(
    chatroom => chatroom.id === activeChatroom
  );
};

const mapChatrooms = (chatrooms, handleClick) => {
  return chatrooms.map(chatroom => {
    return (
      <li key={chatroom.id} onClick={() => handleClick(chatroom.id)}>
        {chatroom.title}
      </li>
    );
  });
};