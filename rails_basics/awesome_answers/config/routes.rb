Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
 
  # when people typed "localhost:3000" 
  # it's sending a http get request to this path "localhost:3000"
  # it will be handled by "WelcomeController" the "index" action
  # as: 'root'
  # This defines a route rule that says when we receive
  # a GET request with the URL '/', handle it with the
  # WelcomeController with the index action inside that
  # controller.
  get('/', {to: 'welcome#index', as: 'root'})
  get('/goodbye',{to:'welcome#goodbye', as: :goodbye})
  get('/form_example',{to:'welcome#form_example'})

  # RESTful routes
  #A RESTful route provides mapping from HTTP verbs (like GET, POST, PATCH, PUT, DELETE)
  #to the contoller CRUD actions (create, read, update, destroy).
  #It depends on the HTTP verb and the URL, and not just solely on the URL

  #RESTful Routes for Questions resource
  #1 index: GET "/resources" - return all records of that resource
  #2 show: GET "/resources/:id" - returns one instance of the resource
  #3 new: GET "/resources/new" - return a view page with form to create a resource
  #4 create: POST "/resources" - handle the submission to the "new form" and inserts a new resource in the db
  #5 edit: GET "/resources/:id/edit" - returns a view form to edit an existing resource
  #6 update: PATCH "/resources/:id" - handle submission of the "edit form" and update the resource with specific id in the db
  #7 destroy: DELETE "/resources/:id" - delete a record with specific id from the database
  
  # get('/questions', {to: 'questions#index', as: :questions})
  # get('/questions/new',{to: 'questions#new'})
  # # The :as option creates a named path.
  # # You can then call this path in your controllers and views (e.g. redirect_to question_path) etc.
  # get('/questions/:id',{to: 'questions#show', as: :question })

  # delete('/questions/:id',{to: 'questions#destroy'})

  # post('/questions',{to: 'questions#create'})

  # get('/questions/:id/edit',{to: 'questions#edit', as: :edit_question })

  # patch('/questions/:id',{to: 'questions#update'})

  resources :questions do
    # Routes written inside of a block passed a resource method will be prefixed by
    # a path corresponding to the passed in symbol
    # in this case, all nested routes will be pre-fixed with '/questions/:question_id'
    resources :answers, only:[:create, :destroy]
    # resources :answers, except: [:show, :new, :index, :edit, :update]
  end

  resources :users, only:[:new, :create]

  resource :session, only: [:new, :create, :destroy]
  # `resource` is singular instead of `resources`
  # Unlike `resources`, `resource` will create routes that do CRUD opreation
  # on only one thing. Also there will be no index reoutes, and no route will
  # have an `:id` wildcard. but the controller name is still plural
end
