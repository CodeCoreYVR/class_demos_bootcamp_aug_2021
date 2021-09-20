// The FS Module has all of the asynchronous functions turned into promises
const fs = require('fs').promises;

// The promisified version of readFile accepts 2 arguments
// 1) path to the file
// 2) options object or a string
const p = fs.readFile('./files/page_1.md', 'utf8') // returns a promise
// p is the promises that represents an asynchronous action
// it will have a value sometime in the future
p.then((data) => {
    console.log(data);
    return fs.readFile('./files/page_2.md', 'utf8');
}).then((data) => {
    console.log(data);
    return fs.readFile('./files/page_3.md', 'utf8');
}).then((data) => {
    console.log(data);
});

console.log('a');
console.log('b');