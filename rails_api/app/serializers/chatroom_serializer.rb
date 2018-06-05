class ChatroomSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :messages, :users
end
