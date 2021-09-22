function wait(n, val){
    return new Promise((res, rej) => {
        if(val === 'monkeys'){
            rej('no monkeys')
        }
        setTimeout(() => {
            res(val)
        }, n)
    })
}

module.exports = wait;
