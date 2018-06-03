import React, {Component} from 'react';
import axios from 'axios';

class Signup extends Component {

  constructor(props) {
    super();
    this.state =  {
      first_name:"",
      last_name:"",
      username:"",
      email:"",
      password:"",
      password_confirmation:"",
      is_creator:false

    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }



  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }


  handleSubmit = event => {
    event.preventDefault();

    const user = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      username: this.state.username,
      email:this.state.email,
      password:this.state.password,
      password_confirmation:this.state.password_confirmation,
      is_creator:this.state.is_creator
    };



    axios.post(`http://localhost:3000/api/v1/users`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }


  render(){
    let form = (
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="first name">First Name</label>
            <input type="text" name="first_name" className="form-control" id="first-name" placeholder="Enter First Name" onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="last name">Last Name</label>
            <input type="text" name="last_name"className="form-control" id="last-name" placeholder="Enter Last Name" onChange={this.handleChange}  />
          </div>
          <div className="form-group">
            <label htmlFor="username">User Name</label>
            <input type="text" name="username" className="form-control" id="username" placeholder="Enter Username" onChange={this.handleChange}  />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" name="email" className="form-control" id="email" placeholder="Enter Email" onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" className="form-control" id="password" placeholder="Password" onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password confirmation">Password Confirmation</label>
            <input type="password" name="password_confirmation" className="form-control" id="password-confirmation" placeholder="Confirm Password" onChange={this.handleChange}/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
          <span>MEMO: image uploader will be somewhere in the page too.</span>
        </form>
    );
    return (
      <aside>
        {form}
      </aside>
    );
  }
}
export default Signup;


