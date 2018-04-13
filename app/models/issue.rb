class Issue < ApplicationRecord
  has_many :comments
  has_many :schlorship_layers

  acts_as_taggable

  scope :by_loan,   lambda {|loan_or_pay| where(loan_or_pay: loan_or_pay)}
  scope :by_region, lambda {|region| where(region: region)}

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

  def self.search_mutiple_loan(params={})
    if params[:loan_or_pay]
      results = Issue.by_loan(params[:loan_or_pay])
    else
      results = Issue.all
    end
    return results
  end

  def self.search_multiple_region(params={})
    if params[:region]
      results = Issue.by_region(params[:region])
    else
      results = Issue.all
    end
    return results
  end

  def self.get_og_image(url)
    begin
      page = MetaInspector.new(url)
      ogimg = page.meta_tags['property']['og:image']
      if !ogimg.nil? && ogimg != [""]
        return page.meta_tags['property']['og:image']
      else
        return page.images.best
      end
    rescue Exception => e
      return ''
    end
  end

  def self.create_graph_data(price, duration ,back_duration)
    data_array = []
    max_price = 0
    (1..duration).each do |d|
      data_array << d * price
      max_price = d * price
    end
    back_price = max_price / back_duration

    (1..back_duration).each do |d|
      if (max_price - d * back_price) < 0
        data_array << 0
      else
        data_array << max_price - d * back_price
      end
    end
    return data_array, back_price
  end

  def self.create_graph_label(duration)
    label_array = []
    (1..duration).each do |d|
      label_array << d.to_s + "年目"
    end
    return label_array
  end
end
