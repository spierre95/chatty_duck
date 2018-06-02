class MessageSerializer < ActiveModel::Serializer
  attributes :id, :chatroom_id, :content, :created_at
end
