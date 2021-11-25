function onSubmit() {
    const a = parseInt(document.getElementById("a-value").value);
    const b = parseInt(document.getElementById("b-value").value);
    const n = parseInt(document.getElementById("n-value").value);
    let s, r;

    const d = (n, a, s, r) => {
        if (n == 0) {
            s = 0;
            r = 1;
            return a;
        }

        let s1, r1;

        let gcd = d(a%n, n, s1, r1);

        s = r1 - (a/n) * s1;
        r = s1;

        return gcd;
    }

    console.log(d(n, a, s, r));
}