class AddImageUrlToTrip < ActiveRecord::Migration[5.2]
  def change
    add_column :trips, :image_url, :string
  end
end
