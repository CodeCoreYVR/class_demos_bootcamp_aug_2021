class Car
    def initialize(model, type, capacity)
        @model, @type, @capacity = model, type, capacity
        #same as:
        # @model = model
        # @type = type
        # @capacity = capacity
    end

    attr_accessor :model, :type, :capacity

    def start
        p "this should start the car"
    end

    def drive
        ignite_engine()
        p "Driving car"
    end

    def park
        p "Parking car"
    end

    def stop
        p "Stopping car"
    end

    def self.max_speed
        p 200
    end

    private

    def any_ignition_stuff
        p "this should not print"
    end

    def pump_gas
        p "Pumping the gas"
    end

    def ignite_engine
        p "Igniting the engine"
    end

end

# c = Car.new

# c.start
# # c.any_ignition_stuff  #this is a private method and will not work when called on an instance

# c.drive

# c2 = Car.new

# c2.drive
# c2.stop
# c2.park

# Car.max_speed

car2 = Car.new("2009", "Audi", 5)

car2.drive
car2.stop
car2.park

Car.max_speed


