Chatroom.destroy_all
User.destroy_all
Message.destroy_all

Chatroom.create!({
  name:'Test Group'
})

5.times do  User.create!({
first_name:Faker::Name.first_name,
last_name:Faker::Name.last_name,
username:Faker::Internet.user_name,
email:Faker::Internet.email,
password_digest:Faker::Internet.password,
is_creator:false
})
end

User.create!({first_name:Faker::Name.first_name,
last_name:Faker::Name.last_name,
username:Faker::Internet.user_name,
email:Faker::Internet.email,
password_digest:Faker::Internet.password,
is_creator:true
})


12.times do Message.create!({
chatroom_id: 1,
content:Faker::Hipster.sentence(4)
})
end
