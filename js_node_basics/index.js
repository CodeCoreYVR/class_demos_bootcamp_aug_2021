//require is a function used to load in modules
//it takes in one arg: a string which is the relative path to a file

// const addition = require('./add'); //the variable addition is assigned the value of whatever is module.exports from the file at ./add.js
const primes = require('./primes');
//we can omit the .js because require will assume that you are passing it a JS file. will throw an error otherwise
const add = require('./add') //this will also work

// const primes = require('./primes')

// console.log(primes.reduce(addition, 0));

//with modules you can have 2 thinhs with the same name:
primes.forEach((number) => {
    console.log(add.add(number,1))
})


