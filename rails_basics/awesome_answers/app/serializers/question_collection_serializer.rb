class QuestionCollectionSerializer < ActiveModel::Serializer
  attributes(
    :id,
    :title,
    :view_count
  )
end
