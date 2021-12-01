/*********************************************
 *  File: euclidean-table.js
 *  Author: trinhvu-realdude
 * 
 */
/** Function: createEuclideanTableElement
 * 
 * 
 */
function createEuclideanTableElement() {
    const result = document.createElement("table");
    result.className = "table table-bordered";
    return result;
}

/** Function: generateEuclideanTableHeader
 * 
 * 
 */
function generateEuclideanTableHeader(table, firstData, thirdData) {
    const lengthData = thirdData.length;
    const header = document.createElement("tr");
    const headerElement = `
                <th rowspan="${lengthData+1}">d =</th>
                <th>n</th>
                <th rowspan="${lengthData+1}"><span>&#215;</span></th>
                <th>s</th>
                <th rowspan="${lengthData+1}">+</th>
                <th>a</th>
                <th rowspan="${lengthData+1}"><span>&#215;</span></th>
                <th>r</th>
                <th rowspan="${lengthData+1}"> = ${firstData[0]}</th>
            `;
    header.innerHTML = headerElement;
    table.appendChild(header);
}

/** Function: generateEuclideanTable
 * 
 * 
 */
function generateEuclideanTable(table, thirdData) {
    for (let i = thirdData.length-1; i >= 0; i--) {
        const outputRow = document.createElement("tr");
        let row = thirdData[i];
        for (let j = 0; j < row.length; j++) {
            const outputCell = document.createElement("td");
            outputCell.innerHTML = row[j];
            outputRow.appendChild(outputCell);
        }
        table.appendChild(outputRow);
    }
}