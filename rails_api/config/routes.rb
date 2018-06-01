# on vagrant run bin/rails s -b 0.0.0.0 to start server
Rails.application.routes.draw do
  resources :users, only: :index
end
