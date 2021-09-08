function sumRecursive(arr){
    if(arr.length === 0){
        return 0;
    } else {
        return arr[0] + sumRecursive(arr.slice(1))
    }
}

function sumIteration(arr){
    let sum = 0;
    for (let element of arr){
        sum += element;
    }
    return sum
}

const array = [];
let i = 1
while (array.length < 5000){
    array.push(i);
    i++;
}

console.time('a');
sumRecursive(array);
console.timeEnd('a');

console.time('b');
sumIteration(array);
console.timeEnd('b');

