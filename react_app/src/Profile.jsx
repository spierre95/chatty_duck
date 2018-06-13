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
        let image_url = res.data.secure_url
        this.setState({profile:{image_url:image_url}})
          axios.post("http://localhost:3000/api/v1/update_image",{image_url:image_url,id:this.props.currentUser.id})
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

  const imgStyle ={
    width:'250px',
    height:'auto',
  }

  let detail = '';console.log("PROPS:::", this.props.currentUser.id);console.log("STATE:::", this.state.profile.id);
    if(this.props.currentUser.id === this.state.profile.id) {
      detail = (
        <div className="container">
          <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-8 col-ls-8">
              <h2>Your Profile</h2>
                <div className="card">
                  <img src={this.state.profile.image_url} id="img-preview" />
                  <ul>
                    <li><span className="title">Name:</span> {this.state.profile.first_name} </li>
                    <li><span className="title">Username:</span> {this.state.profile.username}</li>
                    <li><span className="title">Email:</span> {this.state.profile.email}</li>
                  </ul>
                  <label className="file-upload-container" htmlFor="file-upload">
                    Change your image
                    <input type="file" className="btn btn-secondary" onChange = {this.fileSelectHandler}/>
                    <button className ="btn btn-primary" type="button" onClick={this.fileUploadHandler}>Update</button>
                  </label>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-ls-4">
                <SearchProfiles props={this.props}/>
              </div>
          </div>
        </div>
      );
    } else if(this.state.profile.id){
      detail = (
          <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-8 col-ls-8">
                  <h2>{this.state.profile.first_name}'s Profile</h2>
                  <div className="card">
                    <img src={this.state.profile.image_url} id="img-preview" />
                    <ul>
                      <li><span className="title">Name:</span> {this.state.profile.first_name} </li>
                      <li><span className="title">Username:</span> {this.state.profile.username}</li>
                      <li><span className="title">Email:</span> {this.state.profile.email}</li>
                    </ul>
                  </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-4 col-ls-4">
                  <SearchProfiles props={this.props}/>
                </div>
            </div>
          </div>
        );
    } else {
      detail = (
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-8 col-ls-8">
                  <h2>Your Profile</h2>
                  <p>To change your profile image, please click your top right image.</p>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-4 col-ls-4">
                  <SearchProfiles props={this.props}/>
                </div>
            </div>
          </div>
      );
    }
    return (
      <div className="profile">
        <Header currentUser={this.props.currentUser} handleLogout={this.props.handleLogout} redirect={this.props.redirect}/>
        <main>
          <section>
            {detail}
          </section>
          <SelectTrip props={this.props} userTrips={this.state.trips} currentUser={this.props.currentUser} profile={this.state.profile} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Profile);

