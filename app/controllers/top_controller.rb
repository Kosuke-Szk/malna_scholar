class TopController < ApplicationController
  def index
    @issues = Issue.all
    @issue_regions = Issue.get_issue_regions()
  end
end
