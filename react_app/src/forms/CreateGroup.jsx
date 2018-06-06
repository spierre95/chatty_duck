import React, {Component} from 'react';
import Header from '../lp/Header.jsx';
import Footer from '../lp/Footer.jsx';
import axios from 'axios';
import { API_ROOT } from '../constants';


class CreateGroup extends Component{
  constructor(props) {
    super(props);
    this.state = {
      email: [], // going to just do all validations while checking email if we add group?
      notEmail: '',
      url: null,
      data: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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


  componentDidMount() {
    axios.get(`${API_ROOT}/api/v1/users`)
      .then(res => {
        const data = res.data
        this.setState({ data: data })
      })
  }

validateEmail = () => {
  let res = null
  for (var data of this.state.data) {
      console.log('data' , data);
    this.state.email.forEach((email)=>{
      console.log('email ', email)
      if (data.email == email){
       this.setState({ addUser: email })
       console.log('USER', this.state.addUser)
      }
    })
  }
}

  handleSubmit = e => {
    e.preventDefault()

 this.validateEmail()

    // if (this.findEmail() === this.findData()) {
    //   console.log("Match")
    // }


  //   axios.post(`${API_ROOT}/api/v1/invites`, { invite } )
  //     .then(res => {
  //       if (res.status === 200) {
  //         this.setState({ url:  })
  //       }
  //     })
   }


  render() {

    const emailList = this.state.email.map((email, index) => {
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
        <form onSubmit={this.handleSubmit}>
          <div className="list">
            { emailList }
          </div>
          <button type="submit" className="btn btn-primary" >Send</button>
        </form>
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