Rails.application.routes.draw do

  resources :chatrooms, only: [:index, :create]
  resources :messages, only: [:create]

  mount ActionCable.server => '/cable'

end
