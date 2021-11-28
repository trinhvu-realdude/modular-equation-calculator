function gcd(a, b) {
    let s_value = (a < 0) ? -1 : 1,
        r_value = (b < 0) ? -1 : 1,
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
        s_value * x,
        r_value * y
    ];
}

function extended_gcd(dvd, dvs, q, rmd, d) {
    let result = [];
    while (dvs !== 0) {
        result.push([dvd, dvs, Math.floor(q), rmd]);

        dvd = dvs;
        if (dvd == d) {
            break;
        }
        dvs = rmd;
        q = dvd / dvs;
        rmd = dvd % dvs;
    }

    return result;
}

function result(gcd, a, b, n) {
    const d = gcd[0];
    const s = gcd[1];
    const r = gcd[2];
    const mod = Math.floor(n / d);

    let x0 = r * b / d;

    if (x0 < 0) {
        while (x0 < 0) {
            x0 = Math.floor(n / d + x0);
        }
    } else {
        x0 = Math.floor(x0 % (n / d));
    }

    if (d < 2) {
        const x = Math.floor(x0);
        return [
            d,
            s,
            r,
            x0,
            x,
            mod
        ];
    } else {
        let x_set = [];

        for (let i = 0; i < d; i++) {
            x_set.push(Math.floor(x0 + i * n / d));
        }

        return [
            d,
            s,
            r,
            x0,
            x_set,
            mod
        ]
    }
}
