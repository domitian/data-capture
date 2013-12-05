class ItemsController < ApplicationController
before_action :set_item, only: [:show, :edit,:update]
	def index
		@item=Item.all
	end
	def show
	end

	def create
		@item = Item.new(item_params)
		respond_to do |format|
			if @item.save
				format.html {redirect_to @item, notice: 'Item succesfully created.'}
				format.json {render action: 'show',status: :created, location: @item}
		     else
		        format.html { render action: 'new' }
		        format.json { render json: @item.errors, status: :unprocessable_entity }
		     end
		 end
	end	

	def edit
	end
	def new
		@item=Item.new
	end
	def update
	    respond_to do |format|
	      if @item.update(item_params)
	        format.html { redirect_to @item, notice: 'item was successfully updated.' }
	        format.json { head :no_content }
	      else
	        format.html { render action: 'edit' }
	        format.json { render json: @item.errors, status: :unprocessable_entity }
	      end
	    end
	 end

	private
		def set_item
	      @item = Item.find(params[:id])
	    end

		def item_params
			params.require(:item).permit(:question_title,:help_text,:question_type)	
		end		

end