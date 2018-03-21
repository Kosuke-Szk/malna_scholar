class Issue < ApplicationRecord
  has_many :comments
  acts_as_taggable
  def self.search(search)
    if search
      patterns = search.split(/[ ,　]/)
      sql_body = ''
      patterns.each do | pattern |
        sql_body += ' and ' unless sql_body.blank?
        sql_body += " title LIKE '%#{pattern}%' OR region LIKE '%#{pattern}%' OR description LIKE '%#{pattern}%' OR requirement LIKE '%#{pattern}%' "
      end
      sql = "select * from issues where #{sql_body} order by id desc"
      memo_ids = Issue.find_by_sql(sql)
      ids = []
      memo_ids.each do |qi|
        ids.push(qi.id)
      end
      where(:id => ids)
    else
      Issue.all
    end
  end

  def self.search_from_all(search)
    if search == ''
      Issue.all
    elsif search
      patterns = search.split(/[ ,　]/)
      sql_body = ''
      patterns.each do | pattern |
        sql_body += ' and ' unless sql_body.blank?
        sql_body += " (title LIKE '%#{pattern}%' OR region LIKE '%#{pattern}%' OR description LIKE '%#{pattern}%' OR requirement LIKE '%#{pattern}%') "
      end
      sql = "select * from issues where #{sql_body} order by id desc;"

      memo_ids = Issue.find_by_sql(sql)
      ids = []
      memo_ids.each do |qi|
        ids.push(qi.id)
      end
      where(:id => ids)
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
