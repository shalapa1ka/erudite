class HomeController < ApplicationController
  before_action :authenticate_user!

  def index
    @notice= 'jopa'
  end
end