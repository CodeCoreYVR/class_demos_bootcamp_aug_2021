# p 'hello'
=begin
 for mulitline comment
 hihihi

print "hello world"
p "hello world"
puts "hello world"

print 123
print 456
# print has no line break in the end

puts [1,2]
1
2
p [1,2]
[1, 2]
=end

# first_name = 'Mao'
# DOMAIN = 'localhost' # const variable

# a = 1
# b = a+5
# p a
# p b

# a = "Hello"
# b = "World"
# c =a + " "+ b
# p c

# puts "What's your name?"

# user_input = gets

# p user_input
# puts "What's your name?"

# user_input = gets.chomp

# p user_input

# puts "What's ur name"

# name = gets

# puts "hello " + name

# puts "What's ur first name"
# first_name = gets.chomp
# puts "What's ur last name"
# last_name = gets.chomp
# puts first_name + " " + last_name


=begin
 1.class
 3.14.class
 "Mao".class
=end

# 'I\'m a String'

# "I'm a String"

=begin
#String Interpolation

puts "What's ur name?"

user_input = gets.chomp

puts "Hi #{user_input}"
=end

=begin
# Strings are mutable in ruby
test_string = 'abc'

test_string[0] = 'b'

puts test_string
=end

=begin
# https://ruby-doc.org/core-3.0.0/String.html
puts "What's ur name"

name = gets.chomp

puts name.capitalize

puts name.reverse

puts name.swapcase


# puts name.replace "Hello"

puts name.gsub("M","L")

=end

# puts 1_00_00_000

# puts 5 / 3 
# puts 5.0 / 3 

# puts "50".to_i => 50
# puts "50".to_f => 50.0
# to_i i means integer
# to_f f means float

# a = 5
# b = a ** 3
# puts b

=begin
puts "give me a number a"
num1 = gets.chomp
puts "give me a number b"
num2 = gets.chomp

puts num1.to_i * num2.to_i
=end

=begin
# Logic Operators
# &&
true && false  # => false
false && false # => false
true && true   # => ture
# ||
true || false  # => true
false || false # => false
true || true   # => ture
false || true  # => ture

# == also checks the data type
puts '100' == 100
# false

=end

=begin
if 9 > 3
    puts "9 is greater than 3"
end

if 10 > 2
    puts 10
else
    puts 5
end



if 10 >3
    
elsif 19 == 4
    
else 
    
end
=end

=begin
# unless
time_now = 12

unless time_now > 13
    puts "not here"
end
=end

=begin
puts "What's the year of your car"
year = gets.chomp.to_i
if year > 2100
    puts "future"
elsif year > 2000 && year < 2022
    puts "new"
else 
    puts "old"
end
=end

=begin
# loop

counter = 1
while counter < 11
    counter < 11 => true
    puts "I'm at #{counter}"
    counter += 1
end

=end

=begin

#until loop
counter = 1

until counter > 5
    counter > 5 => false
    puts "I'm at #{counter}"
    counter += 1
end

=end

=begin
# ... not include the last number
# .. includes

for number in 1...10
    puts number
end
for number in 1..10
    puts number
end

10.times {puts "Hello World"}

arr = ['a','b', 'c']

for i in arr do
    puts i
end

=end


=begin
usually the ruby function name end with ? mark means this function 
returns a boolean value or nil
the function name end with ! mark means this function gonna change the original data

puts 1.is_a? Integer

=end