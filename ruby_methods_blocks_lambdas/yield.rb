# def my_yield_method
#     p "I'm a yield method"
#     yield if block_given?
#     puts "bye"
# end

# my_yield_method

def print_once
    yield
end

print_once {puts "Block is being run"}
#if you yield without a block you will get "no block error"
#yield expects to be passed a block

print_once do
    puts "This do block is displayed"
end

#You can pass arguments to the yield block

def my_method
    x=15
    yield(x) if block_given?
    puts "Bye"
end

my_method do |my_arg|
    puts "I received #{my_arg} from method"
end

def print_twice
    yield
    yield
end

print_twice{puts "Block is being printed twice"}
