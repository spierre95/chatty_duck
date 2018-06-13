import React, {Component} from 'react';
import Header from '../lp/Header.jsx';
import Footer from '../lp/Footer.jsx';
import AuthService from './AuthService';
import withAuth from './withAuth'
import photoUpload from '../photoUpload';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

class CreateTrip extends Component {

constructor(){
  super()
  this.state = {
    image_url:"/images/group-of-ducks.jpg",
    name:"",
    departure:"",
    arrival:"",
    selectedFile:"",
    redirect:null
  }
  this.fileUpload = new photoUpload()
  this.fileSelectHandler = this.fileSelectHandler.bind(this)
  this.fileUploadHandler = this.fileUploadHandler.bind(this)
  this.handleSubmit = this.handleSubmit.bind(this)
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
        this.setState({image_url:image_url})
    })
    .catch((err)=>{
       console.log(err)
    })
  }

  handleSubmit(event){
    event.preventDefault()

    const {match:{params}} = this.props

    const trip = {
      name:event.target.name.value,
      departure:event.target.departure.value,
      arrival:event.target.departure.value,
      image_url:this.state.image_url,
      chatroom_id:params.trip
    }

    axios.post("http://localhost:3000/api/v1/trips",{trip})
    .then((res)=>{
      console.log(res)
    })
    .catch((err)=>{
      console.log(err)
    })
    .then((res)=>{
      axios.post("http://localhost:3000/api/v1/add_to_trip",{trip_id:params.trip,user_id:params.username})
        .then((res)=>{
          console.log(res)
          this.setState({redirect:`/user/${params.username}/trips/${params.trip}`})
        })
        .catch((err)=>{
          console.log(err)
        })
    })
  }

  render(){
  const imgStyle ={
    width:'250px',
    height:'auto',
  }
  if(this.state.redirect){
    return (<Redirect push to={this.state.redirect}/>)
  }
   let form = (
        <form onSubmit={this.handleSubmit}>
          <h3>Create a new trip.</h3>
          <div className="card">
                <img className="create-trip" src={this.state.image_url} id="img-preview" />
                <label className="file-upload-container" htmlFor="file-upload">
                  Select an Image
                  <input type="file" className="btn btn-secondary" onChange = {this.fileSelectHandler}/>

                </label>
          </div>
          <div className="form-group">
            <label htmlFor="trip name">TripName</label>
            <input type="text" name="name" className="form-control" id="trip-name" placeholder="Enter trip name" />
          </div>
          <div className="form-group">
            <label htmlFor="start date">Start Date</label>
            <input type="date" name="departure"className="form-control" id="start-name" placeholder="yyyy-mm-dd" />
          </div>
          <div className="form-group">
            <label htmlFor="end date">End Date</label>
            <input type="date" name="arrival"className="form-control" id="end-date" placeholder="yyyy-mm-dd" />
          </div>
          <button type="submit" className="btn btn-primary pull-right">Create</button>
        </form>
    );
    return (
      <div className="form-page">
        <Header currentUser ={this.props.currentUser} handleLogout={this.props.handleLogout} />
          <section>
            {form}
          </section>
        <Footer />
      </div>
    );
  }
}
export default CreateTrip;

//<button className ="btn btn-primary" onClick={this.fileUploadHandler}>Upload</button>