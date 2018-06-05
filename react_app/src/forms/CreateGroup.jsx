import React, {Component} from 'react';
import Header from '../lp/Header.jsx';
import Footer from '../lp/Footer.jsx';
// import EmailInput from 'AddAdress.jsx';
import axios from 'axios';
import { API_ROOT } from '../constants';


class CreateGroup extends Component{
  constructor(props) {
    super(props);
    this.state = {
      email: ["james@gmail.com", "lost@yahoo.com"],
      notEmail: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }


  handleChange = e => {
    this.setState({ notEmail : e.target.value })
    console.log(this.state.notEmail)
  }

  handleAdd = e => {
    e.preventDefault();
    const notEmail = this.state.notEmail;
    this.setState({
      email: [...this.state.email, notEmail],
      notEmail: ''
    })
  }


  // handleSubmit = e => {
  //   const trip = user.trip_id

  //   axios.post(`${API_ROOT}/api/v1/users`, { trip } )
  // }


  render() {

    const emailList = this.state.email.map((email, index) => {
      console.log(this.state)
             return <p>{ email }</p>
          })

    return (
      <div>
        <form className="form-inline" onSubmit={this.handleAdd}>
          <div className="form-group">
            <label className="email-input" htmlFor="newEmail">Add Travellers Email></label>
            <input type="text" value={this.state.notEmail} placeholder="example@example.com" id="New Email" onChange={this.handleChange} />
          </div>
            <button type="submit" className="btn btn-primary">Add</button>
        </form>
          <div className="list">
            { emailList }
          </div>
          <button type="submit" className="btn btn-primary">Send</button>

      </div>
    );
  }








//   inputEmail = () => {
//     // create max 5 input email field
//     let output = [];
//     for (let i = 1; i <= 5; i++) {
//       output.push(<input type="email" className="form-control fontawesome" id="email-{i}" placeholder="&#xf0e0; Enter Email" />);
//     }
//     return output;
//   }
// // //
// //   render(){
// //     return (
//       <div className="form-page">
//         <Header />
//         <aside>
//           <form action='/'>
//             <div className="form-group">
//               <p className="title">Create Group</p>
//               <label htmlFor="email address section">Email Address</label>
//               {this.inputEmail()}
//               <a href="">Add More</a>
//             </div>
//             <button type="submit" className="btn btn-primary">Submit</button>
//           </form>
//         </aside>
//         <Footer />
//       </div>
//     );
//   }
}

export default CreateGroup;