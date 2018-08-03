module Api
  class FormulationController < ApplicationController
    def index
      formulations = Formulation.order('name');
      render json: { status: 'SUCCESS', message: 'Loaded Foumulations', data: formulations },status: :ok
    end
  end  
end