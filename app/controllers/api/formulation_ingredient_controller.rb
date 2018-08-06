module Api
  class FormulationIngredientController < ApplicationController
    def index
      formulationsIngredients = Ingredient.order('name');
      render json: formulationsIngredients.to_json();
    end
    def show
      formulationsIngredients = FormulationIngredient.select("*").joins(:ingredient).where('formulation_id = ?', params[:id])
      render json: formulationsIngredients.to_json()
    end
  end
end
