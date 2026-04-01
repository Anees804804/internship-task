
// Day 8: JavaScript Basics Practice Task


// 1. VARIABLES (let aur const ka istemal)
const mentorName = "Sir"; // Ye constant hai, change nahi hoga
let topic = "JavaScript Basics"; 
let dayNumber = 8;

console.log("Today is Day " + dayNumber + " of Internship. Topic: " + topic);


// 2. INPUT & OUTPUT
// User se uska naam puchenge aur console mein dikhayenge
let userName = prompt("Apna Naam Enter Karein:");
console.log("Welcome to JS Practice, " + userName + "!");


// 3. CONDITIONS (if-else)
// Check karte hain ke user ne naam likha hai ya nahi
if (userName === "" || userName === null) {
    console.log("Alert: Aapne naam enter nahi kiya!");
} else {
    console.log("User Input received successfully.");
}

// Ek aur example: Age check
let age = 20; 
if (age >= 18) {
    console.log("Status: You are an adult.");
} else {
    console.log("Status: You are a minor.");
}


// 4. FUNCTIONS
// Ek simple function jo do numbers ko jama (add) karta hai
function calculateSum(a, b) {
    let result = a + b;
    return result;
}

// Function call aur output
let sum = calculateSum(15, 25);
console.log("Sum of 15 and 25 is: " + sum);


// 5. LOOPS (for loop)
// 1 se 5 tak ginti print karne ke liye
console.log("Starting Loop Practice:");
for (let i = 1; i <= 5; i++) {
    console.log("Number: " + i);
}


// 6. DEBUGGING PRACTICE

console.warn("Ye ek warning message hai practice ke liye.");
console.error("Ye ek error message hai (sirf check karne ke liye).");

// Final Message
alert("Day 8 Tasks Completed! Check the console (F12) for results.");