class Question < ApplicationRecord
    after_initialize :set_defaults
    before_save :capitalize_title

    #ASSOCIATIONS
    has_many :answers, dependent: :destroy
    # when you delete a question, the answers belongs to this question can also be deleted automatically by rails.
    belongs_to :user
    has_many :taggings, dependent: :destroy
    has_many :tags, through: :taggings#, source: :tag
    #if the name of the association (i.e. tags) is the same as the
    #source singularized (i.e. tag), then the 'source' named argument
    #can be omitted


    #VALIDATIONS
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

    #-----------ADD CUSTOM TAG METHODS TO GET OR SET TAGS WITH SELECTIZE------>

    #Getter
    def tag_names
        self.tags.map(&:name).join(", ")
        #The & symbol is used to tell Ruby that the following argument
        #should be given as a block to the method. So the line:
        #self.tags.map(&.:name).join(", ") is equal to
        #self.tags.map { |t| t.name.join(", ")}
        #So the above will iterate over tyhe collection of elf.tags
        #and build an array with the resukts of the name method
        #called on every item
    end

    #Setter
    #This is similar to implementing an attribute writer "attr_writer"
    #Appending = at the end of a method name allows us to implement a setter
    #A setter is a method that is assignable, example:
    # q.tag_names = 'another new tag name'
    def tag_names=(rhs)
        self.tags = rhs.strip.split(/\s*,\s*/).map do |tag_name|
            Tag.find_or_initialize_by(name: tag_name)
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
