const log = console.log

//Selecting the div with the id of "larry-the-lion"

//document is the root node (the upper most in the DOM tree)
// a Node is a JavaScript object that represents an HTML element

const larryTheLion = document.querySelector("#larry-the-lion")
// log(larryTheLion)

const moneyBagsMichael = document.querySelector("#moneybags-michael")
// log(moneyBagsMichael)
//<node>.querySelector('css-selector') a method provided to us that allows us to select an individual Node within the DOM
//it will only return the first node that matches the selector

//Grab the whole Salmon team
const teamSalmon = document.querySelector(".team.salmon")

//Use querySelectorAll to return a NodeList of all the elements that match the css selector
const teams = document.querySelectorAll('.team')
//querySelectorAll will return all the nodes that match the selector in an Array-like structure. Note: the is NOT an Array
//but has some built in methods that mimic an array, like iterating with "for..of" and ".forEach()"

// for (const node of teams) {
//     console.log(node)
// }

teams.forEach(node => console.log(node))

//Alternative selecting methods
//.getElementById
//.getElementByClassName

const toxicTim = document.getElementById('toxic-tim')

const teams2 = document.getElementsByClassName('team')
// log(teams2)
// getElementsByClassName is like querySelectorAll but instead of returning a NodeList it returns a HTMLCollection

//--------------------Ecercise Picking Doggos:------------------>

const moneyBagsMichaelAndLarryTheLion = document.querySelectorAll('#larry-the-lion, #moneybags-michael')
// log(moneyBagsMichaelAndLarryTheLion)

const allTeamTealButFirst = document.querySelectorAll('.team.teal .doggo:not(:first-child)')
// log(allTeamTealButFirst)

const secondDogs = document.querySelectorAll('.team .doggo:nth-child(2)')
// log(secondDogs)

//Select surrounding Nodes/Navigating Nodes

const inBreadDog = document.querySelector('#inbread-dog')
// log(larryTheLion.previousElementSibling) //returns the previous sibling to larryTheLion -> inBreadDog. If no previous sibling, will return null
// log(inBreadDog.nextElementSibling)
// log(inBreadDog.nextElementSibling.nextElementSibling)
// log(inBreadDog.parentElement)
// log(inBreadDog.parentElement.parentElement)

const roster = inBreadDog.parentElement //returns the roster element node

// log(roster.children[1]) //return larryTheLion

//matches
//<node>.matches checks if a node matches a css selector. Will returns boolean of true or false
// log(inBreadDog.matches('.team.salmon')) //false
// log(inBreadDog.matches('.doggo')) //true

//closest
//<node>.closest('<css-query>')
// Searches all ancestor of (beginning with itself)
// For the first node that matches the query.
// If no matching ancestor node, then returns null
// Can be thought like a reverse .querySelector(...)
// log(toxicTim.closest('div'))
// log(inBreadDog.closest('.team'))

//Manipulating nodes

//When using the . notation, we use camelCase to refer to CSS property names border-radius, so style.borderRadius

// inBreadDog.style.border = 'solid medium black'
// teamSalmon.style.backgroundColor = 'black'
// toxicTim.style.justifyContent = 'center';

//Nodes are just special JS objects, so we can also use the [] notation. Example:
// toxicTim.style["background-image"] = "url(images/paws.jpg)"

//To read the actual computed styles of a node, use the global function getComputedStyle(<node>) getComputedStyle(toxicTim);
//this global function is only available in the browser, so using it in our index.js will not work
// getComputedStyle(toxicTim) //return the computed/real styles of the node given as an argument

//Changing contents of a node
//<node>.innerHTML property allows us to get/set the HTML within the selected node. returns all of the HTML content as a string
//<node>.outerHTML property allows us to get/set the whole node

larryTheLion.outerHTML //RETURNS '<div id="larry-the-lion" class="doggo fighter">\n

//<node>.innerText is a setter/getter for the text within a node. Returns all the content with the HTML tags stripped - effectively just the text
//We can change this text by setting it as follows:
//toxicTim.innerText = 'hello world' will change the 'Toxic Tim' name to 'hello world'

//Changing ids and classes
//get or set ids
//<node>.id -> .id gets the id property of the node
//<node>.id = 'new id' will set the id to a new id
//the same can be done with <node>.className
//Note: because 'class' is a reserved word in JS, we use className to refer to css classes

//classList is an abstraction of className, and even though it's a bit slower, it makes it easier to manipulate a node
//you have the .add and .remove properties available to classList
// toxicTim.classList.add('labourer') //will add to the class from 'doggo fighter' to 'doggo fighter labourer'

//getAttribute
//setAttribute
//hasAttribute
//removeAttribute
toxicTim.getAttribute('class') //returns the value of the class attribute
toxicTim.setAttribute('data-id', '7xz80') //add a data-id attribute
toxicTim.setAttribute('bark', 'woof')

//Remove a node
// toxicTim.remove() - removes toxictim node permanently

//-----------------------Exercise: VANDALISE THE ARENA--------------------------->
    // // 1)
    // const t2 = document.getElementsByClassName('team')
  
    // for (const node of t2) {
    //   node.style.backgroundColor = 'fuchsia'
    // }
  
    // // 2)
  
    // const d2 = document.querySelectorAll('.doggo')
  
    // d2.forEach(node => {
    //   node.innerText = "Rob The Slob";
    // })
  
    // // 3)
  
    // d2.forEach(node => {
    //   node.style.backgroundImage = "url(https://d17fnq9dkz9hgj.cloudfront.net/uploads/2018/03/Scottish-Fold_01.jpg)"
    // })
  

//Creating Elements

const drillBitDarrel = document.createElement('div');
//add id
drillBitDarrel.id = 'drill-bit-darrel';
//add classes
// drillBitDarrel.className = 'doggo fighter'
drillBitDarrel.classList.add('doggo')
drillBitDarrel.classList.add('fighter')
//add a h1 tag with the dog name
drillBitDarrel.innerHTML = '<h1>Drill Bit Darrel</h1>'
drillBitDarrel.style.backgroundImage = 'url(./images/drill_bit_darel.jpg)'

//drillBitDarrel node has been created, but it needs to be attached to a node on the DOM
//we are going to attach drillBitDarrel to the Teal Team
const teamTeal = document.querySelector('.team.teal')
const tealRoster = teamTeal.querySelector('.roster')

//appendChild -> appends to the node as the last child 
// tealRoster.appendChild(drillBitDarrel)

//insertBefore -> use to append to a specific position in the node
tealRoster.insertBefore(drillBitDarrel, larryTheLion)

//clone nodes
tealRoster.insertBefore(drillBitDarrel.cloneNode(), moneyBagsMichael)
tealRoster.appendChild(drillBitDarrel.cloneNode())

