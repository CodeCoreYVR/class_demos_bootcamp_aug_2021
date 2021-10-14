require "minitest/autorun"
require "./Vector.rb"

class VectorTest < MiniTest::Test
    def test_length
        # GIVEN - the initial state of our program
        # a vector of (3, 4)
        vector = Vector.new(3 ,4)

        # WHEN - an action is triggered
        # Then length method is called
        length_of_vector = vector.length

        # THEN - we verify the final state
        # The length should equal 5
        assert_equal(5, length_of_vector)
        
        # When using assert_equal, the argument order is as follows
        # 1 the value we expect or want
        # 2 the actual value our code returned

    end
    
    def test_to_s
        # GIVEN 
        vector = Vector.new(1, 1)
        # WHEN
        to_s = vector.to_s
        # THEN
        assert_equal("Vector (1, 1)", to_s)
    end
    

end