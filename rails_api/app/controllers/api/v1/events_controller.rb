module Api::V1
  class EventsController < ActionController::API

    # def index
    #   @events = Event.all
    #   render json: @events
    # end

    def show
      @event_id = Event.all.find(params[:id])
      render json: @event_id
    end

    def create

      @event = Event.new(trip_params)

      @event.save

    end

    def list_of_events
      if params[:event].has_key? :trip_id
        events_list = Trip.find(params[:event][:trip_id]).events.as_json
        render json: events_list
      elsif params[:event].has_key? :user_id
        events_list = User.find(params[:event][:user_id]).events.as_json
        render json: events_list
      else
        render status: :not_found
      end
    end

    def create_event
     @event =  Event.new(event_params)
     @event.save
    end



    private

    def event_params
     params.require(:event).permit(:name,:date,:start_time,:end_time,:trip_id,:user_id)
    end


  end
end
