#Arrays
a = [[1,2,3], true, "Hey", "Bye"]

#to access "Hey"
a[2] #return "Hey"

aa = [[1,2,3], [1,2,3], [1,2,3], [1,2,3]]

aa[1] # [1,2,3]
aa[1][2] # 3

#--------------METHODS----------------->
#.push

a.push([4,5,6])
#[[1,2,3], true, "Hey", "Bye", [4,5,6]]

#shovel operator
# <<

a << "Hello World"
#[[1,2,3], true, "Hey", "Bye", [4,5,6], "Hello World"]

#.include?
a.include?([1,2,3]) #true
a.include?("Bye World") #false

#Get the number of elements in an array
# returns the number of elements within the array:
#Methods should return "6" if passing it array "a":
#[[1,2,3], true, "Hey", "Bye", [4,5,6], "Hello World"]
p a.count #6
p a.length #6
p a.size #6

#To get the specific index of an element, use .index
p a.index(2) #"Hey"

# Turn multi-dimensional array into a one-dimensional array
# .flatten
multi_array = [[1,2,3], [4,5,6], [7,8,9], [10,11,12]]
p multi_array.flatten

d3_array = [[[1],[2],[3]], [[4],[5],[6]], [[7], [8], [9]]]
p d3_array.flatten(1)
p d3_array.flatten(2)

#Add and remove elements from the beginning of arrays

#.shift
#can remove element from the start of an array but
#returns the removed element

a1 = ['a', 'b', 'c', 'd', 'e']
p a1.shift
p a1

#.unshift
#retruns the mutated array with the new elements
p a1.unshift('a2')
p a1

p a1.drop 2
p a1

p a1.delete_at 0
p a1

#Covert a string sentence into an array of words:
#.split

string = "Hello everyone, why are you sleeping?"
p string.split ' '
#or p string.split(' ')

#To convert an array of words into a string sentence:
#.join

a2 = ['Hello', 'CodeCore', 'Students']
p a2.join(' ')

#Swap elements
a2 = a2[2], a2[1], a2[0]
p a2

#Replace elements
a2[0..1] = [1,2]
p a2