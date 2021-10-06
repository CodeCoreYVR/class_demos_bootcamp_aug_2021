class Rectangle
    attr_accessor :width, :height

    def initialize(width=0, height=0)
        @width, @height = width, height
    end

    def area
        # @width * @height
        width * height
    end

    def is_square?
        # @width == @height
        width == height
    end
end

r = Rectangle.new
puts r.area
puts r.is_square?

r.width = 5
r.height = 7
puts r.area
puts r.is_square?

r.width = 5
r.height = 5
puts r.area
puts r.is_square?

#To ask user in console for height and width and then print area:

# p "give me your height"
# height = gets.chomp.to_i
# p "give me your width"
# width = gets.chomp.to_i

# r4 = Rectangle.new(width, height)

# p r4.area

#To load a file in pry:
#Go into pry
#Then in terminal:
# load './rectangle.rb'
#Note: this will load the Rectangle class and print to the console
#but if you declared an instance of the class, like "r", it won't be available
#so create your own instance to test out the methods

