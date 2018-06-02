class RemoveIsPrivateFromChatrooms < ActiveRecord::Migration[5.2]
  def change
    remove_column :chatrooms, :is_private, :boolean
  end
end
