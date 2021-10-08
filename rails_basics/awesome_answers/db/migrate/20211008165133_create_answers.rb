class CreateAnswers < ActiveRecord::Migration[6.1]
  def change
    create_table :answers do |t|
      t.text :body
      t.references :question, null: false, foreign_key: true
      # The above creates a 'question_id' conlumn, it also sets a foreign_key
      # constraint to enforce the association to the questions table at the DB level
      # The question_id will refer to the id of the question in the questions table. 

      # foreign_key: true option prevents you from adding an answer whose question_id doesn't exist
      # it also prevents you from deleting questions that are references by answers.
      # For instance if you have answers with question_id => 10 then you can't delete the question with id 10
      
      t.timestamps
    end
  end
end
