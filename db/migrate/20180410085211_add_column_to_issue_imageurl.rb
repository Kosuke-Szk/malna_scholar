class AddColumnToIssueImageurl < ActiveRecord::Migration[5.1]
  def change
    add_column :issues, :image_url, :string
  end
end
