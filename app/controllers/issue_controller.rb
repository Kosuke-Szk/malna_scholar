class IssueController < ApplicationController
  require "#{Dir.pwd}/app/models/spread_sheet_api.rb"
  require "google_drive"
  before_action :logged_in_user, only: [:create, :update, :new, :edit, :destroy, :create_from_ws]
  
  # 1pの掲載数
  PER = 9

  def index
    @issues = Issue.search_by_grade(params[:grade]).search_from_all(params[:search]).search_by_region(params[:region]).search_by_loan(params[:loan_or_pay], params[:rate]).page(params[:page]).per(PER)
  end

  def new
    @issue = Issue.new
  end

  def show
    @issue = Issue.find(params[:id])
    IssueLog.createLog(params[:id])
    @comment = Comment.new
    @comments = @issue.comments.all
    params[:amount].to_i != 0 ? @amount = params[:amount].to_i : @amount = 1000000
    params[:year].to_i != 0 ? @year = params[:year].to_i : @year = 4
    params[:back_year].to_i != 0 ? @back_year = params[:back_year].to_i : @back_year = 10
    # params[:back_amount].to_i != 0 ? @back_amount = params[:back_amount].to_i : @back_amount = 20000
    @data, @back_amount = Issue.create_graph_data(@amount, @year, @back_year)
    @labels = Issue.create_graph_label(@year + @back_year)
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
    # ActiveRecord::Base.connection.execute("TRUNCATE TABLE issues;")

    session = GoogleDrive::Session.from_config("config.json")
    ws = session.spreadsheet_by_key("10cgHCmhXFmVCMKGRv1tomRRykZpTz5koenF92Eu2LYY").worksheets[2]
    max_row = ws.num_rows
    max_col = ws.num_cols
    # Issue.destroy_all
    # issue_id = 240
    (2..max_row).each do |row|
      # issue_id += 1
      issue = Issue.create(id: ws[row, 1], title: ws[row, 2], url:ws[row, 3], description:ws[row, 4], loan_or_pay:ws[row, 5], number_of_people:ws[row, 6], requirement:ws[row, 7], region:ws[row, 9], rate:ws[row, 10], payment:ws[row, 11], joint_application:ws[row, 12], combined_use:ws[row, 13], image_url: ws[row, 15])
      # issue.id = issue_id
      # issue.tag_list = [ws[row, 12]]
      # issue.save!
    end
    # Issue.all.each do |issue|
    #   issue.update(image_url: Issue.get_og_image(issue.url))
    # end
    redirect_to root_path
  end

  def create_sc_layer_from_ws
    ActiveRecord::Base.connection.execute("TRUNCATE TABLE schlorship_layers;")
    session = GoogleDrive::Session.from_config("config.json")
    ws = session.spreadsheet_by_key("10cgHCmhXFmVCMKGRv1tomRRykZpTz5koenF92Eu2LYY").worksheets[3]
    max_row = ws.num_rows
    max_col = ws.num_cols
    (2..max_row).each do |row|
      sc = SchlorshipLayer.new(issue_id: ws[row, 1], title: ws[row, 2], layer:ws[row, 3], layer_data:ws[row, 4], price:ws[row, 5], range:ws[row, 7], accept_number:ws[row, 8], get_duration:ws[row, 9], back_duration:ws[row, 10])
      sc.save
    end
    redirect_to root_path
  end

  private
    def issue_params
      params.require(:issue).permit(:title, :url, :description, :target, :rate, :payment, :tag_list).to_h
    end
end
