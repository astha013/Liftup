import {
  require_react
} from "./chunk-ZCTWYGUT.js";
import {
  __commonJS
} from "./chunk-PR4QN5HX.js";

// node_modules/react-identicons/build/index.js
var require_build = __commonJS({
  "node_modules/react-identicons/build/index.js"(exports, module) {
    module.exports = function(t) {
      var e = {};
      function n(r) {
        if (e[r]) return e[r].exports;
        var u = e[r] = { i: r, l: false, exports: {} };
        return t[r].call(u.exports, u, u.exports, n), u.l = true, u.exports;
      }
      return n.m = t, n.c = e, n.d = function(t2, e2, r) {
        n.o(t2, e2) || Object.defineProperty(t2, e2, { enumerable: true, get: r });
      }, n.r = function(t2) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t2, "__esModule", { value: true });
      }, n.t = function(t2, e2) {
        if (1 & e2 && (t2 = n(t2)), 8 & e2) return t2;
        if (4 & e2 && "object" == typeof t2 && t2 && t2.__esModule) return t2;
        var r = /* @__PURE__ */ Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", { enumerable: true, value: t2 }), 2 & e2 && "string" != typeof t2) for (var u in t2) n.d(r, u, (function(e3) {
          return t2[e3];
        }).bind(null, u));
        return r;
      }, n.n = function(t2) {
        var e2 = t2 && t2.__esModule ? function() {
          return t2.default;
        } : function() {
          return t2;
        };
        return n.d(e2, "a", e2), e2;
      }, n.o = function(t2, e2) {
        return Object.prototype.hasOwnProperty.call(t2, e2);
      }, n.p = "", n(n.s = 0);
    }([function(t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: true });
      var r = n(1), u = i(r), o = i(n(2)), c = i(n(3));
      function i(t2) {
        return t2 && t2.__esModule ? t2 : { default: t2 };
      }
      var f = function(t2) {
        var e2 = t2.fg, n2 = t2.bg, i2 = t2.count, f2 = t2.palette, l = t2.string, a = t2.size, d = t2.getColor, s = t2.padding, g = t2.className, p = (0, r.useRef)(null);
        (0, r.useEffect)(function() {
          h(t2);
        });
        var h = function() {
          var t3 = (0, o.default)(l), r2 = Math.floor(a / i2), u2 = t3.slice(0, 6);
          if (f2 && f2.length) {
            var g2 = Math.floor((0, c.default)(parseInt(t3.slice(-3), 16), 0, 4095, 0, f2.length));
            e2 = f2[g2];
          }
          d && d(e2 || u2);
          var h2 = s;
          p.current.width = r2 * i2 + h2, p.current.height = r2 * i2 + h2;
          var v = t3.split("").map(function(t4) {
            return (t4 = parseInt(t4, 16)) < 8 ? 0 : 1;
          }), b = [];
          b[0] = b[4] = v.slice(0, 5), b[1] = b[3] = v.slice(5, 10), b[2] = v.slice(10, 15);
          var y = p.current.getContext("2d");
          y.imageSmoothingEnabled = false, y.clearRect(0, 0, p.current.width, p.current.height), b.forEach(function(t4, o2) {
            t4.forEach(function(t5, c2) {
              t5 ? (y.fillStyle = e2 || "#" + u2, y.fillRect(r2 * o2 + h2, r2 * c2 + h2, r2 - h2, r2 - h2)) : (y.fillStyle = n2, y.fillRect(r2 * o2 + h2, r2 * c2 + h2, r2 - h2, r2 - h2));
            });
          });
        };
        return u.default.createElement("canvas", { ref: p, className: g, style: { width: a, height: a } });
      };
      f.defaultProps = { className: "identicon", bg: "transparent", count: 5, palette: null, fg: null, padding: 0, size: 400, getColor: null, string: "" }, e.default = f;
    }, function(t, e) {
      t.exports = require_react();
    }, function(t, e, n) {
      "use strict";
      var r;
      "function" == typeof Symbol && Symbol.iterator;
      !function(u) {
        function o(t2, e2) {
          var n2 = (65535 & t2) + (65535 & e2);
          return (t2 >> 16) + (e2 >> 16) + (n2 >> 16) << 16 | 65535 & n2;
        }
        function c(t2, e2, n2, r2, u2, c2) {
          return o(function(t3, e3) {
            return t3 << e3 | t3 >>> 32 - e3;
          }(o(o(e2, t2), o(r2, c2)), u2), n2);
        }
        function i(t2, e2, n2, r2, u2, o2, i2) {
          return c(e2 & n2 | ~e2 & r2, t2, e2, u2, o2, i2);
        }
        function f(t2, e2, n2, r2, u2, o2, i2) {
          return c(e2 & r2 | n2 & ~r2, t2, e2, u2, o2, i2);
        }
        function l(t2, e2, n2, r2, u2, o2, i2) {
          return c(e2 ^ n2 ^ r2, t2, e2, u2, o2, i2);
        }
        function a(t2, e2, n2, r2, u2, o2, i2) {
          return c(n2 ^ (e2 | ~r2), t2, e2, u2, o2, i2);
        }
        function d(t2, e2) {
          t2[e2 >> 5] |= 128 << e2 % 32, t2[14 + (e2 + 64 >>> 9 << 4)] = e2;
          var n2, r2, u2, c2, d2, s2 = 1732584193, g2 = -271733879, p2 = -1732584194, h2 = 271733878;
          for (n2 = 0; n2 < t2.length; n2 += 16) r2 = s2, u2 = g2, c2 = p2, d2 = h2, g2 = a(g2 = a(g2 = a(g2 = a(g2 = l(g2 = l(g2 = l(g2 = l(g2 = f(g2 = f(g2 = f(g2 = f(g2 = i(g2 = i(g2 = i(g2 = i(g2, p2 = i(p2, h2 = i(h2, s2 = i(s2, g2, p2, h2, t2[n2], 7, -680876936), g2, p2, t2[n2 + 1], 12, -389564586), s2, g2, t2[n2 + 2], 17, 606105819), h2, s2, t2[n2 + 3], 22, -1044525330), p2 = i(p2, h2 = i(h2, s2 = i(s2, g2, p2, h2, t2[n2 + 4], 7, -176418897), g2, p2, t2[n2 + 5], 12, 1200080426), s2, g2, t2[n2 + 6], 17, -1473231341), h2, s2, t2[n2 + 7], 22, -45705983), p2 = i(p2, h2 = i(h2, s2 = i(s2, g2, p2, h2, t2[n2 + 8], 7, 1770035416), g2, p2, t2[n2 + 9], 12, -1958414417), s2, g2, t2[n2 + 10], 17, -42063), h2, s2, t2[n2 + 11], 22, -1990404162), p2 = i(p2, h2 = i(h2, s2 = i(s2, g2, p2, h2, t2[n2 + 12], 7, 1804603682), g2, p2, t2[n2 + 13], 12, -40341101), s2, g2, t2[n2 + 14], 17, -1502002290), h2, s2, t2[n2 + 15], 22, 1236535329), p2 = f(p2, h2 = f(h2, s2 = f(s2, g2, p2, h2, t2[n2 + 1], 5, -165796510), g2, p2, t2[n2 + 6], 9, -1069501632), s2, g2, t2[n2 + 11], 14, 643717713), h2, s2, t2[n2], 20, -373897302), p2 = f(p2, h2 = f(h2, s2 = f(s2, g2, p2, h2, t2[n2 + 5], 5, -701558691), g2, p2, t2[n2 + 10], 9, 38016083), s2, g2, t2[n2 + 15], 14, -660478335), h2, s2, t2[n2 + 4], 20, -405537848), p2 = f(p2, h2 = f(h2, s2 = f(s2, g2, p2, h2, t2[n2 + 9], 5, 568446438), g2, p2, t2[n2 + 14], 9, -1019803690), s2, g2, t2[n2 + 3], 14, -187363961), h2, s2, t2[n2 + 8], 20, 1163531501), p2 = f(p2, h2 = f(h2, s2 = f(s2, g2, p2, h2, t2[n2 + 13], 5, -1444681467), g2, p2, t2[n2 + 2], 9, -51403784), s2, g2, t2[n2 + 7], 14, 1735328473), h2, s2, t2[n2 + 12], 20, -1926607734), p2 = l(p2, h2 = l(h2, s2 = l(s2, g2, p2, h2, t2[n2 + 5], 4, -378558), g2, p2, t2[n2 + 8], 11, -2022574463), s2, g2, t2[n2 + 11], 16, 1839030562), h2, s2, t2[n2 + 14], 23, -35309556), p2 = l(p2, h2 = l(h2, s2 = l(s2, g2, p2, h2, t2[n2 + 1], 4, -1530992060), g2, p2, t2[n2 + 4], 11, 1272893353), s2, g2, t2[n2 + 7], 16, -155497632), h2, s2, t2[n2 + 10], 23, -1094730640), p2 = l(p2, h2 = l(h2, s2 = l(s2, g2, p2, h2, t2[n2 + 13], 4, 681279174), g2, p2, t2[n2], 11, -358537222), s2, g2, t2[n2 + 3], 16, -722521979), h2, s2, t2[n2 + 6], 23, 76029189), p2 = l(p2, h2 = l(h2, s2 = l(s2, g2, p2, h2, t2[n2 + 9], 4, -640364487), g2, p2, t2[n2 + 12], 11, -421815835), s2, g2, t2[n2 + 15], 16, 530742520), h2, s2, t2[n2 + 2], 23, -995338651), p2 = a(p2, h2 = a(h2, s2 = a(s2, g2, p2, h2, t2[n2], 6, -198630844), g2, p2, t2[n2 + 7], 10, 1126891415), s2, g2, t2[n2 + 14], 15, -1416354905), h2, s2, t2[n2 + 5], 21, -57434055), p2 = a(p2, h2 = a(h2, s2 = a(s2, g2, p2, h2, t2[n2 + 12], 6, 1700485571), g2, p2, t2[n2 + 3], 10, -1894986606), s2, g2, t2[n2 + 10], 15, -1051523), h2, s2, t2[n2 + 1], 21, -2054922799), p2 = a(p2, h2 = a(h2, s2 = a(s2, g2, p2, h2, t2[n2 + 8], 6, 1873313359), g2, p2, t2[n2 + 15], 10, -30611744), s2, g2, t2[n2 + 6], 15, -1560198380), h2, s2, t2[n2 + 13], 21, 1309151649), p2 = a(p2, h2 = a(h2, s2 = a(s2, g2, p2, h2, t2[n2 + 4], 6, -145523070), g2, p2, t2[n2 + 11], 10, -1120210379), s2, g2, t2[n2 + 2], 15, 718787259), h2, s2, t2[n2 + 9], 21, -343485551), s2 = o(s2, r2), g2 = o(g2, u2), p2 = o(p2, c2), h2 = o(h2, d2);
          return [s2, g2, p2, h2];
        }
        function s(t2) {
          var e2, n2 = "", r2 = 32 * t2.length;
          for (e2 = 0; e2 < r2; e2 += 8) n2 += String.fromCharCode(t2[e2 >> 5] >>> e2 % 32 & 255);
          return n2;
        }
        function g(t2) {
          var e2, n2 = [];
          for (n2[(t2.length >> 2) - 1] = void 0, e2 = 0; e2 < n2.length; e2 += 1) n2[e2] = 0;
          var r2 = 8 * t2.length;
          for (e2 = 0; e2 < r2; e2 += 8) n2[e2 >> 5] |= (255 & t2.charCodeAt(e2 / 8)) << e2 % 32;
          return n2;
        }
        function p(t2) {
          var e2, n2, r2 = "";
          for (n2 = 0; n2 < t2.length; n2 += 1) e2 = t2.charCodeAt(n2), r2 += "0123456789abcdef".charAt(e2 >>> 4 & 15) + "0123456789abcdef".charAt(15 & e2);
          return r2;
        }
        function h(t2) {
          return unescape(encodeURIComponent(t2));
        }
        function v(t2) {
          return function(t3) {
            return s(d(g(t3), 8 * t3.length));
          }(h(t2));
        }
        function b(t2, e2) {
          return function(t3, e3) {
            var n2, r2, u2 = g(t3), o2 = [], c2 = [];
            for (o2[15] = c2[15] = void 0, u2.length > 16 && (u2 = d(u2, 8 * t3.length)), n2 = 0; n2 < 16; n2 += 1) o2[n2] = 909522486 ^ u2[n2], c2[n2] = 1549556828 ^ u2[n2];
            return r2 = d(o2.concat(g(e3)), 512 + 8 * e3.length), s(d(c2.concat(r2), 640));
          }(h(t2), h(e2));
        }
        function y(t2, e2, n2) {
          return e2 ? n2 ? b(e2, t2) : function(t3, e3) {
            return p(b(t3, e3));
          }(e2, t2) : n2 ? v(t2) : function(t3) {
            return p(v(t3));
          }(t2);
        }
        void 0 === (r = (function() {
          return y;
        }).call(e, n, e, t)) || (t.exports = r);
      }();
    }, function(t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: true });
      e.default = function(t2, e2, n2, r, u) {
        return (t2 - e2) * (u - r) / (n2 - e2) + r;
      };
    }]);
  }
});
export default require_build();
//# sourceMappingURL=react-identicons.js.map
