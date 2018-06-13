require 'resolv-replace.rb'

module Api::V1
  class UsersController < ActionController::API
    def create
      @user = User.new(user_params)
      @user.save
    end

    def index
      @users = User.all
      render json: @users
      # UserInviteMailer.user_invite.deliver_now
    end

    def show

@user = User.find(params[:id])
@user_trips = @user.trips
trips_data = {}
trips_data[:id] = @user.id
trips_data[:first_name] = @user.first_name
trips_data[:last_name] = @user.last_name
trips_data[:username] = @user.username
trips_data[:email] = @user.email
trips_data[:is_creator] = @user.is_creator
trips_data[:image_url] = @user.image_url
trips_data[:trips] = []
@user_trips.each do |user_trip|
  trip = {}
  trip[:id] = user_trip.id
  trip[:name] = user_trip.name
  trip[:name] = user_trip.name
  trip[:departure] = user_trip.departure
  trip[:arrival] = user_trip.arrival
  trip[:image_url] = user_trip.image_url
  trips_data[:trips].push(trip)
    locations = Trip.find(user_trip.id).locations
    trip[:locations] = []
    locations.each do |location|
      location_hash = {}
      location_hash[:id] = location.id
      location_hash[:name] = location.name
      location_hash[:departure] = location.departure
      location_hash[:arrival] = location.arrival
      trip[:locations].push(location_hash)
    end
end

render json: trips_data.to_json

         # @trip_locations = Trip.includes(:locations).find(params[:id])
         # @user_trips = User.includes(:trips).find(params[:id])
         # render json: @user_trips.as_json.merge(trips: @trip_locations.as_json.merge(locations: @trip_locations.locations))

    end

def update_image
  user = User.find(params[:id])
  user.update_column(:image_url, params[:image_url])
end

  private

  def user_params
    params.require(:user).permit(
      :first_name,:last_name,:username,:email,:password,:password_confirmation,:is_creator,:image_url
    )
  end


  end
end
