Rails.application.routes.draw do
  devise_for :users
  root 'top#index'
  resources :issue
  get 'insert_rows' => 'issue#create_from_ws'
  resources :comment, only: [:create, :new, :edit]
  get 'issues' => 'issue#index'

end
