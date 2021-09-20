// const waitOneSecond = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('waited 1 second')
//         resolve(1); // resolve good values
//         // reject();
//     }, 1000)
// })

// waitOneSecond
//     .then((a)=> {
//         console.log(a);
//         console.log('good value');
//     })
//     .catch(() => {
//         console.log('failed');
//     });

// console.log('a');
// console.log('b');

function wait(n){
    return new Promise((res, rej) => {
        setTimeout(() => {
            res();
        }, n)
    })
}

console.time('t');

wait(1000)
    .then(() => {
        console.log('waited 1 second');
        console.timeLog('t');
    });

wait(2000)
    .then(() => {
        console.log('waited 2 second');
        console.timeLog('t');
    });  