//declare an array like this, with []
let myFirstArray = ['a', 'b']

myFirstArray.length //this will return 2

// 'a' and 'b' are the data values in the ordered list called the array
// they are also referred to as the array's elements

//each value has a numbered position, the index

let newArray = [4,'hello',10, true, ['a','b'], {}]
//arrays can contain any type of values as elements

for (let i = 0; i < newArray.length; i += 1){
    // console.log('index:', i, 'value:', newArray[i])
}

//For loop if index not needed:

for (let value of newArray){
    console.log('value', value)
}

