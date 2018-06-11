module Api::V1
  class TripsController < ActionController::API

    def index
      @trips = Trip.all
      render json: @trips
    end


    def show
      # @trip_locations = Trip.includes(:locations).find(params[:id])
      #    @user_trips = User.includes(:trips).find(params[:id])
      #    render json: @user_trips.as_json.merge(trips: @trip_locations.as_json.merge(locations: @trip_locations.locations))

      @trip = Trip.find(params[:id])
      @trip_events = Trip.includes(:events).find(params[:id])
      render json: @trip.as_json.merge(events: @trip_events.events)
    end

    def create

      @trip = Trip.new(trip_params)
      @chatroom = Chatroom.new(
        name: trip_params[:name]
        )
      @chatroom.save
      @trip.save

    end

    def add_to_trip
      @user = User.find(params[:user_id])
      @trip = Trip.find(params[:trip_id])
      @trip.users << @user
    end

    private

    def trip_params
     params.require(:trip).permit(:name, :departure, :arrival)
    end

  end
end