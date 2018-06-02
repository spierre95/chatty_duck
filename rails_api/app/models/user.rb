class User < ApplicationRecord
has_and_belongs_to_many :trips
has_many :chatrooms, through: :trips
has_many :photos
has_many :events

end
