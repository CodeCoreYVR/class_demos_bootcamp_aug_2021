// The most outer scope in NodeJS (Javascript Running on the Server/Hardware/Your computer) is the Global Scope
// A variable or value that can be referenced from anywhere is on the Global Scope.

// console.log is an example of something that is on the global scope
global.console === console // true

// Process - is an object attatched to the global scope it has information about the current proccess running NodeJS

// JavaScript runs in 2 places:
// 1) Browser: Chrome/Firefox/Safari
// 2) NodeJS: On your hardware/computer

// Browser and NodeJS are called runtimes
// A runtime is the program/environment that will read Javascript code and execute it

// process.exit(-1) //exit is a method that exits out of the Node.js environment. Negative 1 (-1) is code to tell others that something went wrong
// console.log('does this run?')

//Asynchronous Javascript
//Async means something runs in the background, along side other expressions/things running
// Code can run simultaneously
// JS is synchronous in general, but there are certain functions in JS that are async functions

//Higher order functions - functions that receive another function as an argument
//Callback - is the name used to reference the function passed into HOF as argument

//setTimeout takes 2 arguments
// 1) a callback
// 2) a delay in milliseconds

const THREE_SECONDS = 3000;

setTimeout(() => console.log('hi'), THREE_SECONDS)
console.log('2')
console.log('3')
console.log('4')

//setInterval





