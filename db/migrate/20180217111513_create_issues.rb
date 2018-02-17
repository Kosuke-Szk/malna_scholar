class CreateIssues < ActiveRecord::Migration[5.1]
  def change
    create_table :issues do |t|
      t.string :title
      t.string :url
      t.text :description
      t.string :target
      t.float :rate
      t.integer :payment

      t.timestamps
    end
  end
end
