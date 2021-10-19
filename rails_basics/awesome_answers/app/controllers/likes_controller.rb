class LikesController < ApplicationController
    def create
        question = Question.find params[:question_id]
        like = Like.new(question: question, user: current_user)
        if can?(:like, question)
            if like.save
                flash[:notice] = "Question Liked"
            else
                flash[:alert] = like.errors.full_messages.join(', ')
            end
        else
            flash[:alert] = "You can't like ur own question"
        end
        redirect_to question_path(question)
    end
    
    def destroy
        like = Like.find params[:id]
        if can?(:destroy, like)
            if like.destroy
                flash[:notice] = "Question Unliked"
            else
                flash[:alert] = like.errors.full_messages.join(', ')
            end
        else
            flash[:alert] = "You can't destroy a like you don't own"
        end
        redirect_to question_path(like.question)
    end
    
end
