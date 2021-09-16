const chalk = require('chalk');

let rainbow = ["red","orange","yellow","green","blue","indigo","violet"]

let line = '';
for (let colour of rainbow){
    line += chalk.bgKeyword(colour)('  ');
}

console.log(line)
