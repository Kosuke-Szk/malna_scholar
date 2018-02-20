class AddColumnToIssues < ActiveRecord::Migration[5.1]
  def change
    add_column :issues, :region, :string
    add_column :issues, :domain, :string
  end
end
