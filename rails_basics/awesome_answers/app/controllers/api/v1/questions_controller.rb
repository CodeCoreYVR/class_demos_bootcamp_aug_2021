class Api::V1::QuestionsController < Api::ApplicationController
    # this controller is generated by rails g controller api/v1/questions --no-assets --no-helper --skip-template-engine
    # also remember to change the parent class => Api::ApplicationController
    before_action :find_question,  except: [:index, :show, :create]
    before_action :authenticate_user!, except: [:index, :show]

    def index
        # return all the questions in json format
        questions = Question.order(created_at: :desc)
        render(json: questions, each_serializer: QuestionCollectionSerializer)
    end

    def show
        # return a single question in json format
        render(json: @question)
    end
    
    def create
        # when user send a request generate a new question
        # response failed or success
        question = Question.new(question_params)
        question.user = current_user
        if question.save
            render json:{id: question.id}
        else
            render json:{errors:question.errors, status:422}
        end
    end
    
    def destroy
        # based on the id of the user requset, delete that question
        if @question.destroy
            render(json:{status:200})
        else
            render(json:{status:500})
        end
    end

    def update
        if @question.update(question_params)
            render json: {id: @question.id}
        else
            render json:{ errors:@question.errors, status: 422}
        end
    end
    
    private

    def find_question
        @question = Question.find(params[:id])    
    end
    def question_params
        params.require(:question).permit(:title,:body)
    end
    
end
