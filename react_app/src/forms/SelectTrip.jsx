import React, {Component} from 'react';
import Header from '../lp/Header.jsx';
import Footer from '../lp/Footer.jsx';

class SelectTrip extends Component{
  render(){
    let form = (
          <form>
            <div className="form-group">
              <p>Choose your trip</p>
                <select id="trip-name">
                  <option value="hide">-- Trips --</option>
                  <option value="Name 1">Name 1</option>
                  <option value="Name 2">Name 2</option>
                  <option value="Name 3">Name 3</option>
                </select>
              </div>
              <button className='btn btn-primary'> Confirm </button>
          </form>
      );
    return (
      <div className="form-page">
        <Header />
        <aside>
          {form}
        </aside>
        <Footer />
      </div>
    );
  }
}

export default SelectTrip;