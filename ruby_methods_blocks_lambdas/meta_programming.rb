def one
    1
end

def two
    2
end

def three
    3
end

# etc etc...

# puts one
# puts two

#define_method

numbers = {
    1 => "one",
    2 => "two",
    3 => "three",
    # ...etc
}

numbers.each do |number, number_name|
    #When using the define_method, the first arg 
    #is the name of the method being defined
    #The body of the method is the block that is used
    #for the defined method
    define_method(number_name) do
        number
    end
end

puts one
puts two
puts three

#Another Example

define_method("hello_world") do
    puts "Hello World"
end

hello_world

#Eval

p eval("1 + 1 * 10") #=> 11
p eval("two + two + three") #=> 7

