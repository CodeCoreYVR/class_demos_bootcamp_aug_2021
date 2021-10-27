// if (false) {
document.addEventListener("click", (event) => {
    // console.log("target", event.target);
    // event.target is the DOM Node that triggered this event. It does not have to be the nod that has the event
    // console.log("currentTarget", event.currentTarget);
    // event.currentTarget is the node owns this event
    // console.log(this);
    // console.log(event);
    // key word this returns the same value as event.currentTarget only when it is not inside the arrow function!
    console.log("Document was clicked");
})
// }



const toxicTim = document.getElementById("toxic-tim");
toxicTim.addEventListener("click", event => {
    console.log("Toxic Tim was clicked");
    // console.log(event.currentTarget);
    // console.log(event.target);
    // console.log(event.clientX, event.clientY);
})

const titles = document.querySelectorAll(".doggo.fighter h1");
titles.forEach(node => {
    node.addEventListener("click", () => {
        console.log("Doggo Name was clicked");
    })
})


// console.log(document instanceof Node)
// console.log("a string" instanceof Node);

const teamSalmon = document.querySelector(".team.salmon");
teamSalmon.addEventListener("click", function (event) {
    console.log(this);
})

const allDoggos = document.querySelectorAll(".doggo.fighter");

allDoggos.forEach(doggoNode => {
    doggoNode.addEventListener("click", event => {
        const clickedElement = event.currentTarget;
        const rosterNode = clickedElement.closest(".roster");
        rosterNode.append(clickedElement);
    })
})

allDoggos.forEach(doggoNode => {
    doggoNode.addEventListener("dblclick", event => {
        event.currentTarget.classList.toggle("inverted")
    })
    doggoNode.addEventListener("mousedown", event => {
        event.currentTarget.classList.add("flipped")
    })
    doggoNode.addEventListener("mouseup", event => {
        event.currentTarget.classList.remove("flipped")
    })
    doggoNode.addEventListener("mouseenter", event => {
        event.currentTarget.classList.add("inverted");
    })
    doggoNode.addEventListener("mouseleave", event => {
        event.currentTarget.classList.remove("inverted");
    })
})

const bottomDiv = document.createElement("div");
bottomDiv.style.position = "fixed";
bottomDiv.style.bottom = "0";
bottomDiv.style.backgroundColor = "white";
document.body.append(bottomDiv);

document.addEventListener("mousemove", event => {
    const position = `(${event.clientX}, ${event.clientY})`;
    bottomDiv.innerText = position;
})

const keySound = new Audio('sounds/vintage-keyboard-1.wav');
const inputs = document.querySelectorAll("input");
inputs.forEach(inputNode => {
    inputNode.addEventListener("input", event => {
        // keySound.play();
    })
})

const explosionSound = new Audio("sounds/small-explosion.wav");
const submitForm = document.querySelector("form");
submitForm.addEventListener("submit", event => {
    // explosionSound.play();
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    // console.log(formData.get('picture-url'));
    document.getElementById("applicant-preview").style.border = `5px solid ${formData.get("team-name")}`;
    document.querySelector(".doggo.blank h1").innerText = formData.get("name");
})

const applicantPreview = document.querySelector("#applicant-preview");


const pictureInput = document.querySelector('input[name="picture-url"]');
pictureInput.addEventListener("input", event => {
    const imageUrl = event.currentTarget.value;
    applicantPreview.style.backgroundImage = `url(${imageUrl})`;
})

let lettersTyped = "";

document.addEventListener("keypress", event => {
    lettersTyped += event.key;
    // console.log(lettersTyped);
    console.log(event.key);
    // console.log(event.altKey, event.shiftKey);
    if (lettersTyped == "panic") {
        window.location.href = "https://google.com"
    }
})