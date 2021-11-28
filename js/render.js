function coolSolution(firstData, secondData, a, b, n) {
    const ea_table = createEATableElement();

    generateEATableHeader(ea_table);

    generateEATable(ea_table, secondData);

    displayEATable(ea_table);

    displayResult(result(firstData, a, b, n));
}

function createEATableElement() {
    const result = document.createElement("table");
    result.className = "table table-striped";
    return result;
}

function generateEATableHeader(table) {
    const values = ["Dividend", "Divisor", "Quotient", "Remainder"]
    const header = document.createElement("tr");
    header.className = "header";

    for (let i = 0; i < values.length; i++) {
        const cell = document.createElement("th");
        cell.scope = "col";
        cell.innerHTML = values[i];
        header.appendChild(cell);
    }

    table.appendChild(header);
}

function generateEATable(table, secondData) {
    secondData.forEach(row => {
        const outputRow = document.createElement("tr");
        for (let i = 0; i < row.length; i++) {
            const outputCell = document.createElement("td");
            outputCell.innerHTML = row[i];
            outputRow.appendChild(outputCell);
        }
        table.appendChild(outputRow);
    });
}

function displayEATable(table) {
    const holder = document.createElement("div");
    holder.className = "ea-table-holder";
    holder.appendChild(table);

    showObject(holder);
}

function showObject(object) {
    const target = document.getElementById("solution-target");

    while (target.children.length !== 0) {
        target.removeChild(target.children[0]);
    }
    target.appendChild(object);
}

function displayResult(result) { 
    console.log(result);
}
