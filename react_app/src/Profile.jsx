import React, {Component} from 'react';
import axios from 'axios';
import Header from './lp/Header.jsx';
import Footer from './lp/Footer.jsx';
import SelectTrip from './forms/SelectTrip.jsx'
import SearchProfiles from './SearchProfiles.jsx'
import {Link,Redirect,withRouter} from 'react-router-dom';
import AuthService from './forms/AuthService';
import withAuth from './forms/withAuth'
import photoUpload from './photoUpload';

class Profile extends Component{

  constructor(props){
    super(props)
    this.state = {
      image_preview:"",
      selectedFile:null,
      profile:{
          id:this.props.currentUser.id,
          first_name:this.props.currentUser.first_name,
          last_name:this.props.currentUser.last_name,
          email:this.props.currentUser.email,
          image_url:this.props.currentUser.iamge_url
        },
      trips:this.props.userTrips
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

componentWillMount(){

    this.props.history.listen(() => {
      const {match:{params}} = this.props
      console.log(this.props)
      axios.get(`http://localhost:3000/api/v1/users/${params.id}`)
      .then(res => {
      const currentUser = res.data
      const userTrips = currentUser.trips
      this.setState({profile:res.data})
      this.setState({trips:userTrips})
      })

    });
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
              <div className="card">
                <img src={this.state.profile.image_url} id="img-preview" />
                <label className="file-upload-container" htmlFor="file-upload">
                  Select an Image
                  <input type="file" className="btn btn-secondary" onChange = {this.fileSelectHandler}/>
                  <button className ="btn btn-primary" onClick={this.fileUploadHandler}>Upload</button>
                </label>
              </div>
              <div className="col-xs-10 col-sm-10 col-md-9 col-ls-9">
                <ul>
                  <li>Name: {this.state.profile.first_name} </li>
                  <li>Username: {this.state.profile.username}</li>
                  <li>Email: {this.state.profile.email}</li>
                </ul>
              </div>
          </div>
        </div>
      </div>
      );
    return (
      <div className="profile">
        <Header currentUser={this.props.currentUser} handleLogout={this.props.handleLogout} redirect={this.props.redirect}/>
        <SearchProfiles props={this.props}/>
        <section>
          {detail}
        </section>
        <SelectTrip userTrips={this.state.trips} currentUser={this.props.currentUser} />
        <Footer />
      </div>
    );
  }
}

export default withRouter(Profile);















































