class Tag < ApplicationRecord
    #ASSOCIATIONS
    has_many :taggings, dependent: :destroy
    has_many :questions, through: :taggings
end
