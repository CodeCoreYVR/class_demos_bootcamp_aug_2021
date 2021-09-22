//special function that allows you to run async code as synchronous

const wait = require('./wait')

async function awesome(){
    console.time('timer')
    //inside of an async function you get access to a new operator called "await"
    //await will wait untol a given promise is resolved before moving to the next line of code
    //await can only be used on a Promise!!!
    const red = await wait(1000, 'red') //synchronous looking code

    console.log(red)
    console.timeLog('timer')
    const blue = await wait(5000, 'blue');
    console.log(blue)
    console.timeLog('timer')
    const colours = await Promise.all([wait(1000, 'red'), wait(1000, 'blue'), wait(1000, 'purple')])
    console.log(colours);
    console.timeLog('timer')
}

awesome();
console.log('a')
console.log('b')

//This is the cleanest way of writing async code