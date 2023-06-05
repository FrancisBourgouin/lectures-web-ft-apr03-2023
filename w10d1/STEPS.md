# Tinyapp Speedrun!

## Step 1: Install & Setup Rails

Create a new rails app

```sh
  rails new tinyapp -j esbuild --css bootstrap
```

Uncomment and install the bcrypt dependency (`gem 'bcrypt', '~> 3.1.7'`) in the gemfile

```sh
  bundle install
```

## Step 2: Set up the User model

Create a user with email and name, password is set up as password_digest to use bcrypt instead of plaintext

```sh
  bin/rails generate scaffold User name email password_digest
```

Add secure password support by updating the user model like below:

```jsx
  class User < ApplicationRecord
    has_secure_password
  end
```

## Step 3: Set up authentication

Create routes in `routes.rb` that we will connect to User methods

```ruby
  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#destroy'

  get '/signup' => 'users#new'
  post '/users' => 'users#create'
```

Update the `new.html.erb` file with the form template with the change below:

```jsx
  <div>
    <%= form.label :password_digest, style: "display: block" %>
    <%= form.text_field :password_digest %>
  </div>
```

to

```jsx
  <div>
    <%= form.label :password, style: "display: block" %>
    <%= form.password_field :password %>
  </div>
```

Then update the user_params method in the user controller

```jsx
  def user_params
      params.require(:user).permit(:name, :email, :password_digest)
  end
```

to

```jsx
  def user_params
      params.require(:user).permit(:name, :email, :password)
  end
```

Update the create method in the user controller

```jsx
  respond_to do |format|
    if @user.save
      format.html { redirect_to user_url(@user), notice: "User was successfully created." }
      format.json { render :show, status: :created, location: @user }
    else
      format.html { render :new, status: :unprocessable_entity }
      format.json { render json: @user.errors, status: :unprocessable_entity }
    end
  end
```

to

```jsx
  respond_to do |format|
    if @user.save
      session[:user_id] = @user.id
      format.html { redirect_to "/", notice: "User was successfully created." }
      format.json { render :show, status: :created, location: @user }
    else
      format.html { render :new, status: :unprocessable_entity }
      format.json { render json: @user.errors, status: :unprocessable_entity }
    end
  end
```

## Step 4: Adding Sessions

We now have proper user and authentication support, now let's add sessions so that our users can connect. Run the following to create a session controller

```sh
  bin/rails generate controller Sessions
```

Update the session controller with 3 methods, new create and destroy:

```jsx
  class SessionsController < ApplicationController

    def new
    end

    def create
      user = User.find_by_email(params[:email])
      # If the user exists AND the password entered is correct.
      if user && user.authenticate(params[:password])
        # Save the user id inside the browser cookie. This is how we keep the user
        # logged in when they navigate around our website.
        session[:user_id] = user.id
        redirect_to '/'
      else
      # If user's login doesn't work, send them back to the login form.
        redirect_to '/login'
      end
    end

    def destroy
      session[:user_id] = nil
      redirect_to '/login'
    end

  end
```

Create a login page (new.html.erb in view/sessions) with this content inside

```jsx
  <!-- app/views/sessions/new.html.erb -->

  <h1>Login</h1>

  <%= form_tag '/login' do %>

    Email: <%= text_field_tag :email %>
    Password: <%= password_field_tag :password %>
    <%= submit_tag "Submit" %>

  <% end %>
```

Add helper methods in the Application controller so we can use the user later

```jsx
  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end
  helper_method :current_user

  def authorize
    redirect_to '/login' unless current_user
  end
```

We now have access to the authorize and current_user for our Urls model

## Step 5: Set up the Url model

Create a user with email and name, password is set up as password_digest to use bcrypt instead of plaintext

```sh
  bin/rails generate scaffold Url short_url long_url description:text user:belongs_to
```

Update the User model with `has_many :posts`

Secure the Urls model by adding `before_action :authorize` at the top, it will check if there is an active session then let you connect

## Step 6: Update the Url controller methods

We need to update the url methods so that they show the user's url and nobody else

```jsx
  def index
    @user = current_user
    @urls = @user.urls.all
  end

  def new
    @user = current_user
    @url = @user.urls.new
  end

  def create
    @user = current_user
    @url = @user.urls.new(url_params)
    ...
  end
```

That's it!

## Step 7: Extra Url

To generate random id and lock the user_id in, let's update the url create method

```jsx
    @user = current_user
    new_url = {
      :short_url => SecureRandom.alphanumeric(6),
      :long_url => url_params[:long_url],
      :description => url_params[:description],
      :user_id => @user.id
    }
    @url = @user.urls.new(new_url)
```

And clean up the form

## Step 8: Make a header

Create a application folder in views, and add \_header.html.erb and import it in the layout!

<li><%= link_to "Logout", "/logout" %></li>

## Step 9: Make it fancy

Add Bootstrap styling!
