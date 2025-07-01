// Write your code here!
// Remove the <main> node
const main = document.getElementById('main');
main.remove(); // or document.querySelector('main#main').remove()

// Create a new <h1>
const newHeader = document.createElement('h1');

// Give it an id
newHeader.id = 'victory';

// Set the text inside it (use textContent or innerHTML, NOT innerText)
newHeader.textContent = 'Gidion is the champion'; //

// Add it to the DOM (append to body)
document.body.append(newHeader);
