# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# delete
# destroy
Answer.destroy_all
Question.destroy_all

20.times do
    created_at = Faker::Date.backward(days:365 * 5)

    q = Question.create(
       title: Faker::Hacker.say_something_smart,
       body: Faker::ChuckNorris.fact,
       view_count: rand(100_000),
       created_at: created_at,
       updated_at: created_at
    )
    if q.valid?
        rand(1..5).times do
            Answer.create(body:Faker::Hacker.say_something_smart, question:q)
        end
    end
end

questions = Question.all
answers = Answer.all

puts Cowsay.say("Generated #{questions.count} questions", :frogs)
puts Cowsay.say("Generated #{answers.count} answers", :cow)
