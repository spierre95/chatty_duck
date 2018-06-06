require 'resolv-replace.rb'

module Api::V1
  class UsersController < ApplicationController
    def create
      @user = User.new(user_params)
      @user.save
    end

    def index
      @users = User.all
      render json: @users
      # UserInviteMailer.user_invite.deliver_now
    end

  private

  def user_params
    params.require(:user).permit(
      :first_name,:last_name,:username,:email,:password,:password_confirmation,:is_creator, :image_url
    )
  end


  end
end
