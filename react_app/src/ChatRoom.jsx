import React, {Component} from 'react';
import Channel from './chat/Channel.jsx';
import Chat from './chat/Chat.jsx';
import axios from 'axios';
import ModalItinerary from './modal/ModalItinerary.jsx';
import CreateEvent from './modal/ModalCreateEvent.jsx';
import moment from 'moment'

class ChatRoom extends Component{

constructor(props) {
  super(props);
  this.state = {
    trip: {},
    events: [],
    schedule:{}
  }
}

getInitialState() {
    return {
      now: new Date(),
    };
    this.interval = null;
  }




componentDidMount() {

  // const self = this;
  //   self.interval = setInterval(function() {
  //     self.setState({
  //       now: new Date(),
  //     });
  //   }, 1000);

  const { match: { params } } = this.props;

  axios.get(`http://localhost:3000/api/v1/trips/${params.trip}`)
    .then( res => {
      this.setState({ trip : res.data })
    })

    axios.post('http://localhost:3000/api/v1/events', {
    trip_id: params.trip,
    // user_id: params.username
    })
    .then(res => {
      this.setState({ events: res.data })
    })
    .catch(error => {
      console.log(error);
    });

  }

setSchedule(){

let departure = moment(this.state.trip.depature).format("YYYY-MM-DD")
let arrival =  moment(this.state.trip.arrival).format("YYYY-MM-DD")

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
  this.state.events.map((event)=>{
    event.date = moment(event.date).format("YYYY-MM-DD")
    event.start_time = moment(event.start_time).format("HH")
  })

let datesArr = Object.keys(schedule)

this.state.events.forEach((event)=>{
  for(let day of datesArr){
    if(event.date === day){
      schedule[event.date].push(event)
    }
  }
})

this.setState({schedule})

}


  render(){
    return(
        <body>
          <div id="chat-wrapper">
            <Channel currentUser={this.props.currentUser} />
            <Chat currentUser={this.props.currentUser} trip={this.state.trip} props={this.props} chatroom_id={this.props.match.params.trip} />
          </div>
          <ModalItinerary events={this.state.events} trip={this.state.trip}/>
          <CreateEvent currentUser={this.props.currentUser} trip={this.state.trip}/>
        </body>
    )
  }
}
export default ChatRoom;