function delay(ms, val){
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(val)
        }, ms)
    })
}

//To avoid nesting like this...
// delay(5000, 'blue').then(val => {
//     console.log(val)
//     delay(3000, 'red').then(val => {
//         console.log(val)
//         delay(2000, 'purple').then()...
//     })
// })

//We can return promises to use the value on the next .then in the chain...
delay(5000, 'blue').then(val => {
    console.log(val)
    return delay(3000, 'red')
}).then(val => {
    console.log(val)
    return delay(2000, 'purple')
}).then(val => {
    console.log(val)
    return delay(2000, 'green')
}).then(val => {
    console.log(val)
}).catch(err => {
    console.log(`Error ${err}`)
})