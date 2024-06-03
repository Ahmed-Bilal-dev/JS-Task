// during class i made this with friends discussion
// function tipCalculator() {
//     let input1 = document.getElementById("input1");
//     let input2 = document.getElementById("input2");
//     let bill = document.getElementById("total");
//     bill.innerText = 'total:' + input1.value * (1 + input2.value / 100)
// }


// this function is made by my self and i try to make it at home
// function tipCalculator() {
//     let input1 = document.getElementById("input1");
//     let input2 = document.getElementById("input2");
//     let bill = document.getElementById("total");
//     bill.innerText = 'total:' + input1.value * (1 + input2.value / 100).toFixed(2);
// }



// this is chstgpt function
function tipCalculator() {
    let input1 = document.getElementById("input1");
    let input2 = document.getElementById("input2");
    let bill = document.getElementById("total");
    
    // Convert input values to numbers
    let billAmount = parseFloat(input1.value);
    let tipPercentage = parseFloat(input2.value);
    
    // Calculate tip amount and total amount
    let tipAmount = billAmount * (tipPercentage / 100);
    let totalAmount = billAmount + tipAmount;
    
    // Update the total bill display
    bill.innerText = 'Total: $' + totalAmount.toFixed(2);
}
