class AddChatroomToUser < ActiveRecord::Migration[5.2]
  def change
    add_reference :users, :chatroom, foreign_key: true
  end
end
