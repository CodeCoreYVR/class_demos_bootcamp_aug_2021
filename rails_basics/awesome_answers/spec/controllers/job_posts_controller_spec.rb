require 'rails_helper'

RSpec.describe JobPostsController, type: :controller do
    describe "#new" do
        context "with signed in user" do
            before do
                session[:user_id] = FactoryBot.create(:user).id
            end
            
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
        
        
        

    end

    describe "#create" do
        # context is functionally the same as dscribe, but we use it to
        # organize groups of branching code paths.
        context "with user signed in" do
            before do
                session[:user_id] = FactoryBot.create(:user).id
            end
            context "with valid parameters" do
            
            
                def valid_request
                    post(:create, params:{ job_post: FactoryBot.attributes_for(:job_post)})
                end
        
                it "should create a job post in the database" do
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
            
            context "with invalid parameters" do
                def invalid_params
                    post(:create, params:{ job_post: FactoryBot.attributes_for(:job_post, title: nil)})
                end
                
    
                it "should not save a record into the database" do
                    # GIVEN
                    count_before = JobPost.count
    
                    # WHEN
                    invalid_params
    
                    # THEN
                    count_after = JobPost.count
                    expect(count_after).to(eq(count_before)) 
                end
    
                it "should render the new template" do
                    # WHEN
                    invalid_params
    
                    expect(response).to(render_template(:new)) 
                end
                
            end
        end
        
        context "without user signed in" do
            it "should rediret to the sign in page" do
                post(:create, params:{job_post: FactoryBot.attributes_for(:job_post)})

                expect(response).to(redirect_to(new_session_path)) 
            end
            
        end
        
        
        
        
    end
    
    describe "#show" do
        before do
            @job_post = FactoryBot.create(:job_post)
            get(:show, params:{id: @job_post.id})
        end
        

        it "should render show template" do
            # GIVEN
            # job_post = JobPost.create(
            #     title: 'some title',
            #     description: 'some description'*20,
            #     location: 'some location',
            #     min_salary: 40_000,
            #     max_salary: 100_000,
            #     company_name: "something")
            # WHEN
            
            # THEN
            expect(response).to(render_template(:show)) 
        end
        
        it "should set an instance variable @job_post for the show template" do
            # job_post = FactoryBot.create(:job_post)
            # get(:show, params: {id: job_post.id})
            expect(assigns(:job_post)).to(eq(@job_post))  
        end
        
    end
    
    describe "#index" do
        it "should render the index template" do
            get(:index)
            expect(response).to(render_template(:index)) 
        end
        it "should assign an instance variable @job_posts which contains all the created job posts" do
            # GIVEN
            job_post_1 = FactoryBot.create(:job_post)
            job_post_2 = FactoryBot.create(:job_post)
            job_post_3 = FactoryBot.create(:job_post)
            
            # WHEN
            get(:index)

            # THEN
            expect(assigns(:job_posts)).to(eq([job_post_3,job_post_2,job_post_1]))  
        end
        
    end
    
    describe "#destroy" do
        context "with user signed in" do
            context "as owner" do
                before do
                    current_user = FactoryBot.create(:user)
                    session[:user_id] = current_user.id

                    # GIVEN
                    @job_post = FactoryBot.create(:job_post, user: current_user)
                    # WHEN
                    delete(:destroy, params:{ id:@job_post.id})
                end
                
                it "should remove a job post from the database" do
                    
        
                    # THEN
                    expect(JobPost.find_by(id: @job_post.id)).to(be(nil)) 
                end
        
                it "should redirect to the job post index" do
                    # # GIVEN
                    # job_post = FactoryBot.create(:job_post)
                    # # WHEN
                    # delete(:destroy, params:{ id:job_post.id})
        
                    # THEN
                    expect(response).to(redirect_to(job_posts_path)) 
                end
                
                it "should set a flash message" do
                    # # GIVEN
                    # job_post = FactoryBot.create(:job_post)
                    # # WHEN
                    # delete(:destroy, params:{ id:job_post.id})
        
                    expect(flash[:danger]).to be
                end
            end
            
            context "as non owner" do
                it "should not be removed" do
                    # GIVEN 
                    session[:user_id] = FactoryBot.create(:user).id
                    @job_post = FactoryBot.create(:job_post)

                    # WHEN
                    delete(:destroy, params:{id:@job_post.id})

                    expect(JobPost.find(@job_post.id)).to(eq(@job_post)) 

                end
                
            end
            
        end
                
    end
    
    describe "#edit" do
        context "with user signed in" do
            context "as owner" do
                before do
                    current_user = FactoryBot.create(:user)
                    session[:user_id] = current_user.id
                    @job_post = FactoryBot.create(:job_post, user: current_user)
                end
                
                it "should render the edit template" do
                    # GIVEN
                    
                    # WHEN
                    get(:edit, params:{id: @job_post.id})
                    # THEN
                    expect(response).to(render_template(:edit)) 
                end
            end
            
            context "as non owner" do
                it "should redirect to show page" do
                    session[:user_id] = FactoryBot.create(:user).id
                    job_post = FactoryBot.create(:job_post)

                    get(:edit, params:{id: job_post.id})

                    expect(response).to(redirect_to(job_post_path(job_post.id))) 
                end
                
            end
            
        end
        
        
        
    end
    
    describe "#update" do
        context "with user signed in" do
            before do
                session[:user_id] = FactoryBot.create(:user).id
                @job_post = FactoryBot.create(:job_post)
            end
    
            context "with valid parameters" do
    
    
                it "should update the job post record with new atrributes" do
                    # GIVEN
                    
                    new_title = "#{@job_post.title} plus something"
    
                    # WHEN
                    patch(:update, params:{id: @job_post.id, job_post:{title:new_title} })
                    
                    # THEN
                    # expect(JobPost.find_by(id: job_post.id).title).to(eq(new_title))
                    expect(@job_post.reload.title).to(eq(new_title))
                end
                
                it "should redirect to the show page" do
    
                    new_title = "#{@job_post.title} plus something"
    
                    # WHEN
                    patch(:update, params:{id: @job_post.id, job_post:{title:new_title} })
                    
                    # THEN
                    expect(response).to(redirect_to(@job_post)) 
                end
                
            end
    
            context "with invalid parameters" do
                it "should not update the job post record" do
                    
                    # when
                    patch(:update, params:{id:@job_post.id, job_post:{title:nil}})
                    
                    # then
                    expect(JobPost.find_by(id: @job_post.id).title).to(eq(@job_post.title)) 
                end
                
            end
        end
        
        
        
    end
    
end
