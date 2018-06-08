import React, {Component} from 'react';
import axios from 'axios';
import Header from './lp/Header.jsx';
import Footer from './lp/Footer.jsx';
import SelectTrip from './forms/SelectTrip.jsx'
import {Link,Redirect} from 'react-router-dom';
import AuthService from './forms/AuthService';
import withAuth from './forms/withAuth'
import photoUpload from './photoUpload';

class Profile extends Component{

  constructor(){
    super()
    this.state = {
      image_preview:"",
      selectedFile:null
    }
    this.fileUpload = new photoUpload()
    this.fileSelectHandler = this.fileSelectHandler.bind(this)
    this.fileUploadHandler = this.fileUploadHandler.bind(this)
  }

  fileSelectHandler = (event) => {
     this.setState({selectedFile:event.target.files[0]})
  }

  fileUploadHandler = () => {
  let file = this.state.selectedFile
  console.log(this.state.selectedFile)
  console.log(file)
  this.fileUpload.upload(file)
    .then((res)=>{
        let image = res.data.secure_url
        this.setState({image_preview:image})
          axios.post("http://localhost:3000/api/v1/user",image)
          .then((res)=>{
            console.log(res)
          })
          .catch((err)=>{
             console.log(err)
          })
    })
    .catch((err)=>{
       console.log(err)
    })
  }

  render(){
      if(this.props.redirect){
    return (<Redirect push to={this.props.redirect}/>)
   }
    let detail = (
        <div className="container">
          <div className="row">
              <h1>Your Profile</h1>
              <div className="col-xs-2 col-sm-2 col-md-3 col-ls-3">
                <img src={this.state.image_preview}/>
              </div>
              <div>
                <input type="file" onChange = {this.fileSelectHandler}/>
                <button onClick={this.fileUploadHandler}>Upload</button>
              </div>
              <div className="col-xs-10 col-sm-10 col-md-9 col-ls-9">
                <ul>
                  <li>Name: {this.props.currentUser.first_name} </li>
                  <li>Username: {this.props.currentUser.username}</li>
                  <li>Email: {this.props.currentUser.email}</li>
                </ul>
              </div>
          </div>
        </div>
      );
    return (
      <div className="profile">
        <Header currentUser={this.props.currentUser} handleLogout={this.props.handleLogout} redirect={this.props.redirect}/>
        <section>
          {detail}
        </section>
        <SelectTrip />
        <Footer />
      </div>
    );
  }
}

export default Profile;















































