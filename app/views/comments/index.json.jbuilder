json.array!(@comments) do |comment|
  json.extract! comment, :id, :body, :name
  json.url comment_url(comment, format: :json)
end
