class AnswerMailer < ApplicationMailer
    def new_answer(answer)
    end

    def hello_world
        mail(
            to: 'stephanie@codecore.ca',
            from: 'anyone@example.com',
            cc: 'someone.else@example.com',
            bcc: 'another.person@example.com',
            subject: 'Hello World'
        )
    end
end
