import React, {Component} from 'react';

class CreateTrip extends Component{
    inputEmail = () => {
    // create max 5 input email field
    let output = [];
    for (let i = 1; i < 5; i++) {
      output.push(<input type="email" className="form-control fontawesome" id="email-' + i + '" placeholder="&#xf0e0; Enter Email" />);
    }
    return output;
  }

  render(){
    let form = '';

    return (
      <aside>
        <form action='/'>
          <div className="form-group">
            <p className="title">Create Group</p>
            <label htmlFor="email address section">Email Address</label>
            {this.inputEmail()}
            <a href="">Add More</a>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </aside>
    );
  }
}

export default CreateTrip;

          // <input type="email" className="form-control fontawesome" id="email-1" placeholder="&#xf0e0; Enter Email">
          // <input type="email" className="form-control fontawesome" id="email-2" placeholder="&#xf0e0; Enter Email">
          // <input type="email" className="form-control fontawesome" id="email-3" placeholder="&#xf0e0; Enter Email">
          // <input type="email" className="form-control fontawesome" id="email-4" placeholder="&#xf0e0; Enter Email">
          // <input type="email" className="form-control fontawesome" id="email-5" placeholder="&#xf0e0; Enter Email">