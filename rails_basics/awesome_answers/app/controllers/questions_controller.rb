class QuestionsController < ApplicationController
    # rails g controller questions --no-helper --no-assets
    # if you don't need helper.rb and questions.scss files
    # you can add those options when you run rails g controller
    before_action :find_question, only: [:edit, :update, :show, :destroy]

    def index
        @questions = Question.all.order(created_at: :desc)
        # Model.all is a method built into actice record used to return
        # all records of that model
        # thi sign @ is necessary to make the variable to the view pages
        # it is called an "instance variable"
    end

    def show
        
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
    


    private 

    def find_question
        @question = Question.find params[:id]
    end
    
    def question_params
        params.require(:question).permit(:title,:body)
    end
    
end
