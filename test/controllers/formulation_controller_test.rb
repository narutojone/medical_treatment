require 'test_helper'

class FormulationControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get formulation_index_url
    assert_response :success
  end

end
