class User < ApplicationRecord
    geocoded_by :address
    after_validation :geocode

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

    VALID_EMAIL_REGEX = /\A([\w+\-].?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i
    validates :email, presence: true, uniqueness: true, format: VALID_EMAIL_REGEX, unless: :from_oauth?
        
    def full_name
        "#{first_name} #{last_name}".strip.titlecase
    end

    def from_oauth?
        uid.present? && provider.present?
    end

    def self.create_from_oauth(oauth_data)
        name = oauth_data["info"]["name"]&.split || oauth_data["info"]["nickname"]
        self.create(
            first_name: name[0],
            last_name: name[1] || "",
            uid: oauth_data["uid"],
            provider: oauth_data["provider"],
            oauth_raw_data: oauth_data,
            password: SecureRandom.hex(32)
        )
    end

    def self.find_by_oauth(oauth_data)
        self.find_by(
            uid: oauth_data["uid"],
            provider: oauth_data["provider"]
        )
    end
end
