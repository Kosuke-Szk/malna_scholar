User.find_or_create_by(id: 1) do |user|
  user.email = 'malnaroot@admin.com'
  user.password = 'malnaroot'
end