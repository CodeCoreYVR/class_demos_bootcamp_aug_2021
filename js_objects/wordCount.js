// Write function wordCounts that takes a string and returns as object containing
// the count of each word ignoring case.

function wordCounts(string){
    const strings = string.split(" ");
    const wordMap = {};
    strings.forEach((string) => {
        if(wordMap[string]) {
            wordMap[string] += 1;
        } else {
            wordMap[string] = 1;
        }
    })
    return wordMap;
};

console.log(wordCounts("this is this and that is that"));