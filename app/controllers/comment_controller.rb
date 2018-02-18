class CommentController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    @issue   = Issue.find(params[:comment][:issue_id])
    if @comment.save
      redirect_to @issue
    else
      redirect_to root_path
    end
  end

  private
    def comment_params
      params.require(:comment).permit(:writer, :content, :issue_id).to_h
    end
end
