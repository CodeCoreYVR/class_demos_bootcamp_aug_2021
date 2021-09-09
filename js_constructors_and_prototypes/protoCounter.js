function Counter(count, step=1){ //set a default value if step is not passed an argument
    this.count = count || 0; //set a default value of 0 if count not passed as an argument
    this.step = step;
}

Counter.prototype.inc = 
    function(){
        this.count += this.step;
        return this;
    }

Counter.prototype.dec =
    function(){
        this.count -= this.step;
        return this;
    }

Counter.prototype.now =
    function(){
        return this.count
    }

const c1 = new Counter();
const c2 = new Counter();
const c3 = new Counter();
const c4 = new Counter();
const c5 = new Counter();
console.log(c1.__proto__)
console.log(c2.__proto__)
console.log(c3.__proto__)
console.log(c4.__proto__)
console.log(c5.__proto__)

c3.inc().inc().inc().inc().inc()
console.log(c3)

