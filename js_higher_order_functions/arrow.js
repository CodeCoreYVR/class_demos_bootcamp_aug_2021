const sleep = (a) => {
    return console.log("Zzzzzz")
}

const sleep = a => console.log("Zzzzzz")

//To Arrow

//1. add
function add(a,b){
    return a + b
}

const add = (a,b) => a + b;

//2. flip
function flip(fn){
    return function(a,b){
        return fn(a,b)
    }
}

const flip = fn => {
    return (a,b) => fn(a,b)
}

//3 V
function V(x){
    return function(y){
        return function(z){
            return z(x)(y);
        }
    }
}

//a
const V = x => {
    return function(y){
        return function(z){
            returnz(x)(y);
        }
    }
}

//b
const V = x => {
    return y => {
        return function(z){
            return z(x)(y)
        }
    }
}

//c
const V = x => {
    return y => {
        return z => {
            return z(x)(y)
        }
    }
}

//d
const V = x => y => z => z(x)(y)


