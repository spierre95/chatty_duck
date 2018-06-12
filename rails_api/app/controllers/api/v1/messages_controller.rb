module Api::V1
  class MessagesController < ActionController::API
    def index
      @messages = Message.all
      render json: @messages
    end

    def create
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

    private

    def message_params
      params.require(:message).permit(:content, :chatroom_id ,:user_id)
    end

  end
end
