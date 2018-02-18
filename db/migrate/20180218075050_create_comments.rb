class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.string     :writer,   null: false
      t.text       :content,  null: false
      t.references :issue,    null: false

      t.timestamps
    end
  end
end
