import React, {Component} from 'react';

class MessageList extends Component{
  render(){
    const main = (
            <div>
              <ul class="message-wrapper">
                <li class="thumb">
                  <img src="/images/lhl-duck.png" />
                </li>
                <li class="message">
                  Message here. the left image thumb is just a placeholder (if we have time to implement the feature.) Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis minus minima similique adipisci sint.
                </li>
              </ul>
              <ul class="message-wrapper">
                <li class="thumb">
                  <img src="/images/lhl-duck.png" />
                </li>
                <li class="message">
                  Message here. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis minus minima similique adipisci sint.
                </li>
              </ul>
            </div>
    );
    return(
      <main>
        {main}
      </main>
    )
  }
}

export default MessageList;