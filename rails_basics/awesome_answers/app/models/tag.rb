class Tag < ApplicationRecord
    before_save :downcase_name

    #ASSOCIATIONS
    has_many :taggings, dependent: :destroy
    has_many :questions, through: :taggings

    #VALIDATIONS
    validates :name, presence: true, uniqueness: { case_sensitive: false }

    #the case sensitive option will make uniqueness validation ignore the case i.e. record of "Science" and "SCIENCE" can't co-exist

    private

    def downcase_name
        self.name&.downcase!
    end
end
