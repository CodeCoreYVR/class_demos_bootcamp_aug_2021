require './cookie.rb'
#the above requires the whole cookie.rb file
#we need this to access the Cookie class

#here Oreo inherits from the Cookie class which means Oreo will have
#access to all methods and variables: public, private, class, instance... etc
#Cookie class is the parent class or Superclass
#The Oreo class is the Child or Subclass


class Oreo < Cookie
    attr_accessor :filling_type

    #By defining a method with the same name as a method in the parent class
    #we are "overriding" the method which means we are redefining the method 
    #just for instances of the Oreo class
    def details
        p "This is a #{filling_type} Oreo cookie"
        #using the "super" keyword we're calling a method with the same name
        #in the superclass (or parent class)
        #In this case we are calling the 'details' method in the Cookie class
        #with super, and then also calling the method class unique to Oreo
        super 
    end
end

oc = Oreo.new
p oc.sugar
p oc.flour
oc.eat
oc.filling_type = "cream"
p oc.filling_type

oc.details

