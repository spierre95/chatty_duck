class AddIsCreatorToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :is_creator, :boolean
  end
end
