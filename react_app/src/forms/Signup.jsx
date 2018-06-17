import React, {Component} from 'react';
import {BrowserRouter, Redirect} from 'react-router-dom';
import axios from 'axios';
import decode from 'jwt-decode';
import AuthService from './AuthService';
import withAuth from './withAuth'
import photoUpload from '../photoUpload';


class Signup extends Component {

  constructor(props) {
    super();
    this.state =  {
      first_name:"",
      firstNameError:"",
      last_name:"",
      lastNameError:"",
      username:"",
      usernameError:"",
      email:"",
      emailError:"",
      password:"",
      passwordError:"",
      password_confirmation:"",
      passfordConfirmError:"",
      is_creator:false,
      data:[],
      showError:false,
      redirect:null,
      image_url:"/images/lhl-duck.png",
      selectedFile:null
    }
    this.fileUpload = new photoUpload()
    this.Auth = new AuthService();
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state.email)
  }

validateEmail = () => {
  let res = null
  this.state.data.forEach((user)=>{
    if (user.email == this.state.email){
      res = true
    }
  })
  return res
}

validateUserName = () => {
  let res = null
  this.state.data.forEach((user)=>{
    if (user.username === this.state.username){
      res = true

    }
  })
  return res
}


validate = () => {

    this.validateEmail()

    let isError = false
    const errors = {
      firstNameError:"",
      lastNameError:"",
      usernameError:"",
      emailError:"",
      passwordError:"",
      passfordConfirmError:"",
      showError:true
    }

    //firstname

    if (this.state.first_name.length === 0 ){
      isError = true
      errors.firstNameError = "First Name Required";
    }

    //username

    if (this.state.username.length === 0 ){
      isError = true
      errors.usernameError = "Username Required";
    }else if(this.state.username.length < 5 ){
      isError = true
      errors.usernameError = "Username must be greater than 5 characters";
    }else if(this.validateUserName()){
      isError = true
      errors.usernameError = "Username already exisits";
    }

    //last name

    if(this.state.last_name.length === 0){
      isError = true
      errors.lastNameError = "Last Name is required ";
    }

    //password

    if (this.state.password.length === 0){
      isError = true
      errors.passwordError = "Password Required";
    }else if(this.state.password.length < 6){
      isError = true
      errors.passwordError = "Password must be greater than 6 characters";
    }
    if (this.state.password !== this.state.password_confirmation){
      isError = true
      errors.passwordConfirmError = "Passwords don't match";
    }

    //email

    if (this.state.email.length === 0){
      isError = true
      errors.emailError = "Email Required";
    }else if(this.validateEmail()){
      isError = true
      errors.emailError = "Email Already exisits";
    }

    if(isError){
      this.setState({
        ...this.state,
        ...errors
      })
    }
    return isError;
  };


  handleSubmit = event => {
    event.preventDefault();

    const err = this.validate();

    if (!err){

    const user = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      username: this.state.username,
      email:this.state.email,
      password:this.state.password,
      password_confirmation:this.state.password_confirmation,
      is_creator:this.state.is_creator,
      image_url:this.state.image_url
    };

    axios.post(`http://localhost:3000/api/v1/users`, { user })
      .then(res => {
        this.Auth.login(this.state.email,this.state.password)
          .then(res =>{
            let user = decode(res.data.auth_token).user_id
              this.setState({redirect: `/user/${user}/profile`})
            }).catch(err =>{
              console.log(err);
              })
      }).catch(err =>{
              console.log(err);
              })
    }
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
        this.setState({image_url:image})
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

  componentDidMount() {
    axios.get(`http://localhost:3000/api/v1/users`)
      .then(res => {
        const data = res.data;
        this.setState({ data })
      })
  }
  render(){
   if(this.state.redirect){
    return (<Redirect push to={this.state.redirect}/>)
   }
   const imgStyle ={
        width:'100px',
        height:'auto',
      }
    let form = (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="card">
            <img src={this.state.image_url} id="img-preview" />
            <label className="file-upload-container" htmlFor="file-upload">
              Select an Image
              <input type="file" className="btn btn-secondary" onChange = {this.fileSelectHandler}/>
              <button className ="btn btn-primary" type="button" onClick={this.fileUploadHandler}>Update</button>
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="first name">First Name</label> <p className="error">{ this.state.showError ? this.state.firstNameError : null }</p>
            <input type="text" name="first_name" className="form-control" id="first-name" placeholder="Enter First Name" onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="last name">Last Name</label> <p className="error">{ this.state.showError ? this.state.lastNameError : null }</p>
            <input type="text" name="last_name"className="form-control" id="last-name" placeholder="Enter Last Name" onChange={this.handleChange}  />
          </div>
          <div className="form-group">
            <label htmlFor="username">User Name</label> <p className="error">{ this.state.showError ? this.state.usernameError : null }</p>
            <input type="text" name="username" className="form-control" id="username" placeholder="Enter Username" onChange={this.handleChange}  />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label> <p className="error">{ this.state.showError ? this.state.emailError : null }</p>
            <input type="email" name="email" className="form-control" id="email" placeholder="Enter Email" onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label> <p className="error">{ this.state.showError ? this.state.passwordError : null }</p>
            <input type="password" name="password" className="form-control" id="password" placeholder="Enter Password" onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password confirmation">Password Confirmation</label> <p className="error">{ this.state.showError ? this.state.passwordConfirmError : null }</p>
            <input type="password" name="password_confirmation" className="form-control" id="password-confirmation" placeholder="Confirm Password" onChange={this.handleChange}/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        </form>
      </div>
    );
    return (
      <aside>
        {form}
        {Redirect}
      </aside>
    );
  }
}
export default Signup;

//<button className ="btn btn-primary" onClick={this.fileUploadHandler}>Upload</button> in the card, for img



