class IssueController < ApplicationController
  require "#{Dir.pwd}/app/models/spread_sheet_api.rb"
  require "google_drive"
  before_action :logged_in_user, only: [:create, :update, :new, :edit, :destroy, :create_from_ws]
  
  # 1pの掲載数
  PER = 9

  def index
    @issues = Issue.search_from_all(params[:search]).search_by_region(params[:region]).page(params[:page]).per(PER)
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
    Issue.destroy_all
    (2..max_row).each do |row|
      Issue.create(title: ws[row, 1], url:ws[row, 2], description:ws[row, 3], target:ws[row, 4], rate:ws[row, 5], payment:ws[row, 6], region:ws[row, 11], domain:ws[row, 12])
    end
    redirect_to root_path
  end

  private
    def issue_params
      params.require(:issue).permit(:title, :url, :description, :target, :rate, :payment).to_h
    end
end
