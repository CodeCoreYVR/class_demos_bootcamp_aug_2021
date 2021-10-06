class Question < ApplicationRecord
    after_initialize :set_defaults
    before_save :capitalize_title

    validates :title, presence: {message: "must be provided"}, uniqueness: {scope: :body}, length: { minimum: 2, maximum: 200 }

    #unique to the scope of body means title doesn't need to be unique 
    #on its own, but does have to be unique in combination to the body

    validates :view_count, numericality: {greater_than_or_equal_to: 0}

    validate :no_monkey

    def no_monkey
        if body&.downcase&.include?("monkey")
            self.errors.add(:body, "Must not have monkey")
        end
    end

    private

    def set_defaults
        self.view_count ||= 0
    end

    def capitalize_title
        self.title.capitalize!
    end

    # def self.recent_ten
    #     order("created_at DESC").limit(10)
    # end

    scope :recent_ten, lambda { order("created_at DESC").limit(10)}
end
