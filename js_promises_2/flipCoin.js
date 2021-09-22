function flipCoin(){
    return new Promise((res, rej) => {
        //0 will represent tails
        //1 will represent heads

        const side = Math.floor((Math.random() * 2)) //1 or 0
        const randomTime = Math.floor((Math.random() * 4) + 1) * 1000  //return 1000/2000/3000/4000

        if(randomTime > 3000){
            setTimeout(() => {
                rej(new Error('Coin was thrown too high!'));
            }, randomTime)
        } else {
            setTimeout(() => {
                if(side){ //the values of 1 vs 0 would return truw or false in JS. So side represents a boolean value in this case
                    res('heads')
                }else{
                    res('tails')
                }
            }, randomTime)
        }
    })
}

console.time('timer')
flipCoin()
.then((value) => {
    console.log(`The coin is ${value}`)
    console.timeEnd('timer')
})
.catch((err) => {
    console.log(err)
})

module.exports = flipCoin;