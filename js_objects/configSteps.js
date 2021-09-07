const counter = { 
    step: 1,
    currentCount: 0, 
    set: function(n) { 
      this.currentCount = n;  
    },
    inc: function() { 
      this.currentCount += this.step;
    },
    dec: function() { 
      this.currentCount -= this.step;
    },
    now: function() {
      console.log("this value:", this);  
      console.log(this.currentCount);
    },
    setStep(step){
        this.step = step;
    }
}

counter.inc(); 
console.log(counter); // step is 1, currentCount is 1
counter.inc(); 
console.log(counter); // step is still 1, currentCount is 2
counter.setStep(10); 
console.log(counter); // step is now 10, currentCount is 2
counter.inc(); 
console.log(counter); // step is 10, currentCount is 12