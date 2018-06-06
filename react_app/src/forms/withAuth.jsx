import React, { Component } from 'react';
import AuthService from './AuthService';

export default function withAuth(AuthService){
  const Auth = new AuthService("http://locahost:3000");
    return class AuthWrapped extends Component {
      constructor(){
        super()
        this.state = {
          user:null
        }
      }

      componentWillMount(){
        if(!Auth.loggedIn()){
          this.props.history.replace('/')
        }else{
            try {
              const profile = Auth.getProfile()
              this.setState({
                user:profile
              })
            }catch(err){
              Auth.logout()
              this.props.history.replace('/')
          }
        }
      }
      render(){
        if(this.state.user){
          return (<AuthService history={this.props.history} user={this.props.user}/>)
        }
    }
  }
}

