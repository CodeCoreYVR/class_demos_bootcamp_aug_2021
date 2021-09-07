// Methods

function first(arr){
    return arr[0];
}

const ArrayUtils = {
    last: function(arr){
        return arr[arr.length - 1]; 
    },

    first: first,

    take(arr, n){
        return arr.slice(0, n);
    },

    toObject(twoDArray){
        const obj = {};

        for(let pair of twoDArray){
            // pair looks like [key, value]
            obj[pair[0]] = pair[1]
        }
        return obj;
    }

}

const testArr = [100, 200, 300, 400, 500];

console.log(ArrayUtils.last(testArr)); // 500
console.log(ArrayUtils.first(testArr)); // 100
console.log(ArrayUtils.take(testArr, 2)); // [ 100, 200 ]

const twoDArray = [ ["a", 1], ["b", 2], ["c", 3] ]; // { a: 1, b: 2, c: 3 }
console.log(ArrayUtils.toObject(twoDArray));
