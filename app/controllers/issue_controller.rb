class IssueController < ApplicationController
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

  private
    def issue_params
      params.require(:issue).permit(:title, :url, :description, :target, :rate, :payment).to_h
    end
end
