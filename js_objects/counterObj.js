const counter = {
    currentCount: 0,
    set: function(n){
        this.currentCount = n;
    },
    inc: function(){
        this.currentCount++;
    },
    dec: function(){
        this.currentCount--;
    },
    now: function(){
        console.log(this.currentCount);
    }
}

console.log(counter);
counter.set(10);
counter.inc();
counter.now();
console.log(counter);