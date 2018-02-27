class CommentController < ApplicationController
  def new
    @comment = Comment.new
    @issue = Issue.find_by(id: params[:issue_id])

  end

  def create
    @comment = Comment.new(comment_params)
    @issue   = Issue.find(params[:comment][:issue_id])

    respond_to do |format|
      if @comment.save
        format.html { redirect_to @issue, notice: 'comment was successfully created.' }
        format.json { render :show, status: :created, location: @comment }
        format.js { @status = "success"}
      else
        format.html { render :new }
        format.json { render json: @comment.errors, status: :unprocessable_entity }
        format.js { @status = "fail" }
      end
    end
  end

  private
    def comment_params
      params.require(:comment).permit(:writer, :content, :issue_id).to_h
    end
end
