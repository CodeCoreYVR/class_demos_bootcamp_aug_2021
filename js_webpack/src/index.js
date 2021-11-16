import "./a.js";
import cat from './imgs/cat-cat.gif';
import "./styles/main.css"

console.log("This is index.js");

console.log("test test ================");

const arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] * 10);
}

document.addEventListener("DOMContentLoaded", () => {
    const img = document.createElement("img");
    img.src = cat;
    document.querySelector("body").append(img);
})