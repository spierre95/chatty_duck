import React, {Component} from 'react';

class Main extends Component {
  render(){
    let main = '';
    main = (
        <div>
          <div className="container-fluid">
            <div className="row">
              <div className="banner slider col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <img className="img-fluid" src="/images/banner1.png" alt="slider1" />
                <img className="img-fluid" src="/images/banner2.png" alt="slider2" />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <p className="title">Do you like traveling with your friends? Do you want to stay connected with your travel buddies while traveling?<br />
                Why don't you try our new product - Chatty Duck. The app that lets you stay connected during your trip!</p>
                <section>
                  <div className="row landing">
                    <div className="card col-xs-12 col-sm-4 col-md-4 col-lg-4">
                      <div className="card-wrapper">
                        <p className="icon"><i className="fa fa-laptop"></i></p>
                        <p className="desc">If you have an internet connection, you can connect with your travel buddies! <br />
                        You can create a group chat for your trip and your friends can join your group.</p>
                      </div>
                    </div>
                    <div className="card col-xs-12 col-sm-4 col-md-4 col-lg-4">
                      <div className="card-wrapper">
                        <p className="icon"><i className="fa fa-map-marker"></i></p>
                        <p className="desc">You can stay in touch with your group before, during, and after your trip. <br />
                        You can talk with the whole group all at once. This app is made for specifically for group travel!</p>
                      </div>
                    </div>
                    <div className="card col-xs-12 col-sm-4 col-md-4 col-lg-4">
                      <div className="card-wrapper">
                        <p className="icon"><i className="fa fa-plane"></i></p>
                        <p className="desc">You can create and customize an itinerary for your trip. <br />
                        This app helps you organize your trip as well as always keeping you in a loop so you've never be left in behind you.</p>
                      </div>
                    </div>
                    <div className="clearfix visible-xs-block"></div>
                  </div>
                </section>
                <p className="note">Why don't you join us?</p>
              </div>
            </div>
          </div>
        </div>
    );
    return (
      <main>
        {main}
      </main>
    );
  }
}

export default Main;