# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

forSale = Category.create(name: "For Sale")
gigs = Category.create(name: "Gigs")
showReviews = Category.create(name: "Show Reviews")

Post.create(title: 'Sick Fender Mustang', description: "This guitar is in mint condition and sounds so nice!", category_id: 1 )


