class JobPostsController < ApplicationController
    def new
        @job_post = JobPost.new
    end

    def create
        # JobPost.create => JobPost.new + @job_post.save
        @job_post =  JobPost.new params.require(:job_post).permit(
            :title,:description,:min_salary,:max_salary,:location,:company_name
        )
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
        @job_post.destroy
        flash[:danger] = "deleted a job post "
        redirect_to job_posts_path
    end
    
end
