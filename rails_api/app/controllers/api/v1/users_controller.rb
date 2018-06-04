require 'resolv-replace.rb'

module Api::V1
  class UsersController < ApplicationController
    def index
      @users = User.all
      render json: @users
      # UserInviteMailer.user_invite.deliver_now
    end


  end
end
