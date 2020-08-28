class PostSerializer
  include FastJsonapi::ObjectSerializer
  
  attributes :title, :description, :updated_at, :category, :comments

end
