"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

"object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (window.Ribbons = function () {
  var e = window,
      h = document.body,
      a = document.documentElement,
      u = function u() {
    if (arguments.length === 1) {
      if (Array.isArray(arguments[0])) {
        var t = Math.round(u(0, arguments[0].length - 1));
        return arguments[0][t];
      }

      return u(0, arguments[0]);
    } else if (arguments.length === 2) {
      return Math.random() * (arguments[1] - arguments[0]) + arguments[0];
    }

    return 0;
  },
      s = function s(t) {
    var i = Math.max(0, e.innerWidth || a.clientWidth || h.clientWidth || 0),
        n = Math.max(0, e.innerHeight || a.clientHeight || h.clientHeight || 0),
        o = Math.max(0, e.pageXOffset || a.scrollLeft || h.scrollLeft || 0) - (a.clientLeft || 0),
        s = Math.max(0, e.pageYOffset || a.scrollTop || h.scrollTop || 0) - (a.clientTop || 0);
    return {
      width: i,
      height: n,
      ratio: i / n,
      centerx: i / 2,
      centery: n / 2,
      scrollx: o,
      scrolly: s
    };
  },
      t = function t(_t) {
    var i = s(_t),
        n = _t ? Math.max(0, _t.pageX || _t.clientX || 0) : 0,
        o = _t ? Math.max(0, _t.pageY || _t.clientY || 0) : 0;
    return {
      mousex: n,
      mousey: o,
      centerx: n - i.width / 2,
      centery: o - i.height / 2
    };
  },
      b = function b(t, i) {
    this.x = 0;
    this.y = 0;
    this.set(t, i);
  };

  b.prototype = {
    constructor: b,
    set: function set(t, i) {
      this.x = t || 0;
      this.y = i || 0;
    },
    copy: function copy(t) {
      this.x = t.x || 0;
      this.y = t.y || 0;
      return this;
    },
    multiply: function multiply(t, i) {
      this.x *= t || 1;
      this.y *= i || 1;
      return this;
    },
    divide: function divide(t, i) {
      this.x /= t || 1;
      this.y /= i || 1;
      return this;
    },
    add: function add(t, i) {
      this.x += t || 0;
      this.y += i || 0;
      return this;
    },
    subtract: function subtract(t, i) {
      this.x -= t || 0;
      this.y -= i || 0;
      return this;
    },
    clampX: function clampX(t, i) {
      this.x = Math.max(t, Math.min(this.x, i));
      return this;
    },
    clampY: function clampY(t, i) {
      this.y = Math.max(t, Math.min(this.y, i));
      return this;
    },
    flipX: function flipX() {
      this.x *= -1;
      return this;
    },
    flipY: function flipY() {
      this.y *= -1;
      return this;
    }
  };

  var i = function i(t) {
    this._canvas = null;
    this._context = null;
    this._sto = null;
    this._width = 0;
    this._height = 0;
    this._scroll = 0;
    this._ribbons = [];
    this._options = {
      colorSaturation: "80%",
      colorBrightness: "60%",
      colorAlpha: .65,
      colorCycleSpeed: 6,
      verticalPosition: "center",
      horizontalSpeed: 150,
      ribbonCount: 5,
      strokeSize: 5,
      parallaxAmount: -.5,
      animateSections: true
    };
    this._onDraw = this._onDraw.bind(this);
    this._onResize = this._onResize.bind(this);
    this._onScroll = this._onScroll.bind(this);
    this.setOptions(t);
    this.init();
  };

  return i.prototype = {
    constructor: i,
    setOptions: function setOptions(t) {
      if ("object" == _typeof(t)) for (var i in t) {
        t.hasOwnProperty(i) && (this._options[i] = t[i]);
      }
    },
    init: function init() {
      try {
        this._canvas = document.createElement("canvas"), this._canvas.style.display = "block", this._canvas.style.position = "fixed", this._canvas.style.margin = "0", this._canvas.style.padding = "0", this._canvas.style.border = "0", this._canvas.style.outline = "0", this._canvas.style.left = "0", this._canvas.style.top = "0", this._canvas.style.width = "100%", this._canvas.style.height = "100%", this._canvas.style["z-index"] = "-1", this._onResize(), this._context = this._canvas.getContext("2d"), this._context.clearRect(0, 0, this._width, this._height), this._context.globalAlpha = this._options.colorAlpha, window.addEventListener("resize", this._onResize), window.addEventListener("scroll", this._onScroll), document.body.appendChild(this._canvas);
      } catch (t) {
        return void console.warn("Canvas Context Error: " + t.toString());
      }

      this._onDraw();
    },
    addRibbon: function addRibbon() {
      var t = 5 < Math.round(u(1, 9)) ? "right" : "left",
          i = 1e3,
          n = 200,
          o = this._width + n,
          s = 0,
          e = 0,
          h = "right" == t ? -200 : o,
          a = Math.round(u(0, this._height));
      /^(top|min)$/i.test(this._options.verticalPosition) ? a = n : /^(middle|center)$/i.test(this._options.verticalPosition) ? a = this._height / 2 : /^(bottom|max)$/i.test(this._options.verticalPosition) && (a = this._height - n);

      for (var r = [], l = new b(h, a), c = new b(h, a), p = null, _ = Math.round(u(0, 360)), d = 0; !(i <= 0);) {
        if (i--, s = Math.round((Math.random() - .2) * this._options.horizontalSpeed), e = Math.round((Math.random() - .5) * (.25 * this._height)), (p = new b()).copy(c), "right" == t) {
          if (p.add(s, e), c.x >= o) break;
        } else if ("left" == t && (p.subtract(s, e), c.x <= -200)) break;

        r.push({
          point1: new b(l.x, l.y),
          point2: new b(c.x, c.y),
          point3: p,
          color: _,
          delay: d,
          dir: t,
          alpha: 0,
          phase: 0
        }), l.copy(c), c.copy(p), d += 4, _ += this._options.colorCycleSpeed;
      }

      this._ribbons.push(r);
    },
    _drawRibbonSection: function _drawRibbonSection(t) {
      if (t) {
        if (1 <= t.phase && t.alpha <= 0) return !0;

        if (t.delay <= 0) {
          if (t.phase += .02, t.alpha = +Math.sin(t.phase), t.alpha = t.alpha <= 0 ? 0 : t.alpha, t.alpha = 1 <= t.alpha ? 1 : t.alpha, this._options.animateSections) {
            var i = .1 * Math.sin(1 + t.phase * Math.PI / 2);
            "right" === t.dir ? (t.point1.add(i, 0), t.point2.add(i, 0), t.point3.add(i, 0)) : (t.point1.subtract(i, 0), t.point2.subtract(i, 0), t.point3.subtract(i, 0)), t.point1.add(0, i), t.point2.add(0, i), t.point3.add(0, i);
          }
        } else t.delay -= .5;

        var n = this._options.colorSaturation,
            o = this._options.colorBrightness,
            s = "hsla(" + t.color + ", " + n + ", " + o + ", " + t.alpha + " )";
        this._context.save(), 0 !== this._options.parallaxAmount && this._context.translate(0, this._scroll * this._options.parallaxAmount), this._context.beginPath(), this._context.moveTo(t.point1.x, t.point1.y), this._context.lineTo(t.point2.x, t.point2.y), this._context.lineTo(t.point3.x, t.point3.y), this._context.fillStyle = s, this._context.fill(), 0 < this._options.strokeSize && (this._context.lineWidth = this._options.strokeSize, this._context.strokeStyle = s, this._context.lineCap = "round", this._context.stroke()), this._context.restore();
      }

      return !1;
    },
    _onDraw: function _onDraw() {
      for (var t = 0, i = this._ribbons.length; t < i; ++t) {
        this._ribbons[t] || this._ribbons.splice(t, 1);
      }

      this._context.clearRect(0, 0, this._width, this._height);

      for (var n = 0; n < this._ribbons.length; ++n) {
        for (var o = this._ribbons[n], s = o.length, e = 0, h = 0; h < s; ++h) {
          this._drawRibbonSection(o[h]) && e++;
        }

        s <= e && (this._ribbons[n] = null);
      }

      this._ribbons.length < this._options.ribbonCount && this.addRibbon(), requestAnimationFrame(this._onDraw);
    },
    _onResize: function _onResize(t) {
      var i = s(t);
      this._width = i.width, this._height = i.height, this._canvas && (this._canvas.width = this._width, this._canvas.height = this._height, this._context && (this._context.globalAlpha = this._options.colorAlpha));
    },
    _onScroll: function _onScroll(t) {
      var i = s(t);
      this._scroll = i.scrolly;
    }
  }, i;
}());
var cn = document.getElementById("ribbon_piao"),
    mb = cn.getAttribute("mobile");
"false" == mb && /Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent) || new Ribbons({
  colorSaturation: "60%",
  colorBrightness: "50%",
  colorAlpha: .5,
  colorCycleSpeed: 5,
  verticalPosition: "random",
  horizontalSpeed: 200,
  ribbonCount: 3,
  strokeSize: 0,
  parallaxAmount: -.2,
  animateSections: !0
});