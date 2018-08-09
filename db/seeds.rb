# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'csv'

formulations = File.read(Rails.root.join('lib', 'seeds', 'formulations.csv'))
formulationsCsv = CSV.parse(formulations, :headers => true, :encoding => 'ISO-8859-1')
formulationsCsv.each do |row|
  t = Formulation.new
  t.id = row['id']
  t.name = row['name']
  t.created_at = row['created_at']
  t.updated_at = row['updated_at']
  t.save
end

ingredients = File.read(Rails.root.join('lib', 'seeds', 'ingredients.csv'))
ingredientsCsv = CSV.parse(ingredients, :headers => true, :encoding => 'ISO-8859-1')
ingredientsCsv.each do |row|
  t = Ingredient.new
  t.id = row['id']
  t.name = row['name']
  t.minimum_percentage = row['minimum_percentage']
  t.maximum_percentage = row['maximum_percentage']
  t.description = row['description']
  t.classes = row['classes']
  t.created_at = row['created_at']
  t.updated_at = row['updated_at']
  t.save
end

formulationIngredients = File.read(Rails.root.join('lib', 'seeds', 'formulation_ingredients.csv'))
formulationIngredientsCsv = CSV.parse(formulationIngredients, :headers => true, :encoding => 'ISO-8859-1')
formulationIngredientsCsv.each do |row|
  t = FormulationIngredient.new
  t.id = row['id']
  t.formulation_id = row['formulation_id']
  t.ingredient_id = row['ingredient_id']
  t.percentage = row['percentage']
  t.created_at = row['created_at']
  t.updated_at = row['updated_at']
  t.save
end