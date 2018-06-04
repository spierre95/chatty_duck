# on vagrant run bin/rails s -b 0.0.0.0 to start server
Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, only: [:index,:create]
      resources :messages, only: [:index,:create]
      resources :chatrooms, only: [:index,:create]
    end
  end
  post 'authenticate', to: 'authentication#authenticate'
end
