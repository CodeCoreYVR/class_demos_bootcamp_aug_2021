//Promise to do something in the future
//Has one of two outcomes:
//1) Completed (resolved)
//2) Failed (rejected)

let p = new Promise((resolve, reject) => {
    //define what promise is
    let a = 1 + 1
    if (a == 2){
        resolve('success')
    }else{
        reject('fail')
    }
})

p.then((message) => {
    console.log('This is in the then-> ' + message)
}).catch((message) => {
    console.log('This is in the catch-> ' + message)
})

