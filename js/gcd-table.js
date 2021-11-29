/*********************************************
 *  File: gcd-table.js
 *  Author: trinhvu-realdude
 * 
 */
/** Function: createGCDTableElement
 * 
 *  
 */
function createGCDTableElement() {
    const result = document.createElement("table");
    result.className = "table table-striped";
    return result;
}

/** Function: generateGCDTableHeader
 * 
 *  
 */
function generateGCDTableHeader(table) {
    const values = ["Dividend", "Divisor", "Quotient", "Remainder"];
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

/** Function: generateGCDTable
 * 
 *  
 */
function generateGCDTable(table, secondData) {
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
