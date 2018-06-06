import React, {Component} from 'react';

class Login extends Component {
  render(){
    let form = '';
    form = (
        <form action="/">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" className="form-control" id="email" placeholder="Enter Email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        </form>
    );
    return (
      <aside>
        {form}
      </aside>
    );
  }
}
export default Login;


