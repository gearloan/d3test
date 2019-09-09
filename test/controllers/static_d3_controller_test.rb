require 'test_helper'

class StaticD3ControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get static_d3_index_url
    assert_response :success
  end

end
