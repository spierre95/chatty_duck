class CreatePhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.string :url
      t.boolean :is_profile

      t.timestamps
    end
  end
end
