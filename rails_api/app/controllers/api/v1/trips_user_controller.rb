module Api::V1
  class TripsUserController < ActionController::API

  def show
    @user_trips = User.includes(:trips).find(params[:id])
    render json: @user_trips.as_json.merge(trips: @user_trips.trips)
  end

  end
end