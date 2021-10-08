class AnswersController < ApplicationController
    before_action :find_question 
    # destroy create
    def create
        @answer  = Answer.new(answer_params)
        @answer.question = @question
        # if saved successfuly then redirect to the show page of the question
        # otherwise still go to this show page but using render 
        # the difference between redirect and render
        # redirect is sending a get request '\questions\:id'
        # render is rendering the page 
        if @answer.save
            redirect_to question_path(@question.id), notice: 'Answer created!'
        else
            # we want to stay on this page
            @answers = @question.answers.order(created_at: :desc)
            # '/questions/show' is not the action 
            # it's the page /questions/show.html.erb
            render '/questions/show'
        end

    end
    
    def destroy
        @answer = Answer.find params[:id]
        @answer.destroy
        redirect_to question_path(@question), notice: 'Answer Deleted'
    end
    

    private

    def find_question
        @question = Question.find params[:question_id]
    end
    

    def answer_params
        params.require(:answer).permit(:body)
    end
    
end
