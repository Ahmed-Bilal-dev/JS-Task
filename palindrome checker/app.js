let userInput = prompt("Enter any string or number to check if it's a palindrome:").toLowerCase();

function isPalindrome(userInput) {
    let reverseString = userInput.split('').reverse().join('');

    if (userInput === reverseString) {
        document.write("Yes, it's a palindrome!");
    } else {
        document.write("No, it's not a palindrome.");
    }
}

isPalindrome(userInput);





// // Function to check if a string is a palindrome
// function isPalindrome(userInput) {
//     // Convert the input to lowercase
//     let cleanedString = userInput.toLowerCase();
    
//     // Reverse the cleaned string
//     let reversedString = cleanedString.split('').reverse().join('');
    
//     // Check if the cleaned string is equal to its reverse
//     if (cleanedString === reversedString) {
//         return "Palindrome";
//     } else {
//         return "Not a palindrome";
//     }
// }

// // Prompt the user for input
// let userInput = prompt("Enter any string or number to check if it's a palindrome:");

// // Display the result
// alert(isPalindrome(userInput));




