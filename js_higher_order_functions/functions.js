//Function declaration

function add (n1, n2) {
    //code block
    return console.log(n1+ n2)
}

//Function expression

// const add = function(n1, n2){
//     //code block
//     return n1+ n2
// }

// add() // this will invoke the function and execute the function to
//return a value
// add; //this will only declare the function would return [Function: add]

function fnReturner (fn) {
    return add
}

const adder = fnReturner()
adder === add;
adder(2,2)



