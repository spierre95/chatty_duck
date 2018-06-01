class User < ApplicationRecord
has_and_belongs_to_many :trips
has_and_belongs_to_many :chatrooms
has_many :photos
has_many :events

end
