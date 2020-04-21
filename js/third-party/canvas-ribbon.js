"use strict";

!function () {
  var e = document.getElementById("ribbon");

  if ("false" != e.getAttribute("mobile") || !/Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent)) {
    config = {
      z: h(e, "zIndex", -1),
      a: h(e, "alpha", .6),
      s: h(e, "size", 90),
      c: h(e, "data-click", !0)
    };
    var o,
        a,
        t = document.createElement("canvas"),
        c = t.getContext("2d"),
        n = window.devicePixelRatio || 1,
        i = window.innerWidth,
        d = window.innerHeight,
        l = config.s,
        r = Math,
        g = 0,
        f = 2 * r.PI,
        s = r.cos,
        u = r.random;
    t.id = "ribbon-canvas", t.width = i * n, t.height = d * n, c.scale(n, n), c.globalAlpha = config.a, t.style.cssText = "opacity: " + config.a + ";position:fixed;top:0;left:0;z-index: " + config.z + ";width:100%;height:100%;pointer-events:none;", document.getElementsByTagName("body")[0].appendChild(t), "false" !== config.c && (document.onclick = b, document.ontouchstart = b), b();
  }

  function h(e, t, n) {
    return !0 === n ? e.getAttribute(t) || n : Number(e.getAttribute(t)) || n;
  }

  function b() {
    for (c.clearRect(0, 0, i, d), o = [{
      x: 0,
      y: .7 * d + l
    }, {
      x: 0,
      y: .7 * d - l
    }]; o[1].x < i + l;) {
      m(o[0], o[1]);
    }
  }

  function m(e, t) {
    c.beginPath(), c.moveTo(e.x, e.y), c.lineTo(t.x, t.y);

    var n = t.x + (2 * u() - .25) * l,
        i = function e(t) {
      a = t + (2 * u() - 1.1) * l;
      return d < a || a < 0 ? e(t) : a;
    }(t.y);

    c.lineTo(n, i), c.closePath(), g -= f / -50, c.fillStyle = "#" + (127 * s(g) + 128 << 16 | 127 * s(g + f / 3) + 128 << 8 | 127 * s(g + f / 3 * 2) + 128).toString(16), c.fill(), o[0] = o[1], o[1] = {
      x: n,
      y: i
    };
  }
}();