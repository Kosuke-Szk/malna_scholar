# require "spread_sheet_api"
# # include SpreadSheetAPI
class IssueController < ApplicationController
  require "#{Dir.pwd}/app/models/spread_sheet_api.rb"
  require "google_drive"
  before_action :logged_in_user, only: [:create, :update, :new, :edit, :destroy]
  
  def index
    @issues = Issue.all
  end

  def new
    @issue = Issue.new
  end

  def show
    @issue = Issue.find(params[:id])
    @comment = Comment.new

    @comments = @issue.comments.all
  end

  def create
    @issue = Issue.new(issue_params)
    if @issue.save
      redirect_to @issue
    else
      redirect_to root_path
    end
  end

  def destroy
    @issue = Issue.find(params[:id])
    @issue.destroy
    redirect_to root_path
  end

  def edit
    @issue = Issue.find(params[:id])
  end

  def update
    @issue = issue.find(params[:id])
    if @issue.update_attributes(issue_params)
      redirect_to @issue
    else
      render action: :edit
    end
  end

  def create_from_ws
    session = GoogleDrive::Session.from_config("config.json")
    ws = session.spreadsheet_by_key("10cgHCmhXFmVCMKGRv1tomRRykZpTz5koenF92Eu2LYY").worksheets[2]

    max_row = ws.num_rows
    max_col = ws.num_cols

    # p max_row
    # p max_col
    Issue.destroy_all
    # Issue.create(title: ws[2, 1], url:ws[2, 2], description:ws[2, 3], target:ws[2, 4], rate:ws[2, 5], payment:ws[2, 6])
# binding.pry

    (2..max_row).each do |row|
      # insert_row = Array.new(max_row, Array.new(max_col))
      Issue.create(title: ws[row, 1], url:ws[row, 2], description:ws[row, 3], target:ws[row, 4], rate:ws[row, 5], payment:ws[row, 6])
      # (1..max_col).each do |col|
      #   p ws[row, col]
      #   # insert_row[row, col] = ws[row, col]
      # end
      # Issue.create(title: insert_row[row.num, 1], url:insert_row[row.num, 2], description:insert_row[row.num, 3], target:insert_row[row.num, 4], rate:insert_row[row.num, 5], payment:insert_row[row.num, 6])
      
    end
    redirect_to root_path
  end

  private
    def issue_params
      params.require(:issue).permit(:title, :url, :description, :target, :rate, :payment).to_h
    end
end
