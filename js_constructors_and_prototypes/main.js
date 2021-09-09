//Objects Review:

// let obj = {
//     key: value
// }

const guest1 = {
    name: 'Steph',
    email: 'steph@example.com',
    visitTime: '9:10am',
    phone: '778-555-5555',
    printGuest: function(){
        console.log(`${this.name} visited us at ${this.visitTime} today`)
    }
}

const guest2 = {
    name: 'Tom',
    email: 'tom@example.com',
    visitTime: '11:00am',
    phone: '555-555-5555',
    printGuest: function(){
        console.log(`${this.name} visited us at ${this.visitTime} today`)
    }
}

//One way to copy an object:
// const guest3 = Object.assign({}, guest1)
// console.log(guest3)

// guest3.name = 'Bill'
// console.log(guest3)

//-----------------Creating a Constructor-------------------------->

//Constructors are functions that are used to create objects
// Convention is to capitalize constructor names
//The arguments that the constructor function takes are the properties
//that the constructor will have

function Guest(name, email, visitTime, phone){
    this.name = name;
    //"this represents the object that will be created"
    this.email = email;
    this.visitTime = visitTime;
    this.phone = phone;
    this.printGuest = function(){
        console.log(`${this.name} visited us at ${this.visitTime} today`)
    }

    return console.log("Don't fire off 'this' in an constructor function")
    //'this' loses its context when outside of the function and will append
    //itself to the global object instead of the instance of the created object
}

const g1 = new Guest('Sally', 'sally@example.com', '12pm', '555-111-2222')
// console.log(g1)
const g2 = new Guest('Kitty', 'kitty@excample.com', '4am', '222-222-2222')
// console.log(g2)

//Method to check if something is an instance of a constructor
console.log(guest1 instanceof Guest) //false
console.log(g1 instanceof Guest) //true

console.log(g1)

const hello = Guest()
console.log(hello)


//Arrow functions CANNOT be constructors

// const Dog = (name, email, visitTime, phone) => {
//     this.name = name;
//     //"this represents the object that will be created"
//     this.email = email;
//     this.visitTime = visitTime;
//     this.phone = phone;
//     this.printGuest = function(){
//         console.log(`${this.name} visited us at ${this.visitTime} today`)
//     } 
// }

// const myDog = new Dog('Sally', 'sally@example.com', '12pm', '555-111-2222')
// This will throw an error




