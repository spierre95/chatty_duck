class User < ApplicationRecord

has_secure_password

has_many :trips_users
has_many :trips, through: :trips_users

has_many :messages

has_many :chatrooms_users
has_many :chatrooms, through: :chatrooms_users
has_many :events

def self.authenticate_with_credentials(email,password)
     user = User.find_by_email(email.downcase.strip)
      # If the user exists AND the password entered is correct.
    if user && user.authenticate(password)
      # Save the user id inside the browser cookie. This is how we keep the user
      # logged in when they navigate around our website.
     user
  end
end

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, presence: true, uniqueness: { case_sensitive: false }
  validates :password, confirmation: true, length: { minimum: 6 }
  validates :password_confirmation, presence: true
  validates :is_creator, inclusion: { in: [true, false] }

end
