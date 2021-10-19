class Question < ApplicationRecord
    after_initialize :set_defaults
    before_save :capitalize_title

    has_many :answers, dependent: :destroy
    # when you delete a question, the answers belongs to this question can also be deleted automatically by rails.
    belongs_to :user
    validates :title, presence: {message: "must be provided"}, uniqueness: {scope: :body}, length: { minimum: 2, maximum: 200 }

    #unique to the scope of body means title doesn't need to be unique 
    #on its own, but does have to be unique in combination to the body

    validates :view_count, numericality: {greater_than_or_equal_to: 0}

    # Custom Validation
    # Be careful, the method for custom validations is
    # singular and its almost exactly same the method
    # for regular validations.
    validate :no_monkey

    # has_and_belongs_to_many(
    #     :likes,
    #     {
    #         class_name:'User',
    #         join_table: 'likes',
    #         association_foreign_key: 'user_id',
    #         foreign_key: 'question_id'
    #     }
    # )
    # :class_name => the model that the association points to
    # :join_table => the join table used to create this association
    # :foreign_key => on the join table, which foreign key points to this current model
    # : association_foreign_key => on the join table, which foreign key points the associated table
    
    
    has_many :likes, dependent: :destroy
    # The `has_many :likers` below depends on the existence of `has_many :likes` above.
    # If the above doesn't exist, or the one above comes after, you will get an error.
    has_many :likers, through: :likes, source: :user
    # The has_may can take an argument `through` => `:likes` is the name of 
    # another has_association => `has_many :likes`
    # We specify the name of another `has_many` with the `through` option which
    # corresponds to the join table between the two tables that share the many-to-many relationship
    # We must also provide a `source` named argument to specify which model
    # we are getting back from the many-to-many relatioship.
    
    



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
