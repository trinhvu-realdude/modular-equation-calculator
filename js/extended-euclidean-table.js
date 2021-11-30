/*********************************************
 *  File: extended-euclidean-table.js
 *  Author: trinhvu-realdude
 * 
 */
/** Function: createExtendedEuclideanTableElement
 * 
 * 
 */
function createExtendedEuclideanTableElement() {
    const result = document.createElement("table");
    result.className = "table table-bordered";
    return result;
}

/** Function: generateExtendedEuclideanTableHeader
 * 
 * 
 */
function generateExtendedEuclideanTableHeader(table) {
    const values = ["Step", ""];
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

/** Function: generateExtendedEuclideanTable
 * 
 * 
 */
function generateExtendedEuclideanTable(table, fourthData, modData) {
    const mod = modData[5];
    for (let i = 0; i < 2; i++) {
        const defaultRow = document.createElement("tr");
        defaultRow.innerHTML = `<td scope="row">${i}</td><td>r<sub>${i}</sub> = ${i}`;
        table.appendChild(defaultRow);
    }

    fourthData.forEach(data => {
        const outputRow = document.createElement("tr");
        outputRow.innerHTML = data[2] > 0 ? `<td scope="row">${data[0]}</td><td>r<sub>${data[0]}</sub> = ${data[1]} - ${data[2]} <span>&#215;</span> ${data[3]} = ${data[4]} (mod ${mod})` : `<td scope="row">${data[0]}</td><td>r<sub>${data[0]}</sub> = ${data[1]} - (${data[2]}) <span>&#215;</span> ${data[3]} = ${data[4]} (mod ${mod})`;

        table.appendChild(outputRow);
    });
}
