Rails.application.routes.draw do
  root 'top#index'
  resources :issue
  get 'issues' => 'issue#index'
end
