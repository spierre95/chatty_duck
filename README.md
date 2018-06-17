
# Chatty Duck

Chatty Duck is a single page web application that helps people travelling in groups communicate and stay organized during their trip.


## Final Product

### Home page
!["Home"](https://github.com/spierre95/chatty_duck/blob/master/docs/chatty-duck-home.png)

### Join Trips
!["Join Trips"](https://github.com/spierre95/chatty_duck/blob/master/docs/chatty-duck-trip.gif)

### Live Chat
!["Chatroom"](https://github.com/spierre95/chatty_duck/blob/master/docs/chatty-duck-chat.gif)

### Displays Itinerary
!["Itinerary"](https://github.com/spierre95/chatty_duck/blob/master/docs/chatty-duck-itinerary.png)

## Dependencies

### Rails Api

  * rails 5.2.0
  * redis 4.0
  * bcrypt
  * faker
  * jwt
  * rack-cors
  * simple_command
  * active_model_serializers

### React App

  * react 16.4.0
  * react-actioncable-provider
  * react-dom
  * react-router-dom
  * axios
  * jwt-decode
  * moment

## Getting Started

1. Inside of the **react_app** directory run `npm install`, to *install react dependencies*
2. Inside of the **rails_api** directory run `bundle install`, to *install rails dependencies*
3. Inside of the of the **rails_api** directory run `rake db:setup` to setup database (*initializes and seeds database*)
4. run `rails s -b 0.0.0.0` to start rails server (running on `PORT:3000`)
5. **Switch to the react_app** directory and run `npm start` to start the react server (running on `PORT:3002`)
6. **Visit http://localhost:3002/**