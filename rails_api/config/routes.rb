# on vagrant run bin/rails s -b 0.0.0.0 to start server
Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, only: :index
      resources :messages, only: [:create]
      resources :chatrooms, only: [:index, :create]
      mount ActionCable.server => '/cable'
    end
  end
end
