for (B = i = y = u = b = i = 5 - 5, x = 10, I = [], l = []; B++ < 304; I[B - 1] = B % x ? B / x % x < 2 | B % x < 2 ? 7 : B / x & 4 ? 0 : l[i++] = "ECDFBDCEAAAAAAAAIIIIIIIIMKLNJLKM@G@TSb~?A6J57IKJT576,+-48HLSUmgukgg OJNMLK  IDHGFE".charCodeAt(y++) - 64 : 7);
function X(c, h, e, s) {
    c ^= 8;
    for (var o, S, C, A, R, T, G, d = e && X(c, 0) > 1e4, n, N = -1e8, O = 20, K = 78 - h << 9; ++O < 99;)
        if ((o = I[T = O]) && (G = o ^ c) < 7) {
            A = G-- & 2 ? 8 : 4; C = o - 9 ? l[61 + G] : 49;
            do
                if (!(R = I[T += l[C]]) && !!G | A < 3 || (R + 1 ^ c) > 9 && G | A > 2) {
                    if (!(R - 2 & 7)) return K; n = G | (c ? T > 29 : T < 91) ? o : 6 ^ c;
                    S = (R && l[R & 7 | 32] * 2 - h - G) + (n - o ? 110 : !G && (A < 2) + 1);
                    if (e > h || 1 < e & e == h && S > 2 | d) {
                        I[T] = n;
                        I[O] = 0;
                        S -= X(c, h + 1, e, S - N);
                        if (!(h || e - 1 | B - O | T - b | S < -1e4))
                            return W(), c && setTimeout("X(8,0,2),X(8,0,1)", 75);
                        I[O] = o;
                        I[T] = R
                    }
                    if (S > N || !h & S == N && Math.random() < .5)
                        if (N = S, e > 1)
                            if (h ? s - S < 0 : (B = O, b = T, 0)) break
                }
            while (!R & G > 2 || (T = O, (G || A > 2 | (c ? O > 78 : O < 41) & !R) && ++C * --A))
        }
    return -K + 768 < N | d && N
}

function W() {
    i = "<table>";
    for (u = 18; u < 99; document.body.innerHTML = i += ++u % x - 9 ? "<th width=60 height=60 onclick='I[b=" + u + "]>8?W():X(0,0,1)'style='font-size:50px'bgcolor=#" + (u - B ? u * .9 & 1 || 9 : "d") + "0f0e0>&#" + (I[u] ? 9808 + l[67 + I[u]] : 160) : u++ && "<tr>")B = b
}
W()

