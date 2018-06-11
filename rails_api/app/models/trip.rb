class Trip < ApplicationRecord
  has_many :trips_users
  has_many :users, through: :trips_users

  has_many :locations
  has_many :events
  belongs_to :chatroom
end
