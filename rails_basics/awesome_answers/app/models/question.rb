class Question < ApplicationRecord
    after_initialize :set_defaults
    before_save :capitalize_title

    has_many :answers, dependent: :destroy
    # when you delete a question, the answers belongs to this question can also be deleted automatically by rails.

    validates :title, presence: {message: "must be provided"}, uniqueness: {scope: :body}, length: { minimum: 2, maximum: 200 }

    #unique to the scope of body means title doesn't need to be unique 
    #on its own, but does have to be unique in combination to the body

    validates :view_count, numericality: {greater_than_or_equal_to: 0}

    # Custom Validation
    # Be careful, the method for custom validations is
    # singular and its almost exactly same the method
    # for regular validations.
    validate :no_monkey

    def no_monkey
        # &. is the safe navigation operator. It's used like . operator
        # to call methods of the object
        # if the body donesn't exist, 'nil' in JS might be undefined or null
        # this will return nil instead of getting an error
        if body&.downcase&.include?("monkey")
            self.errors.add(:body, "Must not have monkey")
        end
    end

    private

    def set_defaults
        # self.view_count = 0 if self.view_count.nil?
        # self.view_count = self.view_count || 0
        self.view_count ||= 0
    end

    def capitalize_title
        self.title.capitalize!
    end

    # def self.recent_ten
    #     order("created_at DESC").limit(10)
    # end

    scope :recent_ten, lambda { order("created_at DESC").limit(10)}

    # Scopes are such a commonly used feature that there's a way to 
    # create them quicker. It takes a name and a lambda as a callback
    scope :wildcard_search, ->(search_query) { where("title ILIKE '%#{search_query}%' or body ILIKE '%#{search_query}%' ") }

    # def self.wildcard_search(search_query)
    #     where("title ILIKE ? OR body ILIKE ?","%#{search_query}%","%#{search_query}%")
    # end
    
    # select * from questions where title ilike %??% and body ilike %???%;
end
