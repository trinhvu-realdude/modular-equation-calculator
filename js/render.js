/*********************************************
 *  File: render.js
 *  Author: trinhvu-realdude
 * 
 */
/** Function: coolSolution
 * 
 *  
 */
function coolSolution(firstData, secondData, thirdData, a, b, n) { 
    // Create Euclidean Algorithm table element
    const gcdTable = createGCDTableElement();

    // Generate Euclidean Algorithm table header
    generateGCDTableHeader(gcdTable);

    // Generate Euclidean Algorithm table
    generateGCDTable(gcdTable, secondData);

    // Generate final result
    const finalResult = generateResult(result(firstData, b, n), n, a);

    // Display Euclidean Algorithm table
    displayAll(gcdTable, finalResult);
}

/** Function: generateResult
 * 
 *  
 */
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

/** Function: displayAll
 * 
 *  
 */
function displayAll(table, result) {
    const holder = document.createElement("div");
    holder.className = "holder";

    const gcdTableHolder = document.createElement("div");
    gcdTableHolder.className = "gcd-table-holder";
    gcdTableHolder.appendChild(table);

    holder.appendChild(gcdTableHolder);
    holder.appendChild(result);

    showObject(holder);
}

/** Function: showObject
 * 
 *  
 */
function showObject(object) {
    const target = document.getElementById("solution-target");

    while (target.children.length !== 0) {
        target.removeChild(target.children[0]);
    }
    target.appendChild(object);
}
