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
                <p className="title">Hello World. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum provident explicabo sapiente odit repellendus asperiores sit sunt nemo!</p>
                <section>
                  <div className="row">
                    <div className="card col-xs-12 col-sm-4 col-md-4 col-lg-4">
                      <div className="card-wrapper">
                        <p className="icon"><i className="fa fa-laptop"></i></p>
                        <p className="desc">text here. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem molestiae facere quisquam tempora error dolor, quis consequuntur delectus, vel est maiores inventore in deserunt odio nobis culpa dolorem! Asperiores, nemo.</p>
                      </div>
                    </div>
                    <div className="card col-xs-12 col-sm-4 col-md-4 col-lg-4">
                      <div className="card-wrapper">
                        <p className="icon"><i className="fa fa-map-marker"></i></p>
                        <p className="desc">text here. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem molestiae facere quisquam tempora error dolor, quis consequuntur delectus, vel est maiores inventore in deserunt odio nobis culpa dolorem! Asperiores, nemo.</p>
                      </div>
                    </div>
                    <div className="card col-xs-12 col-sm-4 col-md-4 col-lg-4">
                      <div className="card-wrapper">
                        <p className="icon"><i className="fa fa-plane"></i></p>
                        <p className="desc">text here. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem molestiae facere quisquam tempora error dolor, quis consequuntur delectus, vel est maiores inventore in deserunt odio nobis culpa dolorem! Asperiores, nemo.</p>
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