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

//Brand new Constructor
function DoggoFighter(name, specialAbility){
    this.name = name;
    this.specialAbility = specialAbility;
}

DoggoFighter.prototype.useSpecial = function(){
    console.log(`${this.name} uses the special ability: ${this.specialAbility}`)
}

const doge = new DoggoFighter('doge', 'ninja attack')
doge.useSpecial();

//How do we inherot with prototypes?
//We want to do something like this:
//Doggofighter.prototype.__proto__ = Dog.prototype

Object.setPrototypeOf(DoggoFighter.prototype, Dog.prototype)
//first arg is what you want to set, second is what you want to set it to
//child first, parent second

doge.__proto__ === DoggoFighter.prototype //true
doge.__proto__ === Dog.prototype //false, even though it indirectly inherits the prototype methods through DoggoFighter parent
