FactoryBot.define do
  factory :job_post do
    title { Faker::Job.title }
    description { Faker::Job.field + "hi"*50 }
    min_salary { rand(40_000..50_000) }
  end
end
