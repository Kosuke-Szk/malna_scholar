class TopController < ApplicationController
  def index
    @issues = Issue.all
  end
end
