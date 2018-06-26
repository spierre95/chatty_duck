import React, { Component } from 'react';
import moment from 'moment';

class ModalItinerary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: 0,
      dayBase: 1,
      schedule:{}
    };
    this.getNewIndicatorSet = this.getNewIndicatorSet.bind(this);
    this.getPrevIndicatorSet = this.getPrevIndicatorSet.bind(this);
    this.isClicked = this.isClicked.bind(this);
    this.getSlideIndicator = this.getSlideIndicator.bind(this);
    this.getItineraryRadio = this.getItineraryRadio.bind(this);
    this.getSchedule = this.getSchedule.bind(this);

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

  getSlideIndicator(dayBase, active) {
    let indicator = [];
      for (let i = 0; i < 7; i++) {
          if (i !== 0 && i <= active) {
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
      if (i !== 0) {
        radio.push(
          <input type="radio" name="slideshow" id={'switch'+(1 + i)} checked={(this.state.day === (dayBase + i) ? 'checked' : null)} />
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


    Object.keys(obj).forEach(function(day,index) {
      let dayNum = (index + 1)

      let daySchedule = obj[day];
      let sectionChildren = [];
      let maxLength = ((tripLength - dayBase) / 7 >= 1) ? dayBase + 6 : (tripLength - dayBase) + dayBase;
      for (let j = 0; j < daySchedule.length; j++) {
        let time = moment.utc(daySchedule[j].start_time).format("HH:mm")
        sectionChildren.push(
          <div className="list__item">
            <div className="list__time">{time}</div>
            <div className="list__border"></div>
            <div className="list__desc">
              <h3>{daySchedule[j].name}</h3>
              <div>{daySchedule[j].details}</div>
              <div className="border"></div>
            </div>
          </div>
        );
      }
      if(Object.keys(sectionChildren).length === 0){
        sectionChildren = (
          <div className="list__item">
            <div className="list__time">00:00</div>
            <div className="list__border"></div>
            <div className="list__desc">
              <h3>There is no schedule now.</h3>
              <div>You can create an event for your trip top right menu!</div>
              <div className="border"></div>
            </div>
          </div>
          );
      }
      section = (
            <section id={'slide'+(dayNum)}>
              <div className="list" id={'day'+ dayNum}>
                <p className="title">{'Day ' + dayNum}</p>
                 {sectionChildren}
              </div>
            </section>);
      // to get the contents of the selected week
      if (dayNum >= dayBase && dayNum <= dayBase + 6) {
        output.push(section);
      }
    });

  return output;
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.trip !== undefined && Object.keys(nextProps.trip).length !== 0){
    let departure = moment.utc(nextProps.trip.departure).format("YYYY-MM-DD")
    let arrival =  moment.utc(nextProps.trip.arrival).format("YYYY-MM-DD")
    function enumerateDaysBetweenDates(startDate, endDate) {
        startDate = moment(startDate);
        endDate = moment(endDate);

        var now = startDate, dates = [];

        while (now.isBefore(endDate) || now.isSame(endDate)) {
          dates.push(now.format('YYYY-MM-DD'));
          now.add(1, 'days');
        }
          return dates;
        };


    let dates = (enumerateDaysBetweenDates(departure,arrival))

    let schedule = {}

    for (let day of dates ){
      schedule[day] = []
    }

    let datesArr = Object.keys(schedule)

    nextProps.events.forEach((event)=>{
      for(let day of datesArr){
        if(event.date === day){
          schedule[event.date].push(event)
        }
      }
    })

    this.setState({schedule})

    }
  }


  shouldComponentUpdate(nextProps, nextState) {
    return this.state !== nextState
  }


  render() {
    const dayBase = this.state.dayBase;
    const tripLength = Object.keys(this.state.schedule).length;
    const arrowPrev = (dayBase !== 1) ? (<p className="arrow prev" onClick={this.getPrevIndicatorSet}><i class="fa fa-chevron-left"></i></p>) : null;
    const arrowNext = (tripLength > dayBase + 6) ? (<p className="arrow next" onClick={this.getNewIndicatorSet}><i class="fa fa-chevron-right"></i></p>) : null;
    const active = (tripLength < dayBase + 6) ? (tripLength - dayBase) : 7 ; // passing this to getSlideIndicator func to add inactive css class.
    // changed the above calc after the condition (? mark) to tripLength - dayBase, instead of dayBase + 6) - tripLength)!!!
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