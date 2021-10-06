a = []

for i in 1..100
    str = []
    str.push 'fizz' if i % 3 == 0
    str.push 'buzz' if i % 5 == 0
    str.push i if str.length == 0 #if the above string is empty, 
    # it means it was not divisible by 3 or 5, so we print the number
    a << str.join('')
end

p a

