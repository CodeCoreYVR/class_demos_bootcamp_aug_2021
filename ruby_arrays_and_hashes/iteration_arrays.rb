# iterating through elements of an array
arr = ["a", "b", "c", "d"]

# using a for loop

# for element in arr do
#   puts element
# end


a3 = [1,2,3,4,5,6,7]

# .each
#one of the most common ways to iterate over an array
# the method expects a block with an argument
#blocks are a new concept here
#blocks are a piece of code that you can pass in as an argument to a method
# blocks start after the `do` statement... arguments are written inside of the pipes | |

# In ruby, there is no such things as functions, instead ruby just uses methods. 
# And methods may take a block of code as an argument. We no longer pass functions around. We pass blocks around

# do end, is similar to {} in JS. so similar scope as it would be in JS


#The argument x represents the value of each element in the array in this case
a3.each do |x| #the block starts after the "do" statement. Arguments are within the two pipes "| |".
    #Multiple arguments can be separated by commas "|x,y|"
    y = x*2
    # puts y
end

a4 = [1,2,3,4,5]

#.each method
a4.each do |element|
    y = element**2
    puts y
end

#.map method
['a','b',2,'d','e'].map do |element|
    p element.class
end

#The JS way of string interpolation is `my string ${code}`
#The Ruby string interpolation is "my tring #{code}"

#.map.with_index
['a','b',2,'d','e'].map.with_index do |element, index|
    p "element: #{element}, index: #{index}"
end

# A nice thing about ruby is that you don’t need to explicitly return.  The last line in a block will automatically return
# remember... everything in ruby is an object... the .map method is an object that has a method called .with_index
# calling .with_index will give you the map method but the block has an additional argument as the index


#Printing multiple dimensions
a5 = [[1,7,3], [4,4,6], [7,2,9]]

a5.each do |sub_array|
    sub_array.each do |val|
        p val*val
    end
end
