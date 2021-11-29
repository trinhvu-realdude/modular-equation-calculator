/*********************************************
 *  File: core.js
 *  Author: trinhvu-realdude
 * 
 */
/** Function: go
 * 
 *  Run the complete stack
 */
function go() {
    let a = document.getElementById("a-value").value;
    let b = document.getElementById("b-value").value;
    let n = document.getElementById("n-value").value;

    const checkEmptyField = filterEmptyError(a, b, n);

    if (checkEmptyField === false) {
        try {
            a = parseInt(a);
            b = parseInt(b);
            n = parseInt(n);

            // firstData: gcd, s, r
            const firstData = gcd(n, a);

            // secondData: dvd, dvs, q, rmd, q_set
            const secondData = extended_gcd(n, a, n / a, n % a, gcd(n, a));

            // thirdData: index of r value, r0, r1, q_set, final r
            const thirdData = extended_euclidean(n, a, n / a, n % a, gcd(n, a));

            coolSolution(firstData, secondData, thirdData, a, b, n);
        } catch (e) {
            throw e;
        }
    } else {
        throw new Error("Invalid input");
    }
}
