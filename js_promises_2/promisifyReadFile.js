const { Console } = require('console');
const fs = require('fs');

//should return a promisified version of fs.readFile
//fs.readFile args:
//1) Path
//2)Options object
//3. callback

function pReadFile(path, option) {
    return new Promise((res, rej) => {
        fs.readFile(path, option, (err,data) => {
            if (err){
                rej(err);
            }
            res(data)
        })
    })
}

pReadFile('./files_to_read/file_1.txt', 'utf8')
.then((data) => {
    console.log(data)
    return pReadfile('./files_to_read/file_2.txt', 'utf8')
}).then((data) => {
    console.log(data)
    return pReadfile('./files_to_read/file_3.txt', 'utf8')  
}).then((data)=> {
    console.log(data)
    return 'Hello World'
}).then((data)=>{
    console.log(data)
}).catch((err) => {
    console.log(err)
})

