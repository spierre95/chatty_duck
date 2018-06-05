import React, {Component} from 'react';
import Header from '../lp/Header.jsx';
import Footer from '../lp/Footer.jsx';
import {Link} from 'react-router-dom';

class SelectTrip extends Component{
  state = {
    options: [
      {
        name: '10 days trip - Italy and France',
        date: '2018-08-20',
        duration: '2',
        link: 'trips/:trip',
        imgUrl: '/images/thumbs/thumb1.png'
      },
      {
        name: '14 days trip - Rome',
        date: '2018-09-30',
        duration: '2',
        link: 'trips/abc',
        imgUrl: '/images/thumbs/thumb1.png'
      },
      {
        name: '5 days trip - New York',
        date: '2018-11-15',
        duration: '1',
        link: 'trips/xyz',
        imgUrl: '/images/thumbs/thumb1.png'
      },
      {
        name: '15 days trip - Asia',
        date: '2018-11-15',
        duration: '2',
        link: 'trips/xyz',
        imgUrl: '/images/thumbs/thumb1.png'
      },
      {
        name: '3 days trip - Toronto',
        date: '2018-12-15',
        duration: '1',
        link: 'trips/xyz',
        imgUrl: '/images/thumbs/thumb1.png'
      },
    ]
  };

  // handleChange = (e) => {
  //   this.setState({ value: e.target.value });
  // };

  render(){
    const {options, value} = this.state;
    let thumbs = (
        <ul className="thumbs">
          {options.map(item => (
            <li>
              <Link to={item.link}>
                <div className="trip-details">
                  <span className="title">{item.name}</span>
                  <span className="date-start">{item.date}</span>
                  <span>{item.duration} weeks</span>
                </div>
                <img src={item.imgUrl} alt={item.name} />
              </Link>
            </li>
          ))}
        </ul>
      );
    return (
      <div className="form-page">
        <Header />
        <section>
          <p>Select your trip</p>
          {thumbs}
        </section>
        <Footer />
      </div>
    );
  }
}

export default SelectTrip;