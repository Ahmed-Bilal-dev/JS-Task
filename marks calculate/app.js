let marksheet = ("<h1>Marksheet</h1>");
document.write(marksheet + "<br>");
let totalMarks = parseInt(prompt("Enter your Total Marks",300));
document.write("Total Marks: " + totalMarks + "<br>");
let userMarks = parseInt(prompt("Enter your obtained marks"));
document.write("Marks Obtained: " + userMarks  + "<br>");
let percentage = (userMarks * 100 / totalMarks);
document.write("Percentage: " + percentage  + "<br>");
if (percentage >= 80) {
    document.write("your grade is A-one: " + "<br>" + "<h4>Remarks</h4> Congratulations");
} else if (percentage >= 70){
    document.write("your grade is A: " + "<br>" + "<h4>Remarks</h4> Good");
}  else if (percentage >= 60){
    document.write("your grade is B: " + "<br>" + "<h4>Remarks</h4> Good but keep it up");
} else {
    (percentage <= 60);
    document.write("you are fail: " + "<br>" + "<h4>Remarks</h4> sorry need improvement");
}
