class TopController < ApplicationController
  def index
    @issues = Issue.all
    @issue_regions = Issue.get_issue_regions()
    @tags = ActsAsTaggableOn::Tag.most_used(10)
  end
end
