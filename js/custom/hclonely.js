"use strict";

jQuery(document).ready(function () {
  var e,
      d,
      i = document.title;
  void 0 !== document.hidden ? (e = "hidden", d = "visibilitychange") : void 0 !== document.mozHidden ? (e = "mozHidden", d = "mozvisibilitychange") : void 0 !== document.webkitHidden && (e = "webkitHidden", d = "webkitvisibilitychange"), void 0 === document.addEventListener && void 0 === document[e] || document.addEventListener(d, function () {
    document.title = document[e] ? "(つェ⊂)看不见我看不见我" : i;
  }, !1);
}), document.body.oncopy = function () {
  layer.msg("【HCLonely】复制成功,若要转载请务必保留原文链接", function () {});
};