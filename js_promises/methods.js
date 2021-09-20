const wait = require('./wait');

// const red = wait(1000, 'red');
// red.then((val) => console.log(val));

// // Promise.resolve will return a new promise that is resolved to the value passed in
// // Useful for re-reading a resolved promise

// Promise.resolve(red)
//     .then((val) => console.log(val));

// Parallel vs Sequence

// Running Promises in parallel
console.time('timerA')
const red = wait(1000, 'red')
const blue = wait(1000, 'blue')
const green = wait(1000, 'green')

red.then((val) => {
    console.log(val)
    console.timeLog('timerA')
})

blue.then((val) => {
    console.log(val)
    console.timeLog('timerA')
})

green.then((val) => {
    console.log(val)
    console.timeLog('timerA')
})

// Promise.all
// Allow you to run an array of promises in parallel
// It returns a promise that resolves to an array of resolved values
// If any of the promises within the array of promises rejects the entire thing will reject


console.time('timerB')
Promise.all([
    wait(1000, 'purple'),
    wait(2000, 'monkeys'),
    wait(1000, 'orange')
]).then((val) => {
    console.log(val);
    console.timeEnd('timerB')
}).catch((err) => {
    console.log(err);
})

//Sequence: promise is invoked only after the previous one is finished

console.time('timerC')
wait(1000, 'dog')
    .then(val => {
        console.log(val);
        console.timeLog('timerC');
        return wait(1000, 'cat')
    })
    .then(val => {
        console.log(val);
        console.timeLog('timerC');
        return wait(1000, 'bird')
    })
    .then(val => {
        console.log(val);
        console.timeLog('timerC');
    })

// Promise.race accepts an array of promises
// Will resolve to the first promise that completes 

Promise.race([
    wait(1000, 'vancouver'),
    wait(2000, 'burnaby'),
    wait(3000, 'new west')
])
.then(val => {
    console.log(val)
})










