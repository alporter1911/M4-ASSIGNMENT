// Asking how many times you want to flip the coin
let numberOfFlips = parseInt(prompt("Enter the number of times you want to flip the coin: "));

// Validation input
if (isNaN(numberOfFlips) || numberOfFlips <= 0) {
    console.log("Please enter a valid positive number.");
} else {
    // Loop for the number of flips
    for (let i = 0; i < numberOfFlips; i++) {
        // Random number generated (0 or 1)
        let coinFlip = Math.floor(Math.random() * 2);

        // Displaying result
        if (coinFlip === 0) {
            console.log("Heads");
        } else {
            console.log("Tails");
        }
    }
}