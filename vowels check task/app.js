// Q. Write a program that takes a character (i.e. string of
//  length 1) and returns true if it is a vowel, false otherwise


// ANSWER OF THE QUESTION
let vowels = ["a", "e", "i", "o", "u"];
let userCharacter = prompt("Enter any alphabet to check if it's a vowel or not").toLowerCase();

if (vowels.includes(userCharacter)) {
    document.write("True, it is a vowel.");
} else {
    document.write("False, it is not a vowel.");
}
