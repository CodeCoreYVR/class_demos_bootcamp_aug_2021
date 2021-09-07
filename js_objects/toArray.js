// Create a function that takes an object and returns a 2d array of its key-value pairs

const testObj = { a: 1, b: 2, c: 3};

function toArray(obj){
    const newArr = [];
    for(let key in obj){
        newArr.push([key, obj[key]]);
    }
    return newArr;
}

console.log(toArray(testObj)); // [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]