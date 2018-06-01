class CreateTrips < ActiveRecord::Migration[5.2]
  def change
    create_table :trips do |t|
      t.string :name
      t.datetime :departure
      t.datetime :arrival

      t.timestamps
    end
  end
end
