// Exercise: Rude Bot

// To create a function, use the `function` keyword
// followed by a name (optional), then a () with
// arguments declared inside and {} for the body of
// the function where we write code to be executed later.

// In the function below, `name` is its argument.
// Arguments allow us to take values as inputs to
// function when we call it.

function insult(name){
    const randNum = Math.floor(Math.random() * 3)
    // The moment a function's body encounters the return
    // keyword all lines of code that come are ignored.
    // The function is exited immediately.

    if(randNum === 0){
        // To get an output from a function, you
        // must use the `return` keyword followed
        // by an expression or a value.
        return `${name}, you doofus!`
    } else if (randNum === 1){
        return `${name}, your father smells like strawberries!`
    } else {
        return `${name}, your mother has a hamster!`
    }
}

// Example usage:

// To use function and to get its return value, we call
// the function appending () to its name with the
// arguments inside.

console.log(insult('Sam'))
console.log(insult('Tom'))
console.log(insult('Mary'))
console.log(insult('Patty'))

insult;  // This does NOT call the function, but returns the fuction itself instead


