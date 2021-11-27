function gcd(a, b) {
    a = + a;
    b = + b;
    if (a !== a || b !== b) {
        return [NaN, NaN, NaN];
    }

    if (a === Infinity || a === -Infinity || b === Infinity || b === -Infinity) {
        return [Infinity, Infinity, Infinity];
    }
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
    console.log(result);
    return result;
}