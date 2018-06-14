module Api::V1
  class ChatroomsController < ActionController::API
    def index
      @chatrooms = Chatroom.all
      render json: @chatrooms
    end

    def show
      @chatroom = Chatroom.includes(:messages).find(params[:id])
      render json: @chatroom.as_json.merge(messages: @chatroom.messages)
    end

    def create
      chatroom = Chatroom.new(chatroom_params)
      if chatroom.save
        serialized_data = ActiveModelSerializer::Adapter::Json.new(
          ChatroomSerializer.new(chatroom)
        ).serializable_hash
        ActionCable.server.broadcast 'chatrooms_channel', serialized_data
        head :ok
      end
    end


  def get_user_messages
    binding.pry
    @chatroom = Chatroom.find(params[:id])
    render json: @chatroom.as_json.merge(
      content: @chatroom.messages.created_at,
      image_url: @chatroom.messages.user.image_url,
      content: @chatroom.messages.content,
      user: @chatroom.messages.user.username,
      chatroom_id: @chatroom.messages.chatroom_id)
  end


    def add_to_chatroom
      puts params
      @user = User.find(params[:user_id])
      @chatroom = Chatroom.find(params[:chatroom_id])
      @chatroom.messages.new(content:params[:content], user_id:@user.id)
      @chatroom.save
    end

    private

    def chatroom_params
      params.require(:chatroom).permit(:name)
    end

  end
end
