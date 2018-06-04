import React, {Component} from 'react';
import Header from '../lp/Header.jsx';
import Footer from '../lp/Footer.jsx';
import EmailInput from 'AddAdress.jsx';


class CreateGroup extends Component{
  constructor(props) {
    super(props);
    this.state = {
      email: 'sample@sample.com'
    };
  }

  hogeFunc() {
    this.setState({ hoge: '変えたぞ' });
  }
  render() {
    return (
      <div>
        <child dataHoge={() => { this.hogeFunc(); }} />
      </div>
    );
  }








  inputEmail = () => {
    // create max 5 input email field
    let output = [];
    for (let i = 1; i <= 5; i++) {
      output.push(<input type="email" className="form-control fontawesome" id="email-{i}" placeholder="&#xf0e0; Enter Email" />);
    }
    return output;
  }

  render(){
    return (
      <div className="form-page">
        <Header />
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
        <Footer />
      </div>
    );
  }
}

export default CreateTrip;