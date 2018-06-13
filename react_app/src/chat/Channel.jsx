import React, {Component} from 'react';

class Channel extends Component{
  render(){
    // console.log("props", this.props)
    // const users = this.props.trip.users
    // for (let user in users) {
    // console.log("user", user)
    //   return <li key={user.id}>{ user.first_name }</li>
    // }
    return(
      <div id="channel">
        <div className="group-name">
          <p>Groups:</p>
        </div>
        <div className="members">
          <ul>
            <li>Members:</li>
            <li><i className="fa fa-circle-thin"></i>&nbsp;&nbsp; </li>
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