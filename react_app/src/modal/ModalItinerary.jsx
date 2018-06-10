import React, { Component } from 'react';
import moment from 'moment';

class ModalItinerary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: 0,
      dates: [],
      duration: null,
      start_date: "",
      end_date: "",
      dayBase: 1
    };

  }

  isClicked(id, e) {
    this.setState({
      day: id,
    });
  }

  getSlideIndicator(dayBase) {
    let indicator = [];
      for (let i = 0; i < 7; i++) {

        if (i != 0) {
          indicator.push(
            <li onClick={(e) => this.isClicked(dayBase + i, e)}>
              <p className="day-flag">Day {dayBase + i}</p>
              <span className={(this.state.day === (dayBase + i) ? 'point active' : 'point')}></span>
            </li>
          );
        } else {
          indicator.push(
            <li onClick={(e) => this.isClicked(dayBase, e)}>
              <p className="day-flag">Day {dayBase}</p>
              <span className={(this.state.day === dayBase || this.state.day === 0 ? 'point active' : 'point')}></span>
            </li>
          );
        }
      }
      return indicator;
  }

  getItineraryRadio(dayBase){
    let radio = [];
    for (let i = 0; i < 7; i++) {
      if (i != 0) {
        radio.push(
          <input type="radio" name="slideshow" id={'switch'+(dayBase + i)} dayBase checked={(this.state.day === (dayBase + i) ? 'checked' : null)} />
        );
      } else {
        radio.push(
          <input type="radio" name="slideshow" id={'switch'+(dayBase)} defaultChecked />
        );
      }
    }
    return radio;
  }


  getSchedule(){
    let schedule =
      {
        day1: [
          {time: '6:00am', name: 'Departing Flight', details: 'Air Canada 2000 Gate:E3 <br />Boarding: 5:30 am Destination: Milano, Italy' },
          {time: '8:00am', name: 'Arriving Airport', details: 'To city by a bus' },
          {time: '2:00pm', name: 'The Savoy', details: 'Hotel check-in' },
          {time: '7:00pm', name: 'Events', details: 'Show at Motley Crue American Airlines Arena' },
          {time: '8:00pm', name: 'Hotel', details: 'Lorem ipsum dolor sit amet, diceret blandit cu mei.' }
        ],
        day2: [
          {time: '8:00am', name: 'Breakfast', details: 'At hotel' },
          {time: '10:00am', name: 'Gallery', details: 'Find out Galleria Bianconi' },
          {time: '12:30pm', name: 'Lunch', details: 'At local restaurant' },
          {time: '2:00pm', name: 'City Half Day Tour', details: 'Explore the city' },
          {time: '6:00pm', name: 'Dinner', details: 'at ABC restaurant' },
          {time: '8:00pm', name: 'Show', details: 'at hotel' }
        ],
        day3: [
          {time: '8:00am', name: 'Breakfast', details: 'At hotel' },
          {time: '10:00am', name: 'Day 3', details: 'Activities' },
          {time: '12:30pm', name: 'Lunch', details: 'At local restaurant' },
          {time: '2:00pm', name: 'City Half Day Tour', details: 'Explore the city' },
          {time: '6:00pm', name: 'Dinner', details: 'at ABC restaurant' },
          {time: '8:00pm', name: 'Show', details: 'at hotel' }
        ],
        day4: [
          {time: '8:00am', name: 'Breakfast', details: 'At hotel' },
          {time: '10:00am', name: 'Day 4', details: 'Activities' },
          {time: '12:30pm', name: 'Lunch', details: 'At local restaurant' },
          {time: '2:00pm', name: 'City Half Day Tour', details: 'Ei justo mollis sit. His feugiat pertinacia eu, porro rationibus vis eu. Eum facer commune adversarium ei. Mel ei harum audiam aeterno, pro ne mazim expetenda philosophia.' },
          {time: '6:00pm', name: 'Dinner', details: 'at ABC restaurant' },
          {time: '8:00pm', name: 'Show', details: 'at hotel' }
        ],
        day5: [
          {time: '8:00am', name: 'Breakfast', details: 'At hotel' },
          {time: '10:00am', name: 'Day 5', details: 'Activities' },
          {time: '12:30pm', name: 'Lunch', details: 'At local restaurant' },
          {time: '2:00pm', name: 'City Half Day Tour', details: 'Explore the city' },
          {time: '6:00pm', name: 'Dinner', details: 'at ABC restaurant' },
          {time: '8:00pm', name: 'Show', details: 'Ei justo mollis sit. His feugiat pertinacia eu, porro rationibus vis eu. Eum facer commune adversarium ei. Mel ei harum audiam aeterno, pro ne mazim expetenda philosophia.' }
        ],
        day6: [
          {time: '8:00am', name: 'Breakfast', details: 'At hotel' },
          {time: '10:00am', name: 'Day 6', details: 'Activities' },
          {time: '12:30pm', name: 'Lunch', details: 'At local restaurant' },
          {time: '2:00pm', name: 'City Half Day Tour', details: 'Explore the city' },
          {time: '6:00pm', name: 'Dinner', details: 'at ABC restaurant' },
          {time: '8:00pm', name: 'Show', details: 'at hotel' }
        ],
        day7: [
          {time: '8:00am', name: 'Breakfast', details: 'At hotel' },
          {time: '10:00am', name: 'Day 7', details: 'Activities' },
          {time: '12:30pm', name: 'Lunch', details: 'At local restaurant' },
          {time: '2:00pm', name: 'City Half Day Tour', details: 'Ei justo mollis sit. His feugiat pertinacia eu, porro rationibus vis eu. Eum facer commune adversarium ei. Mel ei harum audiam aeterno, pro ne mazim expetenda philosophia.' },
          {time: '6:00pm', name: 'Dinner', details: 'at ABC restaurant' },
          {time: '8:00pm', name: 'Show', details: 'at hotel' }
        ]
      };
    let output = [];
    let section = '';
    Object.keys(schedule).forEach(function(day) {
      let dayNum = day.substr(3);
      //console.log(day, schedule[][day]);
      //output.push(key, schedule[][day]);

      let daySchedule = schedule[day];
      let sectionChildren = [];
      for (let j = 0; j < daySchedule.length; j++) {
        sectionChildren.push(
          <div className="list__item">
            <div className="list__time">{daySchedule[j].time}</div>
            <div className="list__border"></div>
            <div className="list__desc">
              <h3>{daySchedule[j].name}</h3>
              <div>{daySchedule[j].details}</div>
            </div>
          </div>
        );
      }
      section = (
        <section id={'slide'+(dayNum)}>
          <div className="list" id={day}>
            <p className="title">{'Day ' + dayNum}</p>
             {sectionChildren}
          </div>
        </section>);

      output.push(section);
    });

  return output;
  }


  // tripLength = () => {
  //   let a = Moment(this.state.start_date,'M/D/YYYY');
  //   let b = Moment(this.state.end_date,'M/D/YYYY');
  //   let diffDays = b.diff(a, 'days');
  //   this.setState({ duration: diffDays })
  // }

//   findDates = () => {

// }


componentWillMount() {
    let a = moment(this.state.arrival).format();
    // let diffDays = b.diff(a, 'days');
    console.log("a", a)
    // console.log(diffDays)
//   const dates = [];

//   const theDates = this.props.events.map(event => {
//     dates.push(event.date)
//     this.setState({ dates: dates.sort() })
//     console.log("state", this.state.dates)
//   })
}



  componentWillReceiveProps(nextProps){
  if(nextProps.trip !== undefined)
    this.setState({
      start_date: nextProps.trip.arrival,
      end_date: nextProps.trip.departure,
  })
  console.log(this.state)
  }


  render() {



  // const eachDay = getDates.forEach(day => {
  //   const theDay = this.day;
  //   console.log(theDay)
  // })


    const dayBase = this.state.dayBase;

    let sliderTop = (
      <div id="itinerary-top">
        <ol>
          {this.getSlideIndicator(dayBase)}
        </ol>
      </div>
    );

    let slider = (
      <div id="itinerary-wrapper">
        {this.getItineraryRadio(dayBase)}
        <div id="slideshow">
          <div className="slideContents">
            <section id="slide1">
              <div className="list" id="day1">
                <p className="title">Day 1</p>
                <div className="list__item">
                  <div className="list__time">6:00 am</div>
                  <div className="list__border"></div>
                  <div className="list__desc">
                    <h3>getEvents</h3>
                    <div>Southwest #80293 Gate:511</div>
                    <div>Boarding: 5:30 am Destination: Miami, FL</div>
                    <div className="border"></div>
                  </div>
                </div>
                <div className="list__item">
                  <div className="list__time">8:00 am</div>
                  <div className="list__border"></div>
                  <div className="list__desc">
                    <h3>Enterprise Car Rental</h3>
                    <div>940 NW 27th Ave, Miami, FL 33125</div>
                    <div>Pick up: 8:00 am</div>
                    <div className="border"></div>
                  </div>
                </div>
                <div className="list__item">
                  <div className="list__time">2:00 pm</div>
                  <div className="list__border"></div>
                  <div className="list__desc">
                    <h3>The Savoy</h3>
                    <div>425 Ocean Drive, Miami Beach, FL 33139</div>
                    <div>Check-in: 2:00 pm</div>
                    <div className="border"></div>
                  </div>
                </div>
                <div className="list__item">
                  <div className="list__time">7:00 pm</div>
                  <div className="list__border"></div>
                  <div className="list__desc">
                    <h3>Events</h3>
                    <div>Motley Crue American Airlines Arena</div>
                    <div>Showtime: 7:00 pm</div>
                    <div className="border"></div>
                  </div>
                </div>
                <div className="list__item">
                  <div className="list__time">12:00 am</div>
                  <div className="list__border"></div>
                  <div className="list__desc">
                    <h3>Returning Flight</h3>
                    <div>Southwest #80293 Gate: 515</div>
                    <div>Boarding: 11:00 am Destination: Denver, CO</div>
                    <div className="border"></div>
                  </div>
                </div>
              </div>
            </section>
            <section id="slide2">
              <div className="list" id="day2">
                <p className="title">Day 2</p>
                <div className="list__item">
                  <div className="list__time">8:00 am</div>
                  <div className="list__border"></div>
                  <div className="list__desc">
                    <h3>Breakfast</h3>
                    <div>day2 day2</div>
                    <div>day2 day2 day2 day2 day2 day2</div>
                    <div className="border"></div>
                  </div>
                </div>
                <div className="list__item">
                  <div className="list__time">10:00 am</div>
                  <div className="list__border"></div>
                  <div className="list__desc">
                    <h3>Gallery</h3>
                    <div>maybe address here..?</div>
                    <div>some more description</div>
                    <div className="border"></div>
                  </div>
                </div>
                <div className="list__item">
                  <div className="list__time">2:00 pm</div>
                  <div className="list__border"></div>
                  <div className="list__desc">
                    <h3>The Savoy</h3>
                    <div>maybe address here..?</div>
                    <div>some more description</div>
                    <div className="border"></div>
                  </div>
                </div>
                <div className="list__item">
                  <div className="list__time">7:00 pm</div>
                  <div className="list__border"></div>
                  <div className="list__desc">
                    <h3>Events</h3>
                    <div>maybe address here..?</div>
                    <div>some more description</div>
                    <div className="border"></div>
                  </div>
                </div>
                <div className="list__item">
                  <div className="list__time">12:00 am</div>
                  <div className="list__border"></div>
                  <div className="list__desc">
                    <h3>Returning Flight</h3>
                    <div>maybe address here..?</div>
                    <div>some more description</div>
                    <div className="border"></div>
                  </div>
                </div>
                <div className="list__item">
                  <div className="list__time">1:00 am</div>
                  <div className="list__border"></div>
                  <div className="list__desc">
                    <h3>Returning Flight</h3>
                    <div>maybe address here..?</div>
                    <div>some more description</div>
                    <div className="border"></div>
                  </div>
                </div>
                <div className="list__item">
                  <div className="list__time">2:00 am</div>
                  <div className="list__border"></div>
                  <div className="list__desc">
                    <h3>Returning Flight</h3>
                    <div>maybe address here..?</div>
                    <div>some more description</div>
                    <div className="border"></div>
                  </div>
                </div>
              </div>
            </section>
            <section id="slide3">
              <div className="list" id="day3">
                <p className="title">Day 3</p>
                <div className="list__item">
                  <div className="list__time">8:00 am</div>
                  <div className="list__border"></div>
                  <div className="list__desc">
                    <h3>Breakfast</h3>
                    <div>day3 day3</div>
                    <div>day3 day3 day3 day3 day3 day3</div>
                    <div className="border"></div>
                  </div>
                </div>
                <div className="list__item">
                  <div className="list__time">10:00 am</div>
                  <div className="list__border"></div>
                  <div className="list__desc">
                    <h3>Gallery</h3>
                    <div>maybe address here..?</div>
                    <div>some more description</div>
                    <div className="border"></div>
                  </div>
                </div>
                <div className="list__item">
                  <div className="list__time">2:00 pm</div>
                  <div className="list__border"></div>
                  <div className="list__desc">
                    <h3>The Savoy</h3>
                    <div>maybe address here..?</div>
                    <div>some more description</div>
                    <div className="border"></div>
                  </div>
                </div>
                <div className="list__item">
                  <div className="list__time">7:00 pm</div>
                  <div className="list__border"></div>
                  <div className="list__desc">
                    <h3>Events</h3>
                    <div>maybe address here..?</div>
                    <div>some more description</div>
                    <div className="border"></div>
                  </div>
                </div>
                <div className="list__item">
                  <div className="list__time">12:00 am</div>
                  <div className="list__border"></div>
                  <div className="list__desc">
                    <h3>Returning Flight</h3>
                    <div>maybe address here..?</div>
                    <div>some more description</div>
                    <div className="border"></div>
                  </div>
                </div>
              </div>
            </section>
            <section id="slide4">
              <div className="list" id="day4">
                <p className="title">Day 4</p>
                <div className="list__item">
                  <div className="list__time">8:00 am</div>
                  <div className="list__border"></div>
                  <div className="list__desc">
                    <h3>Breakfast</h3>
                    <div>day4 day4</div>
                    <div>day4 day4 day4 day4 day4 day4</div>
                    <div className="border"></div>
                  </div>
                </div>
                <div className="list__item">
                  <div className="list__time">10:00 am</div>
                  <div className="list__border"></div>
                  <div className="list__desc">
                    <h3>Gallery</h3>
                    <div>maybe address here..?</div>
                    <div>some more description</div>
                    <div className="border"></div>
                  </div>
                </div>
                <div className="list__item">
                  <div className="list__time">2:00 pm</div>
                  <div className="list__border"></div>
                  <div className="list__desc">
                    <h3>The Savoy</h3>
                    <div>maybe address here..?</div>
                    <div>some more description</div>
                    <div className="border"></div>
                  </div>
                </div>
                <div className="list__item">
                  <div className="list__time">7:00 pm</div>
                  <div className="list__border"></div>
                  <div className="list__desc">
                    <h3>Events</h3>
                    <div>maybe address here..?</div>
                    <div>some more description</div>
                    <div className="border"></div>
                  </div>
                </div>
                <div className="list__item">
                  <div className="list__time">12:00 am</div>
                  <div className="list__border"></div>
                  <div className="list__desc">
                    <h3>Returning Flight</h3>
                    <div>maybe address here..?</div>
                    <div>some more description</div>
                    <div className="border"></div>
                  </div>
                </div>
              </div>
            </section>
            <section id="slide5">
              <div className="list" id="day5">
                <p className="title">Day 5</p>
                <div className="list__item">
                  <div className="list__time">8:00 am</div>
                  <div className="list__border"></div>
                  <div className="list__desc">
                    <h3>Breakfast</h3>
                    <div>day5 day5</div>
                    <div>day5 day5 day5 day5 day5 day5</div>
                    <div className="border"></div>
                  </div>
                </div>
                <div className="list__item">
                  <div className="list__time">10:00 am</div>
                  <div className="list__border"></div>
                  <div className="list__desc">
                    <h3>Gallery</h3>
                    <div>maybe address here..?</div>
                    <div>some more description</div>
                    <div className="border"></div>
                  </div>
                </div>
                <div className="list__item">
                  <div className="list__time">2:00 pm</div>
                  <div className="list__border"></div>
                  <div className="list__desc">
                    <h3>The Savoy</h3>
                    <div>maybe address here..?</div>
                    <div>some more description</div>
                    <div className="border"></div>
                  </div>
                </div>
                <div className="list__item">
                  <div className="list__time">7:00 pm</div>
                  <div className="list__border"></div>
                  <div className="list__desc">
                    <h3>Events</h3>
                    <div>maybe address here..?</div>
                    <div>some more description</div>
                    <div className="border"></div>
                  </div>
                </div>
                <div className="list__item">
                  <div className="list__time">12:00 am</div>
                  <div className="list__border"></div>
                  <div className="list__desc">
                    <h3>Returning Flight</h3>
                    <div>maybe address here..?</div>
                    <div>some more description</div>
                    <div className="border"></div>
                  </div>
                </div>
              </div>
            </section>

            <section id="slide6">
              <div className="list" id="day6">
                <p className="title">Day 6</p>
                <div className="list__item">
                  <div className="list__time">8:00 am</div>
                  <div className="list__border"></div>
                  <div className="list__desc">
                    <h3>Breakfast</h3>
                    <div>day6 day6</div>
                    <div>day6 day6 day6 day6 day6 day6</div>
                    <div className="border"></div>
                  </div>
                </div>
                <div className="list__item">
                  <div className="list__time">10:00 am</div>
                  <div className="list__border"></div>
                  <div className="list__desc">
                    <h3>Gallery</h3>
                    <div>maybe address here..?</div>
                    <div>some more description</div>
                    <div className="border"></div>
                  </div>
                </div>
                <div className="list__item">
                  <div className="list__time">2:00 pm</div>
                  <div className="list__border"></div>
                  <div className="list__desc">
                    <h3>The Savoy</h3>
                    <div>maybe address here..?</div>
                    <div>some more description</div>
                    <div className="border"></div>
                  </div>
                </div>
                <div className="list__item">
                  <div className="list__time">7:00 pm</div>
                  <div className="list__border"></div>
                  <div className="list__desc">
                    <h3>Events</h3>
                    <div>maybe address here..?</div>
                    <div>some more description</div>
                    <div className="border"></div>
                  </div>
                </div>
                <div className="list__item">
                  <div className="list__time">12:00 am</div>
                  <div className="list__border"></div>
                  <div className="list__desc">
                    <h3>Returning Flight</h3>
                    <div>maybe address here..?</div>
                    <div>some more description</div>
                    <div className="border"></div>
                  </div>
                </div>
              </div>
            </section>

            <section id="slide7">
              <div className="list" id="day7">
                <p className="title">Day 7</p>
                <div className="list__item">
                  <div className="list__time">8:00 am</div>
                  <div className="list__border"></div>
                  <div className="list__desc">
                    <h3>Breakfast</h3>
                    <div>day7 day7</div>
                    <div>day7 day7 day7 day7 day7 day7</div>
                    <div className="border"></div>
                  </div>
                </div>
                <div className="list__item">
                  <div className="list__time">10:00 am</div>
                  <div className="list__border"></div>
                  <div className="list__desc">
                    <h3>Gallery</h3>
                    <div>maybe address here..?</div>
                    <div>some more description</div>
                    <div className="border"></div>
                  </div>
                </div>
                <div className="list__item">
                  <div className="list__time">2:00 pm</div>
                  <div className="list__border"></div>
                  <div className="list__desc">
                    <h3>The Savoy</h3>
                    <div>maybe address here..?</div>
                    <div>some more description</div>
                    <div className="border"></div>
                  </div>
                </div>
                <div className="list__item">
                  <div className="list__time">7:00 pm</div>
                  <div className="list__border"></div>
                  <div className="list__desc">
                    <h3>Events</h3>
                    <div>maybe address here..?</div>
                    <div>some more description</div>
                    <div className="border"></div>
                  </div>
                </div>
                <div className="list__item">
                  <div className="list__time">12:00 am</div>
                  <div className="list__border"></div>
                  <div className="list__desc">
                    <h3>Returning Flight</h3>
                    <div>maybe address here..?</div>
                    <div>some more description</div>
                    <div className="border"></div>
                  </div>
                </div>
              </div>
            </section>
=======
            {this.getSchedule()}
>>>>>>> master
          </div>
          <p className="arrow prev">
            <i className="ico"></i>
            <label htmlFor="switch1"></label>
            <label htmlFor="switch2"></label>
            <label htmlFor="switch3"></label>
            <label htmlFor="switch4"></label>
            <label htmlFor="switch5"></label>
            <label htmlFor="switch6"></label>
            <label htmlFor="switch7"></label>
          </p>
          <p className="arrow next">
            <i className="ico"></i>
            <label htmlFor="switch1"></label>
            <label htmlFor="switch2"></label>
            <label htmlFor="switch3"></label>
            <label htmlFor="switch4"></label>
            <label htmlFor="switch5"></label>
            <label htmlFor="switch6"></label>
            <label htmlFor="switch7"></label>
          </p>
        </div>
      </div>
    );
    return (
      <div id="modal">
        <div className="modal fade" id="itinerary" tabindex="-1" role="dialog" aria-labelledby="loginModal" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body chat">
                {sliderTop}
                <div id="showarea">
                {slider}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default ModalItinerary