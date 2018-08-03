Rails.application.routes.draw do
  root to: "pages#root"

  namespace 'api' do
    resources :formulation, only: [:index]
    resources :formulation_ingredient, only: [:index]
    resources :ingredient, only: [:index]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
