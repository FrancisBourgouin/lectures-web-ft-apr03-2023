Rails.application.routes.draw do
  resources :urls
  resources :users


  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "urls#index"
  
  get "/register" => "users#new"
  post "/users" => "users#create"


  get "/login" => "sessions#new"
  get "/logout" => "sessions#destroy"
  post "/login" => "sessions#create"

end
