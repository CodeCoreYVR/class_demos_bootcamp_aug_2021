//Build a constructor that creates an object like this:

/*
{
    count: 0, //integer
    step: 1, //integer
    inc: method that increases count by step,
    dec: method that decreases count by step,
    now: method that returns the counter object at current state
}
*/

function Counter(count, step=1){ //set a default value if step is not passed an argument
    this.count = count || 0; //set a default value of 0 if count not passed as an argument
    this.step = step;

    this.inc = function(){
        this.count += this.step;
        return this;
    }

    this.dec = function(){
        this.count -= this.step;
        return this;
    }

    this.now = function(){
        return this.count
    }
}

const c1 = new Counter(10,5); //this will start with a count of 10, and will either inc or dec by step 5
const c2 = new Counter(); //this will just start with the default values

c1.inc()
console.log(c1)

c2.inc()
console.log(c2)

c2.inc()
c2.inc()
c2.inc()
c2.inc()
c2.inc()
c2.inc()
console.log(c2)


c2.inc().inc().inc().inc() //this will be undefined unless the methods 
//return "this" to refer to the instance of the object
//because 'this' represents the object that owns the method, you need to 
//return the object to use the new method on it in the chain
console.log(c2)

const c3 = new Counter();
console.log(c3)

