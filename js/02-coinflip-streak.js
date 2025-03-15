// Declare the variables
let coinFlip;
let streak = 0; // Streak counter

console.log("Starting the Coin Flip Streak Game...");

do {
    // Random number generation (0 or 1)
    coinFlip = Math.floor(Math.random() * 2);

    // Checking if it's heads or tails
    if (coinFlip === 0) {
        console.log("Heads");
        streak++;
    } else {
        console.log("Tails - Streak ended!");

    }
}  while (coinFlip === 0); // Loop until tails is flipped

console.log(`Final streak: ${streak} heads in a row.`)