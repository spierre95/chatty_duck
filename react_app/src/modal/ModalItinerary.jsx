import React, { Component } from 'react';

class ModalItinerary extends Component {
  constructor() {
    super();
    this.state = {
      day: 0,
      duration: 0
    };
  }
  // duration will be total days of the trip.
  isClicked(id, e) {
    this.setState({
      day: id,
    });
  }


  render() {
    let dayBase = 1;
    let sliderTop = (
      <div id="itinerary-top">
        <ol>
          <li onClick={(e) => this.isClicked(dayBase, e)}>
            <p className="day-flag">Day {dayBase}</p>
            <span className={(this.state.day === dayBase || this.state.day === 0 ? 'point active' : 'point')}></span>
          </li>
          <li onClick={(e) => this.isClicked(dayBase+1, e)}>
            <p className="day-flag">Day {dayBase+1}</p>
            <span className={(this.state.day === (dayBase+1) ? 'point active' : 'point')}></span>
          </li>
          <li onClick={(e) => this.isClicked(dayBase+2, e)}>
            <p className="day-flag">Day {dayBase+2}</p>
            <span className={(this.state.day === (dayBase+2) ? 'point active' : 'point')}></span>
          </li>
          <li onClick={(e) => this.isClicked(dayBase+3, e)}>
            <p className="day-flag">Day {dayBase+3}</p>
            <span className={(this.state.day === (dayBase+3) ? 'point active' : 'point')}></span>
          </li>
          <li onClick={(e) => this.isClicked(dayBase+4, e)}>
            <p className="day-flag">Day {dayBase+4}</p>
            <span className={(this.state.day === (dayBase+4) ? 'point active' : 'point')}></span>
          </li>
          <li onClick={(e) => this.isClicked(dayBase+5, e)}>
            <p className="day-flag inactive">Day {dayBase+5}</p>
            <span className={(this.state.day === (dayBase+5) ? 'point active' : 'point')}></span>
          </li>
          <li onClick={(e) => this.isClicked(dayBase+6, e)}>
            <p className="day-flag">Day {dayBase+6}</p>
            <span className={(this.state.day === (dayBase+6) ? 'point active' : 'point')}></span>
          </li>
        </ol>
      </div>
    );
    let slider = (
      <div id="itinerary-wrapper">
        <input type="radio" name="slideshow" id="switch1" defaultChecked />
        <input type="radio" name="slideshow" id="switch2" checked={(this.state.day === dayBase+1 ? 'checked' : null)} />
        <input type="radio" name="slideshow" id="switch3" checked={(this.state.day === dayBase+2 ? 'checked' : null)} />
        <input type="radio" name="slideshow" id="switch4" checked={(this.state.day === dayBase+3 ? 'checked' : null)} />
        <input type="radio" name="slideshow" id="switch5" checked={(this.state.day === dayBase+4 ? 'checked' : null)} />
        <input type="radio" name="slideshow" id="switch6" checked={(this.state.day === dayBase+5 ? 'checked' : null)} />
        <input type="radio" name="slideshow" id="switch7" checked={(this.state.day === dayBase+6 ? 'checked' : null)} />
        <div id="slideshow">
          <div className="slideContents">
            <section id="slide1">
              <div className="list" id="day1">
                <p className="title">Day 1</p>
                <div className="list__item">
                  <div className="list__time">6:00 am</div>
                  <div className="list__border"></div>
                  <div className="list__desc">
                    <h3>Departing Flight</h3>
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