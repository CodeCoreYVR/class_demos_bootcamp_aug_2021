function sum([first, ...rest]){
    if(rest.lenth < 1){
        return first;
    }else {
        return first + sum(rest);
    }
}

//Recursive Factorial

function factorial(n) {
    if (n === 1 ){
        return 1
    } else {
        return n * factorial(n-1)
    }
}

//Reverse a String

function reverse(str){
    if(str.length === 0){
        return ""
    } else {
        return str[str.length -1] + reverse(str.slice(0, -1))
    }
}

console.log(reverse("hello"))
// console.log(reverse("bye"))