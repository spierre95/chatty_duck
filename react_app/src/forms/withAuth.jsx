import React, { Component } from 'react';
import AuthService from './AuthService';
import {Redirect} from 'react-router-dom';

export default function withAuth(AuthService){
  const Auth = new AuthService("http://locahost:3000");
    return class AuthWrapped extends Component {
      constructor(){
        super()
        this.state = {
          user:null,
          redirect:null
        }
      }

      componentWillMount(){
        if(!Auth.loggedIn()){
          this.setState({redirect: "/"})
        }else{
            try {
              const profile = Auth.getProfile()
              this.setState({
                user:profile
              })
            }catch(err){
          Auth.logout()
          this.setState({redirect: "/"})
          }
        }
      }
      render(){
        if(this.state.user){
          return (<AuthService history={this.props.redirect} user={this.props.user}/>)
        }
        if(this.state.redirect){
          return (<Redirect push to={this.state.redirect}/>)
        }
    }
  }
}

