class AddChatroomToTrip < ActiveRecord::Migration[5.2]
  def change
    add_reference :trips, :chatroom, foreign_key: true
  end
end
