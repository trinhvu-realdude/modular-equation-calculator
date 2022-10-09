/*********************************************
 *  File: render.js
 *  Author: trinhvu-realdude
 * 
 */
/** Function: coolSolution
 * 
 *  Run some below functions to get the essential components of solution
 */
function coolSolution(firstData, secondData, thirdData, fourthData, a, b, n) { 
        // Create Greatest Common Divisor table element
        const gcdTable = createGCDTableElement();

        // Generate Greatest Common Divisor table header
        generateGCDTableHeader(gcdTable);

        // Generate Greatest Common Divisor table
        generateGCDTable(gcdTable, secondData);

        // Create Euclidean table element
        const eaTable = createEuclideanTableElement();

        // Generate Euclidean table header
        generateEuclideanTableHeader(eaTable, firstData, thirdData);

        // Generate Euclidean table
        generateEuclideanTable(eaTable, thirdData);

        // Create Extended Euclidean table element
        const eeaTable = createExtendedEuclideanTableElement();

        // Generate Extended Euclidean table header
        generateExtendedEuclideanTableHeader(eeaTable);

        // Generate Extended Euclidean table
        generateExtendedEuclideanTable(eeaTable, fourthData, result(firstData, b, n));

        // Generate final result
        const finalResult = generateResult(result(firstData, b, n), n, a);

        // Display all elements
        displayAll(gcdTable, eaTable, eeaTable, finalResult);
}

/** Function: generateResult
 * 
 *  Display the result
 */
function generateResult(data, n, a) {
        const result = document.createElement("div");
        result.id = "result-holder";

        const gcd_line = document.createElement("p");
        const s_r_line = document.createElement("p");
        const x0_line = document.createElement("p");
        const x_line = document.createElement("p");

        gcd_line.innerHTML = "→ d = gcd(" + n + ", " + a + ") = " + data[0];
        s_r_line.innerHTML = "→ s = " + data[1] + ", r = " + data[2];
        x0_line.innerHTML = "→ x<sub>0</sub> = " + data[3] + " (mod " + data[5] + ")";
        x_line.innerHTML = data[4].length > 1 ? "→ x = " + "[" + data[4].join(", ") + "]" : "→ x = " + data[4];

        result.appendChild(gcd_line);
        result.appendChild(s_r_line);
        result.appendChild(x0_line);
        result.appendChild(x_line);

        return result;
}

/** Function: displayAll
 * 
 *  Display all components
 */
function displayAll(gcdTable, eaTable, eeaTable, result) {
        const holder = document.createElement("div");
        holder.className = "holder";

        const gcdTableHolder = document.createElement("div");
        gcdTableHolder.id = "gcd-table-holder";
        gcdTableHolder.appendChild(gcdTable);

        const eaTableHolder = document.createElement("div");
        const eaTableTitle = document.createElement("p");
        eaTableTitle.className = "header-algorithm";
        eaTableTitle.innerHTML = ALGORITHM.EUCLIDEAN_ALGORITHM;
        eaTableHolder.id = "ea-table-holder";
        eaTableHolder.appendChild(eaTableTitle);
        eaTableHolder.appendChild(eaTable);

        const eeaTableHolder = document.createElement("div");
        const eeaTableTitle = document.createElement("p");
        eeaTableTitle.className = "header-algorithm";
        eeaTableTitle.innerHTML = ALGORITHM.EXTENDED_EUCLIDEAN_ALGORITHM;
        eeaTableHolder.id = "eea-table-holder";
        eeaTableHolder.appendChild(eeaTableTitle);
        eeaTableHolder.appendChild(eeaTable);

        holder.appendChild(gcdTableHolder);
        holder.appendChild(eaTableHolder);
        holder.appendChild(eeaTableHolder);
        holder.appendChild(result);

        showObject(holder, "solution-target");
}

/** Function: showObject
 * 
 *  Function to show object
 */
function showObject(object, id) {
        const target = document.getElementById(id);

        while (target.children.length !== 0) {
                target.removeChild(target.children[0]);
        }
        target.appendChild(object);
}

function showError(a, b, n) {
        const holder = document.createElement("div");
        holder.className = "holder-error";
        const msg = document.createElement("p");

        if (a === "") {
                msg.innerHTML = ERROR.MISSING_A;
                holder.appendChild(msg);
                showObject(holder, "error-messages");
        } else if (b === "") {
                msg.innerHTML = ERROR.MISSING_B;
                holder.appendChild(msg);
                showObject(holder, "error-messages");
        } else if (n === "") {
                msg.innerHTML = ERROR.MISSING_N;
                holder.appendChild(msg);
                showObject(holder, "error-messages");
        } else if (a == 0 || n == 0) {
                msg.innerHTML = ERROR.UNDEFINED;
                holder.appendChild(msg);
                showObject(holder, "error-messages");
        }
        

        if (a != "" && b != "" && n != "") {
                showObject(holder, "error-messages");
        }
}
