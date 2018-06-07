class Trip < ApplicationRecord
  has_many :trips_users
  has_many :users, through: :trips_users

  has_many :locations
  has_many :events

  has_many :chatrooms
end
