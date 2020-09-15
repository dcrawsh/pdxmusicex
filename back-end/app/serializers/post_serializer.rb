class PostSerializer
  include FastJsonapi::ObjectSerializer
  
  attributes :title, :description, :likes, :updated_at, :category, :comments

end
