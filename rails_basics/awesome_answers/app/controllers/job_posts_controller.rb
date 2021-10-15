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
    
    
end
