class Issue < ApplicationRecord
  has_many :comments
  def self.search(search)
    if search
      Issue.where(['title LIKE ?', "%#{search}%"])
    else
      Issue.all
    end
  end
end
