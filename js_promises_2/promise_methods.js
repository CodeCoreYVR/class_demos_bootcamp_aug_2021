const wait = require('./wait');

// const red = wait(1000, 'red')

// red.then((val) => console.log(val)) //normally a promise can only resolve or reject once

// Promise.resolve(red).then(val => console.log(val))

//Parallel vs Sequence

//Running promises in parallel
// console.time('timerA')
// const red = wait(5000,'red')
// const green = wait(1000,'green')
// const blue = wait(1000,'blue')

// red.then((val => {
//     console.log(val)
//     console.timeLog('timerA')
// }))

// green.then((val => {
//     console.log(val)
//     console.timeLog('timerA')
// }))

// blue.then((val => {
//     console.log(val)
//     console.timeLog('timerA')
// }))

//Promise.all
//allows you to run an array of promises in parallel
//it returns a promise that resolves to an array of resolved values
//if any of the promises within the array of promises reject,
//the entire thing will reject

console.time('timerB')
Promise.all([ //promise.all will wait until every promise in array is done
wait(5000,'purple'),
wait(1000,'monkeys'), //this will reject
wait(1000,'orange')
]).then((val) => { //val will be an array of all the resolved values
    console.log(val)
    console.timeEnd('timerB')
}).catch((err) => { //if you don;t have a catch if an error happened, it will close your app and take you out
    console.log(err)
})

