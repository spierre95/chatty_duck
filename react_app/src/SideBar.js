import React, { Component } from 'react';

class SideBar extends React.Component {

  render() {


    return (

      <main className='sidebar'>
          <div className='userlist'>
            <h1>Italy Trip</h1>
            <ul>
             <li>{ this.props.users[0] }</li>
             <li>{ this.props.users[1] }</li>
             <li>{ this.props.users[2] }</li>
             <li>{ this.props.users[3] }</li>
            </ul>
          </div>
        </main>
    )
  };
}

export default SideBar;