import React, {Component} from 'react';
import axios from 'axios';
import decode from 'jwt-decode';
import AuthService from './AuthService';
import withAuth from './withAuth'
import {Redirect} from 'react-router-dom';

class Login extends Component {

constructor(props){
    super(props)
    this.state = {
      password:"",
      passwordError:"",
      error:"",
      showError:false,
      redirect:null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.Auth = new AuthService();
  }

 handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state)
  }


handleSubmit = (e) =>{
e.preventDefault()

 this.Auth.login(this.state.email,this.state.password)
  .then(res =>{
    let user = decode(res.data.auth_token).user_id
    this.setState({redirect: `/user/${user}/profile`})
  })
  .catch(err =>{
    this.setState({showError:true,error:"email or password is incorrect"})
  })
}

  render(){
     if(this.state.redirect){
    return (<Redirect push to={this.state.redirect}/>)
   }
    let form = (
        <form onSubmit={this.handleSubmit}>
         <p>{this.state.showError ? this.state.error : null }</p>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" name="email" className="form-control" id="email" placeholder="Enter Email" onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password"className="form-control" id="password" placeholder="Password" onChange={this.handleChange}/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        </form>
    );
    return (
      <aside>
        {form}
        {Redirect}
      </aside>
    );
  }
}
export default Login;


