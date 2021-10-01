#Namespace usage of Ruby Modules

module Computer
    class Apple
        def initialize(model)
        end
    end
end

module Fruit
    class Apple
        def initialize(type, colour)
        end
    end
end

macOs = Computer::Apple.new('iMac')
gala = Fruit::Apple.new('Gala', 'red')

