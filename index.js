//DOM elements
document.addEventListener("DOMContentLoaded", function() {
const addWetBtn = document.getElementById('add-wet');
const addPoopBtn = document.getElementById('add-poop');
const resetBtn = document.getElementById('reset');
const wetCounts = document.getElementById('wet-count');
const poopCounts = document.getElementById('poop-count'); 

//Initialize counts
let wetCount = 0;
let poopCount = 0;

function updateCounts() {
    wetCounts.textContent = wetCount;
    poopCounts.textContent = poopCount;
}
// Event Listener for the add wet button
addWetBtn.addEventListener('click', () => {
wetCount++;
updateCounts();
});
//Event listener for the add poop button
addPoopBtn.addEventListener('click', () => {
    poopCount++;
    updateCounts();
});
//Event lisinter for the reset button
resetBtn.addEventListener('click', () => {
    wetCount = 0;
    poopCount = 0;
    updateCounts();
});
});