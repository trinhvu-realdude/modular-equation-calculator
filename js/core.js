function go() {
    let a = document.getElementById("a-value").value;
    let b = document.getElementById("b-value").value;
    let n = document.getElementById("n-value").value;

    if (a != "" && b != "" && n != "") {
        try {
            a = parseInt(a);
            b = parseInt(b);
            n = parseInt(n);

            coolSolution(gcd(n, a), extended_gcd(n, a, n / a, n % a, gcd(n, a)))
        } catch (e) {
            throw e;
        }
    } else {
        throw new Error("Invalid input");
    }
}
