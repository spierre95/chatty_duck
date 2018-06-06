import React, {Component} from 'react';
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
    const {options} = this.state;
    let thumbs = (
        <div className="container">
          <div className="row">
              <h2>Select your trip</h2>
              <Link to="/user/:username/create"><i className="fa fa-plus"></i>&nbsp;&nbsp;Create Trip</Link>
              <ul className="thumbs row">
                {options.map(item => (
                  <li class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                    <Link to={item.link}>
                      <div className="trip-details">
                        <span className="title">{item.name}</span>
                        <span className="date-start">{item.date}</span>
                        <span>{item.duration} weeks</span>
                      </div>
                      <div className="overlay"></div>
                      <img src={item.imgUrl} alt={item.name} />
                    </Link>
                  </li>
                ))}
              </ul>
          </div>
        </div>
      );
    return (
        <section>
          {thumbs}
        </section>
    );
  }
}

export default SelectTrip;