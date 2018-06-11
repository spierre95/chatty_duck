import React, { Component } from 'react';

class ModalItinerary extends Component {
  constructor() {
    super();
    this.state = {
      day: 0,
      duration: 0,
      dayBase: 1,
      schedule: {
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
        ],
        day8: [
          {time: '8:00am', name: 'Breakfast', details: 'At hotel' },
          {time: '10:00am', name: 'Day 7', details: 'Activities' },
          {time: '12:30pm', name: 'Lunch', details: 'At local restaurant' },
          {time: '2:00pm', name: 'City Half Day Tour', details: 'Ei justo mollis sit. His feugiat pertinacia eu, porro rationibus vis eu. Eum facer commune adversarium ei. Mel ei harum audiam aeterno, pro ne mazim expetenda philosophia.' },
          {time: '6:00pm', name: 'Dinner', details: 'at ABC restaurant' },
          {time: '8:00pm', name: 'Show', details: 'at hotel' }
        ],
        day9: [
          {time: '8:00am', name: 'Breakfast', details: 'At hotel' },
          {time: '10:00am', name: 'Day 7', details: 'Activities' },
          {time: '12:30pm', name: 'Lunch', details: 'At local restaurant' },
          {time: '2:00pm', name: 'City Half Day Tour', details: 'Ei justo mollis sit. His feugiat pertinacia eu, porro rationibus vis eu. Eum facer commune adversarium ei. Mel ei harum audiam aeterno, pro ne mazim expetenda philosophia.' },
          {time: '6:00pm', name: 'Dinner', details: 'at ABC restaurant' },
          {time: '8:00pm', name: 'Show', details: 'at hotel' }
        ],
        day10: [
          {time: '8:00am', name: 'Breakfast', details: 'At hotel' },
          {time: '10:00am', name: 'Day 7', details: 'Activities' },
          {time: '12:30pm', name: 'Lunch', details: 'At local restaurant' },
          {time: '2:00pm', name: 'City Half Day Tour', details: 'Ei justo mollis sit. His feugiat pertinacia eu, porro rationibus vis eu. Eum facer commune adversarium ei. Mel ei harum audiam aeterno, pro ne mazim expetenda philosophia.' },
          {time: '6:00pm', name: 'Dinner', details: 'at ABC restaurant' },
          {time: '8:00pm', name: 'Show', details: 'at hotel' }
        ],
        day11: [
          {time: '8:00am', name: 'Breakfast', details: 'At hotel' },
          {time: '10:00am', name: 'Day 7', details: 'Activities' },
          {time: '12:30pm', name: 'Lunch', details: 'At local restaurant' },
          {time: '2:00pm', name: 'City Half Day Tour', details: 'Ei justo mollis sit. His feugiat pertinacia eu, porro rationibus vis eu. Eum facer commune adversarium ei. Mel ei harum audiam aeterno, pro ne mazim expetenda philosophia.' },
          {time: '6:00pm', name: 'Dinner', details: 'at ABC restaurant' },
          {time: '8:00pm', name: 'Show', details: 'at hotel' }
        ]
      }
    };
    this.getNewIndicatorSet = this.getNewIndicatorSet.bind(this);
    this.getPrevIndicatorSet = this.getPrevIndicatorSet.bind(this);
  }

  isClicked(id, e) {
    this.setState({
      day: id,
    });
  }

  getNewIndicatorSet() {
    const dayBase = this.state.dayBase;
    const newDayBase = dayBase + 7;
    this.setState({
      dayBase: newDayBase
    });
  }

  getPrevIndicatorSet() {
    const dayBase = this.state.dayBase;
    const newDayBase = dayBase - 7;
    this.setState({
      dayBase: newDayBase
    });
  }

  getSlideIndicator(dayBase, active) { console.log('ACTIVE:::', active);
    let indicator = [];
      for (let i = 0; i < 7; i++) {
          if (i != 0 && i <= active) {
            indicator.push(
              <li onClick={(e) => this.isClicked(dayBase + i, e)}>
                <p className="day-flag">Day {dayBase + i}</p>
                <span className={(this.state.day === (dayBase + i) ? 'point active' : 'point')}></span>
              </li>
            );
          } else if (i > active){
            indicator.push(
              <li class="inactive">
                <p className="day-flag inactive">Day {dayBase + i}</p>
                <span className={(this.state.day === (dayBase + i) ? 'point inactive' : 'point')}></span>
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
          <input type="radio" name="slideshow" id={'switch'+(1 + i)} dayBase checked={(this.state.day === (dayBase + i) ? 'checked' : null)} />
        );
      } else {
        radio.push(
          <input type="radio" name="slideshow" id={'switch'+(1)} defaultChecked />
        );
      }
    }
    return radio;
  }

  getSchedule(){
    const output = [];
    let section = '';
    const dayBase = this.state.dayBase;
    const tripLength = Object.keys(this.state.schedule).length;
    const obj = this.state.schedule;

    Object.keys(obj).forEach(function(day) {
      let dayNum = day.substr(3);
      let daySchedule = obj[day];
      let sectionChildren = [];
      let maxLength = ((tripLength - dayBase) / 7 >= 1) ? dayBase + 6 : (tripLength - dayBase) + dayBase;
      //for (let j = (dayBase - 1); j < maxLength; j++) {
      for (let j = 0; j < daySchedule.length; j++) {
        sectionChildren.push(
          <div className="list__item">
            <div className="list__time">{daySchedule[j].time}</div>
            <div className="list__border"></div>
            <div className="list__desc">
              <h3>{daySchedule[j].name}</h3>
              <div>{daySchedule[j].details}</div>
              <div className="border"></div>
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

      if (dayBase === 1) {
        if (dayNum >= 1 && dayNum <= 7) {
          output.push(section);
        }
      } else if (dayBase === 8) {
        if (dayNum >= 8 && dayNum <= 14) {
          output.push(section);
        }
      } else if (dayBase === 15) {
        if (dayNum >= 15 && dayNum <= 21) {
          output.push(section);
        }
      } else if (dayBase === 22) {
        if (dayNum >= 22 && dayNum <= 28) {
          output.push(section);
        }
      }
    });

  return output;
  }

  render() {
    const dayBase = this.state.dayBase;
    const tripLength = Object.keys(this.state.schedule).length;
    const arrowPrev = (dayBase !== 1) ? (<p className="arrow prev" onClick={this.getPrevIndicatorSet}><i class="fa fa-chevron-left"></i></p>) : null;
    const arrowNext = (tripLength > dayBase + 6) ? (<p className="arrow next" onClick={this.getNewIndicatorSet}><i class="fa fa-chevron-right"></i></p>) : null;
    const active = (tripLength < dayBase + 6) ? ((dayBase + 6) - tripLength) : 7 ; // passing this to getSlideIndicator func to add inactive css class.
    let sliderTop = (
      <div id="itinerary-top">
        <ol>
          {this.getSlideIndicator(dayBase, active)}
        </ol>
        {arrowPrev}
        {arrowNext}
      </div>
    );

    let slider = (
      <div id="itinerary-wrapper">
        {this.getItineraryRadio(dayBase)}
        <div id="slideshow">
          <div className="slideContents">
            {this.getSchedule()}
          </div>
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