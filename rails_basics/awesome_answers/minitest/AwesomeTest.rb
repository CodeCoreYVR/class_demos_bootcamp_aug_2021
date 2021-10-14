require "minitest/autorun"


# To create a grouping of tests with MiniTest,
# create a class whose name ends in `Test` and inherits from MiniTest::Test
class AwesomeTest < MiniTest::Test

    # To run tests (with minitest/autorun) you must start the method name with test_
    def test_something

        assert_equal(2, 1+1)
    end
    

end

# to run this file, execute it with ruby
# `ruby AwesomeTest.rb`

# To display the name of all tests that run, andd the option -v or --verbose