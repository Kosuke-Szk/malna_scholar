class TopController < ApplicationController
  def index
    @issue_regions = Issue.get_issue_regions()
    @issue =  Issue.new
    @issues = Issue.search_from_all(params[:search])

    @issues = @issues.search_by_grade(params[:grade])

    unless params[:issue].nil?
      @issues = @issues.search_mutiple_loan(params[:issue][:loan_or_pay], params[:rate]).search_multiple_region(region: params[:issue][:region])
    else
      @issues
    end
  end

  private
    def top_params
      params.require(:issue).permit(:loan_or_pay)
    end
end
