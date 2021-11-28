function coolSolution(firstData, secondData, a, b, n) { 
    // Create Euclidean Algorithm table element
    const ea_table = createEATableElement();

    // Generate Euclidean Algorithm table header
    generateEATableHeader(ea_table);

    // Generate Euclidean Algorithm table
    generateEATable(ea_table, secondData);

    // Generate final result
    const finalResult = generateResult(result(firstData, a, b, n), n, a);

    // Display Euclidean Algorithm table
    displayEATableResult(ea_table, finalResult);
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
    for (let i = 0; i < secondData.length; i++) {
        const outputRow = document.createElement("tr");
        let row = secondData[i];
        for (let j = 0; j < row.length - 1; j++) {
            const outputCell = document.createElement("td");
            outputCell.innerHTML = row[j];
            outputRow.appendChild(outputCell);
        }
        table.appendChild(outputRow);
    }
}

function generateResult(data, n, a) {
    const result = document.createElement("div");
    result.className = "result-holder";

    const gcd_line = document.createElement("p");
    const s_r_line = document.createElement("p");
    const x0_line = document.createElement("p");
    const x_line = document.createElement("p");

    gcd_line.innerHTML = "→ d = gcd(" + n + ", " + a + ") = " + data[0];
    s_r_line.innerHTML = "→ s = " + data[1] + ", r = " + data[2];
    x0_line.innerHTML = "→ x<sub>0</sub> = " + data[3] + " (mod " + data[5] + ")";
    x_line.innerHTML = "→ x = " + data[4];

    result.appendChild(gcd_line);
    result.appendChild(s_r_line);
    result.appendChild(x0_line);
    result.appendChild(x_line);

    return result;
}

function displayEATableResult(table, result) {
    const holder = document.createElement("div");
    holder.className = "holder";

    const table_holder = document.createElement("div");
    table_holder.className = "ea-table-holder";
    table_holder.appendChild(table);

    holder.appendChild(table_holder);
    holder.appendChild(result);

    showObject(holder);
}

function showObject(object) {
    const target = document.getElementById("solution-target");

    while (target.children.length !== 0) {
        target.removeChild(target.children[0]);
    }
    target.appendChild(object);
}
