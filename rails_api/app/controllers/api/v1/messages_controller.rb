module Api::V1
  class MessagesController < ActionController::API
    def index
      @messages = Message.all
      render json: @messages
    end


## works and broadcasts but doesnt get the username
  def create
     puts "message params #{message_params}"
     @chatroom = Chatroom.find(message_params[:chatroom_id])
     @chatroom.messages.new(message_params)
     if @chatroom.save
       serialized_data = ActiveModelSerializers::Adapter::Json.new(
         MessageSerializer.new(@chatroom.messages.last)
       ).serializable_hash
       MessagesChannel.broadcast_to @chatroom, serialized_data
       head :ok
     end
   end



## almsot works, the serializer is fucking us over
    # def create
    #   puts "params #{params}"
    #   binding.pry
    #   @chatroom = Chatroom.find(message_params[:chatroom_id])
    #   @chatroom.messages.new(message_params)
    # if @chatroom.save
    #     serialized_data = ActiveModelSerializers::Adapter::Json.new(
    #       MessageSerializer.new({
    #       message: @chatroom.messages.last.content,
    #       user: @chatroom.messages.last.user.username,
    #       chatroom_id: @chatroom.messages.last.chatroom_id})
    #       ).serializable_hash
    #     MessagesChannel.broadcast_to @chatroom, serialized_data
    #     head :ok
    #   end
    # end

## gets response but doesnt broadcast
    # def create
    #   puts "params #{params}"
    #   @chatroom = Chatroom.find(message_params[:chatroom_id])
    #   @chatroom.messages.new(message_params)
    #   if @chatroom.save
    #       MessagesChannel.broadcast_to @chatroom,
    #       message: @chatroom.messages.last.content,
    #       user: @chatroom.messages.last.user.username,
    #       chatroom_id: @chatroom.messages.last.chatroom_id
    #     head :ok
    #   end
    # end

## reference, doesnt do much
    # def create
    #   message = Message.new(message_params)
    #   chatroom = message.chatroom_id
    #   if message.save
    #       ActionCable.server.broadcast 'messages',
    #       message: message.content,
    #       user: message.user.username,
    #       chatroom_id: message.chatroom_id
    #       head :ok
    #   end
    # end

    private

    def message_params
      params.require(:message).permit(:content, :chatroom_id, :user_id)
    end

  end
end
