// JS Objects

// Creating an Object

const dog = {
    age: 10,
    firstName: "Bailey",
    lastName: "Winston",
    "full name": "Bailey Winston",
    toys: [
        "amazon box",
        "pork leg bone",
        "rubber bunny",
        "torn teddy bear"
    ],
    bark: function(){
        return "Bork!";
    }
};

console.log(dog.bark()); // Bork!

// console.log(dog);

// Selecting properties
// Square Bracket Notation

// console.log(dog["age"]); // 10
// console.log(dog["lastName"]); // Winston
// console.log(dog["full name"]); // Bailey Winston

// // Dot Notation

// console.log(dog.age); // 10
// console.log(dog.firstName); // Bailey
// dog."full name"; // This will not work

// Selecting a non-existent key

// console.log(dog.furColour); // undefined

// Using expressions to resolve key names
// console.log(dog["to" + "ys"]); // [ 'amazon box','pork leg bone','rubber bunny','torn teddy bear' ]

// Writing or editing attributes
// Select a key using dot notation or square bracket notation, then use the assignment operator
// dog.age = 12;
// // console.log(dog.age);
// dog["firstName"] = "Bobby"
// // console.log(dog.firstName);

// Object Utility Functions

// get all keys
// Object.keys(dog)

// console.log(Object.keys(dog)); // [ 'age', 'firstName', 'lastName', 'full name', 'toys' ]

// get all values
// Object.values(dog)

// console.log(Object.values(dog)); // [ 12,'Bobby','Winston','Bailey Winston',[ 'amazon box','pork leg bone','rubber bunny','torn teddy bear' ] ]

const cat = {
    age: 7,
    nickname: "Mimi",
    furColour: "White",
    eyeColour: "Blue and Green"
}

// console.log(cat.bark()); // It won't work

const catDog = Object.assign(dog, cat);
// console.log(catDog);

// The object called "dog" has been mutated
// console.log(dog);

// Copy an object
const catCopy = Object.assign({}, cat);
// console.log(catCopy);

// Iterating over objects
// The for...in loop will iterate over key's objects
// We can use the key and square bracket notation to get the value

// console.log("-------------Iterating over objects---------");
for(let key in dog){
    console.log("Key:", key, "value ", dog[key]);
};

