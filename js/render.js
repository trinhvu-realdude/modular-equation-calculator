function coolSolution(firstData, secondData) {
    const table = createTableElement();

    generateTableHeader(table);

    generateGCDTable(table, secondData);

    displayTable(table);
}

function createTableElement() {
    const result = document.createElement("table");
    result.className = "table table-striped";
    return result;
}

function generateTableHeader(table) {
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

function generateGCDTable(table, secondData) {
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

function displayTable(table) {
    const holder = document.createElement("div");
    holder.className = "gcd-table-holder";
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
