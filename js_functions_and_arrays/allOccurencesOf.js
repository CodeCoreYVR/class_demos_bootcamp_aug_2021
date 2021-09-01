function occurencesOf(char, arr){
    let countArr = [];
    for(let value of arr){
        let count=0;
        for(let i=0; i<value.length; i++){
            if(value[i] === char){
                count++
            }
        }
        countArr.push(count)
    }
    return countArr
}

console.log(occurencesOf('l',['hello', 'world']))
console.log(occurencesOf('o',['bob','likes', 'tea']))
