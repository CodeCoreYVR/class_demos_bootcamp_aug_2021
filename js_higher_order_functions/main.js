// function loud(fn){
//     console.log(`Calling ${fn.name}`)
//     const value = fn()
//     console.log(`Called ${fn.name}`)
//     return console.log(value)
// }

const five = () => 5 + 5;

// loud(five)

// const myFunction = () => {
//     return console.log("This is my function")
// }

// loud(myFunction)

//------------------UPDATE LOUD---------------->

function loud(fn, logFn = console.info){
    logFn(`Calling ${fn.name}`)
    const value = fn()
    logFn(`Called ${fn.name}`)
    return logFn(value)
}

loud(five, console.warn)
loud(five, console.error)
loud(five, console.log)



