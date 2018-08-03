module Api
  class IngredientController < ApplicationController
    def index
      ingredients = Ingredient.order('name');
      render json: { status: 'SUCCESS', message: 'Loaded Ingredients', data: ingredients },status: :ok
    end
  end
end