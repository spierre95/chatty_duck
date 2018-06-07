class AddTripToChatrooms < ActiveRecord::Migration[5.2]
  def change
    add_reference :chatrooms, :trip, foreign_key: true
  end
end
