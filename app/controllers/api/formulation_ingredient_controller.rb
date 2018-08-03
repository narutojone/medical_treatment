module Api
  class FormulationIngredientController < ApplicationController
    def index
      formulationsIngredients = FormulationIngredient.order('percentage');
      render json: { status: 'SUCCESS', message: 'Loaded FoumulationIngredients', data: formulationsIngredients },status: :ok
    end
  end
end
