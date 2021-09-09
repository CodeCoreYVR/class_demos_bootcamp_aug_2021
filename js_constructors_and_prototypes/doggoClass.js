//Classes are created with a special keyword "class"
class Doggo{
    //constructor is a special method for classes
    //this is what fires off when we create a new instance of Doggo
    //constructor is similar to function constructor
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    //creates a prototype method
    bark(){
        console.log(`${this.name}: woof!`) 
    }
}

const lucky = new Doggo('lucky', 2)
console.log(lucky)

lucky.bark()

class DoggoFighter extends Doggo {
    //extends enables inheritance of the parent class constructor, in this case Doggo
    constructor(name,age,specialAbility){
        super(name, age)
        this.specialAbility = specialAbility;
    }

    useSpecial(){
        console.log(`${this.name} uses the special ability: ${this.specialAbility}`) 
    }
}

const rufus = new DoggoFighter('rufus', 25, 'hide mode');
rufus.useSpecial()
rufus.bark()


