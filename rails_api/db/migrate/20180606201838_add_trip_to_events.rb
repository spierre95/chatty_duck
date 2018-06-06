class AddTripToEvents < ActiveRecord::Migration[5.2]
  def change
    add_reference :events, :trip, foreign_key: true
  end
end
