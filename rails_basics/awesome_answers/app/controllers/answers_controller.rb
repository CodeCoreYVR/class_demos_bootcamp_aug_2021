class AnswersController < ApplicationController
    before_action :find_question 
    # before_action :find_answer, only: [:destroy]
    before_action :authenticate_user!
    # before_action :authorize_user!, only: [:destroy]
    # destroy create
    def create
        @answer  = Answer.new(answer_params)
        @answer.question = @question
        @answer.user = current_user
        # if saved successfuly then redirect to the show page of the question
        # otherwise still go to this show page but using render 
        # the difference between redirect and render
        # redirect is sending a get request '\questions\:id'
        # render is rendering the page 
        if @answer.save
            AnswerMailer.new_answer(@answer).deliver_later
            #Or try this 
            #AnswerMailer.delay(run_at:  1.minutes.from_now).new_answer(@answer)
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
        if can?(:crud, @answer)
            @answer.destroy
            redirect_to question_path(@question), notice: 'Answer Deleted'
        else
            redirect_to root_path, alert: 'Not Authorized'
        end
        
    end
    

    private

    def find_question
        @question = Question.find params[:question_id]
    end
    
    def find_answer
        @answer = Answer.find params[:id]
    end
    

    def answer_params
        params.require(:answer).permit(:body)
    end

    # def authorize_user!
    #     redirect_to root_path, alert: 'Not Authorized' unless can?(:crud, @answer)
    # end
    
    
end
