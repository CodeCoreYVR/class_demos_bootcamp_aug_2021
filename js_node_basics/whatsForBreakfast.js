const readline = require('readline'); //require the module

//need to create a readline interface that gets attached to the readline module
//it accepts one arg of object that has 2 key:value pair properties

const rl = readline.createInterface({
    input: process.stdin, //process standard in is an object that represents input from a terminal
    output: process.stdout //process standard out is an object that represents the output to the terminal
})

rl.question('What did you have for breakfast? \n', (answer) => {
    //answer is what the user entered
    console.log(`Ewww! I don't like ${answer}!`)
    rl.close(); //without this it will just hang in the environment
})