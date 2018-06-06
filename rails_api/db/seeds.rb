Chatroom.destroy_all
User.destroy_all
Message.destroy_all
Trip.destroy_all
Location.destroy_all

puts "Creating chatrooms"
Chatroom.create!({
  name:Faker::GameOfThrones.city
})

Chatroom.create!({
  name:Faker::GameOfThrones.city
})

Chatroom.create!({
  name:Faker::GameOfThrones.city
})

puts "Creating users not creator"
5.times do User.create!({
first_name:Faker::Name.first_name,
last_name:Faker::Name.last_name,
username:Faker::Internet.user_name(7),
email:Faker::Internet.email,
password: "chattyduck",
password_confirmation: "chattyduck",
is_creator:false
})
end

puts "Creating user thats creator"
User.create!({
first_name:Faker::Name.first_name,
last_name:Faker::Name.last_name,
username:Faker::Internet.user_name(7),
email:Faker::Internet.email,
password: "chattyduck18",
password_confirmation: "chattyduck18",
is_creator:true
})

puts "Creating messages"
chatrooms = Chatroom.all
chatrooms.each do |chatroom|
  12.times do chatroom.messages.create!({
  content:Faker::Hipster.sentence(4)
  })
  end
end

puts 'Creating trips'
3.times do Trip.create!({
  name:Faker::StarWars.planet,
  departure:Faker::Date.between(Date.today, 5.days.from_now),
  arrival:Faker::Date.forward(22)
})
end

puts "Creating locations"
trips = Trip.all
trips.each do |trip|
  5.times do trip.locations.create!({
    name:Faker::GameOfThrones.city,
    departure:Faker::Date.between(6.days.from_now, 10.days.from_now),
    arrival:Faker::Date.between(10.days.from_now, 20.days.from_now)
  })
  end
end

