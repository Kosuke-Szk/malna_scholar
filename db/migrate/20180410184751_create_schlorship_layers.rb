class CreateSchlorshipLayers < ActiveRecord::Migration[5.1]
  def change
    create_table :schlorship_layers do |t|
      t.references :issue, foreign_key: true
      t.string :title
      t.string :layer
      t.string :layer_data
      t.string :price
      t.string :range
      t.string :accept_number
      t.string :get_duration
      t.string :back_duration

      t.timestamps
    end
  end
end
