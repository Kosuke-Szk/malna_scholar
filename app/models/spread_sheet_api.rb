require "google_drive"
# require "./issue.rb"
# require 'active_support/concern'
# require "#{Dir.pwd}/app/models/issue.rb"


# module SpreadSheetApi
#   def self.create_from_ws
    # session = GoogleDrive::Session.from_config("config.json")
    # ws = session.spreadsheet_by_key("10cgHCmhXFmVCMKGRv1tomRRykZpTz5koenF92Eu2LYY").worksheets[2]

    # max_row = ws.num_rows
    # max_col = ws.num_cols

    # p max_row
    # p max_col
    # # Issue.destroy_all

    # (2..max_row).each do |row|
    #   insert_row = Array.new(max_row, Array.new(max_col))
    #   (1..max_col).each do |col|
    #     # p ws[row, col]
    #     insert_row[row, col] = ws[row, col]
    #   end
    #   issue = Issue.new(title: insert_row[row, 1], url:insert_row[row, 2], description:insert_row[row, 3], target:insert_row[row, 4], rate:insert_row[row, 5], payment:insert_row[row, 6])
    #   issue.save
    # end      
#   end
# end