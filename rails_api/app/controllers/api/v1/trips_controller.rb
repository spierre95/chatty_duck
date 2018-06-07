module Api::V1
  class TripsController < ActionController::API

    def index
      @trips = Trip.all
      render json: @trips
    end

    def create

      @trip = Trip.new(trip_params)
      @chatroom = Chatroom.new(
        name: trip_params[:name]
        )
      @chatroom.save
      @trip.save

    end

    private

    def trip_params
     params.require(:trip).permit(:name, :departure, :arrival)
    end

  end
end