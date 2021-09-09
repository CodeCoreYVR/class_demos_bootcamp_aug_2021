// function printThis(){
//     console.log(this) //will refer to global object or undefined if in strict mode
// }

const obj = {
    printThis: function(){
        console.log(this)
    }
}

obj.printThis()

function can(fn){
    console.log(fn());
}

can(obj.printThis)

//-------------------Bind---------------->
//used counter behaviour of "this" and to set reference to 'this'
const bindedPrintThis = obj.printThis.bind(obj)
can(bindedPrintThis)
