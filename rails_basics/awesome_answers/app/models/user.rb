class User < ApplicationRecord
    has_secure_password
    # it requires a column named password_digest and the gem bcrypt
    # it will add a presence validation ro the password field
    # it will add two attribute accessors for `passowrd` and `password_confirmation`
    
    has_many :answers, dependent: :destroy
    has_many :questions, dependent: :destroy
    has_many :job_posts, dependent: :destroy

    # has_and_belongs_to_many(
    #     :liked_questions,
    #     {
    #         class_name: 'Question',
    #         join_table: 'likes',
    #         association_foreign_key: 'question_id',
    #         foreign_key: 'user_id'
    #     }
    # )
    has_many :likes, dependent: :destroy
    has_many :liked_questions, through: :likes, source: :question
    
end
