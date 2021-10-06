# => ruby rocket
#keys in a hash can be strings, integers, or symbols

#ruby rocket is some older syntax
# h = {:symbol => 1, 'string' => 2, 4 => 3}

#newer syntax
# h = {jane: 10, jim: 6}

#All keys created using the above syntax are symbols

grades = {
    "Jane Doe" => 10,
    "Jim Doe" => 6,
    :lisa => 12, #this can also be lisa: 12
    "lisa" => 500
}

p grades["Jane Doe"] 

grades["Jane Doe"] = 20
p grades["Jane Doe"] 

#Methods

#.keys
# returns all the keys of a hash as an array
p grades.keys #returns ["Jane Doe", "Jim Doe", :lisa, "lisa"]

#.values
p grades.values #returns [20, 6, 12, 500]

