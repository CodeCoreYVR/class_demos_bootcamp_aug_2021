class Api::ApplicationController < ApplicationController
    skip_before_action :verify_authenticity_token

    #rescue_from PRIORITY
    #The priority of rescue_from is in the reverse order of where the calls are made,
    #meaning that the more specific errors should be rescued laste and general errors
    #should be rescued first

    #The StandardError class is an ancestor of all the errors that programmers could possibly
    #cause in their program. Rescuing from it will prevent nearly all errors from crashing the program
    #NOTE: Use this very carefully and make sure to always log the error messages in some form

    rescue_from StandardError, with: :standard_error

    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid

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

    protected
    #protected is like a private except thst it prevents
    #decendent classes from using the protected methods

    def standard_error(error)
        #When we rescue an error, we prevent our program from doing what it would normally do
        #-crashing, and things such as logging details and the backtrace. It's important to always
        #log this information when rescuing a general type

        #Use the logger.error method with an error's message to
        #log the error details again
        logger.error error.full_message
        render(
            status: 500,
            json:{
                errors: [
                    {
                        type: error.class.to_s,
                        message: error.message
                    }
                ]
            }
        )
    end

    def record_not_found(error)
        render(
            status: 404, #alias :not_found
            json: {
                status: 404,
                errors: [
                    {
                        type: error.class.to_s,
                        message: error.message
                    }
                ]
            }
        )
    end

    def record_invalid(error)
        #Our object should look somthing like this:
        # {
        #     errors: 
        #     [
        #         {
        #             type: "ActiveRecord::InvalidRecord",
        #             record_type: "Question",
        #             field: "body",
        #             message: "..."
        #         }
        #     ]
        # }

        invalid_record = error.record
        errors = invalid_record.errors.map do |field, message|
            {
                type: invalid_record.class.to_s,
                field: field,
                message: message
            }
        end
        render(
            json: { status: 422, errors: errors},
            status: 422 #alias :unprocessable_entity
        )
    end
    
end
