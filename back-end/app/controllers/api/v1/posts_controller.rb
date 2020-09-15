class Api::V1::PostsController < ApplicationController

    # before_action :find_category, only: [:create]

    def index
        posts = Post.all 
        render json: PostSerializer.new(posts)
    end

    def create 
        
        post = Post.new(post_params)
        
        
        if post.save!
            render json: PostSerializer.new(post), status: :accepted
        else
            render json: {errors: post.errors.full_messages}, status: :unprocessible_entity
        end
        
    end

    def show 
        post = Post.find(params[:id])
        render json: PostSerializer.new(post)
    end

    

    def update 
        
        post = Post.find(params[:id])
        post.update(post_params)

        posts = Post.all 
        render json: PostSerializer.new(posts)
    end
    
    
    
    
    def destroy
        post = Post.find(params[:id])
        post.destroy
        posts = Post.all
        render json: PostSerializer.new(posts)
    end

    private 

    


    def post_params 
        params.require(:post).permit(:title, :description, :category_id, :likes)
    end

    


end
