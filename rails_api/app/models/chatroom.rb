class Chatroom < ApplicationRecord
  has_many :messages
  has_many :chatrooms_users
  has_many :users, through: :chatrooms_users
end
