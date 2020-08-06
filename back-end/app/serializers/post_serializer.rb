class PostSerializer
  include FastJsonapi::ObjectSerializer
  
  attributes :title, :description, :category, :comments

end
