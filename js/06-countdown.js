// Prompt for a starting number
let startNumber = parseInt(prompt("Enter a number to start the countdown: "));

// Validating input
if (isNaN(startNumber) || startNumber < 0) {
    console.log("Please enter a valid positive number.");
} else {
    // Countdown loop
    for (let i = startNumber; i >= 0; i--) {
        console.log(i);
    }
}