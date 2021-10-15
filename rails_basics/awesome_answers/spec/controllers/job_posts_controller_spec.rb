require 'rails_helper'

RSpec.describe JobPostsController, type: :controller do
    describe "#new" do
        it "should render the new template" do
            # GIVEN In this one there's no given

            # WHEN
            get(:new)
            # We have this get method from rails-controller-testing gem, which is
            # made magically by this get method we don't have to create it manually, this will be mocked

            # THEN
            expect(response).to(render_template(:new)) 
            # response is an object that represents the HTTP-Response
            # RSpec makes this object available within the specs
            # We verify that the response will render out the template called "new" using the matcher `render_template`
        end
        
        it "should set an instance variable with a new job post" do
            # GIVEN

            # WHEN
            get(:new)

            # THEN
            # assigns(:job_post) available from the gem `rails-controller-testing` allows you grab an instance variable, it takes an symbol (:job_post)
            # All the models are available on the controllers
            expect(assigns(:job_post)).to(be_a_new(JobPost))
            # we check htat the instance variable @job_post is a new instance of the class JobPost (Model)
        
        end
        

    end

    describe "#create" do
        def valid_request
            post(:create, params:{ job_post: {
                title: 'some title',
                description: 'some description'*20,
                location: 'some location',
                min_salary: 40_000,
                max_salary: 100_000,
                company_name: "something"
            }})
        end
        

        it "should create a job post in the datavase" do
            # GIVEN
            count_before = JobPost.count # the number of all the records in the JobPost table

            # WHEN
            # post(:create, params: {job_post: FactoryBot.attributes_for(:job_post)})
            valid_request

            # THEN
            count_after = JobPost.count
            expect(count_after).to(eq(count_before + 1))
            # eq is an assertion provided by RSpec that checks that value to the right of the .to is equal to the paramter passed into the method
        end
        
        it "should redirect us to the show page for that post" do
            # GIVE

            # WHEN
            valid_request

            # THEN
            job_post = JobPost.last
            expect(response).to(redirect_to(job_post_path(job_post.id)))
        end
        
    end
    
    
end
