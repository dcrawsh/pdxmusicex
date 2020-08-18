class Api::V1::CommentsController < ApplicationController

    def index
        comments = Comment.all 
        render json: CommentSerializer.new(comments)
    end

    def create 
        
        comment = Comment.new(comment_params)

        if comment.save!
            render json: CommentSerializer.new(comment), status: :accepted
        else
            render json: {errors: comment.errors.full_messages}, status: :unprocessible_entity
        end
        
    end




    def destroy
        comment = Comment.find(params[:id])
        comment.destroy
        comments = Comment.all
        render json: CommentSerializer.new(comments)
    end

    private 

    def comment_params
        params.require(:comment).permit(:content, :post_id)
    end




end
