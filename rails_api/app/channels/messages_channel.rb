class MessagesChannel < ApplicationCable::Channel
  def subscribed
    # chatroom = Chatroom.find(params[:chatroom])
    chatroom = 1
    stream_for chatroom
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
