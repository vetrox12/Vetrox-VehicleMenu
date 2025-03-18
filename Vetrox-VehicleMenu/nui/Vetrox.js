var nt = Object.defineProperty;
var it = (e, t, n) => t in e ? nt(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n;
var me = (e, t, n) => (it(e, typeof t != "symbol" ? t + "" : t, n), n);
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]')) i(l);
    new MutationObserver(l => {
        for (const o of l)
            if (o.type === "childList")
                for (const r of o.addedNodes) r.tagName === "LINK" && r.rel === "modulepreload" && i(r)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(l) {
        const o = {};
        return l.integrity && (o.integrity = l.integrity), l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy), l.crossOrigin === "use-credentials" ? o.credentials = "include" : l.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o
    }

    function i(l) {
        if (l.ep) return;
        l.ep = !0;
        const o = n(l);
        fetch(l.href, o)
    }
})();

function O() {}
const lt = e => e;

function ot(e, t) {
    for (const n in t) e[n] = t[n];
    return e
}

function qe(e) {
    return e()
}

function Se() {
    return Object.create(null)
}

function L(e) {
    e.forEach(qe)
}

function ke(e) {
    return typeof e == "function"
}

function V(e, t) {
    return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function"
}

function rt(e) {
    return Object.keys(e).length === 0
}

function Fe(e, ...t) {
    if (e == null) {
        for (const i of t) i(void 0);
        return O
    }
    const n = e.subscribe(...t);
    return n.unsubscribe ? () => n.unsubscribe() : n
}

function Ee(e) {
    let t;
    return Fe(e, n => t = n)(), t
}

function be(e, t, n) {
    e.$$.on_destroy.push(Fe(t, n))
}

function st(e, t, n, i) {
    if (e) {
        const l = We(e, t, n, i);
        return e[0](l)
    }
}

function We(e, t, n, i) {
    return e[1] && i ? ot(n.ctx.slice(), e[1](i(t))) : n.ctx
}

function ct(e, t, n, i) {
    if (e[2] && i) {
        const l = e[2](i(n));
        if (t.dirty === void 0) return l;
        if (typeof l == "object") {
            const o = [],
                r = Math.max(t.dirty.length, l.length);
            for (let s = 0; s < r; s += 1) o[s] = t.dirty[s] | l[s];
            return o
        }
        return t.dirty | l
    }
    return t.dirty
}

function ut(e, t, n, i, l, o) {
    if (l) {
        const r = We(t, n, i, o);
        e.p(r, l)
    }
}

function at(e) {
    if (e.ctx.length > 32) {
        const t = [],
            n = e.ctx.length / 32;
        for (let i = 0; i < n; i++) t[i] = -1;
        return t
    }
    return -1
}

function ft(e, t, n) {
    return e.set(n), t
}
const Ke = typeof window < "u";
let dt = Ke ? () => window.performance.now() : () => Date.now(),
    Ne = Ke ? e => requestAnimationFrame(e) : O;
const Y = new Set;

function Ye(e) {
    Y.forEach(t => {
        t.c(e) || (Y.delete(t), t.f())
    }), Y.size !== 0 && Ne(Ye)
}

function pt(e) {
    let t;
    return Y.size === 0 && Ne(Ye), {
        promise: new Promise(n => {
            Y.add(t = {
                c: e,
                f: n
            })
        }),
        abort() {
            Y.delete(t)
        }
    }
}

function w(e, t) {
    e.appendChild(t)
}

function Ze(e) {
    if (!e) return document;
    const t = e.getRootNode ? e.getRootNode() : e.ownerDocument;
    return t && t.host ? t : e.ownerDocument
}

function ht(e) {
    const t = y("style");
    return t.textContent = "/* empty */", _t(Ze(e), t), t.sheet
}

function _t(e, t) {
    return w(e.head || e, t), t.sheet
}

function E(e, t, n) {
    e.insertBefore(t, n || null)
}

function k(e) {
    e.parentNode && e.parentNode.removeChild(e)
}

function se(e, t) {
    for (let n = 0; n < e.length; n += 1) e[n] && e[n].d(t)
}

function y(e) {
    return document.createElement(e)
}

function te(e) {
    return document.createElementNS("http://www.w3.org/2000/svg", e)
}

function Xe(e) {
    return document.createTextNode(e)
}

function M() {
    return Xe(" ")
}

function de() {
    return Xe("")
}

function C(e, t, n, i) {
    return e.addEventListener(t, n, i), () => e.removeEventListener(t, n, i)
}

function p(e, t, n) {
    n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n)
}

function mt(e) {
    return e === "" ? null : +e
}

function gt(e) {
    return Array.from(e.childNodes)
}

function ce(e, t) {
    e.value = t ?? ""
}

function S(e, t, n, i) {
    n == null ? e.style.removeProperty(t) : e.style.setProperty(t, n, i ? "important" : "")
}

function Je(e, t, {
    bubbles: n = !1,
    cancelable: i = !1
} = {}) {
    return new CustomEvent(e, {
        detail: t,
        bubbles: n,
        cancelable: i
    })
}
const ue = new Map;
let ae = 0;

function vt(e) {
    let t = 5381,
        n = e.length;
    for (; n--;) t = (t << 5) - t ^ e.charCodeAt(n);
    return t >>> 0
}

function bt(e, t) {
    const n = {
        stylesheet: ht(t),
        rules: {}
    };
    return ue.set(e, n), n
}

function xe(e, t, n, i, l, o, r, s = 0) {
    const u = 16.666 / i;
    let c = `{
`;
    for (let R = 0; R <= 1; R += u) {
        const f = t + (n - t) * o(R);
        c += R * 100 + `%{${r(f,1-f)}}
`
    }
    const _ = c + `100% {${r(n,1-n)}}
}`,
        d = `__svelte_${vt(_)}_${s}`,
        a = Ze(e),
        {
            stylesheet: g,
            rules: m
        } = ue.get(a) || bt(a, e);
    m[d] || (m[d] = !0, g.insertRule(`@keyframes ${d} ${_}`, g.cssRules.length));
    const v = e.style.animation || "";
    return e.style.animation = `${v?`${v}, `:""}${d} ${i}ms linear ${l}ms 1 both`, ae += 1, d
}

function wt(e, t) {
    const n = (e.style.animation || "").split(", "),
        i = n.filter(t ? o => o.indexOf(t) < 0 : o => o.indexOf("__svelte") === -1),
        l = n.length - i.length;
    l && (e.style.animation = i.join(", "), ae -= l, ae || yt())
}

function yt() {
    Ne(() => {
        ae || (ue.forEach(e => {
            const {
                ownerNode: t
            } = e.stylesheet;
            t && k(t)
        }), ue.clear())
    })
}
let le;

function ie(e) {
    le = e
}

function Oe() {
    if (!le) throw new Error("Function called outside component initialization");
    return le
}

function Ce(e) {
    Oe().$$.on_mount.push(e)
}

function $t(e) {
    Oe().$$.on_destroy.push(e)
}

function kt() {
    const e = Oe();
    return (t, n, {
        cancelable: i = !1
    } = {}) => {
        const l = e.$$.callbacks[t];
        if (l) {
            const o = Je(t, n, {
                cancelable: i
            });
            return l.slice().forEach(r => {
                r.call(e, o)
            }), !o.defaultPrevented
        }
        return !0
    }
}
const q = [],
    De = [];
let Z = [];
const Le = [],
    Et = Promise.resolve();
let we = !1;

function Nt() {
    we || (we = !0, Et.then(Qe))
}

function j(e) {
    Z.push(e)
}
const ge = new Set;
let z = 0;

function Qe() {
    if (z !== 0) return;
    const e = le;
    do {
        try {
            for (; z < q.length;) {
                const t = q[z];
                z++, ie(t), Ot(t.$$)
            }
        } catch (t) {
            throw q.length = 0, z = 0, t
        }
        for (ie(null), q.length = 0, z = 0; De.length;) De.pop()();
        for (let t = 0; t < Z.length; t += 1) {
            const n = Z[t];
            ge.has(n) || (ge.add(n), n())
        }
        Z.length = 0
    } while (q.length);
    for (; Le.length;) Le.pop()();
    we = !1, ge.clear(), ie(e)
}

function Ot(e) {
    if (e.fragment !== null) {
        e.update(), L(e.before_update);
        const t = e.dirty;
        e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(j)
    }
}

function Ct(e) {
    const t = [],
        n = [];
    Z.forEach(i => e.indexOf(i) === -1 ? t.push(i) : n.push(i)), n.forEach(i => i()), Z = t
}
let ne;

function Mt() {
    return ne || (ne = Promise.resolve(), ne.then(() => {
        ne = null
    })), ne
}

function ve(e, t, n) {
    e.dispatchEvent(Je(`${t?"intro":"outro"}${n}`))
}
const re = new Set;
let A;

function X() {
    A = {
        r: 0,
        c: [],
        p: A
    }
}

function J() {
    A.r || L(A.c), A = A.p
}

function $(e, t) {
    e && e.i && (re.delete(e), e.i(t))
}

function N(e, t, n, i) {
    if (e && e.o) {
        if (re.has(e)) return;
        re.add(e), A.c.push(() => {
            re.delete(e), i && (n && e.d(1), i())
        }), e.o(t)
    } else i && i()
}
const Rt = {
    duration: 0
};

function F(e, t, n, i) {
    let o = t(e, n, {
            direction: "both"
        }),
        r = i ? 0 : 1,
        s = null,
        u = null,
        c = null,
        _;

    function d() {
        c && wt(e, c)
    }

    function a(m, v) {
        const R = m.b - r;
        return v *= Math.abs(R), {
            a: r,
            b: m.b,
            d: R,
            duration: v,
            start: m.start,
            end: m.start + v,
            group: m.group
        }
    }

    function g(m) {
        const {
            delay: v = 0,
            duration: R = 300,
            easing: f = lt,
            tick: b = O,
            css: h
        } = o || Rt, I = {
            start: dt() + v,
            b: m
        };
        m || (I.group = A, A.r += 1), "inert" in e && (m ? _ !== void 0 && (e.inert = _) : (_ = e.inert, e.inert = !0)), s || u ? u = I : (h && (d(), c = xe(e, r, m, R, v, f, h)), m && b(0, 1), s = a(I, R), j(() => ve(e, m, "start")), pt(oe => {
            if (u && oe > u.start && (s = a(u, R), u = null, ve(e, s.b, "start"), h && (d(), c = xe(e, r, s.b, s.duration, 0, f, o.css))), s) {
                if (oe >= s.end) b(r = s.b, 1 - r), ve(e, s.b, "end"), u || (s.b ? d() : --s.group.r || L(s.group.c)), s = null;
                else if (oe >= s.start) {
                    const tt = oe - s.start;
                    r = s.a + s.d * f(tt / s.duration), b(r, 1 - r)
                }
            }
            return !!(s || u)
        }))
    }
    return {
        run(m) {
            ke(o) ? Mt().then(() => {
                o = o({
                    direction: m ? "in" : "out"
                }), g(m)
            }) : g(m)
        },
        end() {
            d(), s = u = null
        }
    }
}

function W(e) {
    return (e == null ? void 0 : e.length) !== void 0 ? e : Array.from(e)
}

function G(e) {
    e && e.c()
}

function P(e, t, n) {
    const {
        fragment: i,
        after_update: l
    } = e.$$;
    i && i.m(t, n), j(() => {
        const o = e.$$.on_mount.map(qe).filter(ke);
        e.$$.on_destroy ? e.$$.on_destroy.push(...o) : L(o), e.$$.on_mount = []
    }), l.forEach(j)
}

function T(e, t) {
    const n = e.$$;
    n.fragment !== null && (Ct(n.after_update), L(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = [])
}

function St(e, t) {
    e.$$.dirty[0] === -1 && (q.push(e), Nt(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31
}

function Q(e, t, n, i, l, o, r = null, s = [-1]) {
    const u = le;
    ie(e);
    const c = e.$$ = {
        fragment: null,
        ctx: [],
        props: o,
        update: O,
        not_equal: l,
        bound: Se(),
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(t.context || (u ? u.$$.context : [])),
        callbacks: Se(),
        dirty: s,
        skip_bound: !1,
        root: t.target || u.$$.root
    };
    r && r(c.root);
    let _ = !1;
    if (c.ctx = n ? n(e, t.props || {}, (d, a, ...g) => {
            const m = g.length ? g[0] : a;
            return c.ctx && l(c.ctx[d], c.ctx[d] = m) && (!c.skip_bound && c.bound[d] && c.bound[d](m), _ && St(e, d)), a
        }) : [], c.update(), _ = !0, L(c.before_update), c.fragment = i ? i(c.ctx) : !1, t.target) {
        if (t.hydrate) {
            const d = gt(t.target);
            c.fragment && c.fragment.l(d), d.forEach(k)
        } else c.fragment && c.fragment.c();
        t.intro && $(e.$$.fragment), P(e, t.target, t.anchor), Qe()
    }
    ie(u)
}
class ee {
    constructor() {
        me(this, "$$");
        me(this, "$$set")
    }
    $destroy() {
        T(this, 1), this.$destroy = O
    }
    $on(t, n) {
        if (!ke(n)) return O;
        const i = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
        return i.push(n), () => {
            const l = i.indexOf(n);
            l !== -1 && i.splice(l, 1)
        }
    }
    $set(t) {
        this.$$set && !rt(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1)
    }
}
const xt = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = {
    v: new Set
})).v.add(xt);
const U = [];

function pe(e, t = O) {
    let n;
    const i = new Set;

    function l(s) {
        if (V(e, s) && (e = s, n)) {
            const u = !U.length;
            for (const c of i) c[1](), U.push(c, e);
            if (u) {
                for (let c = 0; c < U.length; c += 2) U[c][0](U[c + 1]);
                U.length = 0
            }
        }
    }

    function o(s) {
        l(s(e))
    }

    function r(s, u = O) {
        const c = [s, u];
        return i.add(c), i.size === 1 && (n = t(l, o) || O), s(e), () => {
            i.delete(c), i.size === 0 && n && (n(), n = null)
        }
    }
    return {
        set: l,
        update: o,
        subscribe: r
    }
}
const Me = pe({
        fallbackResourceName: "debug",
        allowEscapeKey: !0
    }),
    Dt = pe(window.GetParentResourceName ? window.GetParentResourceName() : Ee(Me).DEBUG_RESOURCE_NAME),
    et = pe(!window.invokeNative),
    Ie = pe(!1),
    he = Ee(et),
    Lt = Ee(Dt),
    ye = [];
async function H(e, t = {}) {
    if (he == !0) {
        const l = await At(e, t);
        return Promise.resolve(l)
    }
    const n = {
        method: "post",
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(t)
    };
    return await (await fetch(`https://${Lt}/${e}`, n)).json()
}

function fe(e, t) {
    const n = i => {
        const {
            action: l,
            data: o
        } = i.data;
        l === e && t(o)
    };
    Ce(() => window.addEventListener("message", n)), $t(() => window.removeEventListener("message", n))
}
async function _e(e, t, n = 0) {
    he && setTimeout(() => {
        const i = new MessageEvent("message", {
            data: {
                action: e,
                data: t
            }
        });
        window.dispatchEvent(i)
    }, n)
}
async function It(e, t) {
    if (he) {
        if (ye[e] !== void 0) {
            console.log(`%c[DEBUG] %c${e} %cevent already has a debug receiver.`, "color: red; font-weight: bold;", "color: green", "");
            return
        }
        ye[e] = t
    }
}
async function At(e, t) {
    if (!he) return;
    const n = ye[e];
    return n === void 0 ? (console.log(`[DEBUG] ${e} event does not have a debugger.`), {}) : await n(t)
}
const Pt = [];

function Tt() {
    for (const e of Pt) fe(e.action, e.handler)
}
var B = (e => (e.visible = "vehmenu:visible", e.update = "vehmenu:update", e.initialise = "vehmenu:initialise", e))(B || {}),
    x = (e => (e.close = "vehmenu:close", e.click = "vehmenu:optionClick", e.changeType = "vehmenu:changeType", e.camMove = "vehmenu:camMove", e.camZoom = "vehmenu:camZoom", e))(x || {});

function Ae(e) {
    let t, n;
    const i = e[2].default,
        l = st(i, e, e[1], null);
    return {
        c() {
            t = y("main"), l && l.c(), p(t, "class", "svelte-1w09ye1")
        },
        m(o, r) {
            E(o, t, r), l && l.m(t, null), n = !0
        },
        p(o, r) {
            l && l.p && (!n || r & 2) && ut(l, i, o, o[1], n ? ct(i, o[1], r, null) : at(o[1]), null)
        },
        i(o) {
            n || ($(l, o), n = !0)
        },
        o(o) {
            N(l, o), n = !1
        },
        d(o) {
            o && k(t), l && l.d(o)
        }
    }
}

function Bt(e) {
    let t, n, i = e[0] && Ae(e);
    return {
        c() {
            i && i.c(), t = de()
        },
        m(l, o) {
            i && i.m(l, o), E(l, t, o), n = !0
        },
        p(l, [o]) {
            l[0] ? i ? (i.p(l, o), o & 1 && $(i, 1)) : (i = Ae(l), i.c(), $(i, 1), i.m(t.parentNode, t)) : i && (X(), N(i, 1, 1, () => {
                i = null
            }), J())
        },
        i(l) {
            n || ($(i), n = !0)
        },
        o(l) {
            N(i), n = !1
        },
        d(l) {
            l && k(t), i && i.d(l)
        }
    }
}

function Vt(e, t, n) {
    let i, l;
    be(e, Ie, s => n(0, i = s)), be(e, Me, s => n(3, l = s));
    let {
        $$slots: o = {},
        $$scope: r
    } = t;
    return fe(B.visible, s => {
        ft(Ie, i = s, i)
    }), Ce(() => {
        if (!l.allowEscapeKey) return;
        const s = u => {
            i && ["Escape"].includes(u.code) && H(x.close)
        };
        return window.addEventListener("keyup", s), () => window.removeEventListener("keyup", s)
    }), e.$$set = s => {
        "$$scope" in s && n(1, r = s.$$scope)
    }, [i, r, o]
}
class Ht extends ee {
    constructor(t) {
        super(), Q(this, t, Vt, Bt, V, {})
    }
}

function $e(e) {
    _e(B.visible, e)
}
const jt = [{
    label: "Visible",
    action: () => $e(!0),
    delay: 500
}];

function Gt() {
    for (const e of jt) setTimeout(() => {
        e.action()
    }, e.delay || 0)
}
const zt = [{
    action: x.close,
    handler: () => {
        console.log("closed")
    }
}, {
    action: x.click,
    handler: e => !e.active
}];

function Ut() {
    for (const e of zt) It(e.action, e.handler)
}
const Pe = ["doorl", "doorr", "hood", "trunk", "windowl", "windowr", "engine", "root", "seat"];
let D = [];

function qt() {
    const e = window.innerWidth,
        t = window.innerHeight,
        n = Math.random() * e,
        i = Math.random() * t,
        o = {
            icon: Pe[Math.floor(Math.random() * Pe.length)],
            x: n,
            y: i,
            active: !1,
            index: D.length,
            type: "debug",
            boneName: "test"
        };
    D = D.concat(o), _e(B.update, D)
}

function Ft(e) {
    const t = window.innerWidth - 100,
        n = window.innerHeight - 100,
        i = Math.random() * t + 50,
        l = Math.random() * n + 50,
        o = {
            icon: e,
            x: i,
            y: l,
            active: !1,
            index: D.length,
            type: "debug",
            boneName: "test"
        };
    D = D.concat(o), _e(B.update, D)
}

function Wt() {
    D.pop(), _e(B.update, D)
}
const Kt = [{
    label: "Visibility",
    actions: [{
        label: "True",
        action: () => $e(!0)
    }, {
        label: "False",
        action: () => $e(!1)
    }]
}, {
    label: "Options",
    actions: [{
        label: "Add",
        action: () => qt()
    }, {
        label: "Remove",
        action: () => Wt()
    }]
}, {
    label: "Option",
    actions: [{
        label: "Icon",
        action: Ft,
        type: "text",
        placeholder: "Icon"
    }]
}];

function Yt(e, t, n) {
    const i = e.slice();
    return i[9] = t[n].label, i[10] = t[n].actions, i
}

function Zt(e, t, n) {
    const i = e.slice();
    return i[13] = t[n], i[14] = t, i[15] = n, i
}

function Te(e) {
    let t, n = W(Kt),
        i = [];
    for (let l = 0; l < n.length; l += 1) i[l] = nn(Yt(e, n, l));
    return {
        c() {
            t = y("ol");
            for (let l = 0; l < i.length; l += 1) i[l].c();
            p(t, "class", "flex flex-col gap-2 bg-primary z-[9999999] max-w-[25vw] h-full px-[0.5vw] py-[0.5vw]")
        },
        m(l, o) {
            E(l, t, o);
            for (let r = 0; r < i.length; r += 1) i[r] && i[r].m(t, null)
        },
        d(l) {
            l && k(t), se(i, l)
        }
    }
}

function Xt(e) {
    let t, n, i;

    function l() {
        return e[8](e[13])
    }
    return {
        c() {
            t = y("button"), t.textContent = `${e[13].label}`, p(t, "class", "w-full px-[0.5vw] py-[0.25vw] bg-accent")
        },
        m(o, r) {
            E(o, t, r), n || (i = C(t, "click", l), n = !0)
        },
        p(o, r) {
            e = o
        },
        d(o) {
            o && k(t), n = !1, i()
        }
    }
}

function Jt(e) {
    let t, n, i, l, o, r;

    function s() {
        e[6].call(l, e[14], e[15])
    }

    function u() {
        return e[7](e[13])
    }
    return {
        c() {
            t = y("span"), n = y("p"), n.textContent = `${e[13].label}`, i = M(), l = y("input"), p(l, "type", "range"), p(l, "class", "w-full"), p(l, "min", e[13].min || 0), p(l, "max", e[13].max || 100), p(l, "step", e[13].step || 1), p(t, "class", "w-full px-[0.5vw] py-[0.25vw] flex flex-col gap-[0.2vw] bg-accent items-start")
        },
        m(c, _) {
            E(c, t, _), w(t, n), w(t, i), w(t, l), ce(l, e[13].value), o || (r = [C(l, "change", s), C(l, "input", s), C(l, "input", u)], o = !0)
        },
        p(c, _) {
            e = c, ce(l, e[13].value)
        },
        d(c) {
            c && k(t), o = !1, L(r)
        }
    }
}

function Qt(e) {
    let t, n, i, l, o, r;

    function s() {
        e[4].call(l, e[14], e[15])
    }

    function u(...c) {
        return e[5](e[13], ...c)
    }
    return {
        c() {
            t = y("span"), n = y("p"), n.textContent = `${e[13].label}`, i = M(), l = y("input"), p(l, "type", "checkbox"), p(l, "class", "h-full aspect-square"), p(t, "class", "w-full px-[0.5vw] py-[0.25vw] flex flex-row gap-[0.2vw] bg-accent items-center")
        },
        m(c, _) {
            E(c, t, _), w(t, n), w(t, i), w(t, l), l.checked = e[13].value, o || (r = [C(l, "change", s), C(l, "input", u)], o = !0)
        },
        p(c, _) {
            e = c, l.checked = e[13].value
        },
        d(c) {
            c && k(t), o = !1, L(r)
        }
    }
}

function en(e) {
    let t, n, i, l, o, r, s, u;

    function c() {
        e[2].call(l, e[14], e[15])
    }

    function _() {
        return e[3](e[13])
    }
    return {
        c() {
            t = y("span"), n = y("p"), n.textContent = `${e[13].label}`, i = M(), l = y("input"), o = M(), r = y("button"), r.textContent = "Apply", p(n, "class", ""), p(l, "type", "text"), p(l, "class", "h-full w-full text-[color:var(--text-secondary)] px-[0.25vw]"), p(r, "class", "px-[0.5vw] py-[0.25vw] w-[5vw] bg-primary"), p(t, "class", "w-full px-[0.5vw] py-[0.25vw] flex flex-col gap-[0.2vw] bg-accent items-start")
        },
        m(d, a) {
            E(d, t, a), w(t, n), w(t, i), w(t, l), ce(l, e[13].value), w(t, o), w(t, r), s || (u = [C(l, "input", c), C(r, "click", _)], s = !0)
        },
        p(d, a) {
            e = d, l.value !== e[13].value && ce(l, e[13].value)
        },
        d(d) {
            d && k(t), s = !1, L(u)
        }
    }
}

function tn(e) {
    let t;

    function n(o, r) {
        return o[13].type === "text" ? en : o[13].type === "checkbox" ? Qt : o[13].type === "slider" ? Jt : Xt
    }
    let l = n(e)(e);
    return {
        c() {
            t = y("div"), l.c(), p(t, "class", "flex flex-row flex-wrap")
        },
        m(o, r) {
            E(o, t, r), l.m(t, null)
        },
        p: O,
        d(o) {
            o && k(t), l.d()
        }
    }
}

function nn(e) {
    let t, n, i, l, o = W(e[10]),
        r = [];
    for (let s = 0; s < o.length; s += 1) r[s] = tn(Zt(e, o, s));
    return {
        c() {
            t = y("li"), n = y("span"), n.textContent = `${e[9]}`, i = M();
            for (let s = 0; s < r.length; s += 1) r[s].c();
            l = M(), p(n, "class", "w-full"), p(t, "class", "flex flex-col gap-1 border-l-[2px] border-[color:var(--accent)] px-[0.25vw]")
        },
        m(s, u) {
            E(s, t, u), w(t, n), w(t, i);
            for (let c = 0; c < r.length; c += 1) r[c] && r[c].m(t, null);
            w(t, l)
        },
        p: O,
        d(s) {
            s && k(t), se(r, s)
        }
    }
}

function ln(e) {
    let t, n, i, l, o, r, s, u = e[0] && Te(e);
    return {
        c() {
            t = y("div"), n = y("button"), n.textContent = "Debug", i = M(), u && u.c(), l = M(), o = y("div"), p(n, "class", "px-[1vw] py-[0.5vw] w-fit h-fit z-[9999999] bg-accent"), S(o, "background-image", "url('https://cdn.discordapp.com/attachments/1068663854143389788/1074878298498281554/HUD_-_Target_Menu.png')"), p(o, "class", "absolute w-screen bg-cover bg-no-repeat bg-center h-screen top-0 left-0 dev-image"), p(t, "class", "w-fit h-fit flex flex-col z-[9999999]")
        },
        m(c, _) {
            E(c, t, _), w(t, n), w(t, i), u && u.m(t, null), w(t, l), w(t, o), r || (s = C(n, "click", e[1]), r = !0)
        },
        p(c, [_]) {
            c[0] ? u || (u = Te(c), u.c(), u.m(t, l)) : u && (u.d(1), u = null)
        },
        i: O,
        o: O,
        d(c) {
            c && k(t), u && u.d(), r = !1, s()
        }
    }
}

function on(e, t, n) {
    Ce(() => {
        Gt(), Ut()
    });
    let i = !1;
    const l = () => n(0, i = !i);

    function o(a, g) {
        a[g].value = this.value
    }
    const r = a => {
        a.action(a.value)
    };

    function s(a, g) {
        a[g].value = this.checked
    }
    const u = (a, g) => {
        a.action(a.value)
    };

    function c(a, g) {
        a[g].value = mt(this.value)
    }
    return [i, l, o, r, s, u, c, a => {
        a.action(a.value)
    }, a => {
        a.action()
    }]
}
class rn extends ee {
    constructor(t) {
        super(), Q(this, t, on, ln, V, {})
    }
}

function sn(e) {
    let t, n, i, l, o, r, s;
    return {
        c() {
            t = te("svg"), n = te("g"), i = te("g"), l = te("g"), o = te("path"), p(n, "id", "SVGRepo_bgCarrier"), p(n, "stroke-width", "0"), p(i, "id", "SVGRepo_tracerCarrier"), p(i, "stroke-linecap", "round"), p(i, "stroke-linejoin", "round"), p(o, "d", "M0,92.375l46.188-80h92.378l46.185,80l-46.185,80H46.188L0,92.375z"), p(l, "id", "SVGRepo_iconCarrier"), p(t, "width", e[0]), p(t, "height", e[1]), p(t, "version", "1.1"), S(t, "fill", e[3]), S(t, "filter", cn), S(t, "transform", "scale(" + e[2] + ")"), p(t, "class", "origin-center transition-all duration-200"), p(t, "xmlns", "http://www.w3.org/2000/svg"), p(t, "xmlns:xlink", "http://www.w3.org/1999/xlink"), p(t, "viewBox", "0 0 184.751 184.751"), p(t, "xml:space", "preserve")
        },
        m(u, c) {
            E(u, t, c), w(t, n), w(t, i), w(t, l), w(l, o), r || (s = C(t, "click", e[7]), r = !0)
        },
        p(u, [c]) {
            c & 1 && p(t, "width", u[0]), c & 2 && p(t, "height", u[1]), c & 8 && S(t, "fill", u[3]), c & 4 && S(t, "transform", "scale(" + u[2] + ")")
        },
        i: O,
        o: O,
        d(u) {
            u && k(t), r = !1, s()
        }
    }
}
let cn = "";

function un(e, t, n) {
    const i = kt();
    let {
        width: l = "98%"
    } = t, {
        height: o = "98%"
    } = t, {
        scale: r = "1"
    } = t, {
        active: s = !1
    } = t, {
        disabled: u = !1
    } = t, c = "var(--accent)";
    const _ = () => i("click");
    return e.$$set = d => {
        "width" in d && n(0, l = d.width), "height" in d && n(1, o = d.height), "scale" in d && n(2, r = d.scale), "active" in d && n(5, s = d.active), "disabled" in d && n(6, u = d.disabled)
    }, e.$$.update = () => {
        e.$$.dirty & 96 && (s ? n(3, c = "var(--accent)") : n(3, c = "var(--secondary)"))
    }, [l, o, r, c, i, s, u, _]
}
class Re extends ee {
    constructor(t) {
        super(), Q(this, t, un, sn, V, {
            width: 0,
            height: 1,
            scale: 2,
            active: 5,
            disabled: 6
        })
    }
}

function an(e) {
    const t = e - 1;
    return t * t * t + 1
}

function K(e, {
    delay: t = 0,
    duration: n = 400,
    easing: i = an,
    start: l = 0,
    opacity: o = 0
} = {}) {
    const r = getComputedStyle(e),
        s = +r.opacity,
        u = r.transform === "none" ? "" : r.transform,
        c = 1 - l,
        _ = s * (1 - o);
    return {
        delay: t,
        duration: n,
        easing: i,
        css: (d, a) => `
			transform: ${u} scale(${1-c*a});
			opacity: ${s-_*a}
		`
    }
}

function Be(e, t, n) {
    const i = e.slice();
    i[9] = t[n];
    const l = !i[1].includes(i[9].value);
    return i[10] = l, i
}

function Ve(e, t, n) {
    const i = e.slice();
    return i[13] = t[n], i
}

function He(e) {
    let t = e[2],
        n, i, l = je(e);
    return {
        c() {
            l.c(), n = de()
        },
        m(o, r) {
            l.m(o, r), E(o, n, r), i = !0
        },
        p(o, r) {
            r & 4 && V(t, t = o[2]) ? (X(), N(l, 1, 1, O), J(), l = je(o), l.c(), $(l, 1), l.m(n.parentNode, n)) : l.p(o, r)
        },
        i(o) {
            i || ($(l), i = !0)
        },
        o(o) {
            N(l), i = !1
        },
        d(o) {
            o && k(n), l.d(o)
        }
    }
}

function je(e) {
    let t, n, i, l, o, r, s, u, c, _;
    n = new Re({
        props: {
            active: e[13].active
        }
    });

    function d() {
        return e[7](e[13])
    }
    return {
        c() {
            t = y("button"), G(n.$$.fragment), i = M(), l = y("i"), p(l, "class", o = e[13].icon + " icon fill-white absolute"), S(t, "left", e[13].x + "px"), S(t, "top", e[13].y + "px"), p(t, "class", r = "aspect-square option " + (e[13].active ? "active:outline-2 active:outline-red-600 hover:cursor-pointer" : "") + " grid place-items-center absolute -translate-x-1/2 -translate-y-1/2 w-[5vh]")
        },
        m(a, g) {
            E(a, t, g), P(n, t, null), w(t, i), w(t, l), u = !0, c || (_ = C(t, "click", d), c = !0)
        },
        p(a, g) {
            e = a;
            const m = {};
            g & 1 && (m.active = e[13].active), n.$set(m), (!u || g & 1 && o !== (o = e[13].icon + " icon fill-white absolute")) && p(l, "class", o), (!u || g & 1) && S(t, "left", e[13].x + "px"), (!u || g & 1) && S(t, "top", e[13].y + "px"), (!u || g & 1 && r !== (r = "aspect-square option " + (e[13].active ? "active:outline-2 active:outline-red-600 hover:cursor-pointer" : "") + " grid place-items-center absolute -translate-x-1/2 -translate-y-1/2 w-[5vh]")) && p(t, "class", r)
        },
        i(a) {
            u || ($(n.$$.fragment, a), a && j(() => {
                u && (s || (s = F(t, K, {
                    duration: 150
                }, !0)), s.run(1))
            }), u = !0)
        },
        o(a) {
            N(n.$$.fragment, a), a && (s || (s = F(t, K, {
                duration: 150
            }, !1)), s.run(0)), u = !1
        },
        d(a) {
            a && k(t), T(n), a && s && s.end(), c = !1, _()
        }
    }
}

function Ge(e) {
    let t, n, i = e[13].visible && He(e);
    return {
        c() {
            i && i.c(), t = de()
        },
        m(l, o) {
            i && i.m(l, o), E(l, t, o), n = !0
        },
        p(l, o) {
            l[13].visible ? i ? (i.p(l, o), o & 1 && $(i, 1)) : (i = He(l), i.c(), $(i, 1), i.m(t.parentNode, t)) : i && (X(), N(i, 1, 1, () => {
                i = null
            }), J())
        },
        i(l) {
            n || ($(i), n = !0)
        },
        o(l) {
            N(i), n = !1
        },
        d(l) {
            l && k(t), i && i.d(l)
        }
    }
}

function ze(e) {
    let t, n, i, l, o, r, s, u, c, _;
    n = new Re({
        props: {
            disabled: e[10],
            active: e[2] === e[9].value
        }
    });

    function d() {
        return e[8](e[9])
    }
    return {
        c() {
            t = y("button"), G(n.$$.fragment), i = M(), l = y("div"), r = M(), p(l, "class", o = e[9].icon + " icon fill-white absolute !w-[10%] " + (e[10] && "opacity-50")), t.disabled = s = e[10], p(t, "class", "w-[6vh] h-[5vh] grid place-items-center option ")
        },
        m(a, g) {
            E(a, t, g), P(n, t, null), w(t, i), w(t, l), w(t, r), u = !0, c || (_ = C(t, "click", d), c = !0)
        },
        p(a, g) {
            e = a;
            const m = {};
            g & 2 && (m.disabled = e[10]), g & 4 && (m.active = e[2] === e[9].value), n.$set(m), (!u || g & 2 && o !== (o = e[9].icon + " icon fill-white absolute !w-[10%] " + (e[10] && "opacity-50"))) && p(l, "class", o), (!u || g & 2 && s !== (s = e[10])) && (t.disabled = s)
        },
        i(a) {
            u || ($(n.$$.fragment, a), u = !0)
        },
        o(a) {
            N(n.$$.fragment, a), u = !1
        },
        d(a) {
            a && k(t), T(n), c = !1, _()
        }
    }
}

function fn(e) {
    let t, n, i, l, o, r, s, u, c, _, d = W(e[0]),
        a = [];
    for (let f = 0; f < d.length; f += 1) a[f] = Ge(Ve(e, d, f));
    const g = f => N(a[f], 1, 1, () => {
        a[f] = null
    });
    let m = W(e[3]),
        v = [];
    for (let f = 0; f < m.length; f += 1) v[f] = ze(Be(e, m, f));
    const R = f => N(v[f], 1, 1, () => {
        v[f] = null
    });
    return r = new Re({
        props: {
            scale: "1"
        }
    }), r.$on("click", e[6]), {
        c() {
            for (let f = 0; f < a.length; f += 1) a[f].c();
            t = M(), n = y("div");
            for (let f = 0; f < v.length; f += 1) v[f].c();
            l = M(), o = y("button"), G(r.$$.fragment), s = M(), u = y("div"), p(n, "class", "flex flex-row items-center justify-center absolute left-1/2 -translate-x-1/2 bottom-[3vh]"), p(u, "class", "fill-white absolute close icon !w-[50%]"), p(o, "class", "w-[4.5vh] h-[4.5vh] grid place-items-center absolute left-1/2 -translate-x-1/2 bottom-[8vh]")
        },
        m(f, b) {
            for (let h = 0; h < a.length; h += 1) a[h] && a[h].m(f, b);
            E(f, t, b), E(f, n, b);
            for (let h = 0; h < v.length; h += 1) v[h] && v[h].m(n, null);
            E(f, l, b), E(f, o, b), P(r, o, null), w(o, s), w(o, u), _ = !0
        },
        p(f, [b]) {
            if (b & 21) {
                d = W(f[0]);
                let h;
                for (h = 0; h < d.length; h += 1) {
                    const I = Ve(f, d, h);
                    a[h] ? (a[h].p(I, b), $(a[h], 1)) : (a[h] = Ge(I), a[h].c(), $(a[h], 1), a[h].m(t.parentNode, t))
                }
                for (X(), h = d.length; h < a.length; h += 1) g(h);
                J()
            }
            if (b & 46) {
                m = W(f[3]);
                let h;
                for (h = 0; h < m.length; h += 1) {
                    const I = Be(f, m, h);
                    v[h] ? (v[h].p(I, b), $(v[h], 1)) : (v[h] = ze(I), v[h].c(), $(v[h], 1), v[h].m(n, null))
                }
                for (X(), h = m.length; h < v.length; h += 1) R(h);
                J()
            }
        },
        i(f) {
            if (!_) {
                for (let b = 0; b < d.length; b += 1) $(a[b]);
                for (let b = 0; b < m.length; b += 1) $(v[b]);
                f && j(() => {
                    _ && (i || (i = F(n, K, {
                        duration: 150
                    }, !0)), i.run(1))
                }), $(r.$$.fragment, f), f && j(() => {
                    _ && (c || (c = F(o, K, {
                        duration: 150
                    }, !0)), c.run(1))
                }), _ = !0
            }
        },
        o(f) {
            a = a.filter(Boolean);
            for (let b = 0; b < a.length; b += 1) N(a[b]);
            v = v.filter(Boolean);
            for (let b = 0; b < v.length; b += 1) N(v[b]);
            f && (i || (i = F(n, K, {
                duration: 150
            }, !1)), i.run(0)), N(r.$$.fragment, f), f && (c || (c = F(o, K, {
                duration: 150
            }, !1)), c.run(0)), _ = !1
        },
        d(f) {
            f && (k(t), k(n), k(l), k(o)), se(a, f), se(v, f), f && i && i.end(), T(r), f && c && c.end()
        }
    }
}

function dn(e, t, n) {
    let i = [],
        l = [],
        o = [{
            value: "Doors",
            icon: "doorr"
        }, {
            value: "Windows",
            icon: "windowr"
        }, {
            value: "Seats",
            icon: "seat"
        }, {
            value: "Extras",
            icon: "extra"
        }],
        r = o[0].value;
    fe(B.update, a => {
        n(0, i = a)
    }), fe(B.initialise, a => {
        n(1, l = a);
        for (let g = 0; g < o.length; g++) {
            const m = o[g].value;
            if (l.includes(m)) {
                n(2, r = m), H(x.changeType, r);
                break
            }
        }
    });

    function s(a) {
        H(x.click, a)
    }

    function u(a) {
        n(2, r = a.value), H(x.changeType, a.value)
    }

    function c() {
        H(x.close)
    }
    return [i, l, r, o, s, u, c, a => s(a), a => u(a)]
}
class pn extends ee {
    constructor(t) {
        super(), Q(this, t, dn, fn, V, {})
    }
}

function hn(e) {
    let t, n, i;
    return {
        c() {
            t = y("div"), t.innerHTML = "", p(t, "class", "w-full h-full cursor-grab active:cursor-grabbing")
        },
        m(l, o) {
            E(l, t, o), n || (i = [C(t, "mousedown", e[3]), C(t, "mouseup", e[4]), C(t, "wheel", e[2]), C(t, "mousemove", e[1])], n = !0)
        },
        p: O,
        i: O,
        o: O,
        d(l) {
            l && k(t), n = !1, L(i)
        }
    }
}

function _n(e, t, n) {
    let i = !1;
    return [i, u => {
        if (!i) return;
        let c = u.movementX,
            _ = u.movementY,
            d = c / 8,
            a = _ / 8;
        H(x.camMove, {
            x: d,
            y: a
        })
    }, u => {
        let c = u.deltaY > 0 ? .5 : -.5;
        H(x.camZoom, c)
    }, () => n(0, i = !0), () => n(0, i = !1)]
}
class mn extends ee {
    constructor(t) {
        super(), Q(this, t, _n, hn, V, {})
    }
}

function gn(e) {
    let t, n, i, l;
    return t = new pn({}), i = new mn({}), {
        c() {
            G(t.$$.fragment), n = M(), G(i.$$.fragment)
        },
        m(o, r) {
            P(t, o, r), E(o, n, r), P(i, o, r), l = !0
        },
        i(o) {
            l || ($(t.$$.fragment, o), $(i.$$.fragment, o), l = !0)
        },
        o(o) {
            N(t.$$.fragment, o), N(i.$$.fragment, o), l = !1
        },
        d(o) {
            o && k(n), T(t, o), T(i, o)
        }
    }
}

function Ue(e) {
    let t, n;
    return t = new rn({}), {
        c() {
            G(t.$$.fragment)
        },
        m(i, l) {
            P(t, i, l), n = !0
        },
        i(i) {
            n || ($(t.$$.fragment, i), n = !0)
        },
        o(i) {
            N(t.$$.fragment, i), n = !1
        },
        d(i) {
            T(t, i)
        }
    }
}

function vn(e) {
    let t, n, i, l;
    t = new Ht({
        props: {
            $$slots: {
                default: [gn]
            },
            $$scope: {
                ctx: e
            }
        }
    });
    let o = e[0] && Ue();
    return {
        c() {
            G(t.$$.fragment), n = M(), o && o.c(), i = de()
        },
        m(r, s) {
            P(t, r, s), E(r, n, s), o && o.m(r, s), E(r, i, s), l = !0
        },
        p(r, [s]) {
            const u = {};
            s & 2 && (u.$$scope = {
                dirty: s,
                ctx: r
            }), t.$set(u), r[0] ? o ? s & 1 && $(o, 1) : (o = Ue(), o.c(), $(o, 1), o.m(i.parentNode, i)) : o && (X(), N(o, 1, 1, () => {
                o = null
            }), J())
        },
        i(r) {
            l || ($(t.$$.fragment, r), $(o), l = !0)
        },
        o(r) {
            N(t.$$.fragment, r), N(o), l = !1
        },
        d(r) {
            r && (k(n), k(i)), T(t, r), o && o.d(r)
        }
    }
}

function bn(e, t, n) {
    let i;
    return be(e, et, l => n(0, i = l)), Me.set({
        fallbackResourceName: "VehicleMenu",
        allowEscapeKey: !0
    }), Tt(), [i]
}
class wn extends ee {
    constructor(t) {
        super(), Q(this, t, bn, vn, V, {})
    }
}
new wn({
    target: document.getElementById("app")
});

// Vetrox https://discord.gg/jc3bxNTD9Y