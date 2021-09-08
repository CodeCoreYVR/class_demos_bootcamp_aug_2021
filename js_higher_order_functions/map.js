const myRepeat = (str, index) => {
    return str.repeat(index)
}

map(myRepeat, ['a','b','c','d', 'e'])
//returns a new array ['','b','cc','ddd','eeee']

//------------------Recreate map---------------------->

function ourMap(arr, callback){
    const newArr = [];
    for (let element of arr){
        newArr.push(callback(element))
    }
    return newArr;
}



