
// this is getting elements from my HTML code by name of the id and turning them into 
// Javascript variables
const nameBox = document.getElementById('name');

const myInput = document.getElementById('get-name');

const button = document.getElementById('name-button');

// this is a function that is changing the textContent of the nameBox and
// changing it to the value of the user input, 'myInput' which is the 
// HTML elemement id 'get-name'

const displayName = () => {
    nameBox.textContent = myInput.value
}

// this makes the event of the function displayName to happen 
// when we 'click' the button

button.addEventListener('click', displayName)