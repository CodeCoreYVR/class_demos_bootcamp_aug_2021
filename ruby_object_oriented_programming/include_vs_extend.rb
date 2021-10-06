module AwesomeMethods
    def greeting
        'Hello World'
    end
end

class Abc 
    #a = Abc.new
    include AwesomeMethods
    # you will have access to the module methods on the instance of a class:
    #a.greeting
end

class Xyz 
    extend AwesomeMethods
    # you will have access to the module methods on the class itself:
    # x = Xyz.new 
    # x.greeting #this will not work
    #Xyz.greeting #this will work
end

