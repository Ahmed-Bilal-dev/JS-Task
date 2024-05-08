function generateTable() {
    let num = parseInt(document.getElementById("input1").value);
    let length = parseInt(document.getElementById("input2").value);

    let tableContainer = document.getElementById("tableContainer");

    tableContainer.innerHTML = "";

    let tableContent = `
        <table border='1'>
            <tr>
                <th>Table</th>
            </tr>`;
    for (let i = 1; i <= length; i++) {
        tableContent += `
            <tr>
                <td>${num} x ${i} = ${num * i}</td>
            </tr>`;
    }
    tableContent += "</table>";

    tableContainer.innerHTML = tableContent;
    tableContainer.style.display = "block";
}
