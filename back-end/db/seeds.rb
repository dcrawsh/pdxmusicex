# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Category.destroy_all
Post.destroy_all
Comment.destroy_all

forSale = Category.create(name: "For Sale")
gigs = Category.create(name: "Gigs")
showReviews = Category.create(name: "Show Reviews")

mustang = Post.create(title: 'Sick Fender Mustang', description: "This guitar is in mint condition and sounds so nice!", category_id: forSale.id )
laurel = Post.create(title: 'Come see my band a Laurelthirst this Friday! PLEASE!!!', description: "My band Big Butt Boys is playing Friday. Its only $5 and gonna be a blast.", category_id: gigs.id )
mgmt = Post.create(title: 'MGMT thrilled the crowd!', description: "It was a great fucking show! wow", category_id: showReviews.id )

Comment.create(content: 'that really is a cool guitar', post_id: mustang.id)
Comment.create(content: 'I really don\'t think I wanna come', post_id: laurel.id)
Comment.create(content: 'They were really electric feeling themselves!', post_id: mgmt.id)
