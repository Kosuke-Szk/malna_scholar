Rails.application.routes.draw do
  devise_for :users
  root 'top#index'
  resources :issue
  resources :comment, only: [:create, :new, :edit]
  get 'issues' => 'issue#index'

end
