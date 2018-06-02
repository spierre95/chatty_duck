import React, {Component} from 'react';

class Signup extends Component {
  render(){
    let form = '';
    form = (
        <form action="/">
          <div className="form-group">
            <label htmlFor="first name">First Name</label>
            <input type="text" className="form-control" id="first-name" placeholder="Enter First Name" />
          </div>
          <div className="form-group">
            <label htmlFor="last name">Last Name</label>
            <input type="text" className="form-control" id="last-name" placeholder="Enter Last Name" />
          </div>
          <div className="form-group">
            <label htmlFor="username">User Name</label>
            <input type="text" className="form-control" id="username" placeholder="Enter Username" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" className="form-control" id="email" placeholder="Enter Email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password" />
          </div>
          <div className="form-group">
            <label htmlFor="password confirmation">Password Confirmation</label>
            <input type="password" className="form-control" id="password-confirmation" placeholder="Confirm Password" />
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


