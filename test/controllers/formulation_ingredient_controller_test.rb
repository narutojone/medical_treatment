require 'test_helper'

class FormulationIngredientControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get formulation_ingredient_index_url
    assert_response :success
  end

end
