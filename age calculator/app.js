let currentYear = 2024;
let userAge = parseInt(prompt("enter your Birth Year"));
let Age = (currentYear - userAge);
swal('your age is' + ' ' + Age );

if (Age > 18) {
   document.write('<h1> Create cnic You are above 18 years. </h1>');
} else{
    if (Age < 18) {
        document.write('<h1> You are under 18 years of age.</h1>');
     }
}