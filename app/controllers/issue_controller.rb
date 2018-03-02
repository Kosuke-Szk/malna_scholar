class IssueController < ApplicationController
  require "#{Dir.pwd}/app/models/spread_sheet_api.rb"
  require "google_drive"
  before_action :logged_in_user, only: [:create, :update, :new, :edit, :destroy, :create_from_ws]
  
  # 1pの掲載数
  PER = 9

  def index
    @issues = Issue.search_from_all(params[:search]).search_by_region(params[:region]).search_by_loan(params[:loan_or_pay], params[:rate]).page(params[:page]).per(PER)
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

  def tag_search
    @issues = Issue.tagged_with(params[:format]).page(params[:page]).per(PER)
    render template: "issue/index"
  end

  def create_from_ws
    session = GoogleDrive::Session.from_config("config.json")
    ws = session.spreadsheet_by_key("10cgHCmhXFmVCMKGRv1tomRRykZpTz5koenF92Eu2LYY").worksheets[2]
    max_row = ws.num_rows
    max_col = ws.num_cols
    Issue.destroy_all
    (2..max_row).each do |row|
      issue = Issue.new(title: ws[row, 1], url:ws[row, 2], description:ws[row, 3], loan_or_pay:ws[row, 4], number_of_people:ws[row, 5], requirement:ws[row, 6], region:ws[row, 7], rate:ws[row, 8], payment:ws[row, 9], joint_application:ws[row, 10], combined_use:ws[row, 11])
      # issue.tag_list = [ws[row, 12]]
      # issue.save
    end
    redirect_to root_path
  end

  private
    def issue_params
      params.require(:issue).permit(:title, :url, :description, :target, :rate, :payment, :tag_list).to_h
    end
end
