class Issue < ApplicationRecord
  has_many :comments
  acts_as_taggable
  def self.search(search)
    if search
      Issue.where(['title LIKE ?', "%#{search}%"])
    else
      Issue.all
    end
  end

  def self.search_from_all(keyword)
    if keyword
      Issue.where(['title LIKE ? OR description LIKE ?', "%#{keyword}%", "%#{keyword}%"])
    else
      Issue.all
    end
  end

  def self.search_by_region(region)
    if region
      Issue.where(['region LIKE ?', "%#{region}%"])
    else
      Issue.all
    end
  end

  def self.search_by_loan(loan_or_pay, rate)
    if loan_or_pay
      Issue.where(['loan_or_pay LIKE ? AND rate LIKE ?', "%#{loan_or_pay}%", "%#{rate}%"])
    else
      Issue.all
    end
  end

  def self.get_issue_regions()
    Issue.find_by_sql(['SELECT DISTINCT region FROM issues']).pluck(:region)
  end
end
