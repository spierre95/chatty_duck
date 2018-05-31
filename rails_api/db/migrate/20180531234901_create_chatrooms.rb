class CreateChatrooms < ActiveRecord::Migration[5.2]
  def change
    create_table :chatrooms do |t|
      t.boolean :is_private

      t.timestamps
    end
  end
end
