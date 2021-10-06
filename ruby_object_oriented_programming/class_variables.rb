class Parent
    @@value = 100
    puts @@value
end

class Child < Parent
    @@value = 200
end

class GrandChild < Child
    @@value = 500
end

class Child < Parent
    @@value = 20
end

class Parent
    puts @@value
end

class Child
    puts @@value
end

p = Parent.new

c = Child.new

