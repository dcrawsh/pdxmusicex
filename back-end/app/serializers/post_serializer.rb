class PostSerializer
  include FastJsonapi::ObjectSerializer
  
  attributes :title, :description, :category

end
