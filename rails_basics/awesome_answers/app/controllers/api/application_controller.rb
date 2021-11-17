class Api::ApplicationController < ApplicationController
    skip_before_action :verify_authenticity_token

    #Error message handling
    #To send a json error message when user types in, for example: localhost:3000/api/v1/somethingwrong
    def not_found
        render(
            json: {
                errors: [
                    {
                        type: "Not Found"
                    }
                ]
            },
            status: :not_found #alias for 404 in rails
        )
    end
    
    private

    def authenticate_user!
        unless current_user.present?
            render(json:{status: 401})
        end
    end
    
end
