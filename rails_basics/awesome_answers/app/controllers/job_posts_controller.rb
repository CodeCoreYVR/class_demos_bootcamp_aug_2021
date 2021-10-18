class JobPostsController < ApplicationController
    before_action :authenticate_user!, only:[:create, :update, :destroy, :new, :edit]
    def new
        @job_post = JobPost.new
    end

    def create
        # JobPost.create => JobPost.new + @job_post.save
        @job_post =  JobPost.new params.require(:job_post).permit(
            :title,:description,:min_salary,:max_salary,:location,:company_name
        )
        @job_post.user = current_user
        if @job_post.save
            redirect_to job_post_path(@job_post)
        else
            render :new
        end
        
    end
    def show
        @job_post = JobPost.find params[:id]
    end
    def index
        @job_posts = JobPost.all.order(created_at: :desc)
    end
    
    def destroy
        @job_post = JobPost.find params[:id]
        if can?(:destroy, @job_post)
            @job_post.destroy
            flash[:danger] = "deleted a job post "
            redirect_to job_posts_path
        else
            
        end
        
        
    end

    def edit
        @job_post = JobPost.find params[:id]
        if can?(:edit, @job_post)
            render :edit
        else
            redirect_to job_post_path(@job_post.id)
        end
    end
    
    def update
        @job_post = JobPost.find params[:id]
        @job_post.update(params.require(:job_post).permit(
            :title,:description,:min_salary,:max_salary,:location,:company_name
        ))
        redirect_to @job_post
    end
    
    
end
