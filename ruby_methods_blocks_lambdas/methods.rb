#Methods

#A method is created with the "def" keyword to definine a method.
#It takes in any arguments you want, separarted by commas
#Paretheses are optional

def multiply(a, b) #def multiply a, b
    a*b #the last expression will implicitly return
end

# def is_A_cat?(a)
#     p "#{a} is a cat"  #incorrect
# end

#The above is not good practise because a method ending with a
#question mark is expected to return a boolean

#Instead, do something like this:

def is_a_cat?(a)
    if a == 'cat'
        p true
    else
        false
    end
end

# is_a_cat?('cat')

def my_method(a, b)
    return a*b #you can use return keyword if the method needs to return prior to the last expression
    a+b
end

p my_method(3,2)
