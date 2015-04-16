class ColorsController < ApplicationController
	def index
	@color = "%06x" % (rand * 0xffffff);

	respond_to do |format|
		format.json { render json: {color: @color} }
		format.html 
	end
	end
end
