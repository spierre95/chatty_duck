import React, {Component} from 'react';

class Message extends React.Component {
  render() {

    // creates a new message
    const regEx = new RegExp('https?:\/\/.*\.(?:png|jpg|gif)','g','i'); //captures if text is url
    const image = this.props.content.match(regEx);
    let theContent = this.props.content;

    if (image) {
      theContent = theContent.replace(image, '');

    return (
        <div className="message">
          <span className="message-username" style={{ color : this.props.color}} >{ this.props.username }</span>
          <span className="message-content" >{ theContent }<br /><img src={ image[0] } width="300" alt="image" />
          </span>
        </div>
      );

    } else {
      return (

        <div className="message">
            <span className="message-username" style={{ color : this.props.color}} >{ this.props.username }</span>
            <span className="message-content" >{ this.props.content }</span>
        </div>
      );

    }
  }
}


export default Message;