module Api::V1
  class MessagesController < ActionController::API
    def index
      @messages = Message.all
      render json: @messages
    end

    def create
      @message = Message.new(message_params)
      @chatroom = Chatroom.find(message_params[:chatroom_id])
      if message.save
        serialized_data = ActiveModelSerializers::Adapter::Json.new(
          MessageSerializer.new(message)
        ).serializable_hash
        MessagesChannel.broadcast_to @chatroom, serialized_data
        head :ok
      end
    end

    private

    def message_params
      params.require(:message).permit(:content, :chatroom_id)
    end

  end
end
