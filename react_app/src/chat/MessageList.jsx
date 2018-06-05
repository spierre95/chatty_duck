import React, {Component} from 'react';

class MessageList extends Component{
  render(){
    return(
      <main>
        <ul className="message-wrapper">
          <li className="thumb">
            <img src="/images/lhl-duck.png" />
            <i className="fa fa-commenting-o"></i>
          </li>
          <li className="message">
            <span className="user">Bob <span>12:30pm</span></span>
            Message here. the left image thumb is just a placeholder (if we have time to implement the feature.) Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis minus minima similique adipisci sint.
          </li>
        </ul>

        <ul className="message-wrapper">
          <li className="thumb">
            <img src="/images/lhl-duck.png" />
            <i className="fa fa-commenting-o"></i>
          </li>
          <li className="message">
            <span className="user">Monica<span>12:50pm</span></span>
            Message here. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis minus minima similique adipisci sint.
          </li>
        </ul>
      </main>
    )
  }
}

export default MessageList;