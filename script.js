function onSubmit() {
    const a = parseInt(document.getElementById("a-value").value);
    const b = parseInt(document.getElementById("b-value").value);
    const n = parseInt(document.getElementById("n-value").value);

    function gcd(a, b) {
        a = + a;
        b = + b;
        if (a !== a || b !== b) {
            return [NaN, NaN, NaN];
        }

        if (a === Infinity || a === -Infinity || b === Infinity || b === -Infinity) {
            return [Infinity, Infinity, Infinity];
        }
        // Checks if a or b are decimals
        if ((a % 1 !== 0) || (b % 1 !== 0)) {
            return false;
        }
        var signX = (a < 0) ? -1 : 1,
            signY = (b < 0) ? -1 : 1,
            x = 0,
            y = 1,
            u = 1,
            v = 0,
            q,
            r,
            m,
            n;
        a = Math.abs(a);
        b = Math.abs(b);

        while (a !== 0) {
            q = Math.floor(b / a);
            r = b % a;
            m = x - u * q;
            n = y - v * q;
            b = a;
            a = r;
            x = u;
            y = v;
            u = m;
            v = n;
        }
        return [
            b,
            signX * x,
            signY * y
        ];
    }

    const d = gcd(n, a)[0];
    const s = gcd(n, a)[1];
    const r = gcd(n, a)[2];

    console.log("gcd = ", d);
    console.log("s = ", s);
    console.log("r = ", r);
}
