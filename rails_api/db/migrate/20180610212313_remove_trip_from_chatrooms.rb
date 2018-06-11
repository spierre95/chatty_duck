class RemoveTripFromChatrooms < ActiveRecord::Migration[5.2]
  def change
    remove_reference :chatrooms, :trip, foreign_key: true
  end
end
