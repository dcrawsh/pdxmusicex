class CategorySerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :posts
end
