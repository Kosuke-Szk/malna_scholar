class CreateIssueLogs < ActiveRecord::Migration[5.1]
  def change
    create_table :issue_logs do |t|
      t.integer :issue_id

      t.timestamps
    end
  end
end
