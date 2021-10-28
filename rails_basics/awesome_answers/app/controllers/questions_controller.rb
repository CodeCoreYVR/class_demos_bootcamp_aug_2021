class QuestionsController < ApplicationController
    # rails g controller questions --no-helper --no-assets
    # if you don't need helper.rb and questions.scss files
    # you can add those options when you run rails g controller

    # this method find_question gonna be called before the requests get to the (edit, update, show, destroy) actions
    before_action :find_question, only: [:edit, :update, :show, :destroy]
    before_action :authenticate_user!, except: [:index, :show]
    before_action :authorize_user!, only: [:update, :destroy]
    def index
        # @questions = Question.all.order(created_at: :desc)
        # Model.all is a method built into actice record used to return
        # all records of that model
        # thi sign @ is necessary to make the variable to the view pages
        # it is called an "instance variable"
        if params[:tag]
            @tag = Tag.find_or_initialize_by(name: params[:tag])
            @questions = @tag.questions.order('updated_at DESC')
        else
            @questions = Question.order(created_at: :desc)
            respond_to do |format|
                format.html {render}
                format.json {render json: @questions}
            end
        end
    end

    def show
        @answers = @question.answers.order(created_at: :desc)
        @answer = Answer.new
        @like = @question.likes.find_by(user: current_user)
    end
    
    def destroy
        @question.destroy
        redirect_to questions_path
    end
    
    def new
        @question = Question.new
    end

    def create
        # get the data from the form and add it into DB
        # User the  `require` on the params object to retrieve the nested hash of a key
        # usually corresponding the na-value pairs of a form
        # `permit` to specify all input names are  allowed to submit to the DB
        # @question = Question.new(params.require(:question).permit(:title,:body))
        @question = Question.new(question_params)
        @question.user = current_user
        if @question.save
            flash[:notice] = "Question created successfully!"
            redirect_to question_path(@question.id)
        else
            render :new
        end

    end

    def edit
        
    end
    
    def update
        if @question.update(question_params)
            redirect_to question_path(@question.id)
        else
            render :edit
        end 
    end
    
    def liked
        @questions = current_user.liked_questions
    end
    

    private 

    def find_question
        @question = Question.find params[:id]
    end
    
    def question_params
        params.require(:question).permit(:title,:body,:tag_names)
    end

    def authorize_user!
        redirect_to root_path, alert: "Not Authorized!" unless can?(:crud, @question)
    end
    
    
end
