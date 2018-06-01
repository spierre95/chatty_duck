class Event < ApplicationRecord
  belongs_to :user
  belongs_to :trip
  has_many :photos
end
