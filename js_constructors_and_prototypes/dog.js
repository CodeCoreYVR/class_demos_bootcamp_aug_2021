function Dog(name){
    this.name = name;
}

Dog.prototype.bark = function(){
    console.log(`${this.name}: woof!`)
}

Dog.prototype.fetch = function(){
    console.log(`${this.name} is fetching...`)
}

const rufus = new Dog('rufus');
const winston = new Dog('winston');

rufus.bark()

winston.bark()
winston.fetch()

winston.bark = function(){
    console.log(`${this.name}: bork!`)
}
winston.bark()

