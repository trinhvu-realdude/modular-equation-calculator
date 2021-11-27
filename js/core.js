function go() {
    const a_input = document.getElementById("a-value").value;
    const b_input = document.getElementById("b-value").value;
    const n_input = document.getElementById("n-value").value;

    if (a_input != "" && b_input != "" && n_input != "") {
        try {
            const a = parseInt(a_input);
            const b = parseInt(b_input);
            const n = parseInt(n_input);

            const d = gcd(n, a)[0];
            const s = gcd(n, a)[1];
            const r = gcd(n, a)[2];

            extended_gcd(n, a, n / a, n % a, d);
        } catch (e) {
            throw e;
        }
    } else {
        throw new Error("Wrong value");
    }
}
