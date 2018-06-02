class UserInviteMailer < ApplicationMailer
  def user_invite
    mail(to:'chattyduck2018@gmail.com', subject:"User Invite")
  end
end
