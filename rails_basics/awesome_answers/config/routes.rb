Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
 
  # when people typed "localhost:3000" 
  # it's sending a http get request to this path "localhost:3000"
  # it will be handled by "WelcomeController" the "index" action
  get('/',{to:'welcome#index'})
  get('/goodbye',{to:'welcome#goodbye', as: :goodbye})
  get('/form_example',{to:'welcome#form_example'})
end
