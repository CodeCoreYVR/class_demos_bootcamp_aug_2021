def add(first: 0, second: 1)
    #the first arg has default of zero
    #the second arg has default of 1
    p first + second
end

add
add(first:10, second:10)
add
add(second:30)
# add(5,6) #this will not work with named args