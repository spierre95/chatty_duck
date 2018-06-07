class RemoveChatroomFromUsers < ActiveRecord::Migration[5.2]
  def change
    remove_reference :users, :chatroom, foreign_key: true
  end
end
