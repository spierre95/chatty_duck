import React, { Component } from 'react';
import axios from 'axios';


class SideBar extends React.Component {

  constructor() {
    super();
    this.state = {
      users: [],
  };

}

  componentDidMount() {

    axios.get('http://localhost:3001/api/v1/users.json')
    .then(res => {
      const users = res.data;
      this.setState({ users });
    });
  }

  render() {

    return (

    <main className='sidebar'>
          <div className='userlist'>
            <h1>Italy Trip</h1>
            <ul>
              { this.state.users.map(user => <li key={user.id}>{user.first_name}</li>)}
            </ul>
          </div>
        </main>
      )

  }
}

export default SideBar;