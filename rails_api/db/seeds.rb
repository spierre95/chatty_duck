User.destroy_all

5.times do  User.create!({
first_name:Faker::Name.first_name,
last_name:Faker::Name.last_name,
username:Faker::Internet.user_name,
email:Faker::Internet.email,
password_digest:Faker::Internet.password
})
end