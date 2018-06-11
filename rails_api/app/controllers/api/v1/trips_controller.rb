module Api::V1
  class TripsController < ActionController::API

    def index
      @trips = Trip.all
      render json: @trips
    end


    def show
      @trip = Trip.find(params[:id])
      render json: @trip.as_json.merge(users: @trip.users)
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
     params.require(:trip).permit(:name, :departure, :arrival,:image_url,:chatroom_id)
    end

  end
end