class ChangeIssues < ActiveRecord::Migration[5.1]
  # add
  #   requirement : text
  #   loan_or_pay : string
  #   number_of_people : integer
  #   joint_application : string
  #   combined_use : string
  #   rate : string
  # delete
  #   target
  #   domain
  #   rate

  def change
    remove_column :issues, :target, :string
    remove_column :issues, :domain, :string
    remove_column :issues, :rate,   :integer
    remove_column :issues, :payment,:integer

    add_column :issues, :requirement, :text
    add_column :issues, :loan_or_pay, :string
    add_column :issues, :number_of_people, :string
    add_column :issues, :joint_application, :string
    add_column :issues, :combined_use, :string
    add_column :issues, :rate, :string
    add_column :issues, :payment,:string
  end
end
