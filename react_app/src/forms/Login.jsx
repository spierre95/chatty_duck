import React, {Component} from 'react';
import axios from 'axios';
import AuthService from './AuthService';
import withAuth from './withAuth'

const Logout = new AuthService();

class Login extends Component {

constructor(props){
    super(props)
    this.state = {
      password:"",
      email:"",
      passwordError:"",
      emailError:""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleLogout.bind(this)
    this.Auth = new AuthService();
  }

 handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state.email)
  }

 handleLogout(){
    Logout.logout()
    console.log(this.props)
    console.log(this.props.history)
    this.props.history.replace('/');
 }

handleSubmit = (e) =>{
e.preventDefault()

 this.Auth.login(this.state.email,this.state.password)
  .then(res =>{
    console.log(res)
    this.props.history.replace('/user/id/create');
  })
  .catch(err =>{
  alert(err);
  })
}

  render(){
    const form = (
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" name="email" className="form-control" id="email" placeholder="Enter Email" onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password"className="form-control" id="password" placeholder="Password" onChange={this.handleChange}/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
    return (
      <aside>
      <button type="button" className="form-submit" onClick={this.handleLogout}>Logout</button>
        {form}
      </aside>
    );
  }
}
export default Login;


