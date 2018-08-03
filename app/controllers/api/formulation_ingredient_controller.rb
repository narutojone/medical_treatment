module Api
  class FormulationIngredientController < ApplicationController
    def index
      formulationsIngredients = FormulationIngredient.order('name');
      render json: { status: 'SUCCESS', message: 'Loaded Foumulations', data: formulationsIngredients },status: :ok
    end
  end
end
