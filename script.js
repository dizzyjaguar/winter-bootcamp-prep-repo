
// this is getting elements from my HTML code by name of the id and turning them into 
// Javascript variables
const nameBox = document.getElementById('name');

const myInput = document.getElementById('get-name');

const button = document.getElementById('name-button');

const greeting = document.getElementById('greeting');

const nameIs = document.getElementById('name-is');

const theTime = new Date().getHours();

// this is a function that is changing the textContent of the nameBox and
// changing it to the value of the user input, 'myInput' which is the 
// HTML elemement id 'get-name'

const displayName = () => {
    nameBox.textContentcol = myInput.value
}

// this makes the event of the function displayName to happen 
// when we 'click' the button

if (theTime > 17 ) {
    greeting.style.color = "blue",
    nameBox.style.visibility = "hidden";
    nameIs.textContent = "its night time 'aka' past 5PM"
    nameIs.style.color = "green"
} 


button.addEventListener('click', displayName)

