import React, {Component} from 'react';

class Channel extends Component{
  render(){
    const channel = (
              <div>
                <div className  ="group-name">
                  <p>Groups:</p>
                </div>
                <div className  ="members">
                  <ul>
                    <li>Members:</li>
                    <li>Bob</li>
                    <li>Monica</li>
                    <li>John</li>
                  </ul>
                </div>
              </div>
    );
    return(
      <div id="channel">
        {channel}
      </div>
    )
  }
}

export default Channel;