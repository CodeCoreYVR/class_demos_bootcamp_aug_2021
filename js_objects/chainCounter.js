// Chainable Counter
// Add the ability to call .inc() or .dec() one after the other in a chain like so...


const counter = { 
    step: 1,
    currentCount: 0, 
    set: function(n) { 
      this.currentCount = n
      return this;  
    },
    inc: function() { 
      this.currentCount += this.step
      return this;  
    },
    dec: function() { 
      this.currentCount -= this.step
      return this;  
    },
    now: function() {
      console.log("this value:", this);  
      console.log(this.currentCount);
      return this;  
    },
    setStep(step){
        this.step = step;
        return this;  
    }
}

counter.inc().inc().setStep(10).inc().dec().dec().now() 

/** this value: { step: 10,
  currentCount: -8,
  set: [Function: set],
  inc: [Function: inc],
  dec: [Function: dec],
  now: [Function: now],
  setStep: [Function: setStep] }
-8
 */