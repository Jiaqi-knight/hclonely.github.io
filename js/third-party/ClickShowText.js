"use strict";

function co() {
  for (var t = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f".split(","), o = "#", e = 0; e < 6; e++) {
    o += t[Math.floor(16 * Math.random())];
  }

  return o;
}

var a_idx = 0;
jQuery(document).ready(function (r) {
  r("body").click(function (t) {
    var o = GLOBAL_CONFIG.ClickShowText,
        e = o.text.split(","),
        a = r("<span/>").text(e[a_idx]);
    a_idx = (a_idx + 1) % e.length;
    var i = t.pageX,
        n = t.pageY;
    a.css({
      "z-index": 150,
      top: n - 20,
      left: i - 40,
      position: "absolute",
      "font-weight": "bold",
      color: co(),
      cursor: "default",
      "font-size": o.fontSize || "inherit"
    }), r("body").append(a), a.animate({
      top: n - 180,
      opacity: 0
    }, 1500, function () {
      a.remove();
    });
  });
});