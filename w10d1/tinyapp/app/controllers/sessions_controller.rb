class SessionsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def new
  end

  def create
    user = User.find_by_email(params[:email])
    # If the user exists AND the password entered is correct.
    if user && user.authenticate(params[:password])
      # Save the user id inside the browser cookie. This is how we keep the user
      # logged in when they navigate around our website.

      respond_to do |format|
        session[:user_id] = user.id
        if user.save
          format.html { redirect_to "/" }
          format.json { render :show, status: :created, location: user }
        else
          format.html { render :new, status: :unprocessable_entity }
          format.json { render json: user.errors, status: :unprocessable_entity }
        end
      end
  end
end

  def destroy
    session[:user_id] = nil
    redirect_to '/login'
  end
end


# app.use((req,res,next) => {
#   if(whitelist.includes(req.url)){
#     next()
#   }

#   redirect("/")
# })