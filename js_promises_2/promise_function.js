//Normally you would not just create an instance of a Promise, you would
//create a function that returns an instance of a Promise
//So that way we can reuse the promise
//So, we are going to wrap the promise from makingPromises.js into a function
//and make it a little more dynamic:

function wait(n){
    return new Promise((res, rej) => { //this promise will wrap the async function setTimout
        setTimeout(() => {
            res(n);// if you need to pass something you can
            rej();
        }, n) //wait n seconds
    })
}

console.time('t'); //start a timer

wait(3000)
.then(()=>{
    console.log('waited 3 seconds')
    console.timeLog('t'); //this logs out how much time we really waited after timer was started
}).catch(() => {
    console.log('failed')
})

wait(2000)
.then(()=>{
    console.log('waited 2 seconds')
    console.timeLog('t'); //this logs out how much time we really waited after timer was started
}).catch(() => {
    console.log('failed')
})