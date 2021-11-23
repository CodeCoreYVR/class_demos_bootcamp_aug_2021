class Api::V1::GiftsController < Api::ApplicationController
    def create
        begin
            Stripe.api_key = ENV['STRIPE_SECRET_KEY']

            gift = Gift.new(amount: params[:amount])
            answer = Answer.find params[:answer_id]
            question = answer.question
            gift.sender = current_user
            gift.status = "pending"
            gift.receiver = answer.user
            gift.answer = answer
            
            if gift.save
                charge = Stripe::Charge.create({
                    amount: gift.amount,
                    description: "Gift User",
                    currency: "usd",
                    source: params[:token]
                })
                if charge&.paid
                    gift.update(security_key: charge.id, status: "success")
                    render(json: {status: 200, msg: "Success"})
                else
                    render(json: {status: 500, msg: "Failure"})
                end
            else
                render(json: {status: 500, msg: "Failure"})
            end
        rescue 
            render(json: {status: 500, msg: "Errors"})    
        end
    end

end
