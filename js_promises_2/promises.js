//--------How to use promises, before creating our own-------->

const fs = require('fs').promises; //all of the same functions available, but just as promises

//The promisified version of readFile accepts 2 arguments
//1) path to the file
//2) options object OR a string
//no longer need a callback

const p = fs.readFile('./files_to_read/file_1.txt', 'utf8') //returns a promise
//p is the promise (object) that represents an asynchronous action
//it will have a value sometime in the future
//so we are saving it as a variable "p"

//We still have to pass the promise a callback, but not in the traditional way
//Instead, we use a method called .then, which is a method that accepts a callback as its argument
//.then accepts a callback, and the callback accepts data as an argument
//the arguments will be slightly different depending on the promise
//but in this case it is data that the callback is accepting

p.then((data) => {
    console.log(data)
    return fs.readFile('./files_to_read/file_2.txt', 'utf8')
}).then((data)=> {
    console.log(data)
    return fs.readFile('./files_to_read/file_3.txt', 'utf8')
}).then((data)=>{
    console.log(data)
}).then(() => {
    console.log('print first'); 
})

//The above is supposed to look much better than the callback hell in callbacks_in_sequence.js

// console.log('print first');
console.log('print second');
