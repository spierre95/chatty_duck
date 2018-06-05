import React, {Component} from 'react';

class Channel extends Component{
  render(){
    return(
      <div id="channel">
        <div className="group-name">
          <p>Groups:</p>
        </div>
        <div className="members">
          <ul>
            <li>Members:</li>
            <li><i className="fa fa-circle-thin"></i>&nbsp;&nbsp; Bob <span>(Coordinator)</span></li>
            <li><i className="fa fa-circle-thin"></i>&nbsp;&nbsp; Monica</li>
            <li><i className="fa fa-circle"></i>&nbsp;&nbsp; John</li>
          </ul>
        </div>
        <p className="copyright">&copy; Chatty Duck</p>
      </div>
    )
  }
}

export default Channel;