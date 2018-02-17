class IssueController < ApplicationController
  def index
    @issues = Issue.all
  end

  def new
    @issue = Issue.new
  end

  def show
    @issue = Issue.find(params[:id])
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
    
  end

  def edit
    
  end

  private
    def issue_params
      params.require(:issue).permit(:title, :url, :description, :target, :rate, :payment).to_h
    end
end
