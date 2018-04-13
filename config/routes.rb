Rails.application.routes.draw do
  devise_for :users
  root 'top#index'
  resources :issue do
    collection do
      get 'tag_search'
    end
  end
  get 'insert_rows' => 'issue#create_from_ws'
  get 'insert_layers' => 'issue#create_sc_layer_from_ws'
  resources :comment, only: [:create, :new, :edit]
  get 'issues' => 'issue#index'

end
