# Stinky Diaper Counter
Stinky diaper counter is a simple web app that allows you to track the number of wet and poop diapers your baby has had. It also allows you to add a description of your baby's diaper to track any unusal occurances in your baby's diaper routine.

## How to use
To use the Stinky Diaper Counter follow these easy steps:

- Click the "Add Wet" button when you need to add a wet diaper, and/or click the "Add Poop" button to add a poop diaper.
- The count for each diaper will be updated automatically.
- To reset the count, click the "Reset Counts" button.
- To add a description of any diaper, type your description in the "Description" box and click the "Submit" button.

## How the app works
The app is built using CSS, HTML, JavaScript, and fetch API. The main features are:

1. Counting wet and poopy diapers, and updating the counts automatically.
2. Adding a description for each diaper and displaying it on the page.
3. Storing diaper information in a JSON database using fetch API.

### Break Down
The code consist of different variables, functions, and two distinct event listeners("Submit", and "Click") that work together to create a working app. ***The updateCounts()*** function is used to update the counts ***for each*** type of diaper. The ***async** functions for adding, submitting, and resetting diapers are used to interact with the JSON database.

## Installation
To use the app clone the repository and open index.html file in your browser.

## Contributors
Pull request are welcome! For major changes please open an issue first to discuss those changes. Update any test appropriatly.

## Resources
* json-server
* Image from Unsplash

## License
 - This project is licensed under MIT