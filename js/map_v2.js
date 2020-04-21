"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (window, document) {
  var jQuery,
      $,
      waitForFinalEvent = (a = {}, function (t, e, s) {
    a[s = s || "Don't call this twice without a uniqueId"] && clearTimeout(a[s]), a[s] = setTimeout(t, e);
  }),
      a;

  function loadScript(t, e) {
    var a = document.createElement("script");
    a.setAttribute("type", "text/javascript"), a.setAttribute("src", t), void 0 !== e && (a.readyState ? a.onreadystatechange = function () {
      "complete" !== this.readyState && "loaded" !== this.readyState || e();
    } : a.onload = e), (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(a);
  }

  var isH = !1;

  function main() {
    var script_el = $("#clustrmaps"),
        old_code = !1;

    if (0 === script_el.length && (script_el = $("#clustrmaps-widget"), old_code = !0), 1 === script_el.length) {
      var clusrtmaps_widget,
          insert_after = !0;
      0 !== script_el.parents("head").length && (insert_after = !1), insert_after ? counterCode() : $(function () {
        counterCode();
      });
    }

    function bgUrl(t) {
      var e = "//clustrmaps.com/generated_content/backs/bg",
          a = ["w", "co", "cl"],
          s = [];

      for (var i in a) {
        var n = a[i];
        n in t && s.push(n + "_" + t[n]);
      }

      return 0 < s.length && (e += "-" + s.join("-")), e + ".png";
    }

    function adjustElements(t) {
      var e = "co" in t ? t.co : "2d78ad",
          a = "ct" in t ? t.ct : "ffffff",
          s = t.w,
          i = s / 2.04;
      $(".clustrmaps-map-container").css("background-color", "#" + e), $("#clustrmaps-widget-v2").addClass("clustrmaps-map-control"), $(".clustrmaps-map").css("width", s + "px"), $(".clustrmaps-map").css("height", i + "px"), $(".clustrmaps-map").css("background-image", 'url("' + bgUrl(t) + '")');
      var n = 12,
          r = 12,
          o = 16;
      600 <= s ? (n = 14, r = 16, o = 22) : 400 <= s && (r = n = 14, o = 22), $(".clustrmaps-visitors, .clustrmaps-date").css("font-size", n + "px").css("line-height", "16px").css("color", "#" + a), $(".clustrmaps-bottom-text").css("font-size", r + "px").css("line-height", o + "px").css("color", "white"), $("<div class=clustrmaps-loading style='display: table; height: 100%; overflow: hidden; width:100%'><div style='font-size: 14px;font-family: \"Helvetica Neue\", Arial; color: white; text-shadow: 1px 1px 0 #01324f; display: table-cell; vertical-align: middle; text-align: center'>Loading data...</div></div>").appendTo($(".clustrmaps-map"));
    }

    function counterCode() {
      if (embed_clustrmaps(script_el, insert_after)) {
        var data = {},
            urlParams = {};
        if (old_code) data = {
          old_code: !0,
          d: _clustrmaps.url,
          u: _clustrmaps.user
        };else {
          for (var src = script_el.attr("src"), query = src.substring(src.indexOf("?")), match, pl = /\+/g, search = /([^&=]+)=?([^&]*)/g, decode = function decode(t) {
            return decodeURIComponent(t.replace(pl, " "));
          }, query = query.substring(1); match = search.exec(query);) {
            urlParams[decode(match[1])] = decode(match[2]);
          }

          data = urlParams;
        }

        if (!("w" in data) || "a" == data.w) {
          var pw = $("#clustrmaps-widget-v2").parent().width();
          pw = pw || 300, "a" != data.w && (pw < 180 && (pw = 180), 300 < pw && (pw = 300)), data.w = pw;
        }

        "t" in data || (data.t = "m"), "m" != data.t && $(".clustrmaps-date").hide(), "n" == data.t && $(".clustrmaps-visitors").hide(), "w" in data && $("#clustrmaps-widget-v2").css("width", data.w + "px"), adjustElements(data), isH && (data.hw = 1), $.ajax({
          dataType: "jsonp",
          cache: !1,
          data: data,
          url: "//clustrmaps.com/widget_call_home.js",
          success: function success(data) {
            eval(data);
          }
        });
      }
    }
  }

  function embed_clustrmaps(t, e) {
    if (0 === $("#clustrmaps-widget-v2").length) {
      var a = $('<a target="_top" href="https://clustrmaps.com/?utm_source=widget&utm_medium=js_widget&utm_campaign=widget_ctr" id="clustrmaps-widget-v2"><div class="clustrmaps-map-container"><div class="clstm clustrmaps-visitors">&nbsp;</div><div class="clstm clustrmaps-date">&nbsp;</div><div class="clustrmaps-map"></div><div id="clstminf" style="display: table-cell;position: absolute;bottom: 3px;right: 5px;color: white;font-size: 12px;"></div></div><div class=""></div></a>');
      return e ? a.insertAfter(t) : a.appendTo($("body")), $("#clustrmaps-widget-v2").after('<style type="text/css">a#clustrmaps-widget-v2, #clustrmaps-widget-v2 {    display: block;    font-size: 11px;    line-height: 13px;    margin: 0 auto;    padding: 0;    position: relative;    text-align: center;    color: transparent;    min-height: 139px;    text-decoration: none;    /* text-shadow: 1px 1px 0 #01324f; */    border: 0 none;}.clustrmaps-map {    position: relative;}#clustrmaps-widget-v2 > .clustrmaps-map-container {    background-position: 0 0;    background-repeat: no-repeat;    position: relative;}#clustrmaps-widget-v2 > .clustrmaps-map-container > .clustrmaps-date {    text-align: center;    width: 100%;    z-index: 10;}#clustrmaps-widget-v2 > .clustrmaps-map-container > .clustrmaps-logo {    position: absolute;    background-image: url("//cdn.clustrmaps.com/assets/clustrmaps/img/logo4-small.png");    bottom: 0px;    background-repeat: no-repeat;    background-position: center center;    z-index: 1;    width: 100px;    height: 31px;    left: 0px;}#clustrmaps-widget-v2 > .clustrmaps-map-container > .clustrmaps-connection {    background-position: center center;    background-repeat: no-repeat;    bottom: 0;    color: rgba(255, 255, 255, 0.5);    padding: 4px 4px;    position: absolute;    right: 0;    z-index: 1;    font-variant: small-caps;}#clustrmaps-widget-v2 > .clustrmaps-bottom-text {    letter-spacing: 0px;    background: #FFFFFF;    color: #000000;    text-shadow: none;}#clustrmaps-widget-v2 > .clustrmaps-cursor-click {    background-position: center center;    background-repeat: no-repeat;    display: block;    height: 29px;    position: absolute;    right: 0;    top: 56px;    width: 30px;}#clustrmaps-widget-v2 > .clustrmaps-map-container > .clustrmaps-connection.clustrmaps-failed {    color: rgba(255, 0, 0, 0.8);}/*#clustrmaps-widget-v2 > .clustrmaps-map-container {    background-image: url("//cdn.clustrmaps.com/images/map_v2_loading.png");}*/#clustrmaps-widget-v2 > .clustrmaps-cursor-click {    background-image: url("//cdn.clustrmaps.com/assets/clustrmaps/img/cursor_click.png");}#clustrmaps-widget-v2 > .clustrmaps-bottom-text.variation {    display: none;}/* CONTROL *//*#clustrmaps-widget-v2.clustrmaps-map-control > .clustrmaps-map-container {    background-image: url("//cdn.clustrmaps.com/images/map_v2-control.png");}*/#clustrmaps-widget-v2.clustrmaps-map-control > .clustrmaps-bottom-text {    -webkit-border-radius: 3px;    -moz-border-radius: 3px;    border-radius: 3px;    border: 1px solid #999;    background: #F24D58;    background: -moz-linear-gradient(top, #FF636D 50%, #DD2929 50%);    background: -webkit-gradient(linear, left top, left bottom, color-stop(50%,#f83737), color-stop(50%,#f83737));    background: linear-gradient(to bottom, #FF636D 50%,#DD2929 51%);    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="#FF636D", endColorstr="#f83737",GradientType=0 );    display: block;    margin: 2px auto 0;    padding: 3px 14px;    color: #FFFFFF;    text-shadow: 1px 1px 0px #5B0000;    font-weight: 600;}#clustrmaps-widget-v2.clustrmaps-map-control  > .clustrmaps-bottom-text:hover {    border: 1px solid #888;    background: #a3f5a2;    background: -moz-linear-gradient(top,  #ed8b92 50%, #D76666 50%);    background: -webkit-gradient(linear, left top, left bottom, color-stop(50%,#ed8b92), color-stop(50%,#D76666));    background: linear-gradient(to bottom, #ed8b92 50%,#D76666 51%);    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="#ed8b92", endColorstr="#D76666",GradientType=0 );}#clustrmaps-widget-v2.clustrmaps-map-control > .clustrmaps-bottom-text.variation {    display: none;}.clstm {    text-transform: capitalize !important;    position: relative;}#clustrmaps-widget-v2.clustrmaps-map-variation > .clustrmaps-bottom-text {    -webkit-border-radius: 3px;    -moz-border-radius: 3px;    border-radius: 3px;    border: 1px solid #999;    background: #F24D58;    background: -moz-linear-gradient(top, #FF636D 50%, #DD2929 50%);    background: -webkit-gradient(linear, left top, left bottom, color-stop(50%,#f83737), color-stop(50%,#f83737));    background: linear-gradient(to bottom, #FF636D 50%,#DD2929 51%);    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="#FF636D", endColorstr="#f83737",GradientType=0 );    display: block;    margin: 2px auto 0;    padding: 3px 14px;    color: #FFFFFF;    text-shadow: 1px 1px 0px #5B0000;    font-weight: 600;}#clustrmaps-widget-v2.clustrmaps-map-variation > .clustrmaps-bottom-text {    display: none;}#clustrmaps-widget-v2.clustrmaps-map-variation > .clustrmaps-bottom-text.variation {    display: block;}#clustrmaps-widget-v2.clustrmaps-map-variation  > .clustrmaps-bottom-text:hover {    border: 1px solid #888;    background: #a3f5a2;    background: -moz-linear-gradient(top,  #ed8b92 50%, #D76666 50%);    background: -webkit-gradient(linear, left top, left bottom, color-stop(50%,#ed8b92), color-stop(50%,#D76666));    background: linear-gradient(to bottom, #ed8b92 50%,#D76666 51%);    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="#ed8b92", endColorstr="#D76666",GradientType=0 );}.clustrmaps-visitors, .clustrmaps-date, .clustrmaps-bottom-text {    font-family: Arial, Helvetica, sans-serif;    text-align: center;    font-weight: normal;}.clustrmaps-bottom-text {    font-size: 12px;}</style>'), $("#clustrmaps-widget-v2").after('<style type="text/css">.jvectormap-container {    width: 100%;    height: 100%;    position: absolute;    overflow: hidden;}.jvectormap-tip {    position: absolute;    display: none;    border: solid 1px #CDCDCD;    border-radius: 3px;    background: #292929;    color: white;    font-family: Arial, Helvetica, sans-serif;    padding: 3px;    z-index: 9999;    font-size: 11px;    line-height: 13px;}.jvectormap-zoomin, .jvectormap-zoomout, .jvectormap-goback {    background: #ffffff none repeat scroll 0 0;    border: 1px solid #bebebe;    border-radius: 2px;    box-sizing: content-box;    color: #838383;    cursor: pointer;    font-weight: bold;    left: 10px;    padding: 3px;    position: absolute;    text-align: center;    z-index: 1;}.jvectormap-zoomin, .jvectormap-zoomout {    padding: 2px 10px;}.jvectormap-zoomin {    top: 10px;}.jvectormap-zoomout {    top: 37px;}.jvectormap-goback {    bottom: 10px;    z-index: 1000;    padding: 6px;}.jvectormap-spinner {    position: absolute;    left: 0;    top: 0;    right: 0;    bottom: 0;    background: center no-repeat url(data:image/gif;base64,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);}.jvectormap-legend-title {    font-weight: bold;    font-size: 14px;    text-align: center;}.jvectormap-legend-cnt {    position: absolute;}.jvectormap-legend-cnt-h {    bottom: 0;    right: 0;}.jvectormap-legend-cnt-v {    top: 0;    right: 0;}.jvectormap-legend {    background: black;    color: white;    border-radius: 3px;}.jvectormap-legend-cnt-h .jvectormap-legend {    float: left;    margin: 0 10px 10px 0;    padding: 3px 3px 1px 3px;}.jvectormap-legend-cnt-h .jvectormap-legend .jvectormap-legend-tick {    float: left;}.jvectormap-legend-cnt-v .jvectormap-legend {    margin: 10px 10px 0 0;    padding: 3px;}.jvectormap-legend-cnt-h .jvectormap-legend-tick {    width: 40px;}.jvectormap-legend-cnt-h .jvectormap-legend-tick-sample {    height: 15px;}.jvectormap-legend-cnt-v .jvectormap-legend-tick-sample {    height: 20px;    width: 20px;    display: inline-block;    vertical-align: middle;}.jvectormap-legend-tick-text {    font-size: 12px;}.jvectormap-legend-cnt-h .jvectormap-legend-tick-text {    text-align: center;}.jvectormap-legend-cnt-v .jvectormap-legend-tick-text {    display: inline-block;    vertical-align: middle;    line-height: 20px;    padding-left: 3px;}</style>'), 1;
    }
  }

  function loadLibs() {
    var t, a;
    a = {
      set: {
        colors: 1,
        values: 1,
        backgroundColor: 1,
        scaleColors: 1,
        normalizeFunction: 1,
        focus: 1
      },
      get: {
        selectedRegions: 1,
        selectedMarkers: 1,
        mapObject: 1,
        regionName: 1
      }
    }, jQuery.fn.vectorMap = function (t) {
      var e = this.children(".jvectormap-container").data("mapObject");
      if ("addMap" === t) w.Map.maps[arguments[1]] = arguments[2];else {
        if (("set" === t || "get" === t) && a[t][arguments[1]]) return e[t + (arguments[1].charAt(0).toUpperCase() + arguments[1].substr(1))].apply(e, Array.prototype.slice.call(arguments, 2));
        (t = t || {}).container = this, e = new w.Map(t);
      }
      return this;
    }, t = function t(h) {
      function e(t) {
        var e = t || window.event,
            a = u.call(arguments, 1),
            s = 0,
            i = 0,
            n = 0,
            r = 0;

        if ((t = h.event.fix(e)).type = "mousewheel", "detail" in e && (n = -1 * e.detail), "wheelDelta" in e && (n = e.wheelDelta), "wheelDeltaY" in e && (n = e.wheelDeltaY), "wheelDeltaX" in e && (i = -1 * e.wheelDeltaX), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (i = -1 * n, n = 0), s = 0 === n ? i : n, "deltaY" in e && (s = n = -1 * e.deltaY), "deltaX" in e && (i = e.deltaX, 0 === n && (s = -1 * i)), 0 !== n || 0 !== i) {
          if (1 === e.deltaMode) {
            var o = h.data(this, "mousewheel-line-height");
            s *= o, n *= o, i *= o;
          } else if (2 === e.deltaMode) {
            var l = h.data(this, "mousewheel-page-height");
            s *= l, n *= l, i *= l;
          }

          return r = Math.max(Math.abs(n), Math.abs(i)), (!m || r < m) && p(e, m = r) && (m /= 40), p(e, r) && (s /= 40, i /= 40, n /= 40), s = Math[1 <= s ? "floor" : "ceil"](s / m), i = Math[1 <= i ? "floor" : "ceil"](i / m), n = Math[1 <= n ? "floor" : "ceil"](n / m), t.deltaX = i, t.deltaY = n, t.deltaFactor = m, t.deltaMode = 0, a.unshift(t, s, i, n), d && clearTimeout(d), d = setTimeout(c, 200), (h.event.dispatch || h.event.handle).apply(this, a);
        }
      }

      function c() {
        m = null;
      }

      function p(t, e) {
        return i.settings.adjustOldDeltas && "mousewheel" === t.type && e % 120 == 0;
      }

      var d,
          m,
          t = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
          a = "onwheel" in document || 9 <= document.documentMode ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
          u = Array.prototype.slice;
      if (h.event.fixHooks) for (var s = t.length; s;) {
        h.event.fixHooks[t[--s]] = h.event.mouseHooks;
      }
      var i = h.event.special.mousewheel = {
        version: "3.1.9",
        setup: function setup() {
          if (this.addEventListener) for (var t = a.length; t;) {
            this.addEventListener(a[--t], e, !1);
          } else this.onmousewheel = e;
          h.data(this, "mousewheel-line-height", i.getLineHeight(this)), h.data(this, "mousewheel-page-height", i.getPageHeight(this));
        },
        teardown: function teardown() {
          if (this.removeEventListener) for (var t = a.length; t;) {
            this.removeEventListener(a[--t], e, !1);
          } else this.onmousewheel = null;
        },
        getLineHeight: function getLineHeight(t) {
          return parseInt(h(t)["offsetParent" in h.fn ? "offsetParent" : "parent"]().css("fontSize"), 10);
        },
        getPageHeight: function getPageHeight(t) {
          return h(t).height();
        },
        settings: {
          adjustOldDeltas: !0
        }
      };
      h.fn.extend({
        mousewheel: function mousewheel(t) {
          return t ? this.bind("mousewheel", t) : this.trigger("mousewheel");
        },
        unmousewheel: function unmousewheel(t) {
          return this.unbind("mousewheel", t);
        }
      });
    }, "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = t : t(jQuery);
    var u,
        g,
        f,
        e,
        v,
        A,
        b,
        y,
        s,
        w = {
      inherits: function inherits(t, e) {
        function a() {}

        a.prototype = e.prototype, t.prototype = new a(), (t.prototype.constructor = t).parentClass = e;
      },
      mixin: function mixin(t, e) {
        var a;

        for (a in e.prototype) {
          e.prototype.hasOwnProperty(a) && (t.prototype[a] = e.prototype[a]);
        }
      },
      min: function min(t) {
        var e,
            a = Number.MAX_VALUE;
        if (t instanceof Array) for (e = 0; e < t.length; e++) {
          t[e] < a && (a = t[e]);
        } else for (e in t) {
          t[e] < a && (a = t[e]);
        }
        return a;
      },
      max: function max(t) {
        var e,
            a = Number.MIN_VALUE;
        if (t instanceof Array) for (e = 0; e < t.length; e++) {
          t[e] > a && (a = t[e]);
        } else for (e in t) {
          t[e] > a && (a = t[e]);
        }
        return a;
      },
      keys: function keys(t) {
        var e,
            a = [];

        for (e in t) {
          a.push(e);
        }

        return a;
      },
      values: function values(t) {
        var e,
            a,
            s = [];

        for (a = 0; a < arguments.length; a++) {
          for (e in t = arguments[a]) {
            s.push(t[e]);
          }
        }

        return s;
      },
      whenImageLoaded: function whenImageLoaded(t) {
        var e = new w.$.Deferred(),
            a = w.$("<img/>");
        return a.error(function () {
          e.reject();
        }).load(function () {
          e.resolve(a);
        }), a.attr("src", t), e;
      },
      isImageUrl: function isImageUrl(t) {
        return /\.\w{3,4}$/.test(t);
      }
    };

    function i() {
      var t,
          e,
          a,
          s,
          i = u(),
          n = 0;
      if (u.each(v, function (t, e) {
        var a = e.data.selector,
            s = e.$element;
        i = i.add(a ? s.find(a) : s);
      }), t = i.length) for (g = g || ((s = {
        height: b.innerHeight,
        width: b.innerWidth
      }).height || !(e = A.compatMode) && u.support.boxModel || (s = {
        height: (a = "CSS1Compat" === e ? y : A.body).clientHeight,
        width: a.clientWidth
      }), s), f = f || {
        top: b.pageYOffset || y.scrollTop || A.body.scrollTop,
        left: b.pageXOffset || y.scrollLeft || A.body.scrollLeft
      }; n < t; n++) {
        if (u.contains(y, i[n])) {
          var r,
              o,
              l,
              h = u(i[n]),
              c = h.height(),
              p = h.width(),
              d = h.offset(),
              m = h.data("inview");
          if (!f || !g) return;
          d.top + c > f.top && d.top < f.top + g.height && d.left + p > f.left && d.left < f.left + g.width ? (l = (r = f.left > d.left ? "right" : f.left + g.width < d.left + p ? "left" : "both") + "-" + (o = f.top > d.top ? "bottom" : f.top + g.height < d.top + c ? "top" : "both"), m && m === l || h.data("inview", l).trigger("inview", [!0, r, o])) : m && h.data("inview", !1).trigger("inview", [!1]);
        }
      }
    }

    w.$ = jQuery, Array.prototype.indexOf || (Array.prototype.indexOf = function (t, e) {
      var a;
      if (null == this) throw new TypeError('"this" is null or not defined');
      var s = Object(this),
          i = s.length >>> 0;
      if (0 == i) return -1;
      var n = +e || 0;
      if (Math.abs(n) === 1 / 0 && (n = 0), i <= n) return -1;

      for (a = Math.max(0 <= n ? n : i - Math.abs(n), 0); a < i;) {
        if (a in s && s[a] === t) return a;
        a++;
      }

      return -1;
    }), w.AbstractElement = function (t, e) {
      this.node = this.createElement(t), this.name = t, this.properties = {}, e && this.set(e);
    }, w.AbstractElement.prototype.set = function (t, e) {
      var a;
      if ("object" == _typeof(t)) for (a in t) {
        this.properties[a] = t[a], this.applyAttr(a, t[a]);
      } else this.properties[t] = e, this.applyAttr(t, e);
    }, w.AbstractElement.prototype.get = function (t) {
      return this.properties[t];
    }, w.AbstractElement.prototype.applyAttr = function (t, e) {
      this.node.setAttribute(t, e);
    }, w.AbstractElement.prototype.remove = function () {
      w.$(this.node).remove();
    }, w.AbstractCanvasElement = function (t, e, a) {
      this.container = t, this.setSize(e, a), this.rootElement = new w[this.classPrefix + "GroupElement"](), this.node.appendChild(this.rootElement.node), this.container.appendChild(this.node);
    }, w.AbstractCanvasElement.prototype.add = function (t, e) {
      (e = e || this.rootElement).add(t), t.canvas = this;
    }, w.AbstractCanvasElement.prototype.addPath = function (t, e, a) {
      var s = new w[this.classPrefix + "PathElement"](t, e);
      return this.add(s, a), s;
    }, w.AbstractCanvasElement.prototype.addCircle = function (t, e, a) {
      var s = new w[this.classPrefix + "CircleElement"](t, e);
      return this.add(s, a), s;
    }, w.AbstractCanvasElement.prototype.addImage = function (t, e, a) {
      var s = new w[this.classPrefix + "ImageElement"](t, e);
      return this.add(s, a), s;
    }, w.AbstractCanvasElement.prototype.addText = function (t, e, a) {
      var s = new w[this.classPrefix + "TextElement"](t, e);
      return this.add(s, a), s;
    }, w.AbstractCanvasElement.prototype.addGroup = function (t) {
      var e = new w[this.classPrefix + "GroupElement"]();
      return t ? t.node.appendChild(e.node) : this.node.appendChild(e.node), e.canvas = this, e;
    }, w.AbstractShapeElement = function (t, e, a) {
      this.style = a || {}, this.style.current = this.style.current || {}, this.isHovered = !1, this.isSelected = !1, this.updateStyle();
    }, w.AbstractShapeElement.prototype.setStyle = function (t, e) {
      var a = {};
      "object" == _typeof(t) ? a = t : a[t] = e, w.$.extend(this.style.current, a), this.updateStyle();
    }, w.AbstractShapeElement.prototype.updateStyle = function () {
      var t = {};
      w.AbstractShapeElement.mergeStyles(t, this.style.initial), w.AbstractShapeElement.mergeStyles(t, this.style.current), this.isHovered && w.AbstractShapeElement.mergeStyles(t, this.style.hover), this.isSelected && (w.AbstractShapeElement.mergeStyles(t, this.style.selected), this.isHovered && w.AbstractShapeElement.mergeStyles(t, this.style.selectedHover)), this.set(t);
    }, w.AbstractShapeElement.mergeStyles = function (t, e) {
      var a;

      for (a in e = e || {}) {
        null === e[a] ? delete t[a] : t[a] = e[a];
      }
    }, w.SVGElement = function (t, e) {
      w.SVGElement.parentClass.apply(this, arguments);
    }, w.inherits(w.SVGElement, w.AbstractElement), w.SVGElement.svgns = "http://www.w3.org/2000/svg", w.SVGElement.prototype.createElement = function (t) {
      return document.createElementNS(w.SVGElement.svgns, t);
    }, w.SVGElement.prototype.addClass = function (t) {
      this.node.setAttribute("class", t);
    }, w.SVGElement.prototype.getElementCtr = function (t) {
      return w["SVG" + t];
    }, w.SVGElement.prototype.getBBox = function () {
      return this.node.getBBox();
    }, w.SVGGroupElement = function () {
      w.SVGGroupElement.parentClass.call(this, "g");
    }, w.inherits(w.SVGGroupElement, w.SVGElement), w.SVGGroupElement.prototype.add = function (t) {
      this.node.appendChild(t.node);
    }, w.SVGCanvasElement = function (t, e, a) {
      this.classPrefix = "SVG", w.SVGCanvasElement.parentClass.call(this, "svg"), this.defsElement = new w.SVGElement("defs"), this.node.appendChild(this.defsElement.node), w.AbstractCanvasElement.apply(this, arguments);
    }, w.inherits(w.SVGCanvasElement, w.SVGElement), w.mixin(w.SVGCanvasElement, w.AbstractCanvasElement), w.SVGCanvasElement.prototype.setSize = function (t, e) {
      this.width = t, this.height = e, this.node.setAttribute("width", t), this.node.setAttribute("height", e);
    }, w.SVGCanvasElement.prototype.applyTransformParams = function (t, e, a) {
      this.scale = t, this.transX = e, this.transY = a, this.rootElement.node.setAttribute("transform", "scale(" + t + ") translate(" + e + ", " + a + ")");
    }, w.SVGShapeElement = function (t, e, a) {
      w.SVGShapeElement.parentClass.call(this, t, e), w.AbstractShapeElement.apply(this, arguments);
    }, w.inherits(w.SVGShapeElement, w.SVGElement), w.mixin(w.SVGShapeElement, w.AbstractShapeElement), w.SVGShapeElement.prototype.applyAttr = function (t, e) {
      var a,
          s,
          i = this;
      "fill" === t && w.isImageUrl(e) ? w.SVGShapeElement.images[e] ? this.applyAttr("fill", "url(#image" + w.SVGShapeElement.images[e] + ")") : w.whenImageLoaded(e).then(function (t) {
        (s = new w.SVGElement("image")).node.setAttributeNS("http://www.w3.org/1999/xlink", "href", e), s.applyAttr("x", "0"), s.applyAttr("y", "0"), s.applyAttr("width", t[0].width), s.applyAttr("height", t[0].height), (a = new w.SVGElement("pattern")).applyAttr("id", "image" + w.SVGShapeElement.imageCounter), a.applyAttr("x", 0), a.applyAttr("y", 0), a.applyAttr("width", t[0].width / 2), a.applyAttr("height", t[0].height / 2), a.applyAttr("viewBox", "0 0 " + t[0].width + " " + t[0].height), a.applyAttr("patternUnits", "userSpaceOnUse"), a.node.appendChild(s.node), i.canvas.defsElement.node.appendChild(a.node), w.SVGShapeElement.images[e] = w.SVGShapeElement.imageCounter++, i.applyAttr("fill", "url(#image" + w.SVGShapeElement.images[e] + ")");
      }) : w.SVGShapeElement.parentClass.prototype.applyAttr.apply(this, arguments);
    }, w.SVGShapeElement.imageCounter = 1, w.SVGShapeElement.images = {}, w.SVGPathElement = function (t, e) {
      w.SVGPathElement.parentClass.call(this, "path", t, e), this.node.setAttribute("fill-rule", "evenodd");
    }, w.inherits(w.SVGPathElement, w.SVGShapeElement), w.SVGCircleElement = function (t, e) {
      w.SVGCircleElement.parentClass.call(this, "circle", t, e);
    }, w.inherits(w.SVGCircleElement, w.SVGShapeElement), w.SVGImageElement = function (t, e) {
      w.SVGImageElement.parentClass.call(this, "image", t, e);
    }, w.inherits(w.SVGImageElement, w.SVGShapeElement), w.SVGImageElement.prototype.applyAttr = function (t, e) {
      var a = this;
      "image" == t ? w.whenImageLoaded(e).then(function (t) {
        a.node.setAttributeNS("http://www.w3.org/1999/xlink", "href", e), a.width = t[0].width, a.height = t[0].height, a.applyAttr("width", a.width), a.applyAttr("height", a.height), a.applyAttr("x", a.cx - a.width / 2), a.applyAttr("y", a.cy - a.height / 2), w.$(a.node).trigger("imageloaded", [t]);
      }) : "cx" == t ? (this.cx = e, this.width && this.applyAttr("x", e - this.width / 2)) : "cy" == t ? (this.cy = e, this.height && this.applyAttr("y", e - this.height / 2)) : w.SVGImageElement.parentClass.prototype.applyAttr.apply(this, arguments);
    }, w.SVGTextElement = function (t, e) {
      w.SVGTextElement.parentClass.call(this, "text", t, e);
    }, w.inherits(w.SVGTextElement, w.SVGShapeElement), w.SVGTextElement.prototype.applyAttr = function (t, e) {
      "text" === t ? this.node.textContent = e : w.SVGTextElement.parentClass.prototype.applyAttr.apply(this, arguments);
    }, w.VMLElement = function (t, e) {
      w.VMLElement.VMLInitialized || w.VMLElement.initializeVML(), w.VMLElement.parentClass.apply(this, arguments);
    }, w.inherits(w.VMLElement, w.AbstractElement), w.VMLElement.VMLInitialized = !1, w.VMLElement.initializeVML = function () {
      try {
        document.namespaces.rvml || document.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"), w.VMLElement.prototype.createElement = function (t) {
          return document.createElement("<rvml:" + t + ' class="rvml">');
        };
      } catch (t) {
        w.VMLElement.prototype.createElement = function (t) {
          return document.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">');
        };
      }

      document.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)"), w.VMLElement.VMLInitialized = !0;
    }, w.VMLElement.prototype.getElementCtr = function (t) {
      return w["VML" + t];
    }, w.VMLElement.prototype.addClass = function (t) {
      w.$(this.node).addClass(t);
    }, w.VMLElement.prototype.applyAttr = function (t, e) {
      this.node[t] = e;
    }, w.VMLElement.prototype.getBBox = function () {
      var t = w.$(this.node);
      return {
        x: t.position().left / this.canvas.scale,
        y: t.position().top / this.canvas.scale,
        width: t.width() / this.canvas.scale,
        height: t.height() / this.canvas.scale
      };
    }, w.VMLGroupElement = function () {
      w.VMLGroupElement.parentClass.call(this, "group"), this.node.style.left = "0px", this.node.style.top = "0px", this.node.coordorigin = "0 0";
    }, w.inherits(w.VMLGroupElement, w.VMLElement), w.VMLGroupElement.prototype.add = function (t) {
      this.node.appendChild(t.node);
    }, w.VMLCanvasElement = function (t, e, a) {
      this.classPrefix = "VML", w.VMLCanvasElement.parentClass.call(this, "group"), w.AbstractCanvasElement.apply(this, arguments), this.node.style.position = "absolute";
    }, w.inherits(w.VMLCanvasElement, w.VMLElement), w.mixin(w.VMLCanvasElement, w.AbstractCanvasElement), w.VMLCanvasElement.prototype.setSize = function (t, e) {
      var a, s, i, n;

      if (this.width = t, this.height = e, this.node.style.width = t + "px", this.node.style.height = e + "px", this.node.coordsize = t + " " + e, this.node.coordorigin = "0 0", this.rootElement) {
        for (i = 0, n = (a = this.rootElement.node.getElementsByTagName("shape")).length; i < n; i++) {
          a[i].coordsize = t + " " + e, a[i].style.width = t + "px", a[i].style.height = e + "px";
        }

        for (i = 0, n = (s = this.node.getElementsByTagName("group")).length; i < n; i++) {
          s[i].coordsize = t + " " + e, s[i].style.width = t + "px", s[i].style.height = e + "px";
        }
      }
    }, w.VMLCanvasElement.prototype.applyTransformParams = function (t, e, a) {
      this.scale = t, this.transX = e, this.transY = a, this.rootElement.node.coordorigin = this.width - e - this.width / 100 + "," + (this.height - a - this.height / 100), this.rootElement.node.coordsize = this.width / t + "," + this.height / t;
    }, w.VMLShapeElement = function (t, e) {
      w.VMLShapeElement.parentClass.call(this, t, e), this.fillElement = new w.VMLElement("fill"), this.strokeElement = new w.VMLElement("stroke"), this.node.appendChild(this.fillElement.node), this.node.appendChild(this.strokeElement.node), this.node.stroked = !1, w.AbstractShapeElement.apply(this, arguments);
    }, w.inherits(w.VMLShapeElement, w.VMLElement), w.mixin(w.VMLShapeElement, w.AbstractShapeElement), w.VMLShapeElement.prototype.applyAttr = function (t, e) {
      switch (t) {
        case "fill":
          this.node.fillcolor = e;
          break;

        case "fill-opacity":
          this.fillElement.node.opacity = Math.round(100 * e) + "%";
          break;

        case "stroke":
          this.node.stroked = "none" !== e, this.node.strokecolor = e;
          break;

        case "stroke-opacity":
          this.strokeElement.node.opacity = Math.round(100 * e) + "%";
          break;

        case "stroke-width":
          0 === parseInt(e, 10) ? this.node.stroked = !1 : this.node.stroked = !0, this.node.strokeweight = e;
          break;

        case "d":
          this.node.path = w.VMLPathElement.pathSvgToVml(e);
          break;

        default:
          w.VMLShapeElement.parentClass.prototype.applyAttr.apply(this, arguments);
      }
    }, w.VMLPathElement = function (t, e) {
      var a = new w.VMLElement("skew");
      w.VMLPathElement.parentClass.call(this, "shape", t, e), this.node.coordorigin = "0 0", a.node.on = !0, a.node.matrix = "0.01,0,0,0.01,0,0", a.node.offset = "0,0", this.node.appendChild(a.node);
    }, w.inherits(w.VMLPathElement, w.VMLShapeElement), w.VMLPathElement.prototype.applyAttr = function (t, e) {
      "d" === t ? this.node.path = w.VMLPathElement.pathSvgToVml(e) : w.VMLShapeElement.prototype.applyAttr.call(this, t, e);
    }, w.VMLPathElement.pathSvgToVml = function (t) {
      var r,
          o,
          l = 0,
          h = 0;
      return (t = t.replace(/(-?\d+)e(-?\d+)/g, "0")).replace(/([MmLlHhVvCcSs])\s*((?:-?\d*(?:\.\d+)?\s*,?\s*)+)/g, function (t, e, a, s) {
        (a = a.replace(/(\d)-/g, "$1,-").replace(/^\s+/g, "").replace(/\s+$/g, "").replace(/\s+/g, ",").split(","))[0] || a.shift();

        for (var i = 0, n = a.length; i < n; i++) {
          a[i] = Math.round(100 * a[i]);
        }

        switch (e) {
          case "m":
            return l += a[0], h += a[1], "t" + a.join(",");

          case "M":
            return l = a[0], h = a[1], "m" + a.join(",");

          case "l":
            return l += a[0], h += a[1], "r" + a.join(",");

          case "L":
            return l = a[0], h = a[1], "l" + a.join(",");

          case "h":
            return l += a[0], "r" + a[0] + ",0";

          case "H":
            return "l" + (l = a[0]) + "," + h;

          case "v":
            return h += a[0], "r0," + a[0];

          case "V":
            return h = a[0], "l" + l + "," + h;

          case "c":
            return r = l + a[a.length - 4], o = h + a[a.length - 3], l += a[a.length - 2], h += a[a.length - 1], "v" + a.join(",");

          case "C":
            return r = a[a.length - 4], o = a[a.length - 3], l = a[a.length - 2], h = a[a.length - 1], "c" + a.join(",");

          case "s":
            return a.unshift(h - o), a.unshift(l - r), r = l + a[a.length - 4], o = h + a[a.length - 3], l += a[a.length - 2], h += a[a.length - 1], "v" + a.join(",");

          case "S":
            return a.unshift(h + h - o), a.unshift(l + l - r), r = a[a.length - 4], o = a[a.length - 3], l = a[a.length - 2], h = a[a.length - 1], "c" + a.join(",");
        }

        return "";
      }).replace(/z/g, "e");
    }, w.VMLCircleElement = function (t, e) {
      w.VMLCircleElement.parentClass.call(this, "oval", t, e);
    }, w.inherits(w.VMLCircleElement, w.VMLShapeElement), w.VMLCircleElement.prototype.applyAttr = function (t, e) {
      switch (t) {
        case "r":
          this.node.style.width = 2 * e + "px", this.node.style.height = 2 * e + "px", this.applyAttr("cx", this.get("cx") || 0), this.applyAttr("cy", this.get("cy") || 0);
          break;

        case "cx":
          if (!e) return;
          this.node.style.left = e - (this.get("r") || 0) + "px";
          break;

        case "cy":
          if (!e) return;
          this.node.style.top = e - (this.get("r") || 0) + "px";
          break;

        default:
          w.VMLCircleElement.parentClass.prototype.applyAttr.call(this, t, e);
      }
    }, w.VectorCanvas = function (t, e, a) {
      return this.mode = window.SVGAngle ? "svg" : "vml", "svg" == this.mode ? this.impl = new w.SVGCanvasElement(t, e, a) : this.impl = new w.VMLCanvasElement(t, e, a), this.impl.mode = this.mode, this.impl;
    }, w.SimpleScale = function (t) {
      this.scale = t;
    }, w.SimpleScale.prototype.getValue = function (t) {
      return t;
    }, w.OrdinalScale = function (t) {
      this.scale = t;
    }, w.OrdinalScale.prototype.getValue = function (t) {
      return this.scale[t];
    }, w.OrdinalScale.prototype.getTicks = function () {
      var t,
          e = [];

      for (t in this.scale) {
        e.push({
          label: t,
          value: this.scale[t]
        });
      }

      return e;
    }, w.NumericScale = function (t, e, a, s) {
      this.scale = [], e = e || "linear", t && this.setScale(t), e && this.setNormalizeFunction(e), void 0 !== a && this.setMin(a), void 0 !== s && this.setMax(s);
    }, w.NumericScale.prototype = {
      setMin: function setMin(t) {
        this.clearMinValue = t, "function" == typeof this.normalize ? this.minValue = this.normalize(t) : this.minValue = t;
      },
      setMax: function setMax(t) {
        this.clearMaxValue = t, "function" == typeof this.normalize ? this.maxValue = this.normalize(t) : this.maxValue = t;
      },
      setScale: function setScale(t) {
        var e;

        for (this.scale = [], e = 0; e < t.length; e++) {
          this.scale[e] = [t[e]];
        }
      },
      setNormalizeFunction: function setNormalizeFunction(t) {
        "polynomial" === t ? this.normalize = function (t) {
          return Math.pow(t, .2);
        } : "linear" === t ? delete this.normalize : this.normalize = t, this.setMin(this.clearMinValue), this.setMax(this.clearMaxValue);
      },
      getValue: function getValue(t) {
        var e,
            a,
            s = [],
            i = 0,
            n = 0;

        for ("function" == typeof this.normalize && (t = this.normalize(t)), n = 0; n < this.scale.length - 1; n++) {
          e = this.vectorLength(this.vectorSubtract(this.scale[n + 1], this.scale[n])), s.push(e), i += e;
        }

        for (a = (this.maxValue - this.minValue) / i, n = 0; n < s.length; n++) {
          s[n] *= a;
        }

        for (n = 0, t -= this.minValue; 0 <= t - s[n];) {
          t -= s[n], n++;
        }

        return this.vectorToNum(n == this.scale.length - 1 ? this.scale[n] : this.vectorAdd(this.scale[n], this.vectorMult(this.vectorSubtract(this.scale[n + 1], this.scale[n]), t / s[n])));
      },
      vectorToNum: function vectorToNum(t) {
        var e,
            a = 0;

        for (e = 0; e < t.length; e++) {
          a += Math.round(t[e]) * Math.pow(256, t.length - e - 1);
        }

        return a;
      },
      vectorSubtract: function vectorSubtract(t, e) {
        var a,
            s = [];

        for (a = 0; a < t.length; a++) {
          s[a] = t[a] - e[a];
        }

        return s;
      },
      vectorAdd: function vectorAdd(t, e) {
        var a,
            s = [];

        for (a = 0; a < t.length; a++) {
          s[a] = t[a] + e[a];
        }

        return s;
      },
      vectorMult: function vectorMult(t, e) {
        var a,
            s = [];

        for (a = 0; a < t.length; a++) {
          s[a] = t[a] * e;
        }

        return s;
      },
      vectorLength: function vectorLength(t) {
        var e,
            a = 0;

        for (e = 0; e < t.length; e++) {
          a += t[e] * t[e];
        }

        return Math.sqrt(a);
      },
      getTicks: function getTicks() {
        var t,
            e,
            a = [this.clearMinValue, this.clearMaxValue],
            s = a[1] - a[0],
            i = Math.pow(10, Math.floor(Math.log(s / 5) / Math.LN10)),
            n = 5 / s * i,
            r = [];

        for (n <= .15 ? i *= 10 : n <= .35 ? i *= 5 : n <= .75 && (i *= 2), a[0] = Math.floor(a[0] / i) * i, a[1] = Math.ceil(a[1] / i) * i, t = a[0]; t <= a[1];) {
          e = t == a[0] ? this.clearMinValue : t == a[1] ? this.clearMaxValue : t, r.push({
            label: t,
            value: this.getValue(e)
          }), t += i;
        }

        return r;
      }
    }, w.ColorScale = function (t, e, a, s) {
      w.ColorScale.parentClass.apply(this, arguments);
    }, w.inherits(w.ColorScale, w.NumericScale), w.ColorScale.prototype.setScale = function (t) {
      var e;

      for (e = 0; e < t.length; e++) {
        this.scale[e] = w.ColorScale.rgbToArray(t[e]);
      }
    }, w.ColorScale.prototype.getValue = function (t) {
      return w.ColorScale.numToRgb(w.ColorScale.parentClass.prototype.getValue.call(this, t));
    }, w.ColorScale.arrayToRgb = function (t) {
      var e,
          a,
          s = "#";

      for (a = 0; a < t.length; a++) {
        s += 1 == (e = t[a].toString(16)).length ? "0" + e : e;
      }

      return s;
    }, w.ColorScale.numToRgb = function (t) {
      for (t = t.toString(16); t.length < 6;) {
        t = "0" + t;
      }

      return "#" + t;
    }, w.ColorScale.rgbToArray = function (t) {
      return t = t.substr(1), [parseInt(t.substr(0, 2), 16), parseInt(t.substr(2, 2), 16), parseInt(t.substr(4, 2), 16)];
    }, w.Legend = function (t) {
      this.params = t || {}, this.map = this.params.map, this.series = this.params.series, this.body = w.$("<div/>"), this.body.addClass("jvectormap-legend"), this.params.cssClass && this.body.addClass(this.params.cssClass), t.vertical ? this.map.legendCntVertical.append(this.body) : this.map.legendCntHorizontal.append(this.body), this.render();
    }, w.Legend.prototype.render = function () {
      var t,
          e,
          a,
          s,
          i = this.series.scale.getTicks(),
          n = w.$("<div/>").addClass("jvectormap-legend-inner");

      for (this.body.html(""), this.params.title && this.body.append(w.$("<div/>").addClass("jvectormap-legend-title").html(this.params.title)), this.body.append(n), t = 0; t < i.length; t++) {
        switch (e = w.$("<div/>").addClass("jvectormap-legend-tick"), a = w.$("<div/>").addClass("jvectormap-legend-tick-sample"), this.series.params.attribute) {
          case "fill":
            w.isImageUrl(i[t].value) ? a.css("background", "url(" + i[t].value + ")") : a.css("background", i[t].value);
            break;

          case "stroke":
            a.css("background", i[t].value);
            break;

          case "image":
            a.css("background", "url(" + i[t].value + ") no-repeat center center");
            break;

          case "r":
            w.$("<div/>").css({
              "border-radius": i[t].value,
              border: this.map.params.markerStyle.initial["stroke-width"] + "px " + this.map.params.markerStyle.initial.stroke + " solid",
              width: 2 * i[t].value + "px",
              height: 2 * i[t].value + "px",
              background: this.map.params.markerStyle.initial.fill
            }).appendTo(a);
        }

        e.append(a), s = i[t].label, this.params.labelRender && (s = this.params.labelRender(s)), e.append(w.$("<div>" + s + " </div>").addClass("jvectormap-legend-tick-text")), n.append(e);
      }

      n.append(w.$("<div/>").css("clear", "both"));
    }, w.DataSeries = function (t, e, a) {
      var s;
      (t = t || {}).attribute = t.attribute || "fill", this.elements = e, this.params = t, this.map = a, t.attributes && this.setAttributes(t.attributes), w.$.isArray(t.scale) ? (s = "fill" === t.attribute || "stroke" === t.attribute ? w.ColorScale : w.NumericScale, this.scale = new s(t.scale, t.normalizeFunction, t.min, t.max)) : t.scale ? this.scale = new w.OrdinalScale(t.scale) : this.scale = new w.SimpleScale(t.scale), this.values = t.values || {}, this.setValues(this.values), this.params.legend && (this.legend = new w.Legend($.extend({
        map: this.map,
        series: this
      }, this.params.legend)));
    }, w.DataSeries.prototype = {
      setAttributes: function setAttributes(t, e) {
        var a,
            s = t;
        if ("string" == typeof t) this.elements[t] && this.elements[t].setStyle(this.params.attribute, e);else for (a in s) {
          this.elements[a] && this.elements[a].element.setStyle(this.params.attribute, s[a]);
        }
      },
      setValues: function setValues(t) {
        var e,
            a,
            s = -Number.MAX_VALUE,
            i = Number.MAX_VALUE,
            n = {};
        if (this.scale instanceof w.OrdinalScale || this.scale instanceof w.SimpleScale) for (a in t) {
          t[a] ? n[a] = this.scale.getValue(t[a]) : null != this.elements[a] && (n[a] = this.elements[a].element.style.initial[this.params.attribute]);
        } else {
          if (void 0 === this.params.min || void 0 === this.params.max) for (a in t) {
            s < (e = parseFloat(t[a])) && (s = e), e < i && (i = e);
          }

          for (a in void 0 === this.params.min ? (this.scale.setMin(i), this.params.min = i) : this.scale.setMin(this.params.min), void 0 === this.params.max ? (this.scale.setMax(s), this.params.max = s) : this.scale.setMax(this.params.max), t) {
            "indexOf" != a && (e = parseFloat(t[a]), isNaN(e) ? null != this.elements[a] && (n[a] = this.elements[a].element.style.initial[this.params.attribute]) : n[a] = this.scale.getValue(e));
          }
        }
        this.setAttributes(n), w.$.extend(this.values, t);
      },
      clear: function clear() {
        var t,
            e = {};

        for (t in this.values) {
          this.elements[t] && (e[t] = this.elements[t].element.shape.style.initial[this.params.attribute]);
        }

        this.setAttributes(e), this.values = {};
      },
      setScale: function setScale(t) {
        this.scale.setScale(t), this.values && this.setValues(this.values);
      },
      setNormalizeFunction: function setNormalizeFunction(t) {
        this.scale.setNormalizeFunction(t), this.values && this.setValues(this.values);
      }
    }, w.Proj = {
      degRad: 180 / Math.PI,
      radDeg: Math.PI / 180,
      radius: 6381372,
      sgn: function sgn(t) {
        return 0 < t ? 1 : t < 0 ? -1 : t;
      },
      mill: function mill(t, e, a) {
        return {
          x: this.radius * (e - a) * this.radDeg,
          y: -this.radius * Math.log(Math.tan((45 + .4 * t) * this.radDeg)) / .8
        };
      },
      mill_inv: function mill_inv(t, e, a) {
        return {
          lat: (2.5 * Math.atan(Math.exp(.8 * e / this.radius)) - 5 * Math.PI / 8) * this.degRad,
          lng: (a * this.radDeg + t / this.radius) * this.degRad
        };
      },
      merc: function merc(t, e, a) {
        return {
          x: this.radius * (e - a) * this.radDeg,
          y: -this.radius * Math.log(Math.tan(Math.PI / 4 + t * Math.PI / 360))
        };
      },
      merc_inv: function merc_inv(t, e, a) {
        return {
          lat: (2 * Math.atan(Math.exp(e / this.radius)) - Math.PI / 2) * this.degRad,
          lng: (a * this.radDeg + t / this.radius) * this.degRad
        };
      },
      aea: function aea(t, e, a) {
        var s = a * this.radDeg,
            i = 29.5 * this.radDeg,
            n = 45.5 * this.radDeg,
            r = t * this.radDeg,
            o = e * this.radDeg,
            l = (Math.sin(i) + Math.sin(n)) / 2,
            h = Math.cos(i) * Math.cos(i) + 2 * l * Math.sin(i),
            c = l * (o - s),
            p = Math.sqrt(h - 2 * l * Math.sin(r)) / l,
            d = Math.sqrt(h - 2 * l * Math.sin(0)) / l;
        return {
          x: p * Math.sin(c) * this.radius,
          y: -(d - p * Math.cos(c)) * this.radius
        };
      },
      aea_inv: function aea_inv(t, e, a) {
        var s = t / this.radius,
            i = e / this.radius,
            n = a * this.radDeg,
            r = 29.5 * this.radDeg,
            o = 45.5 * this.radDeg,
            l = (Math.sin(r) + Math.sin(o)) / 2,
            h = Math.cos(r) * Math.cos(r) + 2 * l * Math.sin(r),
            c = Math.sqrt(h - 2 * l * Math.sin(0)) / l,
            p = Math.sqrt(s * s + (c - i) * (c - i)),
            d = Math.atan(s / (c - i));
        return {
          lat: Math.asin((h - p * p * l * l) / (2 * l)) * this.degRad,
          lng: (n + d / l) * this.degRad
        };
      },
      lcc: function lcc(t, e, a) {
        var s = a * this.radDeg,
            i = e * this.radDeg,
            n = 33 * this.radDeg,
            r = 45 * this.radDeg,
            o = t * this.radDeg,
            l = Math.log(Math.cos(n) * (1 / Math.cos(r))) / Math.log(Math.tan(Math.PI / 4 + r / 2) * (1 / Math.tan(Math.PI / 4 + n / 2))),
            h = Math.cos(n) * Math.pow(Math.tan(Math.PI / 4 + n / 2), l) / l,
            c = h * Math.pow(1 / Math.tan(Math.PI / 4 + o / 2), l),
            p = h * Math.pow(1 / Math.tan(Math.PI / 4 + 0), l);
        return {
          x: c * Math.sin(l * (i - s)) * this.radius,
          y: -(p - c * Math.cos(l * (i - s))) * this.radius
        };
      },
      lcc_inv: function lcc_inv(t, e, a) {
        var s = t / this.radius,
            i = e / this.radius,
            n = a * this.radDeg,
            r = 33 * this.radDeg,
            o = 45 * this.radDeg,
            l = Math.log(Math.cos(r) * (1 / Math.cos(o))) / Math.log(Math.tan(Math.PI / 4 + o / 2) * (1 / Math.tan(Math.PI / 4 + r / 2))),
            h = Math.cos(r) * Math.pow(Math.tan(Math.PI / 4 + r / 2), l) / l,
            c = h * Math.pow(1 / Math.tan(Math.PI / 4 + 0), l),
            p = this.sgn(l) * Math.sqrt(s * s + (c - i) * (c - i)),
            d = Math.atan(s / (c - i));
        return {
          lat: (2 * Math.atan(Math.pow(h / p, 1 / l)) - Math.PI / 2) * this.degRad,
          lng: (n + d / l) * this.degRad
        };
      }
    }, w.MapObject = function (t) {}, w.MapObject.prototype.getLabelText = function (t) {
      return this.config.label ? "function" == typeof this.config.label.render ? this.config.label.render(t) : t : null;
    }, w.MapObject.prototype.getLabelOffsets = function (t) {
      var e;
      return this.config.label && ("function" == typeof this.config.label.offsets ? e = this.config.label.offsets(t) : "object" == _typeof(this.config.label.offsets) && (e = this.config.label.offsets[t])), e || [0, 0];
    }, w.MapObject.prototype.setHovered = function (t) {
      this.isHovered !== t && (this.isHovered = t, this.shape.isHovered = t, this.shape.updateStyle(), this.label && (this.label.isHovered = t, this.label.updateStyle()));
    }, w.MapObject.prototype.setSelected = function (t) {
      this.isSelected !== t && (this.isSelected = t, this.shape.isSelected = t, this.shape.updateStyle(), this.label && (this.label.isSelected = t, this.label.updateStyle()), w.$(this.shape).trigger("selected", [t]));
    }, w.MapObject.prototype.setStyle = function () {
      this.shape.setStyle.apply(this.shape, arguments);
    }, w.MapObject.prototype.remove = function () {
      this.shape.remove(), this.label && this.label.remove();
    }, w.Region = function (t) {
      var e, a, s;
      this.config = t, this.map = this.config.map, this.shape = t.canvas.addPath({
        d: t.path,
        "data-code": t.code
      }, t.style, t.canvas.rootElement), this.shape.addClass("jvectormap-region jvectormap-element"), e = this.shape.getBBox(), a = this.getLabelText(t.code), this.config.label && a && (s = this.getLabelOffsets(t.code), this.labelX = e.x + e.width / 2 + s[0], this.labelY = e.y + e.height / 2 + s[1], this.label = t.canvas.addText({
        text: a,
        "text-anchor": "middle",
        "alignment-baseline": "central",
        x: this.labelX,
        y: this.labelY,
        "data-code": t.code
      }, t.labelStyle, t.labelsGroup), this.label.addClass("jvectormap-region jvectormap-element"));
    }, w.inherits(w.Region, w.MapObject), w.Region.prototype.updateLabelPosition = function () {
      this.label && this.label.set({
        x: this.labelX * this.map.scale + this.map.transX * this.map.scale,
        y: this.labelY * this.map.scale + this.map.transY * this.map.scale
      });
    }, w.Marker = function (t) {
      var e;
      this.config = t, this.map = this.config.map, this.isImage = !!this.config.style.initial.image, this.createShape(), e = this.getLabelText(t.index), this.config.label && e && (this.offsets = this.getLabelOffsets(t.index), this.labelX = t.cx / this.map.scale - this.map.transX, this.labelY = t.cy / this.map.scale - this.map.transY, this.label = t.canvas.addText({
        text: e,
        "data-index": t.index,
        dy: "0.6ex",
        x: this.labelX,
        y: this.labelY
      }, t.labelStyle, t.labelsGroup), this.label.addClass("jvectormap-marker jvectormap-element"));
    }, w.inherits(w.Marker, w.MapObject), w.Marker.prototype.createShape = function () {
      var t = this;
      this.shape && this.shape.remove(), this.shape = this.config.canvas[this.isImage ? "addImage" : "addCircle"]({
        "data-index": this.config.index,
        cx: this.config.cx,
        cy: this.config.cy
      }, this.config.style, this.config.group), this.shape.addClass("jvectormap-marker jvectormap-element"), this.isImage && w.$(this.shape.node).on("imageloaded", function () {
        t.updateLabelPosition();
      });
    }, w.Marker.prototype.updateLabelPosition = function () {
      this.label && this.label.set({
        x: this.labelX * this.map.scale + this.offsets[0] + this.map.transX * this.map.scale + 5 + (this.isImage ? (this.shape.width || 0) / 2 : this.shape.properties.r),
        y: this.labelY * this.map.scale + this.map.transY * this.map.scale + this.offsets[1]
      });
    }, w.Marker.prototype.setStyle = function (t, e) {
      var a;
      w.Marker.parentClass.prototype.setStyle.apply(this, arguments), "r" === t && this.updateLabelPosition(), (a = !!this.shape.get("image")) != this.isImage && (this.isImage = a, this.config.style = w.$.extend(!0, {}, this.shape.style), this.createShape());
    }, w.Map = function (t) {
      var e,
          a = this;
      if (this.params = w.$.extend(!0, {}, w.Map.defaultParams, t), !w.Map.maps[this.params.map]) throw new Error("Attempt to use map which was not loaded: " + this.params.map);

      for (e in this.mapData = w.Map.maps[this.params.map], this.markers = {}, this.regions = {}, this.regionsColors = {}, this.regionsData = {}, this.container = w.$("<div>").addClass("jvectormap-container"), this.params.container && this.params.container.append(this.container), this.container.data("mapObject", this), this.defaultWidth = this.mapData.width, this.defaultHeight = this.mapData.height, this.setBackgroundColor(this.params.backgroundColor), this.onResize = function () {
        a.updateSize();
      }, w.$(window).resize(this.onResize), w.Map.apiEvents) {
        this.params[e] && this.container.bind(w.Map.apiEvents[e] + ".jvectormap", this.params[e]);
      }

      this.canvas = new w.VectorCanvas(this.container[0], this.width, this.height), ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch) && this.params.bindTouchEvents && this.bindContainerTouchEvents(), this.bindContainerEvents(), this.bindElementEvents(), this.createTip(), this.params.zoomButtons && this.bindZoomButtons(), this.createRegions(), this.createMarkers(this.params.markers || {}), this.updateSize(), this.params.focusOn && ("string" == typeof this.params.focusOn ? this.params.focusOn = {
        region: this.params.focusOn
      } : w.$.isArray(this.params.focusOn) && (this.params.focusOn = {
        regions: this.params.focusOn
      }), this.setFocus(this.params.focusOn)), this.params.selectedRegions && this.setSelectedRegions(this.params.selectedRegions), this.params.selectedMarkers && this.setSelectedMarkers(this.params.selectedMarkers), this.legendCntHorizontal = w.$("<div/>").addClass("jvectormap-legend-cnt jvectormap-legend-cnt-h"), this.legendCntVertical = w.$("<div/>").addClass("jvectormap-legend-cnt jvectormap-legend-cnt-v"), this.container.append(this.legendCntHorizontal), this.container.append(this.legendCntVertical), this.params.series && this.createSeries();
    }, w.Map.prototype = {
      transX: 0,
      transY: 0,
      scale: 1,
      baseTransX: 0,
      baseTransY: 0,
      baseScale: 1.2,
      width: 0,
      height: 0,
      setBackgroundColor: function setBackgroundColor(t) {
        this.container.css("background-color", t);
      },
      resize: function resize() {
        var t = this.baseScale;
        this.width / this.height > this.defaultWidth / this.defaultHeight ? (this.baseScale = this.height / this.defaultHeight, this.baseTransX = Math.abs(this.width - this.defaultWidth * this.baseScale) / (2 * this.baseScale)) : (this.baseScale = this.width / this.defaultWidth, this.baseTransY = Math.abs(this.height - this.defaultHeight * this.baseScale) / (2 * this.baseScale)), this.scale *= this.baseScale / t, this.transX *= this.baseScale / t, this.transY *= this.baseScale / t;
      },
      updateSize: function updateSize() {
        this.width = this.container.width(), this.height = this.container.height(), this.resize(), this.canvas.setSize(this.width, this.height), this.applyTransform();
      },
      reset: function reset() {
        var t, e;

        for (t in this.series) {
          for (e = 0; e < this.series[t].length; e++) {
            this.series[t][e].clear();
          }
        }

        this.scale = this.baseScale, this.transX = this.baseTransX, this.transY = this.baseTransY, this.applyTransform();
      },
      applyTransform: function applyTransform() {
        var t, e, a, s;

        if (a = this.defaultWidth * this.scale <= this.width ? (t = (this.width - this.defaultWidth * this.scale) / (2 * this.scale), (this.width - this.defaultWidth * this.scale) / (2 * this.scale)) : (t = 0, (this.width - this.defaultWidth * this.scale) / this.scale), s = this.defaultHeight * this.scale <= this.height ? (e = (this.height - this.defaultHeight * this.scale) / (2 * this.scale), (this.height - this.defaultHeight * this.scale) / (2 * this.scale)) : (e = 0, (this.height - this.defaultHeight * this.scale) / this.scale), this.transY > e ? this.transY = e : this.transY < s && (this.transY = s), this.transX > t ? this.transX = t : this.transX < a && (this.transX = a), this.canvas.applyTransformParams(this.scale, this.transX, this.transY), this.markers) {
          this.container.find("g:eq(2)").css("visibility", "hidden");
          var i = this;
          waitForFinalEvent(function () {
            i.repositionMarkers(), i.container.find("g:eq(2)").css("visibility", "visible");
          }, 80, "repositionMarkers");
        }

        this.repositionLabels(), this.container.trigger("viewportChange", [this.scale / this.baseScale, this.transX, this.transY]);
      },
      bindContainerEvents: function bindContainerEvents() {
        var e,
            a,
            s = !1,
            l = this;
        this.params.panOnDrag && (this.container.mousemove(function (t) {
          return s && (l.transX -= (e - t.pageX) / l.scale, l.transY -= (a - t.pageY) / l.scale, l.applyTransform(), e = t.pageX, a = t.pageY), !1;
        }).mousedown(function (t) {
          return s = !0, e = t.pageX, a = t.pageY, !1;
        }), this.onContainerMouseUp = function () {
          s = !1;
        }, w.$("body").mouseup(this.onContainerMouseUp)), this.params.zoomOnScroll && this.container.mousewheel(function (t, e, a, s) {
          var i = w.$(l.container).offset(),
              n = t.pageX - i.left,
              r = t.pageY - i.top,
              o = Math.pow(1 + l.params.zoomOnScrollSpeed / 1e3, t.deltaFactor * t.deltaY);
          l.tip.hide(), l.setScale(l.scale * o, n, r), t.preventDefault();
        });
      },
      bindContainerTouchEvents: function bindContainerTouchEvents() {
        function t(t) {
          var e,
              a,
              s,
              i,
              n = t.originalEvent.touches;
          "touchstart" == t.type && (d = 0), 1 == n.length ? (1 == d && (s = m.transX, i = m.transY, m.transX -= (l - n[0].pageX) / m.scale, m.transY -= (h - n[0].pageY) / m.scale, m.applyTransform(), m.tip.hide(), s == m.transX && i == m.transY || t.preventDefault()), l = n[0].pageX, h = n[0].pageY) : 2 == n.length && (2 == d ? (a = Math.sqrt(Math.pow(n[0].pageX - n[1].pageX, 2) + Math.pow(n[0].pageY - n[1].pageY, 2)) / o, m.setScale(r * a, c, p), m.tip.hide(), t.preventDefault()) : (e = w.$(m.container).offset(), c = n[0].pageX > n[1].pageX ? n[1].pageX + (n[0].pageX - n[1].pageX) / 2 : n[0].pageX + (n[1].pageX - n[0].pageX) / 2, p = n[0].pageY > n[1].pageY ? n[1].pageY + (n[0].pageY - n[1].pageY) / 2 : n[0].pageY + (n[1].pageY - n[0].pageY) / 2, c -= e.left, p -= e.top, r = m.scale, o = Math.sqrt(Math.pow(n[0].pageX - n[1].pageX, 2) + Math.pow(n[0].pageY - n[1].pageY, 2)))), d = n.length;
        }

        var r,
            o,
            l,
            h,
            c,
            p,
            d,
            m = this;
        w.$(this.container).bind("touchstart", t), w.$(this.container).bind("touchmove", t);
      },
      bindElementEvents: function bindElementEvents() {
        var i,
            o = this;
        this.container.mousemove(function () {
          i = !0;
        }), this.container.delegate("[class~='jvectormap-element']", "mouseover mouseout", function (t) {
          var e = -1 === (w.$(this).attr("class").baseVal || w.$(this).attr("class")).indexOf("jvectormap-region") ? "marker" : "region",
              a = w.$(this).attr("region" == e ? "data-code" : "data-index"),
              s = "region" == e ? o.regions[a].element : o.markers[a].element,
              i = "region" == e ? o.mapData.paths[a].name : o.markers[a].config.name || "",
              n = w.$.Event(e + "TipShow.jvectormap"),
              r = w.$.Event(e + "Over.jvectormap");
          "mouseover" == t.type ? (o.container.trigger(r, [a]), r.isDefaultPrevented() || s.setHovered(!0), o.tip.text(i), o.container.trigger(n, [o.tip, a]), n.isDefaultPrevented() || (o.tip.show(), o.tipWidth = o.tip.width(), o.tipHeight = o.tip.height())) : (s.setHovered(!1), o.tip.hide(), o.container.trigger(e + "Out.jvectormap", [a]));
        }), this.container.delegate("[class~='jvectormap-element']", "mousedown", function () {
          i = !1;
        }), this.container.delegate("[class~='jvectormap-element']", "mouseup", function () {
          var t = -1 === (w.$(this).attr("class").baseVal ? w.$(this).attr("class").baseVal : w.$(this).attr("class")).indexOf("jvectormap-region") ? "marker" : "region",
              e = w.$(this).attr("region" == t ? "data-code" : "data-index"),
              a = w.$.Event(t + "Click.jvectormap"),
              s = "region" == t ? o.regions[e].element : o.markers[e].element;
          i || (o.container.trigger(a, [e]), ("region" == t && o.params.regionsSelectable || "marker" == t && o.params.markersSelectable) && (a.isDefaultPrevented() || (o.params[t + "sSelectableOne"] && o.clearSelected(t + "s"), s.setSelected(!s.isSelected))));
        });
      },
      bindZoomButtons: function bindZoomButtons() {
        var i = this;
        w.$("<div/>").addClass("jvectormap-zoomin").text("+").appendTo(this.container), w.$("<div/>").addClass("jvectormap-zoomout").html("&#x2212;").appendTo(this.container), this.container.find(".jvectormap-zoomin").click(function () {
          i.setScale(i.scale * i.params.zoomStep, i.width / 2, i.height / 2, !1, i.params.zoomAnimate);
        }), this.container.find(".jvectormap-zoomout").click(function () {
          i.setScale(i.scale / i.params.zoomStep, i.width / 2, i.height / 2, !1, i.params.zoomAnimate);
        }), this.container.find("svg").dblclick(function (t) {
          var e = w.$(i.container).offset(),
              a = t.pageX - e.left,
              s = t.pageY - e.top;
          i.setScale(i.scale * i.params.zoomStep, a, s, !1, i.params.zoomAnimate);
        });
      },
      createTip: function createTip() {
        var s = this;
        this.tip = w.$("<div/>").addClass("jvectormap-tip").appendTo(w.$("body")), this.container.mousemove(function (t) {
          var e = t.pageX - 15 - s.tipWidth,
              a = t.pageY - 15 - s.tipHeight;
          e < 5 && (e = t.pageX + 15), a < 5 && (a = t.pageY + 15), s.tip.css({
            left: e,
            top: a
          });
        });
      },
      setScale: function setScale(t, e, a, s, i) {
        var n,
            r,
            o,
            l,
            h,
            c,
            p,
            d,
            m,
            u,
            g = w.$.Event("zoom.jvectormap"),
            f = this,
            v = 0,
            A = Math.abs(Math.round(60 * (t - this.scale) / Math.max(t, this.scale))),
            b = new w.$.Deferred();
        return t > this.params.zoomMax * this.baseScale ? t = this.params.zoomMax * this.baseScale : t < this.params.zoomMin * this.baseScale && (t = this.params.zoomMin * this.baseScale), void 0 !== e && void 0 !== a && (u = t / this.scale, m = s ? (d = e + this.defaultWidth * (this.width / (this.defaultWidth * t)) / 2, a + this.defaultHeight * (this.height / (this.defaultHeight * t)) / 2) : (d = this.transX - (u - 1) / t * e, this.transY - (u - 1) / t * a)), i && 0 < A ? (r = this.scale, o = (t - r) / A, l = this.transX * this.scale, c = this.transY * this.scale, h = (d * t - l) / A, p = (m * t - c) / A, n = setInterval(function () {
          v += 1, f.scale = r + o * v, f.transX = (l + h * v) / f.scale, f.transY = (c + p * v) / f.scale, f.applyTransform(), v == A && (clearInterval(n), f.container.trigger(g, [t / f.baseScale]), b.resolve());
        }, 10)) : (this.transX = d, this.transY = m, this.scale = t, this.applyTransform(), this.container.trigger(g, [t / this.baseScale]), b.resolve()), b;
      },
      setFocus: function setFocus(t) {
        var e, a, s, i, n;

        if ((t = t || {}).region ? s = [t.region] : t.regions && (s = t.regions), s) {
          for (i = 0; i < s.length; i++) {
            this.regions[s[i]] && (a = this.regions[s[i]].element.shape.getBBox()) && (e = void 0 === e ? a : {
              x: Math.min(e.x, a.x),
              y: Math.min(e.y, a.y),
              width: Math.max(e.x + e.width, a.x + a.width) - Math.min(e.x, a.x),
              height: Math.max(e.y + e.height, a.y + a.height) - Math.min(e.y, a.y)
            });
          }

          return this.setScale(Math.min(this.width / e.width, this.height / e.height), -(e.x + e.width / 2), -(e.y + e.height / 2), !0, t.animate);
        }

        return t.lat && t.lng ? (n = this.latLngToPoint(t.lat, t.lng), t.x = this.transX - n.x / this.scale, t.y = this.transY - n.y / this.scale) : t.x && t.y && (t.x *= -this.defaultWidth, t.y *= -this.defaultHeight), this.setScale(t.scale * this.baseScale, t.x, t.y, !0, t.animate);
      },
      getSelected: function getSelected(t) {
        var e,
            a = [];

        for (e in this[t]) {
          this[t][e].element.isSelected && a.push(e);
        }

        return a;
      },
      getSelectedRegions: function getSelectedRegions() {
        return this.getSelected("regions");
      },
      getSelectedMarkers: function getSelectedMarkers() {
        return this.getSelected("markers");
      },
      setSelected: function setSelected(t, e) {
        var a;
        if ("object" != _typeof(e) && (e = [e]), w.$.isArray(e)) for (a = 0; a < e.length; a++) {
          this[t][e[a]].element.setSelected(!0);
        } else for (a in e) {
          this[t][a].element.setSelected(!!e[a]);
        }
      },
      setSelectedRegions: function setSelectedRegions(t) {
        this.setSelected("regions", t);
      },
      setSelectedMarkers: function setSelectedMarkers(t) {
        this.setSelected("markers", t);
      },
      clearSelected: function clearSelected(t) {
        var e,
            a = {},
            s = this.getSelected(t);

        for (e = 0; e < s.length; e++) {
          a[s[e]] = !1;
        }

        this.setSelected(t, a);
      },
      clearSelectedRegions: function clearSelectedRegions() {
        this.clearSelected("regions");
      },
      clearSelectedMarkers: function clearSelectedMarkers() {
        this.clearSelected("markers");
      },
      getMapObject: function getMapObject() {
        return this;
      },
      getRegionName: function getRegionName(t) {
        return this.mapData.paths[t].name;
      },
      createRegions: function createRegions() {
        var t,
            e,
            a = this;

        for (t in this.regionLabelsGroup = this.regionLabelsGroup || this.canvas.addGroup(), this.mapData.paths) {
          e = new w.Region({
            map: this,
            path: this.mapData.paths[t].path,
            code: t,
            style: w.$.extend(!0, {}, this.params.regionStyle),
            labelStyle: w.$.extend(!0, {}, this.params.regionLabelStyle),
            canvas: this.canvas,
            labelsGroup: this.regionLabelsGroup,
            label: "vml" != this.canvas.mode ? this.params.labels && this.params.labels.regions : null
          }), w.$(e.shape).bind("selected", function (t, e) {
            a.container.trigger("regionSelected.jvectormap", [w.$(this.node).attr("data-code"), e, a.getSelectedRegions()]);
          }), this.regions[t] = {
            element: e,
            config: this.mapData.paths[t]
          };
        }
      },
      createMarkers: function createMarkers(t) {
        var e,
            a,
            s,
            i,
            n,
            r = this;
        if (this.markersGroup = this.markersGroup || this.canvas.addGroup(), this.markerLabelsGroup = this.markerLabelsGroup || this.canvas.addGroup(), w.$.isArray(t)) for (n = t.slice(), t = {}, e = 0; e < n.length; e++) {
          t[e] = n[e];
        }

        for (e in t) {
          i = t[e] instanceof Array ? {
            latLng: t[e]
          } : t[e], !1 !== (s = this.getMarkerPosition(i)) && (a = new w.Marker({
            map: this,
            style: w.$.extend(!0, {}, this.params.markerStyle, {
              initial: i.style || {}
            }),
            labelStyle: w.$.extend(!0, {}, this.params.markerLabelStyle),
            index: e,
            cx: s.x,
            cy: s.y,
            group: this.markersGroup,
            canvas: this.canvas,
            labelsGroup: this.markerLabelsGroup,
            label: "vml" != this.canvas.mode ? this.params.labels && this.params.labels.markers : null
          }), w.$(a.shape).bind("selected", function (t, e) {
            r.container.trigger("markerSelected.jvectormap", [w.$(this.node).attr("data-index"), e, r.getSelectedMarkers()]);
          }), this.markers[e] && this.removeMarkers([e]), this.markers[e] = {
            element: a,
            config: i
          });
        }
      },
      repositionMarkers: function repositionMarkers() {
        var t, e;

        for (t in this.markers) {
          !1 !== (e = this.getMarkerPosition(this.markers[t].config)) && this.markers[t].element.setStyle({
            cx: e.x,
            cy: e.y
          });
        }
      },
      repositionLabels: function repositionLabels() {
        var t;

        for (t in this.regions) {
          this.regions[t].element.updateLabelPosition();
        }

        for (t in this.markers) {
          this.markers[t].element.updateLabelPosition();
        }
      },
      getMarkerPosition: function getMarkerPosition(t) {
        return w.Map.maps[this.params.map].projection ? this.latLngToPoint.apply(this, t.latLng || [0, 0]) : {
          x: t.coords[0] * this.scale + this.transX * this.scale,
          y: t.coords[1] * this.scale + this.transY * this.scale
        };
      },
      addMarker: function addMarker(t, e, a) {
        var s,
            i,
            n = {},
            r = [];
        a = a || [];

        for (n[t] = e, i = 0; i < a.length; i++) {
          s = {}, void 0 !== a[i] && (s[t] = a[i]), r.push(s);
        }

        this.addMarkers(n, r);
      },
      addMarkers: function addMarkers(t, e) {
        var a;

        for (e = e || [], this.createMarkers(t), a = 0; a < e.length; a++) {
          this.series.markers[a].setValues(e[a] || {});
        }
      },
      removeMarkers: function removeMarkers(t) {
        var e;

        for (e = 0; e < t.length; e++) {
          this.markers[t[e]].element.remove(), delete this.markers[t[e]];
        }
      },
      removeAllMarkers: function removeAllMarkers() {
        var t,
            e = [];

        for (t in this.markers) {
          e.push(t);
        }

        this.removeMarkers(e);
      },
      latLngToPoint: function latLngToPoint(t, e) {
        var a,
            s,
            i,
            n = w.Map.maps[this.params.map].projection,
            r = n.centralMeridian;
        return e < -180 + r && (e += 360), a = w.Proj[n.type](t, e, r), !!(s = this.getInsetForPoint(a.x, a.y)) && (i = s.bbox, a.x = (a.x - i[0].x) / (i[1].x - i[0].x) * s.width * this.scale, a.y = (a.y - i[0].y) / (i[1].y - i[0].y) * s.height * this.scale, {
          x: a.x + this.transX * this.scale + s.left * this.scale,
          y: a.y + this.transY * this.scale + s.top * this.scale
        });
      },
      pointToLatLng: function pointToLatLng(t, e) {
        var a,
            s,
            i,
            n,
            r,
            o = w.Map.maps[this.params.map].projection,
            l = o.centralMeridian,
            h = w.Map.maps[this.params.map].insets;

        for (a = 0; a < h.length; a++) {
          if (i = (s = h[a]).bbox, n = t - (this.transX * this.scale + s.left * this.scale), r = e - (this.transY * this.scale + s.top * this.scale), n = n / (s.width * this.scale) * (i[1].x - i[0].x) + i[0].x, r = r / (s.height * this.scale) * (i[1].y - i[0].y) + i[0].y, n > i[0].x && n < i[1].x && r > i[0].y && r < i[1].y) return w.Proj[o.type + "_inv"](n, -r, l);
        }

        return !1;
      },
      getInsetForPoint: function getInsetForPoint(t, e) {
        var a,
            s,
            i = w.Map.maps[this.params.map].insets;

        for (a = 0; a < i.length; a++) {
          if (t > (s = i[a].bbox)[0].x && t < s[1].x && e > s[0].y && e < s[1].y) return i[a];
        }
      },
      createSeries: function createSeries() {
        var t, e;

        for (e in this.series = {
          markers: [],
          regions: []
        }, this.params.series) {
          for (t = 0; t < this.params.series[e].length; t++) {
            this.series[e][t] = new w.DataSeries(this.params.series[e][t], this[e], this);
          }
        }
      },
      remove: function remove() {
        this.tip.remove(), this.container.remove(), w.$(window).unbind("resize", this.onResize), w.$("body").unbind("mouseup", this.onContainerMouseUp);
      }
    }, w.Map.maps = {}, w.Map.defaultParams = {
      map: "world_mill_en",
      backgroundColor: "#505050",
      zoomButtons: !0,
      zoomOnScroll: !0,
      zoomOnScrollSpeed: 3,
      panOnDrag: !0,
      zoomMax: 8,
      zoomMin: 1,
      zoomStep: 1.6,
      zoomAnimate: !0,
      regionsSelectable: !1,
      markersSelectable: !1,
      bindTouchEvents: !0,
      regionStyle: {
        initial: {
          fill: "white",
          "fill-opacity": 1,
          stroke: "none",
          "stroke-width": 0,
          "stroke-opacity": 1
        },
        hover: {
          "fill-opacity": .8,
          cursor: "pointer"
        },
        selected: {
          fill: "yellow"
        },
        selectedHover: {}
      },
      regionLabelStyle: {
        initial: {
          "font-family": "Verdana",
          "font-size": "12",
          "font-weight": "bold",
          cursor: "default",
          fill: "black"
        },
        hover: {
          cursor: "pointer"
        }
      },
      markerStyle: {
        initial: {
          fill: "grey",
          stroke: "#505050",
          "fill-opacity": 1,
          "stroke-width": 1,
          "stroke-opacity": 1,
          r: 5
        },
        hover: {
          stroke: "black",
          "stroke-width": 2,
          cursor: "pointer"
        },
        selected: {
          fill: "blue"
        },
        selectedHover: {}
      },
      markerLabelStyle: {
        initial: {
          "font-family": "Verdana",
          "font-size": "12",
          "font-weight": "bold",
          cursor: "default",
          fill: "black"
        },
        hover: {
          cursor: "pointer"
        }
      }
    }, w.Map.apiEvents = {
      onRegionTipShow: "regionTipShow",
      onRegionOver: "regionOver",
      onRegionOut: "regionOut",
      onRegionClick: "regionClick",
      onRegionSelected: "regionSelected",
      onMarkerTipShow: "markerTipShow",
      onMarkerOver: "markerOver",
      onMarkerOut: "markerOut",
      onMarkerClick: "markerClick",
      onMarkerSelected: "markerSelected",
      onViewportChange: "viewportChange"
    }, w.MultiMap = function (t) {
      var e = this;
      this.maps = {}, this.params = w.$.extend(!0, {}, w.MultiMap.defaultParams, t), this.params.maxLevel = this.params.maxLevel || Number.MAX_VALUE, this.params.main = this.params.main || {}, this.params.main.multiMapLevel = 0, this.history = [this.addMap(this.params.main.map, this.params.main)], this.defaultProjection = this.history[0].mapData.projection.type, this.mapsLoaded = {}, this.params.container.css({
        position: "relative"
      }), this.backButton = w.$("<div/>").addClass("jvectormap-goback").text("Back").appendTo(this.params.container), this.backButton.hide(), this.backButton.click(function () {
        e.goBack();
      }), this.spinner = w.$("<div/>").addClass("jvectormap-spinner").appendTo(this.params.container), this.spinner.hide();
    }, w.MultiMap.prototype = {
      addMap: function addMap(t, e) {
        var a = w.$("<div/>").css({
          width: "100%",
          height: "100%"
        });
        return this.params.container.append(a), this.maps[t] = new w.Map(w.$.extend(e, {
          container: a
        })), this.params.maxLevel > e.multiMapLevel && this.maps[t].container.on("regionClick.jvectormap", {
          scope: this
        }, function (t, e) {
          var a = t.data.scope,
              s = a.params.mapNameByCode(e, a);
          a.drillDownPromise && "pending" === a.drillDownPromise.state() || a.drillDown(s, e);
        }), this.maps[t];
      },
      downloadMap: function downloadMap(t) {
        var e = this,
            a = w.$.Deferred();
        return this.mapsLoaded[t] ? a.resolve() : w.$.get(this.params.mapUrlByCode(t, this)).then(function () {
          e.mapsLoaded[t] = !0, a.resolve();
        }, function () {
          a.reject();
        }), a;
      },
      drillDown: function drillDown(t, e) {
        var a = this.history[this.history.length - 1],
            s = this,
            i = a.setFocus({
          region: e,
          animate: !0
        }),
            n = this.downloadMap(e);
        i.then(function () {
          "pending" === n.state() && s.spinner.show();
        }), n.always(function () {
          s.spinner.hide();
        }), this.drillDownPromise = w.$.when(n, i), this.drillDownPromise.then(function () {
          a.params.container.hide(), s.maps[t] ? s.maps[t].params.container.show() : s.addMap(t, {
            map: t,
            multiMapLevel: a.params.multiMapLevel + 1
          }), s.history.push(s.maps[t]), s.backButton.show();
        });
      },
      goBack: function goBack() {
        var t = this.history.pop(),
            e = this.history[this.history.length - 1],
            a = this;
        t.setFocus({
          scale: 1,
          x: .5,
          y: .5,
          animate: !0
        }).then(function () {
          t.params.container.hide(), e.params.container.show(), e.updateSize(), 1 === a.history.length && a.backButton.hide(), e.setFocus({
            scale: 1,
            x: .5,
            y: .5,
            animate: !0
          });
        });
      }
    }, w.MultiMap.defaultParams = {
      mapNameByCode: function mapNameByCode(t, e) {
        return t.toLowerCase() + "_" + e.defaultProjection + "_en";
      },
      mapUrlByCode: function mapUrlByCode(t, e) {
        return "jquery-jvectormap-data-" + t.toLowerCase() + "-" + e.defaultProjection + "-en.js";
      }
    }, jQuery.fn.vectorMap("addMap", "world_mill_en", {
      insets: [{
        width: 900,
        top: 0,
        height: 440.70631074413296,
        bbox: [{
          y: -12671671.123330014,
          x: -20004297.151525836
        }, {
          y: 6930392.02513512,
          x: 20026572.39474939
        }],
        left: 0
      }],
      paths: {},
      height: 440.70631074413296,
      projection: {
        type: "mill",
        centralMeridian: 11.5
      },
      width: 900
    }), u = jQuery, v = {}, b = window, y = (A = document).documentElement, s = u.expando, u.event.special.inview = {
      add: function add(t) {
        v[t.guid + "-" + this[s]] = {
          data: t,
          $element: u(this)
        }, e || u.isEmptyObject(v) || (e = setInterval(i, 250));
      },
      remove: function remove(t) {
        try {
          delete v[t.guid + "-" + this[s]];
        } catch (t) {}

        u.isEmptyObject(v) && (clearInterval(e), e = null);
      }
    }, u(b).bind("scroll resize", function () {
      g = f = null;
    }), !y.addEventListener && y.attachEvent && y.attachEvent("onfocusin", function () {
      f = null;
    });
  }

  "clustrm_jq" in window ? ($ = jQuery = window.clustrm_jq, loadLibs(), main()) : loadScript("https://code.jquery.com/jquery-1.12.4.min.js", function () {
    $ = jQuery = window.clustrm_jq = window.jQuery.noConflict(!0), loadLibs(), main();
  });
}(window, document);