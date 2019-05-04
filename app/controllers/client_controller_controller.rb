class ClientControllerController < ApplicationController

  def index
    @clients = Client.all
  end

  def new
    @client = Client.new
  end

  def create
    @client = current_user.clients.new(name:)

    respond_to do |format|
      if @client.save
        format.html { redirect_to @client, notice: 'Tool was successfully created.' }
        format.json { render :show, status: :created, location: @client }
      else
        format.html { render :new }
        format.json { render json: @client.errors, status: :unprocessable_entity }
      end
    end
  end

  def private
    client_params =
  end

end
