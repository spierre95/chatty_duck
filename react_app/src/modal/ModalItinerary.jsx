import React, { Component } from 'react';

class ModalItinerary extends Component {
  constructor() {
    super();
    this.state = {
      day: '0',
      checked: true
    };
  }


  isClicked(id, e) {
    console.log('THIS IS ID: ', id);
    this.setState({
      day: id,
    });
  }

  render() {
    let sliderTop = (
      <div id="itinerary-top">
        <ol>
        {console.log('THIS IS STATE DAY: ', this.state.day)}
          <li onClick={(e) => this.isClicked(1, e)}>
            <p className="day-flag">Day 1</p>
            <span className="point"></span>
          </li>
          <li onClick={(e) => this.isClicked(2, e)}>
            <p className="day-flag">Day 2</p>
            <span className="point"></span>
          </li>
          <li onClick={(e) => this.isClicked(3, e)}>
            <p className="day-flag">Day 3</p>
            <span className="point"></span>
          </li>
          <li onClick={(e) => this.isClicked(4, e)}>
            <p className="day-flag">Day 4</p>
            <span className="point"></span>
          </li>
          <li onClick={(e) => this.isClicked(5, e)}>
            <p className="day-flag">Day 5</p>
            <span className="point"></span>
          </li>
          <li onClick={(e) => this.isClicked(6, e)}>
            <p className="day-flag inactive">Day 6</p>
            <span className="point"></span>
          </li>
          <li onClick={(e) => this.isClicked(7, e)}>
            <p className="day-flag inactive">Day 7</p>
            <span className="point"></span>
          </li>
        </ol>
      </div>
    );
    let slider = (
      <div id="itinerary-wrapper">
        <input type="radio" name="slideshow" id="switch1" checked={(this.state.day === 1 ? 'checked' : null)} defaultChecked />
        <input type="radio" name="slideshow" id="switch2" checked={(this.state.day === 2 ? 'checked' : null)} />
        <input type="radio" name="slideshow" id="switch3" checked={(this.state.day === 3 ? 'checked' : null)} />
        <input type="radio" name="slideshow" id="switch4" checked={(this.state.day === 4 ? 'checked' : null)} />
        <input type="radio" name="slideshow" id="switch5" checked={(this.state.day === 5 ? 'checked' : null)} />
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