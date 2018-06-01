class RemoveIsPrivateFromMessages < ActiveRecord::Migration[5.2]
  def change
    remove_column :messages, :is_private, :boolean
  end
end
