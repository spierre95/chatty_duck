class ChatroomSerializer < ActiveModel::Serializer
  attributes :id, :is_private
  has_many :messages
end
