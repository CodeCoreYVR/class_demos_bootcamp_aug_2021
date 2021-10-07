Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
 
  # when people typed "localhost:3000" 
  # it's sending a http get request to this path "localhost:3000"
  # it will be handled by "WelcomeController" the "index" action
  get('/',{to:'welcome#index'})
  get('/goodbye',{to:'welcome#goodbye', as: :goodbye})
  get('/form_example',{to:'welcome#form_example'})

  # RESTful routes
  # get('/questions', {to: 'questions#index', as: :questions})
  # get('/questions/new',{to: 'questions#new'})
  # # The :as option creates a named path.
  # # You can then call this path in your controllers and views (e.g. redirect_to question_path) etc.
  # get('/questions/:id',{to: 'questions#show', as: :question })

  # delete('/questions/:id',{to: 'questions#destroy'})

  # post('/questions',{to: 'questions#create'})

  # get('/questions/:id/edit',{to: 'questions#edit', as: :edit_question })

  # patch('/questions/:id',{to: 'questions#update'})

  resources :questions

end
