function checkOddEven(number) {
    if (number % 2 === 0) {
        console.log(`${number} is Even.`);
    } else {
        console.log(`${number} is Odd.`);
    }
}

// Take input from the user (indirect, not hardcoded)
let input = prompt("Enter a number:");

// Convert input to a number
let num = Number(input);

// Check if the input is a valid number
if (!isNaN(num)) {
    checkOddEven(num); // Call the function with the user's input
} else {
    console.log("Invalid input. Please enter a number.");
}
