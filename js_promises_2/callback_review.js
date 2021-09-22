//-----------------Review of Callbacks------------->

//We use callbacks to do something after an asynchronous action
//All async functions accept a callback.  The callback allows
//us to do something after the async action

const fs = require('fs');

fs.readFile('./files_to_read/file_1.txt', 'utf8', (err, data) => 
{
    if(err){
        //throw new Error(err)
    } else {
        console.log(data);
    }
})

//The async function will be triggered as the code is read from top to bottom
//but it won't block code.  The console.logs will print out first while the
//async action is happening in the background
//when tyhe async action is done, it will trigger the callback function
//and the text file's text will be printed out

console.log('print first');
console.log('print second')

