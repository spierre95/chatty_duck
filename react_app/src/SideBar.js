import React, { Component } from 'react';

class SideBar extends React.Component {

  render() {

    const usersComponent = this.props.users.map((user, index) => {
      return <div>{ user }</div>
    });

    return (

      <main className='sidebar'>
          <div className='userlist'>
            <h1>Italy Trip</h1>
            <ul>
              { usersComponent }
            </ul>
          </div>
      </main>
    )
  };
}

export default SideBar;