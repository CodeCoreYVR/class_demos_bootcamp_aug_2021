class Api::V1::UsersController < Api::ApplicationController
    def current
        render json: current_user
    end
end
