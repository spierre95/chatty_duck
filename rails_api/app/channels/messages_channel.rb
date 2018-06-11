class MessagesChannel < ApplicationCable::Channel
  def subscribed
    # binding.pry
    puts "params #{params}"
    chatroom = Chatroom.find(params[:room])
    stream_for chatroom
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
