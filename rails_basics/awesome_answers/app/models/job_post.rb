class JobPost < ApplicationRecord
    validates :title, presence: true, uniqueness: true
    validates :description, presence: true
    validates :min_salary, numericality: true
end
