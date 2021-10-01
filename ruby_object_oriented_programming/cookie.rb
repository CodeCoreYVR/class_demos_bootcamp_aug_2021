#we define a class in Ruby using the "class" keyword
#class names are constants which means the name should start with a capital letter
#The convention is CamelCase for naming classes, like CookieMonster
#The convention for file names is snake_case: cookie_monster.rb
#Best practise to keep one class in one file

$greeting = "Hello" #Creating a global variable that is accessible throughout your program.  But usually not good practise to use them

class Cookie

    def initialize(sugar=1, flour=1)
        puts "In the initialize method"
        @sugar = sugar
        @flour = flour   
        @@colour = "Brown" #class variable that can be accessed and changed by all subclasses as well
    end

    #getter method
    # def sugar
    #     p @sugar
    # end
    #The above can be written like this:
    attr_reader :sugar

    #setter method
    # def sugar=(new_sugar)
    #     @sugar = new_sugar
    # end
    #The above can be written like this:
    attr_writer :sugar

    attr_accessor :flour #attr_accessor is a combination of both attr_writer and attr_reader
    
    def bake_n_eat
        bake()
        eat()
    end

    def eat
        p "nom nom nom"
    end

    def self.info
        p "Cookies are essential to a balanced diet!"
    end

    def details
        p "sugar: #{@sugar} | flour: #{@flour}"
    end

    private

    def bake
        p "baking cookie"
    end

end

# c = Cookie.new #calls the initialize method

# c.eat
# c.bake_n_eat
# # c.bake #this is now a private method. It will only work if called inside a public method (class method). Otherwise it will raise a "NoMethod" error

# Cookie.info

# c.info #raises an exception/error

# healthy_cookie = Cookie.new(1, 10)
# regular_cookie = Cookie.new(10, 15)

# healthy_cookie.details
# regular_cookie.details

# p healthy_cookie.sugar
# p healthy_cookie.sugar = 2
# p healthy_cookie.sugar 

# p regular_cookie.flour
# p regular_cookie.flour = 20
# p regular_cookie.flour
