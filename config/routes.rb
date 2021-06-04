Rails.application.routes.draw do
  root 'pages#index'

  namespace :api do
    namespace :v1 do
      resources :airlines, param: :slug
      resources :reviews, only:[:create, :destroy]
    end
  end

  #this will ensure that if no path is find, it redirects to the page index root
  get "*path", to: 'pages#index', via: :all
end
