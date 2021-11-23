class Api::V1::GiftsController < Api::ApplicationController

    def create
        Stripe.api_key = 'sk_test_51JypOyKP3mgCg2b0AUqZvvelzlG64Us10pW7B5dXh0jDaASjcqQRzxnXKuQfiiYSgoiQLPm48EsMOeIOWETmje9H00pogrEwt7'

        gift = Gift.new(amount: params[:amount])
        gift.sender = current_user
        answer = Answer.find_by_id(params[:answer_id])
        gift.answer = answer
        gift.receiver = answer.user
        gift.status = "pending"

        if gift.save
            token = params[:token]

            begin
                charge = Stripe::Charge.create({
                    amount: params[:amount],
                    currency: 'usd',
                    description: 'Example charge',
                    source: token,
                })
                if charge&.paid
                    gift.update(status: "success",payment_id: charge.id )
                    render(json: {status: 200, msg: "success"})
                else
                    render(json: {status: 500, msg:"Can't make a payment"})
                end
            rescue 
                render(json: {status: 500, msg:"Unexpected Errors"})                
            end

            
            
            
        else
            render(json: {status: 500, msg:"Can't add a gift"})
        end
        
    end
    
end
