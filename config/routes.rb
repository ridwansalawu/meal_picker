Rails.application.routes.draw do
  get 'cuisines/get'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/api/users', to: 'users#get'
  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
  !request.xhr? && request.format.html?
end
end
