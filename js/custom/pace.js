"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function () {
  function t(t, e) {
    for (var n in e) {
      Y.call(e, n) && (t[n] = e[n]);
    }

    function r() {
      this.constructor = t;
    }

    return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, t;
  }

  var u,
      c,
      e,
      n,
      o,
      r,
      s,
      i,
      a,
      v,
      l,
      p,
      w,
      h,
      f,
      d,
      g,
      b,
      k,
      m,
      y,
      _S,
      q,
      L,
      x,
      P,
      T,
      R,
      j,
      E,
      O,
      M,
      A,
      N,
      _,
      F,
      C,
      U,
      W,
      X,
      D,
      H,
      I,
      z,
      G,
      B,
      J,
      K,
      Q,
      V = [].slice,
      Y = {}.hasOwnProperty,
      Z = [].indexOf || function (t) {
    for (var e = 0, n = this.length; e < n; e++) {
      if (e in this && this[e] === t) return e;
    }

    return -1;
  };

  function $() {}

  for (y = {
    catchupTime: 100,
    initialRate: .03,
    minTime: 250,
    ghostTime: 100,
    maxProgressPerFrame: 20,
    easeFactor: 1.25,
    startOnPageLoad: !0,
    restartOnPushState: !0,
    restartOnRequestAfter: 500,
    target: "body",
    elements: {
      checkInterval: 100,
      selectors: ["body"]
    },
    eventLag: {
      minSamples: 10,
      sampleCount: 3,
      lagThreshold: 3
    },
    ajax: {
      trackMethods: ["GET"],
      trackWebSockets: !0,
      ignoreURLs: []
    }
  }, j = function j() {
    var t;
    return null != (t = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance.now() : void 0) ? t : +new Date();
  }, O = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, m = window.cancelAnimationFrame || window.mozCancelAnimationFrame, null == O && (O = function O(t) {
    return setTimeout(t, 50);
  }, m = function m(t) {
    return clearTimeout(t);
  }), A = function A(e) {
    var n, _r;

    return n = j(), (_r = function r() {
      var t;
      return 33 <= (t = j() - n) ? (n = j(), e(t, function () {
        return O(_r);
      })) : setTimeout(_r, 33 - t);
    })();
  }, M = function M() {
    var t, e, n;
    return n = arguments[0], e = arguments[1], t = 3 <= arguments.length ? V.call(arguments, 2) : [], "function" == typeof n[e] ? n[e].apply(n, t) : n[e];
  }, _S = function S() {
    var t, e, n, r, s, o, i;

    for (e = arguments[0], o = 0, i = (r = 2 <= arguments.length ? V.call(arguments, 1) : []).length; o < i; o++) {
      if (n = r[o]) for (t in n) {
        Y.call(n, t) && (s = n[t], null != e[t] && "object" == _typeof(e[t]) && null != s && "object" == _typeof(s) ? _S(e[t], s) : e[t] = s);
      }
    }

    return e;
  }, g = function g(t) {
    var e, n, r, s, o;

    for (n = e = 0, s = 0, o = t.length; s < o; s++) {
      r = t[s], n += Math.abs(r), e++;
    }

    return n / e;
  }, L = function L(t, e) {
    var n, r;

    if (null == t && (t = "options"), null == e && (e = !0), r = document.querySelector("[data-pace-" + t + "]")) {
      if (n = r.getAttribute("data-pace-" + t), !e) return n;

      try {
        return JSON.parse(n);
      } catch (t) {
        return "undefined" != typeof console && null !== console ? console.error("Error parsing inline pace options", t) : void 0;
      }
    }
  }, $.prototype.on = function (t, e, n, r) {
    var s;
    return null == r && (r = !1), null == this.bindings && (this.bindings = {}), null == (s = this.bindings)[t] && (s[t] = []), this.bindings[t].push({
      handler: e,
      ctx: n,
      once: r
    });
  }, $.prototype.once = function (t, e, n) {
    return this.on(t, e, n, !0);
  }, $.prototype.off = function (t, e) {
    var n, r, s;

    if (null != (null != (r = this.bindings) ? r[t] : void 0)) {
      if (null == e) return delete this.bindings[t];

      for (n = 0, s = []; n < this.bindings[t].length;) {
        this.bindings[t][n].handler === e ? s.push(this.bindings[t].splice(n, 1)) : s.push(n++);
      }

      return s;
    }
  }, $.prototype.trigger = function () {
    var t, e, n, r, s, o, i, a, u;

    if (n = arguments[0], t = 2 <= arguments.length ? V.call(arguments, 1) : [], null != (i = this.bindings) && i[n]) {
      for (s = 0, u = []; s < this.bindings[n].length;) {
        r = (a = this.bindings[n][s]).handler, e = a.ctx, o = a.once, r.apply(null != e ? e : this, t), o ? u.push(this.bindings[n].splice(s, 1)) : u.push(s++);
      }

      return u;
    }
  }, s = $, v = window.Pace || {}, window.Pace = v, _S(v, s.prototype), E = v.options = _S({}, y, window.paceOptions, L()), I = 0, G = (J = ["ajax", "document", "eventLag", "elements"]).length; I < G; I++) {
    !0 === E[C = J[I]] && (E[C] = y[C]);
  }

  function tt() {
    return tt.__super__.constructor.apply(this, arguments);
  }

  function et() {
    this.progress = 0;
  }

  function nt() {
    this.bindings = {};
  }

  function rt() {
    var n,
        o = this;
    rt.__super__.constructor.apply(this, arguments), n = function n(r) {
      var s;
      return s = r.open, r.open = function (t, e, n) {
        return F(t) && o.trigger("request", {
          type: t,
          url: e,
          request: r
        }), s.apply(r, arguments);
      };
    }, window.XMLHttpRequest = function (t) {
      var e;
      return e = new H(t), n(e), e;
    };

    try {
      q(window.XMLHttpRequest, H);
    } catch (t) {}

    if (null != D) {
      window.XDomainRequest = function () {
        var t;
        return t = new D(), n(t), t;
      };

      try {
        q(window.XDomainRequest, D);
      } catch (t) {}
    }

    if (null != X && E.ajax.trackWebSockets) {
      window.WebSocket = function (t, e) {
        var n;
        return n = null != e ? new X(t, e) : new X(t), F("socket") && o.trigger("request", {
          type: "socket",
          url: t,
          protocols: e,
          request: n
        }), n;
      };

      try {
        q(window.WebSocket, X);
      } catch (t) {}
    }
  }

  function st() {
    var t = this;
    this.elements = [], x().on("request", function () {
      return t.watch.apply(t, arguments);
    });
  }

  function ot(t) {
    this.selector = t, this.progress = 0, this.check();
  }

  function it() {
    var t,
        e,
        n = this;
    this.progress = null != (e = this.states[document.readyState]) ? e : 100, t = document.onreadystatechange, document.onreadystatechange = function () {
      return null != n.states[document.readyState] && (n.progress = n.states[document.readyState]), "function" == typeof t ? t.apply(null, arguments) : void 0;
    };
  }

  function at(t) {
    this.source = t, this.last = this.sinceLastUpdate = 0, this.rate = E.initialRate, this.catchup = 0, this.progress = this.lastProgress = 0, null != this.source && (this.progress = M(this.source, "progress"));
  }

  Q = Error, t(tt, Q), a = tt, et.prototype.getElement = function () {
    var t;

    if (null == this.el) {
      if (!(t = document.querySelector(E.target))) throw new a();
      this.el = document.createElement("div"), this.el.className = "pace pace-active", document.body.className = document.body.className.replace(/pace-done/g, ""), document.body.className += " pace-running", this.el.innerHTML = '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>', null != t.firstChild ? t.insertBefore(this.el, t.firstChild) : t.appendChild(this.el);
    }

    return this.el;
  }, et.prototype.finish = function () {
    var t;
    return (t = this.getElement()).className = t.className.replace("pace-active", ""), t.className += " pace-inactive", document.body.className = document.body.className.replace("pace-running", ""), document.body.className += " pace-done";
  }, et.prototype.update = function (t) {
    return this.progress = t, this.render();
  }, et.prototype.destroy = function () {
    try {
      this.getElement().parentNode.removeChild(this.getElement());
    } catch (t) {
      a = t;
    }

    return this.el = void 0;
  }, et.prototype.render = function () {
    var t, e, n, r, s, o, i;
    if (null == document.querySelector(E.target)) return !1;

    for (t = this.getElement(), r = "translate3d(" + this.progress + "%, 0, 0)", s = 0, o = (i = ["webkitTransform", "msTransform", "transform"]).length; s < o; s++) {
      e = i[s], t.children[0].style[e] = r;
    }

    return (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) && (t.children[0].setAttribute("data-progress-text", (0 | this.progress) + "%"), 100 <= this.progress ? n = "99" : (n = this.progress < 10 ? "0" : "", n += 0 | this.progress), t.children[0].setAttribute("data-progress", "" + n)), this.lastRenderedProgress = this.progress;
  }, et.prototype.done = function () {
    return 100 <= this.progress;
  }, c = et, nt.prototype.trigger = function (t, e) {
    var n, r, s, o, i;

    if (null != this.bindings[t]) {
      for (i = [], r = 0, s = (o = this.bindings[t]).length; r < s; r++) {
        n = o[r], i.push(n.call(this, e));
      }

      return i;
    }
  }, nt.prototype.on = function (t, e) {
    var n;
    return null == (n = this.bindings)[t] && (n[t] = []), this.bindings[t].push(e);
  }, i = nt, H = window.XMLHttpRequest, D = window.XDomainRequest, X = window.WebSocket, q = function q(t, e) {
    var n, r;

    for (n in r = [], e.prototype) {
      try {
        null == t[n] && "function" != typeof e[n] ? "function" == typeof Object.defineProperty ? r.push(Object.defineProperty(t, n, {
          get: function get() {
            return e.prototype[n];
          },
          configurable: !0,
          enumerable: !0
        })) : r.push(t[n] = e.prototype[n]) : r.push(void 0);
      } catch (t) {
        0;
      }
    }

    return r;
  }, T = [], v.ignore = function () {
    var t, e, n;
    return e = arguments[0], t = 2 <= arguments.length ? V.call(arguments, 1) : [], T.unshift("ignore"), n = e.apply(null, t), T.shift(), n;
  }, v.track = function () {
    var t, e, n;
    return e = arguments[0], t = 2 <= arguments.length ? V.call(arguments, 1) : [], T.unshift("track"), n = e.apply(null, t), T.shift(), n;
  }, F = function F(t) {
    var e;
    if (null == t && (t = "GET"), "track" === T[0]) return "force";

    if (!T.length && E.ajax) {
      if ("socket" === t && E.ajax.trackWebSockets) return !0;
      if (e = t.toUpperCase(), 0 <= Z.call(E.ajax.trackMethods, e)) return !0;
    }

    return !1;
  }, t(rt, i), l = rt, z = null, _ = function _(t) {
    var e, n, r, s;

    for (n = 0, r = (s = E.ajax.ignoreURLs).length; n < r; n++) {
      if ("string" == typeof (e = s[n])) {
        if (-1 !== t.indexOf(e)) return !0;
      } else if (e.test(t)) return !0;
    }

    return !1;
  }, (x = function x() {
    return null == z && (z = new l()), z;
  })().on("request", function (t) {
    var e, o, i, a, n;
    if (a = t.type, i = t.request, n = t.url, !_(n)) return v.running || !1 === E.restartOnRequestAfter && "force" !== F(a) ? void 0 : (o = arguments, "boolean" == typeof (e = E.restartOnRequestAfter || 0) && (e = 0), setTimeout(function () {
      var t, e, n, r, s;

      if ("socket" === a ? i.readyState < 2 : 0 < (n = i.readyState) && n < 4) {
        for (v.restart(), s = [], t = 0, e = (r = v.sources).length; t < e; t++) {
          if ((C = r[t]) instanceof u) {
            C.watch.apply(C, o);
            break;
          }

          s.push(void 0);
        }

        return s;
      }
    }, e));
  }), st.prototype.watch = function (t) {
    var e, n, r, s;
    if (r = t.type, e = t.request, s = t.url, !_(s)) return n = new ("socket" === r ? h : f)(e), this.elements.push(n);
  }, u = st, f = function f(e) {
    var t,
        n,
        r,
        s,
        o,
        i = this;
    if (this.progress = 0, null != window.ProgressEvent) for (e.addEventListener("progress", function (t) {
      return t.lengthComputable ? i.progress = 100 * t.loaded / t.total : i.progress = i.progress + (100 - i.progress) / 2;
    }, !1), n = 0, r = (o = ["load", "abort", "timeout", "error"]).length; n < r; n++) {
      t = o[n], e.addEventListener(t, function () {
        return i.progress = 100;
      }, !1);
    } else s = e.onreadystatechange, e.onreadystatechange = function () {
      var t;
      return 0 === (t = e.readyState) || 4 === t ? i.progress = 100 : 3 === e.readyState && (i.progress = 50), "function" == typeof s ? s.apply(null, arguments) : void 0;
    };
  }, h = function h(t) {
    var e,
        n,
        r,
        s,
        o = this;

    for (n = this.progress = 0, r = (s = ["error", "open"]).length; n < r; n++) {
      e = s[n], t.addEventListener(e, function () {
        return o.progress = 100;
      }, !1);
    }
  }, n = function n(t) {
    var e, n, r, s;

    for (null == t && (t = {}), this.elements = [], null == t.selectors && (t.selectors = []), n = 0, r = (s = t.selectors).length; n < r; n++) {
      e = s[n], this.elements.push(new o(e));
    }
  }, ot.prototype.check = function () {
    var t = this;
    return document.querySelector(this.selector) ? this.done() : setTimeout(function () {
      return t.check();
    }, E.elements.checkInterval);
  }, ot.prototype.done = function () {
    return this.progress = 100;
  }, o = ot, it.prototype.states = {
    loading: 0,
    interactive: 50,
    complete: 100
  }, e = it, r = function r() {
    var e,
        n,
        r,
        s,
        o,
        i = this;
    this.progress = 0, o = [], s = e = 0, r = j(), n = setInterval(function () {
      var t;
      return t = j() - r - 50, r = j(), o.push(t), o.length > E.eventLag.sampleCount && o.shift(), e = g(o), ++s >= E.eventLag.minSamples && e < E.eventLag.lagThreshold ? (i.progress = 100, clearInterval(n)) : i.progress = 3 / (e + 3) * 100;
    }, 50);
  }, at.prototype.tick = function (t, e) {
    var n;
    return null == e && (e = M(this.source, "progress")), 100 <= e && (this.done = !0), e === this.last ? this.sinceLastUpdate += t : (this.sinceLastUpdate && (this.rate = (e - this.last) / this.sinceLastUpdate), this.catchup = (e - this.progress) / E.catchupTime, this.sinceLastUpdate = 0, this.last = e), e > this.progress && (this.progress += this.catchup * t), n = 1 - Math.pow(this.progress / 100, E.easeFactor), this.progress += n * this.rate * t, this.progress = Math.min(this.lastProgress + E.maxProgressPerFrame, this.progress), this.progress = Math.max(0, this.progress), this.progress = Math.min(100, this.progress), this.lastProgress = this.progress, this.progress;
  }, w = at, k = d = W = b = N = U = null, v.running = !1, P = function P() {
    if (E.restartOnPushState) return v.restart();
  }, null != window.history.pushState && (B = window.history.pushState, window.history.pushState = function () {
    return P(), B.apply(window.history, arguments);
  }), null != window.history.replaceState && (K = window.history.replaceState, window.history.replaceState = function () {
    return P(), K.apply(window.history, arguments);
  }), p = {
    ajax: u,
    elements: n,
    document: e,
    eventLag: r
  }, (R = function R() {
    var t, e, n, r, s, o, i, a;

    for (v.sources = U = [], e = 0, r = (o = ["ajax", "elements", "document", "eventLag"]).length; e < r; e++) {
      !1 !== E[t = o[e]] && U.push(new p[t](E[t]));
    }

    for (n = 0, s = (a = null != (i = E.extraSources) ? i : []).length; n < s; n++) {
      C = a[n], U.push(new C(E));
    }

    return v.bar = b = new c(), N = [], W = new w();
  })(), v.stop = function () {
    return v.trigger("stop"), v.running = !1, b.destroy(), k = !0, null != d && ("function" == typeof m && m(d), d = null), R();
  }, v.restart = function () {
    return v.trigger("restart"), v.stop(), v.start();
  }, v.go = function () {
    var y;
    return v.running = !0, b.render(), y = j(), k = !1, d = A(function (t, e) {
      var n, r, s, o, i, a, u, c, l, p, h, f, d, g, m;

      for (b.progress, r = p = 0, s = !0, a = h = 0, d = U.length; h < d; a = ++h) {
        for (C = U[a], l = null != N[a] ? N[a] : N[a] = [], u = f = 0, g = (i = null != (m = C.elements) ? m : [C]).length; f < g; u = ++f) {
          o = i[u], s &= (c = null != l[u] ? l[u] : l[u] = new w(o)).done, c.done || (r++, p += c.tick(t));
        }
      }

      return n = p / r, b.update(W.tick(t, n)), b.done() || s || k ? (b.update(100), v.trigger("done"), setTimeout(function () {
        return b.finish(), v.running = !1, v.trigger("hide");
      }, Math.max(E.ghostTime, Math.max(E.minTime - (j() - y), 0)))) : e();
    });
  }, v.start = function (t) {
    _S(E, t), v.running = !0;

    try {
      b.render();
    } catch (t) {
      a = t;
    }

    return document.querySelector(".pace") ? (v.trigger("start"), v.go()) : setTimeout(v.start, 50);
  }, "function" == typeof define && define.amd ? define(["pace"], function () {
    return v;
  }) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = v : E.startOnPageLoad && v.start();
}).call(void 0);