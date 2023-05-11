//Create variable for URL
const dbFile = 'http://localhost:3000/diapers';
//DOM elements
document.addEventListener("DOMContentLoaded", function() {
const addWetBtn = document.getElementById('add-wet');
const addPoopBtn = document.getElementById('add-poop');
const resetBtn = document.getElementById('reset');
const wetCounts = document.getElementById('wet-count');
const poopCounts = document.getElementById('poop-count');
const form = document.querySelector('form');
const userDescription = document.getElementById('description');
const container = document.querySelector('.container');

//Initialize counts
let wetCount = 0;
let poopCount = 0;
updateCounts();

function updateCounts() {
    wetCounts.textContent = wetCount;
    poopCounts.textContent = poopCount;
}
// Event Listener for the add wet button
addWetBtn.addEventListener('click', async () => {
wetCount++;
updateCounts();
//Update wet diaper count 
const response = await fetch(`${dbFile}/1`, {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ wetCount }),
});
if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
}
});

//Event listener for the add poop button
addPoopBtn.addEventListener('click', async () => {
    poopCount++;
    updateCounts();
//Update the poop diaper count 
const response = await fetch(`${dbFile}/1`, {
    method: 'PATCH', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({poopCount}),
});
if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
}
});
//Event lisinter for the reset button
resetBtn.addEventListener('click', async () => {
    wetCount = 0;
    poopCount = 0;
    updateCounts();
    //Reset diaper counts in the database
    const response = await fetch(`${dbFile}/1`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({wetCount: 0, poopCount: 0}),
});
if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
}
});

//Event listener for the form submission
form.addEventListener('submit', async(event) => {
    event.preventDefault();
    const description = userDescription.value;
    const newDescription = document.createElement('div');
    newDescription.textContent = description;
    container.appendChild(newDescription);
    userDescription.value = '';


//Add new diaper to database
const newDiaper = {
    id: Date.now(),
    wetCount: 0,
    poopCount: 0,
    information: description,
};
const response = await fetch(dbFile, {
method: 'POST', 
headers: {
    'Content-Type': 'application/json',
},
body: JSON.stringify(newDiaper),
});
if (!response.ok) {
    throw new Error(`HTTp error! status ${response.status}`);
}
});
});
