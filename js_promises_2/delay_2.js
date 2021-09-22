const flipCoin = require('./flipCoin.js')

function delay(ms, val){
    console.log('delay start')
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log('delay complete')
            res(val)
        }, ms)
    })
}

//Delay Throwing coin

//Nesting .then
delay(1000).then(() => {
    flipCoin().then(value => {
        console.log(value)
    })
}).catch(e => console.log('error somewhere ' + e))

//Unwrap the then()
delay(1000).then(() => {
    return flipCoin();
}).then(value => {
    console.log(value)
})

