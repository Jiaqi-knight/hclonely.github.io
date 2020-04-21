"use strict";

$(function () {
  var t = !1;
  $("a.social-icon.search").on("click", function () {
    var e;
    $("body").css({
      width: "100%",
      overflow: "hidden"
    }), $(".search-dialog").css("display", "block"), $("#local-search-input input").focus(), $(".search-mask").fadeIn(), t || (e = GLOBAL_CONFIG.localSearch.path, $.ajax({
      url: GLOBAL_CONFIG.root + e,
      dataType: "xml",
      success: function success(e) {
        var t = $("entry", e).map(function () {
          return {
            title: $("title", this).text(),
            content: $("content", this).text(),
            url: $("url", this).text()
          };
        }).get(),
            a = $("#local-search-input input")[0],
            s = $("#local-hits")[0];
        a.addEventListener("input", function () {
          var d = '<div class="search-result-list">',
              v = this.value.trim().toLowerCase().split(/[\s]+/);
          if (s.innerHTML = "", this.value.trim().length <= 0) $(".local-search-stats__hr").hide();else {
            var f = 0;
            t.forEach(function (e) {
              var a = !0;
              e.title && "" !== e.title.trim() || (e.title = "Untitled");
              var s = e.title.trim().toLowerCase(),
                  c = e.content.trim().replace(/<[^>]+>/g, "").toLowerCase(),
                  t = e.url,
                  i = -1,
                  r = -1,
                  n = -1;

              if ("" !== s || "" !== c ? v.forEach(function (e, t) {
                i = s.indexOf(e), r = c.indexOf(e), i < 0 && r < 0 ? a = !1 : (r < 0 && (r = 0), 0 === t && (n = r));
              }) : a = !1, a) {
                var o = e.content.trim().replace(/<[^>]+>/g, "");

                if (0 <= n) {
                  var l = n - 30,
                      h = n + 100;
                  l < 0 && (l = 0), 0 === l && (h = 100), h > o.length && (h = o.length);
                  var u = o.substring(l, h);
                  v.forEach(function (e) {
                    var t = new RegExp(e, "gi");
                    u = u.replace(t, '<span class="search-keyword">' + e + "</span>"), s = s.replace(t, '<span class="search-keyword">' + e + "</span>");
                  }), d += '<div class="local-search__hit-item"><a href="' + t + '" class="search-result-title">' + s + "</a>", f += 1, $(".local-search-stats__hr").show(), "" !== c && (d += '<p class="search-result">' + u + "...</p>");
                }

                d += "</div>";
              }
            }), 0 === f && (d += '<div id="local-search__hits-empty">' + GLOBAL_CONFIG.localSearch.languages.hits_empty.replace(/\$\{query}/, this.value.trim()) + "</div>"), d += "</div>", s.innerHTML = d;
          }
        });
      }
    }), t = !0), document.addEventListener("keydown", function e(t) {
      "Escape" === t.code && (a(), document.removeEventListener("keydown", e));
    });
  });

  var a = function a() {
    $("body").css("width", ""), $("body").css("overflow", ""), $(".search-dialog").css({
      animation: "search_close .5s"
    }), $(".search-dialog").animate({}, function () {
      setTimeout(function () {
        $(".search-dialog").css({
          animation: "",
          display: "none"
        });
      }, 500);
    }), $(".search-mask").fadeOut();
  };

  $(".search-mask, .search-close-button").on("click touchstart", a);
});