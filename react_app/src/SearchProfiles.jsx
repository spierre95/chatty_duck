import axios from 'axios';
import React, {Component} from 'react';
import {Link,browserHistory} from 'react-router-dom';


class SearchProfiles extends Component{

  constructor(props){
    super(props)
    this.state = {
      users:[],
      search:''
    }
  }

  updateSearch(event){
    this.setState({search:event.target.value.substr(0,20)})
  }

  componentDidMount() {

    axios.get(`http://localhost:3000/api/v1/users`)
      .then(res => {
        const users = res.data;
        this.setState({ users })
      })
  }

render(){
  let filteredUsers = this.state.users.filter(
      (user)=>{
        return user.username.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
      }
  )
  return (
      <div className="search">
        <h4>Find Profiles</h4>
        <input type="text" value={this.state.search} onChange={this.updateSearch.bind(this)} placeholder="Type your friend's name"/>
        <ul>
        {filteredUsers.map((user)=>{
            return (
            <li>
              <Link to={`/user/${user.id}/profile`} >{user.username}</Link>
            </li>)
        })}
        </ul>
      </div>
  )
}
}

export default SearchProfiles;
