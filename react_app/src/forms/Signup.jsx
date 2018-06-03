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
      password_digest:null,
      is_creator:false,

    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    this.setState({ first_name: event.target.value });
    this.setState({ last_name: event.target.value });
    this.setState({ username: event.target.value });
    this.setState({ email: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      username: this.state.username,
      email:this.state.email
    };

    axios.post(`http://localhost:3000/api/v1/users`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }


  render(){
    let form = (
        <form action="/" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="first name">First Name</label>
            <input type="text" name="first_name" className="form-control" id="first-name" placeholder="Enter First Name" />
          </div>
          <div className="form-group">
            <label htmlFor="last name">Last Name</label>
            <input type="text" name="last_name"className="form-control" id="last-name" placeholder="Enter Last Name" />
          </div>
          <div className="form-group">
            <label htmlFor="username">User Name</label>
            <input type="text" name="username" className="form-control" id="username" placeholder="Enter Username" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" name="email" className="form-control" id="email" placeholder="Enter Email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" className="form-control" id="password" placeholder="Password" />
          </div>
          <div className="form-group">
            <label htmlFor="password confirmation">Password Confirmation</label>
            <input type="password" name="confirm_password" className="form-control" id="password-confirmation" placeholder="Confirm Password" />
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


