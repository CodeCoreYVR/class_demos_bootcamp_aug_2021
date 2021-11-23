Rails.application.routes.draw do
  get 'callbacks/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  get "/auth/github", as: :sign_in_with_github
  get "auth/:provider/callback", to: "callbacks#index"


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
    
    resources :likes, shallow: true, only:[:create, :destroy]
    # The `shallow: true` named argument will separate routes taht require the parent
    # from thos that don't. Routes that require the parent won't be changed (i.e. index, new, create)
    # Rouhtes that don't require the parent (i.e. show, edit, update, destroy) will have the parent 
    # prefix (/questions/:question_id) removed
    # for destroy => /questions/1/likes/5 => /likes/5


    get :liked, on: :collection
    # GET "/questions/liked" 
  end

  resources :users, only:[:new, :create, :show]

  resource :session, only: [:new, :create, :destroy]
  # `resource` is singular instead of `resources`
  # Unlike `resources`, `resource` will create routes that do CRUD opreation
  # on only one thing. Also there will be no index reoutes, and no route will
  # have an `:id` wildcard. but the controller name is still plural

  resources :job_posts, only: [:new, :create, :show, :index, :destroy, :edit, :update]

  #Delayed Job Routes:
  #We will go to this url to see this route: 'localhost:3000/delayed_job/overview'
  match(
    "/delayed_job",
    to: DelayedJobWeb,
    anchor: false,
    via: [:get, :post]
  )
  # https://guides.rubyonrails.org/active_job_basics.html #👈🏻 Link for active jobs

  # restful routes
  # /api/questions
  namespace :api, defaults: {format: :json} do
    # The namespace method in Rails routes makes it automatically prepend a /api infront of the routes
    # The option `defaults: {format: :json} will set json as the default response for all routes contained within this namespace block`
    #/api
    namespace :v1 do
      # /api/v1/questions
      resources :questions
      resource :session, only: [:create, :destroy]
      # get('users/current', {to:'users#current'})
      resources :users, only: [:create] do
        #get :current -> api/v1/users/:user_id/current
        get :current, on: :collection # -> api/v1/users/current
      end
      resources :gifts, only: [:create]
    end
    match "*unmatched_route", to:"application#not_found", via: :all
    #The route will match with any URL that hasn't been matched already
    #inside the api namespace
    #The "*" prefix in the route path allows this wildcard to match ANYTHING
    #The "via:" argument is required and is used to specify which methods this route applies to
    #Example: via: [:get, :post, :patch]
    #via: :all will match all possible methods
  end
end
