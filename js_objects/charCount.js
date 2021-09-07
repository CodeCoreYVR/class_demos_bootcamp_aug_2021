// Exercise; Character Counts

function countChars(str){
    const lowerCaseString = str.toLowerCase();
    const characters = {};
    for (let i = 0; i < lowerCaseString.length; i++){
        const char = lowerCaseString[i];
        if(characters[char]){
            characters[char] += 1;
        } else {
            characters[char] = 1;
        }
    }
    return characters;
};

console.log(countChars("An archer")); // { a: 2, n: 1, ' ': 1, r: 2, c: 1, h: 1, e: 1 }
