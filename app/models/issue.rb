class Issue < ApplicationRecord
  has_many :comments
  def self.search(search)
    if search
      Issue.where(['title LIKE ?', "%#{search}%"])
    else
      Issue.all
    end
  end

  def self.search_by_region(region)
    if region
      Issue.where(['region = ?', "#{region}"])
    else
      Issue.all
    end
  end

  def self.get_issue_regions()
    Issue.find_by_sql(['SELECT DISTINCT region FROM issues']).pluck(:region)
  end
end
