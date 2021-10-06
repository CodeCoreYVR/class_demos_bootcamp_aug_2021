def product(*nums)
    nums.reduce(1) do |total, num|
        total*num
    end
end

p product(1,2,3,4,5,6,7)

# def multiply(a=2, b)
#     a*b
# end

# p multiply 5 #will return 10 because it will assume the first arg takes the default value of 2

# def product2 (n, *nums)
#     nums.reduce(1) do |n, num|
#         num*n
#     end
# end

# p product2() 