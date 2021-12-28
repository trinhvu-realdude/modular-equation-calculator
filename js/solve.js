/*********************************************
 *  File: solve.js
 *  Author: trinhvu-realdude
 * 
 */
/** Function: gcd
 *  
 *  Calculate the Greatest Common Divisor (GCD) and the s value, r value using Euclidean Algorithm
 */
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

/** Function: extended_gcd
 * 
 *  Use GCD value to calculate other values: dividend, divisor, quotient, remainder
 */
function extended_gcd(dvd, dvs, q, rmd, d) {
        let result = [];
        let q_set = [];

        while (dvs !== 0) {
                q_set.push(Math.floor(q));
                result.push([
                        dvd,
                        dvs,
                        Math.floor(q),
                        rmd,
                        q_set
                ]);
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

/** Function: euclidean
 * 
 *  Resolve the problem by using Euclidean Algorithm
 */
function euclidean(n, a) {
        const d = gcd(n, a)[0];
        let s = gcd(n, a)[1];
        let r = gcd(n, a)[2];
        let rmd = n % a;
        let result = [];

        while (s !== 0) {
                result.push([n, s, a, r]);
                n = a;
                if (n == d) {
                        break;
                }
                a = rmd;
                r = s;
                s = (d - a * r) / n;
                rmd = n % a;
        }
        return result;
}

/** Function: extended_euclidean
 * 
 *  Resolve the problem by using Extended Euclidean Algorithm
 */
function extended_euclidean(dvd, dvs, q, rmd, d) {
        let r0 = 0;
        let r1 = 1;
        let index = 2;
        let i = 0;

        let q_set = extended_gcd(dvd, dvs, q, rmd, d)[0][4];

        let result = [];

        while (i < q_set.length - 1) {
                let r = r0 - r1 * q_set[i];
                result.push([
                        index,
                        r0,
                        r1,
                        q_set[i],
                        r
                ]);
                r0 = r1;
                r1 = r;
                i++;
                index++;
        }
        return result;
}

/** Function: result
 * 
 *  Calculate the final result
 */
function result(gcd, b, n) {
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
