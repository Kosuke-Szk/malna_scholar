class IssueLog < ApplicationRecord
  def self.createLog(issue_id)
    self.create(issue_id: issue_id)
  end
end
