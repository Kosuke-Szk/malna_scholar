class TopController < ApplicationController
  def index
    # @issues = Issue.all
    @issue_regions = Issue.get_issue_regions()
    @tags = ActsAsTaggableOn::Tag.most_used(10)
    @issue =  Issue.new
    @issues = Issue.search_from_all(params[:search])
    unless params[:issue].nil?
      @issues = @issues.search_mutiple_loan(loan_or_pay: params[:issue][:loan_or_pay]).search_multiple_region(region: params[:issue][:region])
    else
      @issues
    end
  end

  private
    def top_params
      params.require(:issue).permit(:loan_or_pay)
    end
end
