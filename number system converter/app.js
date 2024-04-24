// let user_input = parseInt(prompt("Enter any number"));
// let number_conversion = parseInt(prompt("Enter any number do you want to convert"));
// if (number_conversion === "binary") {
//     console.log(user_input.toString(2))
// }
// else if (number_conversion === "octal") {
//     console.log(user_input.toString(8))
// }
// else if (number_conversion === "Hexadecimal") {
//     console.log(user_input.toString(16))
// }
// else {
//     console.log("invalid number");
// }



let user_input = parseInt(prompt("Enter any number"));
let number_conversion = parseInt(prompt("Enter any number do you want to convert"));

if (number_conversion === 2) {
    console.log(user_input.toString(2));
} else if (number_conversion === 8) {
    console.log(user_input.toString(8));
} else if (number_conversion === 16) { 
    console.log(user_input.toString(16));
} else {
    console.log("invalid number");
}

