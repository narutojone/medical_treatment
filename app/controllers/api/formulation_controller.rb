module Api
  class FormulationController < ApplicationController
    def index
      @formulations = Formulation.order('name');
      render json: @formulations.to_json(only: [:id, :name]);
    end
  end  
end