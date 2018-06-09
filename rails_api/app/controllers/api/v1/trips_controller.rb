module Api::V1
  class TripsController < ActionController::API

    def index
      @trips = Trip.all
      render json: @trips
    end

    def show
      @trip = Trip.includes(:users).find(params[:id])
      @event = Trip.includes(:events).find(params[:id])
      render json: @trip.as_json.merge(users: @trip.users, events: @trip.events)
    end

    def create

      @trip = Trip.new(trip_params)
      @chatroom = Chatroom.new(
        name: trip_params[:name]
        )
      @chatroom.save
      @trip.save

    end

    def show


    end

    private

    def trip_params
     params.require(:trip).permit(:name, :departure, :arrival)
    end

  end
end