//What is a constructor?
//A constructor is meant to create objects
//We have a Promise constructor/class that makes nerw promise objects

//----Create new Promise with asynchronous function--->

const waitOneSecond = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('wait one second')
        //we want to resolve something after setTimeout is completed
        //without resolve being called, this new promise's callback doesn't do anything
        resolve('I will build the house in 3 weeks'); //with no resolve or reject, the promise will not do anything
        reject('the house is not built within 3 weeks')
    }, 1000)
    // resolve('I will build the house in 3 weeks'); 
})

waitOneSecond.then((a) => {
    console.log(a)// a being the argument passed with the resolve
    //in here we do whatever we want to do after a promise is resolved
    console.log('inside of .then - resolved')
})
.catch((a) => {
    console.log(a)
    console.log('inside of .catch - failed')
})

//We must have a resolve or reject for promises to work
//When rejecting, there will need to be a .catch
//Promise will be completed if either resolved or rejected - only once

//3 Different states an instance of a Promise can be in...
//1) pending: the async action is still working in the background
//2) fullfilled: the promise has resolved to a good value
//3) rejected: the promise has resolved(finished) to a bad value - rejected




