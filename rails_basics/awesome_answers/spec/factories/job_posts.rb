FactoryBot.define do
  factory :job_post do
    # title { Faker::Job.title + rand(1000) }
    # Use the `sequence` method in a factory bot to get a counter of how many times a factory was used as an 
    # argument to its block
    # This can be especially useful when dealing with a column that has a uniqueness validation
    sequence(:title){|n|  Faker::Job.title + "#{n}"}
    description { Faker::Job.field + "hi"*50 }
    min_salary { rand(40_000..50_000) }
    max_salary{rand(50_000..100_000)}
    location{Faker::Address.city}
    company_name {Faker::Company.name}
    # This line will create a user using its factory
    # before creating a job post. Then it will associate that user to this job post.
    # This is necessary to pass the validation added by `belongs_to`
    association(:user, factory: :user)
  end
end
