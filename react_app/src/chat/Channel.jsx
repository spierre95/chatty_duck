import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Channel extends Component{


  render(){
    const users = this.props.users.map((user) => {
      return    <li>
                  <Link to={`/user/${user.id}/profile`} key={user.id}><i className="fa fa-circle-thin"></i>&nbsp;&nbsp;{ user.first_name }</Link>
                </li>
    });

    return(
      <div id="channel">
        <div className="group-name">
          <p>Groups:</p>
        </div>
        <div className="members">
          <ul>
            <li>Members:</li>
            { users }
          </ul>
        </div>
        <p className="copyright">&copy; Chatty Duck</p>
      </div>
    )
  }
}

export default Channel;