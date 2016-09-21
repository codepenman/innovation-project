window.loadScript = function()  {
    require = (function e(t, n, r) {
      function s(o, u) {
        if (!n[o]) {
          if (!t[o]) {
            var a = typeof require == "function" && require;
            if (!u && a)return a(o, !0);
            if (i)return i(o, !0);
            var f = new Error("Cannot find module '" + o + "'");
            throw f.code = "MODULE_NOT_FOUND", f
          }
          var l = n[o] = {exports: {}};
          t[o][0].call(l.exports, function (e) {
            var n = t[o][1][e];
            return s(n ? n : e)
          }, l, l.exports, e, t, n, r)
        }
        return n[o].exports
      }

      var i = typeof require == "function" && require;
      for (var o = 0; o < r.length; o++)s(r[o]);
      return s
    })({
      1: [function (require, module, exports) {
        var racer = require('racer');
        var BCSocket = require('browserchannel/dist/bcsocket-uncompressed').BCSocket;

        var CLIENT_OPTIONS = {"reconnect": true};

        racer.Model.prototype._createSocket = function (bundle) {
          var options = CLIENT_OPTIONS;
          if (bundle.browserChannel) {
            options = racer.util.mergeInto({}, options);
            racer.util.mergeInto(options, bundle.browserChannel);
          }
          var base = options.base || '/channel';
          return new BCSocket(base, options);
        };

      }, {"browserchannel/dist/bcsocket-uncompressed": 2, "racer": "racer"}],
      2: [function (require, module, exports) {
        (function () {
          var f, aa = aa || {}, l = this;

          function ba(a) {
            a = a.split(".");
            for (var b = l, c; c = a.shift();) {
              if (null != b[c]) {
                b = b[c];
              } else {
                return null;
              }
            }
            return b;
          }

          function ca() {
          }

          function da(a) {
            var b = typeof a;
            if ("object" == b) {
              if (a) {
                if (a instanceof Array) {
                  return "array";
                }
                if (a instanceof Object) {
                  return b;
                }
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c) {
                  return "object";
                }
                if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
                  return "array";
                }
                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
                  return "function";
                }
              } else {
                return "null";
              }
            } else {
              if ("function" == b && "undefined" == typeof a.call) {
                return "object";
              }
            }
            return b;
          }

          function m(a) {
            return "array" == da(a);
          }

          function ea(a) {
            var b = da(a);
            return "array" == b || "object" == b && "number" == typeof a.length;
          }

          function n(a) {
            return "string" == typeof a;
          }

          function fa(a) {
            return "function" == da(a);
          }

          var ga = "closure_uid_" + (1E9 * Math.random() >>> 0), ha = 0;

          function ia(a, b, c) {
            return a.call.apply(a.bind, arguments);
          }

          function ja(a, b, c) {
            if (!a) {
              throw Error();
            }
            if (2 < arguments.length) {
              var d = Array.prototype.slice.call(arguments, 2);
              return function () {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c);
              };
            }
            return function () {
              return a.apply(b, arguments);
            };
          }

          function p(a, b, c) {
            p = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ia : ja;
            return p.apply(null, arguments);
          }

          var q = Date.now || function () {
                return +new Date;
              };

          function s(a, b) {
            function c() {
            }

            c.prototype = b.prototype;
            a.pa = b.prototype;
            a.prototype = new c;
            a.Hc = function (a, c, g) {
              var h = Array.prototype.slice.call(arguments, 2);
              return b.prototype[c].apply(a, h);
            };
          }
          ;
          function ka(a, b) {
            for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;) {
              d += c.shift() + e.shift();
            }
            return d + c.join("%s");
          }

          function la(a) {
            if (!ma.test(a)) {
              return a;
            }
            -1 != a.indexOf("&") && (a = a.replace(na, "&amp;"));
            -1 != a.indexOf("<") && (a = a.replace(oa, "&lt;"));
            -1 != a.indexOf(">") && (a = a.replace(pa, "&gt;"));
            -1 != a.indexOf('"') && (a = a.replace(qa, "&quot;"));
            -1 != a.indexOf("'") && (a = a.replace(ra, "&#39;"));
            return a;
          }

          var na = /&/g, oa = /</g, pa = />/g, qa = /"/g, ra = /'/g, ma = /[&<>"']/;

          function sa() {
            return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ q()).toString(36);
          }

          function ta(a, b) {
            return a < b ? -1 : a > b ? 1 : 0;
          }
          ;
          var x, ua, va, wa;

          function xa() {
            return l.navigator ? l.navigator.userAgent : null;
          }

          wa = va = ua = x = !1;
          var ya;
          if (ya = xa()) {
            var za = l.navigator;
            x = 0 == ya.lastIndexOf("Opera", 0);
            ua = !x && (-1 != ya.indexOf("MSIE") || -1 != ya.indexOf("Trident"));
            va = !x && -1 != ya.indexOf("WebKit");
            wa = !x && !va && !ua && "Gecko" == za.product;
          }
          var Aa = x, y = ua, Ba = wa, z = va;

          function Ca() {
            var a = l.document;
            return a ? a.documentMode : void 0;
          }

          var Da;
          a: {
            var Ea = "", Fa;
            if (Aa && l.opera) {
              var Ga = l.opera.version, Ea = "function" == typeof Ga ? Ga() : Ga
            } else {
              if (Ba ? Fa = /rv\:([^\);]+)(\)|;)/ : y ? Fa = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : z && (Fa = /WebKit\/(\S+)/), Fa) {
                var Ha = Fa.exec(xa()), Ea = Ha ? Ha[1] : ""
              }
            }
            if (y) {
              var Ia = Ca();
              if (Ia > parseFloat(Ea)) {
                Da = String(Ia);
                break a;
              }
            }
            Da = Ea;
          }
          var Ja = {};

          function A(a) {
            var b;
            if (!(b = Ja[a])) {
              b = 0;
              for (var c = String(Da).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), g = 0; 0 == b && g < e; g++) {
                var h = c[g] || "", k = d[g] || "", u = RegExp("(\\d*)(\\D*)", "g"), K = RegExp("(\\d*)(\\D*)", "g");
                do {
                  var v = u.exec(h) || ["", "", ""], r = K.exec(k) || ["", "", ""];
                  if (0 == v[0].length && 0 == r[0].length) {
                    break;
                  }
                  b = ta(0 == v[1].length ? 0 : parseInt(v[1], 10), 0 == r[1].length ? 0 : parseInt(r[1], 10)) || ta(0 == v[2].length, 0 == r[2].length) || ta(v[2], r[2]);
                } while (0 == b);
              }
              b = Ja[a] = 0 <= b;
            }
            return b;
          }

          var La = l.document, Ma = La && y ? Ca() || ("CSS1Compat" == La.compatMode ? parseInt(Da, 10) : 5) : void 0;

          function Na(a) {
            Error.captureStackTrace ? Error.captureStackTrace(this, Na) : this.stack = Error().stack || "";
            a && (this.message = String(a));
          }

          s(Na, Error);
          Na.prototype.name = "CustomError";
          function Oa(a, b) {
            b.unshift(a);
            Na.call(this, ka.apply(null, b));
            b.shift();
          }

          s(Oa, Na);
          Oa.prototype.name = "AssertionError";
          function Pa(a, b) {
            throw new Oa("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
          }
          ;
          var Qa = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");

          function Ra(a) {
            if (Sa) {
              Sa = !1;
              var b = l.location;
              if (b) {
                var c = b.href;
                if (c && (c = (c = Ra(c)[3] || null) && decodeURIComponent(c)) && c != b.hostname) {
                  throw Sa = !0, Error();
                }
              }
            }
            return a.match(Qa);
          }

          var Sa = z;

          function Ta(a) {
            var b = [], c = 0, d;
            for (d in a) {
              b[c++] = a[d];
            }
            return b;
          }

          function Ua(a) {
            var b = [], c = 0, d;
            for (d in a) {
              b[c++] = d;
            }
            return b;
          }

          var Va = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

          function Wa(a, b) {
            for (var c, d, e = 1; e < arguments.length; e++) {
              d = arguments[e];
              for (c in d) {
                a[c] = d[c];
              }
              for (var g = 0; g < Va.length; g++) {
                c = Va[g], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
              }
            }
          }
          ;
          var B = Array.prototype, Xa = B.indexOf ? function (a, b, c) {
            return B.indexOf.call(a, b, c);
          } : function (a, b, c) {
            c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
            if (n(a)) {
              return n(b) && 1 == b.length ? a.indexOf(b, c) : -1;
            }
            for (; c < a.length; c++) {
              if (c in a && a[c] === b) {
                return c;
              }
            }
            return -1;
          }, Ya = B.forEach ? function (a, b, c) {
            B.forEach.call(a, b, c);
          } : function (a, b, c) {
            for (var d = a.length, e = n(a) ? a.split("") : a, g = 0; g < d; g++) {
              g in e && b.call(c, e[g], g, a);
            }
          };

          function Za(a) {
            var b;
            a: {
              b = $a;
              for (var c = a.length, d = n(a) ? a.split("") : a, e = 0; e < c; e++) {
                if (e in d && b.call(void 0, d[e], e, a)) {
                  b = e;
                  break a;
                }
              }
              b = -1;
            }
            return 0 > b ? null : n(a) ? a.charAt(b) : a[b];
          }

          function ab(a) {
            return B.concat.apply(B, arguments);
          }

          function bb(a) {
            var b = a.length;
            if (0 < b) {
              for (var c = Array(b), d = 0; d < b; d++) {
                c[d] = a[d];
              }
              return c;
            }
            return [];
          }
          ;
          function cb(a, b) {
            this.O = {};
            this.j = [];
            this.o = 0;
            var c = arguments.length;
            if (1 < c) {
              if (c % 2) {
                throw Error("Uneven number of arguments");
              }
              for (var d = 0; d < c; d += 2) {
                this.set(arguments[d], arguments[d + 1]);
              }
            } else {
              if (a) {
                a instanceof cb ? (c = a.ca(), d = a.N()) : (c = Ua(a), d = Ta(a));
                for (var e = 0; e < c.length; e++) {
                  this.set(c[e], d[e]);
                }
              }
            }
          }

          f = cb.prototype;
          f.N = function () {
            db(this);
            for (var a = [], b = 0; b < this.j.length; b++) {
              a.push(this.O[this.j[b]]);
            }
            return a;
          };
          f.ca = function () {
            db(this);
            return this.j.concat();
          };
          f.wa = function (a) {
            return C(this.O, a);
          };
          f.remove = function (a) {
            return C(this.O, a) ? (delete this.O[a], this.o--, this.j.length > 2 * this.o && db(this), !0) : !1;
          };
          function db(a) {
            if (a.o != a.j.length) {
              for (var b = 0, c = 0; b < a.j.length;) {
                var d = a.j[b];
                C(a.O, d) && (a.j[c++] = d);
                b++;
              }
              a.j.length = c;
            }
            if (a.o != a.j.length) {
              for (var e = {}, c = b = 0; b < a.j.length;) {
                d = a.j[b], C(e, d) || (a.j[c++] = d, e[d] = 1), b++;
              }
              a.j.length = c;
            }
          }

          f.get = function (a, b) {
            return C(this.O, a) ? this.O[a] : b;
          };
          f.set = function (a, b) {
            C(this.O, a) || (this.o++, this.j.push(a));
            this.O[a] = b;
          };
          f.n = function () {
            return new cb(this);
          };
          function C(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b);
          }
          ;
          function eb(a) {
            if ("function" == typeof a.N) {
              return a.N();
            }
            if (n(a)) {
              return a.split("");
            }
            if (ea(a)) {
              for (var b = [], c = a.length, d = 0; d < c; d++) {
                b.push(a[d]);
              }
              return b;
            }
            return Ta(a);
          }

          function D(a, b, c) {
            if ("function" == typeof a.forEach) {
              a.forEach(b, c);
            } else {
              if (ea(a) || n(a)) {
                Ya(a, b, c);
              } else {
                var d;
                if ("function" == typeof a.ca) {
                  d = a.ca();
                } else {
                  if ("function" != typeof a.N) {
                    if (ea(a) || n(a)) {
                      d = [];
                      for (var e = a.length, g = 0; g < e; g++) {
                        d.push(g);
                      }
                    } else {
                      d = Ua(a);
                    }
                  } else {
                    d = void 0;
                  }
                }
                for (var e = eb(a), g = e.length, h = 0; h < g; h++) {
                  b.call(c, e[h], d && d[h], a);
                }
              }
            }
          }
          ;
          function E(a, b) {
            var c;
            if (a instanceof E) {
              this.D = void 0 !== b ? b : a.D, fb(this, a.oa), c = a.eb, F(this), this.eb = c, gb(this, a.ja), hb(this, a.Ca), ib(this, a.I), jb(this, a.R.n()), c = a.Na, F(this), this.Na = c;
            } else {
              if (a && (c = Ra(String(a)))) {
                this.D = !!b;
                fb(this, c[1] || "", !0);
                var d = c[2] || "";
                F(this);
                this.eb = d ? decodeURIComponent(d) : "";
                gb(this, c[3] || "", !0);
                hb(this, c[4]);
                ib(this, c[5] || "", !0);
                jb(this, c[6] || "", !0);
                c = c[7] || "";
                F(this);
                this.Na = c ? decodeURIComponent(c) : "";
              } else {
                this.D = !!b, this.R = new kb(null, 0, this.D);
              }
            }
          }

          f = E.prototype;
          f.oa = "";
          f.eb = "";
          f.ja = "";
          f.Ca = null;
          f.I = "";
          f.Na = "";
          f.oc = !1;
          f.D = !1;
          f.toString = function () {
            var a = [], b = this.oa;
            b && a.push(lb(b, mb), ":");
            if (b = this.ja) {
              a.push("//");
              var c = this.eb;
              c && a.push(lb(c, mb), "@");
              a.push(encodeURIComponent(String(b)));
              b = this.Ca;
              null != b && a.push(":", String(b));
            }
            if (b = this.I) {
              this.ja && "/" != b.charAt(0) && a.push("/"), a.push(lb(b, "/" == b.charAt(0) ? nb : ob));
            }
            (b = this.R.toString()) && a.push("?", b);
            (b = this.Na) && a.push("#", lb(b, pb));
            return a.join("");
          };
          f.n = function () {
            return new E(this);
          };
          function fb(a, b, c) {
            F(a);
            a.oa = c ? b ? decodeURIComponent(b) : "" : b;
            a.oa && (a.oa = a.oa.replace(/:$/, ""));
          }

          function gb(a, b, c) {
            F(a);
            a.ja = c ? b ? decodeURIComponent(b) : "" : b;
          }

          function hb(a, b) {
            F(a);
            if (b) {
              b = Number(b);
              if (isNaN(b) || 0 > b) {
                throw Error("Bad port number " + b);
              }
              a.Ca = b;
            } else {
              a.Ca = null;
            }
          }

          function ib(a, b, c) {
            F(a);
            a.I = c ? b ? decodeURIComponent(b) : "" : b;
          }

          function jb(a, b, c) {
            F(a);
            b instanceof kb ? (a.R = b, a.R.ub(a.D)) : (c || (b = lb(b, qb)), a.R = new kb(b, 0, a.D));
          }

          function G(a, b, c) {
            F(a);
            a.R.set(b, c);
          }

          function rb(a, b, c) {
            F(a);
            m(c) || (c = [String(c)]);
            sb(a.R, b, c);
          }

          function H(a) {
            F(a);
            G(a, "zx", sa());
            return a;
          }

          function F(a) {
            if (a.oc) {
              throw Error("Tried to modify a read-only Uri");
            }
          }

          f.ub = function (a) {
            this.D = a;
            this.R && this.R.ub(a);
            return this;
          };
          function tb(a) {
            return a instanceof E ? a.n() : new E(a, void 0);
          }

          function ub(a, b, c, d) {
            var e = new E(null, void 0);
            a && fb(e, a);
            b && gb(e, b);
            c && hb(e, c);
            d && ib(e, d);
            return e;
          }

          function lb(a, b) {
            return n(a) ? encodeURI(a).replace(b, vb) : null;
          }

          function vb(a) {
            a = a.charCodeAt(0);
            return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
          }

          var mb = /[#\/\?@]/g, ob = /[\#\?:]/g, nb = /[\#\?]/g, qb = /[\#\?@]/g, pb = /#/g;

          function kb(a, b, c) {
            this.C = a || null;
            this.D = !!c;
          }

          function I(a) {
            if (!a.h && (a.h = new cb, a.o = 0, a.C)) {
              for (var b = a.C.split("&"), c = 0; c < b.length; c++) {
                var d = b[c].indexOf("="), e = null, g = null;
                0 <= d ? (e = b[c].substring(0, d), g = b[c].substring(d + 1)) : e = b[c];
                e = decodeURIComponent(e.replace(/\+/g, " "));
                e = J(a, e);
                a.add(e, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "");
              }
            }
          }

          f = kb.prototype;
          f.h = null;
          f.o = null;
          f.add = function (a, b) {
            I(this);
            this.C = null;
            a = J(this, a);
            var c = this.h.get(a);
            c || this.h.set(a, c = []);
            c.push(b);
            this.o++;
            return this;
          };
          f.remove = function (a) {
            I(this);
            a = J(this, a);
            return this.h.wa(a) ? (this.C = null, this.o -= this.h.get(a).length, this.h.remove(a)) : !1;
          };
          f.wa = function (a) {
            I(this);
            a = J(this, a);
            return this.h.wa(a);
          };
          f.ca = function () {
            I(this);
            for (var a = this.h.N(), b = this.h.ca(), c = [], d = 0; d < b.length; d++) {
              for (var e = a[d], g = 0; g < e.length; g++) {
                c.push(b[d]);
              }
            }
            return c;
          };
          f.N = function (a) {
            I(this);
            var b = [];
            if (n(a)) {
              this.wa(a) && (b = ab(b, this.h.get(J(this, a))));
            } else {
              a = this.h.N();
              for (var c = 0; c < a.length; c++) {
                b = ab(b, a[c]);
              }
            }
            return b;
          };
          f.set = function (a, b) {
            I(this);
            this.C = null;
            a = J(this, a);
            this.wa(a) && (this.o -= this.h.get(a).length);
            this.h.set(a, [b]);
            this.o++;
            return this;
          };
          f.get = function (a, b) {
            var c = a ? this.N(a) : [];
            return 0 < c.length ? String(c[0]) : b;
          };
          function sb(a, b, c) {
            a.remove(b);
            0 < c.length && (a.C = null, a.h.set(J(a, b), bb(c)), a.o += c.length);
          }

          f.toString = function () {
            if (this.C) {
              return this.C;
            }
            if (!this.h) {
              return "";
            }
            for (var a = [], b = this.h.ca(), c = 0; c < b.length; c++) {
              for (var d = b[c], e = encodeURIComponent(String(d)), d = this.N(d), g = 0; g < d.length; g++) {
                var h = e;
                "" !== d[g] && (h += "=" + encodeURIComponent(String(d[g])));
                a.push(h);
              }
            }
            return this.C = a.join("&");
          };
          f.n = function () {
            var a = new kb;
            a.C = this.C;
            this.h && (a.h = this.h.n(), a.o = this.o);
            return a;
          };
          function J(a, b) {
            var c = String(b);
            a.D && (c = c.toLowerCase());
            return c;
          }

          f.ub = function (a) {
            a && !this.D && (I(this), this.C = null, D(this.h, function (a, c) {
              var d = c.toLowerCase();
              c != d && (this.remove(c), sb(this, d, a));
            }, this));
            this.D = a;
          };
          function wb(a) {
            a = String(a);
            if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) {
              try {
                return eval("(" + a + ")");
              } catch (b) {
              }
            }
            throw Error("Invalid JSON string: " + a);
          }

          function xb(a) {
            return eval("(" + a + ")");
          }

          function yb(a) {
            var b = [];
            zb(new Ab, a, b);
            return b.join("");
          }

          function Ab() {
            this.Ya = void 0;
          }

          function zb(a, b, c) {
            switch (typeof b) {
              case "string":
                Bb(b, c);
                break;
              case "number":
                c.push(isFinite(b) && !isNaN(b) ? b : "null");
                break;
              case "boolean":
                c.push(b);
                break;
              case "undefined":
                c.push("null");
                break;
              case "object":
                if (null == b) {
                  c.push("null");
                  break;
                }
                if (m(b)) {
                  var d = b.length;
                  c.push("[");
                  for (var e = "", g = 0; g < d; g++) {
                    c.push(e), e = b[g], zb(a, a.Ya ? a.Ya.call(b, String(g), e) : e, c), e = ",";
                  }
                  c.push("]");
                  break;
                }
                c.push("{");
                d = "";
                for (g in b) {
                  Object.prototype.hasOwnProperty.call(b, g) && (e = b[g], "function" != typeof e && (c.push(d), Bb(g, c), c.push(":"), zb(a, a.Ya ? a.Ya.call(b, g, e) : e, c), d = ","));
                }
                c.push("}");
                break;
              case "function":
                break;
              default:
                throw Error("Unknown type: " + typeof b);
                ;
            }
          }

          var Cb = {
            '"': '\\"',
            "\\": "\\\\",
            "/": "\\/",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\u000b"
          }, Db = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;

          function Bb(a, b) {
            b.push('"', a.replace(Db, function (a) {
              if (a in Cb) {
                return Cb[a];
              }
              var b = a.charCodeAt(0), e = "\\u";
              16 > b ? e += "000" : 256 > b ? e += "00" : 4096 > b && (e += "0");
              return Cb[a] = e + b.toString(16);
            }), '"');
          }
          ;
          function Eb(a) {
            return Fb(a || arguments.callee.caller, []);
          }

          function Fb(a, b) {
            var c = [];
            if (0 <= Xa(b, a)) {
              c.push("[...circular reference...]");
            } else {
              if (a && 50 > b.length) {
                c.push(Gb(a) + "(");
                for (var d = a.arguments, e = 0; e < d.length; e++) {
                  0 < e && c.push(", ");
                  var g;
                  g = d[e];
                  switch (typeof g) {
                    case "object":
                      g = g ? "object" : "null";
                      break;
                    case "string":
                      break;
                    case "number":
                      g = String(g);
                      break;
                    case "boolean":
                      g = g ? "true" : "false";
                      break;
                    case "function":
                      g = (g = Gb(g)) ? g : "[fn]";
                      break;
                    default:
                      g = typeof g;
                  }
                  40 < g.length && (g = g.substr(0, 40) + "...");
                  c.push(g);
                }
                b.push(a);
                c.push(")\n");
                try {
                  c.push(Fb(a.caller, b));
                } catch (h) {
                  c.push("[exception trying to get caller]\n");
                }
              } else {
                a ? c.push("[...long stack...]") : c.push("[end]");
              }
            }
            return c.join("");
          }

          function Gb(a) {
            if (Hb[a]) {
              return Hb[a];
            }
            a = String(a);
            if (!Hb[a]) {
              var b = /function ([^\(]+)/.exec(a);
              Hb[a] = b ? b[1] : "[Anonymous]";
            }
            return Hb[a];
          }

          var Hb = {};

          function Ib(a, b, c, d, e) {
            this.reset(a, b, c, d, e);
          }

          Ib.prototype.Fb = null;
          Ib.prototype.Eb = null;
          var Jb = 0;
          Ib.prototype.reset = function (a, b, c, d, e) {
            "number" == typeof e || Jb++;
            d || q();
            this.Aa = a;
            this.qc = b;
            delete this.Fb;
            delete this.Eb;
          };
          Ib.prototype.$b = function (a) {
            this.Aa = a;
          };
          function L(a) {
            this.rc = a;
          }

          L.prototype.Sa = null;
          L.prototype.Aa = null;
          L.prototype.jb = null;
          L.prototype.Jb = null;
          function Kb(a, b) {
            this.name = a;
            this.value = b;
          }

          Kb.prototype.toString = function () {
            return this.name;
          };
          var Lb = new Kb("SEVERE", 1E3), Mb = new Kb("WARNING", 900), Nb = new Kb("INFO", 800), Ob = new Kb("CONFIG", 700), Pb = new Kb("FINE", 500);
          f = L.prototype;
          f.getParent = function () {
            return this.Sa;
          };
          f.$b = function (a) {
            this.Aa = a;
          };
          function Qb(a) {
            if (a.Aa) {
              return a.Aa;
            }
            if (a.Sa) {
              return Qb(a.Sa);
            }
            Pa("Root logger has no level set.");
            return null;
          }

          f.log = function (a, b, c) {
            if (a.value >= Qb(this).value) {
              for (fa(b) && (b = b()), a = this.mc(a, b, c), b = "log:" + a.qc, l.console && (l.console.timeStamp ? l.console.timeStamp(b) : l.console.markTimeline && l.console.markTimeline(b)), l.msWriteProfilerMark && l.msWriteProfilerMark(b), b = this; b;) {
                c = b;
                var d = a;
                if (c.Jb) {
                  for (var e = 0, g = void 0; g = c.Jb[e]; e++) {
                    g(d);
                  }
                }
                b = b.getParent();
              }
            }
          };
          f.mc = function (a, b, c) {
            var d = new Ib(a, String(b), this.rc);
            if (c) {
              d.Fb = c;
              var e;
              var g = arguments.callee.caller;
              try {
                var h;
                var k = ba("window.location.href");
                if (n(c)) {
                  h = {
                    message: c,
                    name: "Unknown error",
                    lineNumber: "Not available",
                    fileName: k,
                    stack: "Not available"
                  };
                } else {
                  var u, K, v = !1;
                  try {
                    u = c.lineNumber || c.Ic || "Not available";
                  } catch (r) {
                    u = "Not available", v = !0;
                  }
                  try {
                    K = c.fileName || c.filename || c.sourceURL || l.$googDebugFname || k;
                  } catch (Ka) {
                    K = "Not available", v = !0;
                  }
                  h = !v && c.lineNumber && c.fileName && c.stack && c.message && c.name ? c : {
                    message: c.message || "Not available",
                    name: c.name || "UnknownError",
                    lineNumber: u,
                    fileName: K,
                    stack: c.stack || "Not available"
                  };
                }
                e = "Message: " + la(h.message) + '\nUrl: <a href="view-source:' + h.fileName + '" target="_new">' + h.fileName + "</a>\nLine: " + h.lineNumber + "\n\nBrowser stack:\n" + la(h.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + la(Eb(g) + "-> ");
              } catch (w) {
                e = "Exception trying to expose exception! You win, we lose. " + w;
              }
              d.Eb = e;
            }
            return d;
          };
          f.J = function (a, b) {
            this.log(Lb, a, b);
          };
          f.Z = function (a, b) {
            this.log(Mb, a, b);
          };
          f.info = function (a, b) {
            this.log(Nb, a, b);
          };
          var Rb = {}, Sb = null;

          function Tb(a) {
            Sb || (Sb = new L(""), Rb[""] = Sb, Sb.$b(Ob));
            var b;
            if (!(b = Rb[a])) {
              b = new L(a);
              var c = a.lastIndexOf("."), d = a.substr(c + 1), c = Tb(a.substr(0, c));
              c.jb || (c.jb = {});
              c.jb[d] = b;
              b.Sa = c;
              Rb[a] = b;
            }
            return b;
          }
          ;
          function M(a, b) {
            a && a.log(Pb, b, void 0);
          }
          ;
          function N() {
            this.r = Tb("goog.net.BrowserChannel");
          }

          function Ub(a, b, c, d) {
            a.info("XMLHTTP TEXT (" + b + "): " + Vb(a, c) + (d ? " " + d : ""));
          }

          N.prototype.debug = function (a) {
            this.info(a);
          };
          function Wb(a, b, c) {
            a.J((c || "Exception") + b);
          }

          N.prototype.info = function (a) {
            var b = this.r;
            b && b.info(a, void 0);
          };
          N.prototype.Z = function (a) {
            var b = this.r;
            b && b.Z(a, void 0);
          };
          N.prototype.J = function (a) {
            var b = this.r;
            b && b.J(a, void 0);
          };
          function Vb(a, b) {
            if (!b || b == Xb) {
              return b;
            }
            try {
              var c = xb(b);
              if (c) {
                for (var d = 0; d < c.length; d++) {
                  if (m(c[d])) {
                    var e = c[d];
                    if (!(2 > e.length)) {
                      var g = e[1];
                      if (m(g) && !(1 > g.length)) {
                        var h = g[0];
                        if ("noop" != h && "stop" != h) {
                          for (var k = 1; k < g.length; k++) {
                            g[k] = "";
                          }
                        }
                      }
                    }
                  }
                }
              }
              return yb(c);
            } catch (u) {
              return a.debug("Exception parsing expected JS array - probably was not JS"), b;
            }
          }
          ;
          function Yb(a, b) {
            this.P = b ? xb : wb;
          }

          Yb.prototype.parse = function (a) {
            return this.P(a);
          };
          function O() {
            0 != Zb && ($b[this[ga] || (this[ga] = ++ha)] = this);
          }

          var Zb = 0, $b = {};
          O.prototype.mb = !1;
          O.prototype.Ja = function () {
            if (!this.mb && (this.mb = !0, this.u(), 0 != Zb)) {
              var a = this[ga] || (this[ga] = ++ha);
              delete $b[a];
            }
          };
          O.prototype.u = function () {
            if (this.Pb) {
              for (; this.Pb.length;) {
                this.Pb.shift()();
              }
            }
          };
          var ac = "closure_listenable_" + (1E6 * Math.random() | 0);

          function bc(a) {
            try {
              return !(!a || !a[ac]);
            } catch (b) {
              return !1;
            }
          }

          var cc = 0;

          function dc(a, b, c, d, e) {
            this.fa = a;
            this.Ua = null;
            this.src = b;
            this.type = c;
            this.capture = !!d;
            this.Oa = e;
            this.key = ++cc;
            this.na = this.Ia = !1;
          }

          function ec(a) {
            a.na = !0;
            a.fa = null;
            a.Ua = null;
            a.src = null;
            a.Oa = null;
          }
          ;
          function P(a) {
            this.src = a;
            this.s = {};
            this.Ga = 0;
          }

          P.prototype.add = function (a, b, c, d, e) {
            var g = this.s[a];
            g || (g = this.s[a] = [], this.Ga++);
            var h = fc(g, b, d, e);
            -1 < h ? (a = g[h], c || (a.Ia = !1)) : (a = new dc(b, this.src, a, !!d, e), a.Ia = c, g.push(a));
            return a;
          };
          P.prototype.remove = function (a, b, c, d) {
            if (!(a in this.s)) {
              return !1;
            }
            var e = this.s[a];
            b = fc(e, b, c, d);
            return -1 < b ? (ec(e[b]), B.splice.call(e, b, 1), 0 == e.length && (delete this.s[a], this.Ga--), !0) : !1;
          };
          function gc(a, b) {
            var c = b.type;
            if (!(c in a.s)) {
              return !1;
            }
            var d = a.s[c], e = Xa(d, b), g;
            (g = 0 <= e) && B.splice.call(d, e, 1);
            g && (ec(b), 0 == a.s[c].length && (delete a.s[c], a.Ga--));
            return g;
          }

          P.prototype.Xa = function (a) {
            var b = 0, c;
            for (c in this.s) {
              if (!a || c == a) {
                for (var d = this.s[c], e = 0; e < d.length; e++) {
                  ++b, ec(d[e]);
                }
                delete this.s[c];
                this.Ga--;
              }
            }
            return b;
          };
          P.prototype.ya = function (a, b, c, d) {
            a = this.s[a];
            var e = -1;
            a && (e = fc(a, b, c, d));
            return -1 < e ? a[e] : null;
          };
          function fc(a, b, c, d) {
            for (var e = 0; e < a.length; ++e) {
              var g = a[e];
              if (!g.na && g.fa == b && g.capture == !!c && g.Oa == d) {
                return e;
              }
            }
            return -1;
          }
          ;
          var hc = !y || y && 9 <= Ma, ic = y && !A("9");
          !z || A("528");
          Ba && A("1.9b") || y && A("8") || Aa && A("9.5") || z && A("528");
          Ba && !A("8") || y && A("9");
          function Q(a, b) {
            this.type = a;
            this.currentTarget = this.target = b;
          }

          f = Q.prototype;
          f.u = function () {
          };
          f.Ja = function () {
          };
          f.ga = !1;
          f.defaultPrevented = !1;
          f.Yb = !0;
          f.preventDefault = function () {
            this.defaultPrevented = !0;
            this.Yb = !1;
          };
          function jc(a) {
            jc[" "](a);
            return a;
          }

          jc[" "] = ca;
          function kc(a, b) {
            Q.call(this, a ? a.type : "");
            this.relatedTarget = this.currentTarget = this.target = null;
            this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
            this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
            this.Db = this.state = null;
            if (a) {
              var c = this.type = a.type;
              this.target = a.target || a.srcElement;
              this.currentTarget = b;
              var d = a.relatedTarget;
              if (d) {
                if (Ba) {
                  var e;
                  a: {
                    try {
                      jc(d.nodeName);
                      e = !0;
                      break a;
                    } catch (g) {
                    }
                    e = !1;
                  }
                  e || (d = null);
                }
              } else {
                "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
              }
              this.relatedTarget = d;
              this.offsetX = z || void 0 !== a.offsetX ? a.offsetX : a.layerX;
              this.offsetY = z || void 0 !== a.offsetY ? a.offsetY : a.layerY;
              this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
              this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
              this.screenX = a.screenX || 0;
              this.screenY = a.screenY || 0;
              this.button = a.button;
              this.keyCode = a.keyCode || 0;
              this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
              this.ctrlKey = a.ctrlKey;
              this.altKey = a.altKey;
              this.shiftKey = a.shiftKey;
              this.metaKey = a.metaKey;
              this.state = a.state;
              this.Db = a;
              a.defaultPrevented && this.preventDefault();
              delete this.ga;
            }
          }

          s(kc, Q);
          kc.prototype.preventDefault = function () {
            kc.pa.preventDefault.call(this);
            var a = this.Db;
            if (a.preventDefault) {
              a.preventDefault();
            } else {
              if (a.returnValue = !1, ic) {
                try {
                  if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
                    a.keyCode = -1;
                  }
                } catch (b) {
                }
              }
            }
          };
          kc.prototype.u = function () {
          };
          var lc = "closure_lm_" + (1E6 * Math.random() | 0), mc = {}, nc = 0;

          function oc(a, b, c, d, e) {
            if (m(b)) {
              for (var g = 0; g < b.length; g++) {
                oc(a, b[g], c, d, e);
              }
              return null;
            }
            c = pc(c);
            if (bc(a)) {
              a = a.Ra(b, c, d, e);
            } else {
              if (!b) {
                throw Error("Invalid event type");
              }
              var g = !!d, h = qc(a);
              h || (a[lc] = h = new P(a));
              c = h.add(b, c, !1, d, e);
              c.Ua || (d = rc(), c.Ua = d, d.src = a, d.fa = c, a.addEventListener ? a.addEventListener(b, d, g) : a.attachEvent(b in mc ? mc[b] : mc[b] = "on" + b, d), nc++);
              a = c;
            }
            return a;
          }

          function rc() {
            var a = sc, b = hc ? function (c) {
              return a.call(b.src, b.fa, c);
            } : function (c) {
              c = a.call(b.src, b.fa, c);
              if (!c) {
                return c;
              }
            };
            return b;
          }

          function tc(a, b, c, d, e) {
            if (m(b)) {
              for (var g = 0; g < b.length; g++) {
                tc(a, b[g], c, d, e);
              }
            } else {
              c = pc(c), bc(a) ? a.vb(b, c, d, e) : a && (a = qc(a)) && (b = a.ya(b, c, !!d, e)) && uc(b);
            }
          }

          function uc(a) {
            if ("number" == typeof a || !a || a.na) {
              return !1;
            }
            var b = a.src;
            if (bc(b)) {
              return gc(b.W, a);
            }
            var c = a.type, d = a.Ua;
            b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent && b.detachEvent(c in mc ? mc[c] : mc[c] = "on" + c, d);
            nc--;
            (c = qc(b)) ? (gc(c, a), 0 == c.Ga && (c.src = null, b[lc] = null)) : ec(a);
            return !0;
          }

          function vc(a, b, c, d) {
            var e = 1;
            if (a = qc(a)) {
              if (b = a.s[b]) {
                for (b = bb(b), a = 0; a < b.length; a++) {
                  var g = b[a];
                  g && g.capture == c && !g.na && (e &= !1 !== wc(g, d));
                }
              }
            }
            return Boolean(e);
          }

          function wc(a, b) {
            var c = a.fa, d = a.Oa || a.src;
            a.Ia && uc(a);
            return c.call(d, b);
          }

          function sc(a, b) {
            if (a.na) {
              return !0;
            }
            if (!hc) {
              var c = b || ba("window.event"), d = new kc(c, this), e = !0;
              if (!(0 > c.keyCode || void 0 != c.returnValue)) {
                a: {
                  var g = !1;
                  if (0 == c.keyCode) {
                    try {
                      c.keyCode = -1;
                      break a;
                    } catch (h) {
                      g = !0;
                    }
                  }
                  if (g || void 0 == c.returnValue) {
                    c.returnValue = !0;
                  }
                }
                c = [];
                for (g = d.currentTarget; g; g = g.parentNode) {
                  c.push(g);
                }
                for (var g = a.type, k = c.length - 1; !d.ga && 0 <= k; k--) {
                  d.currentTarget = c[k], e &= vc(c[k], g, !0, d);
                }
                for (k = 0; !d.ga && k < c.length; k++) {
                  d.currentTarget = c[k], e &= vc(c[k], g, !1, d);
                }
              }
              return e;
            }
            return wc(a, new kc(b, this));
          }

          function qc(a) {
            a = a[lc];
            return a instanceof P ? a : null;
          }

          var xc = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

          function pc(a) {
            return fa(a) ? a : a[xc] || (a[xc] = function (b) {
              return a.handleEvent(b);
            });
          }
          ;
          function R() {
            O.call(this);
            this.W = new P(this);
            this.fc = this;
          }

          s(R, O);
          R.prototype[ac] = !0;
          f = R.prototype;
          f.tb = null;
          f.addEventListener = function (a, b, c, d) {
            oc(this, a, b, c, d);
          };
          f.removeEventListener = function (a, b, c, d) {
            tc(this, a, b, c, d);
          };
          f.dispatchEvent = function (a) {
            var b, c = this.tb;
            if (c) {
              for (b = []; c; c = c.tb) {
                b.push(c);
              }
            }
            var c = this.fc, d = a.type || a;
            if (n(a)) {
              a = new Q(a, c);
            } else {
              if (a instanceof Q) {
                a.target = a.target || c;
              } else {
                var e = a;
                a = new Q(d, c);
                Wa(a, e);
              }
            }
            var e = !0, g;
            if (b) {
              for (var h = b.length - 1; !a.ga && 0 <= h; h--) {
                g = a.currentTarget = b[h], e = yc(g, d, !0, a) && e;
              }
            }
            a.ga || (g = a.currentTarget = c, e = yc(g, d, !0, a) && e, a.ga || (e = yc(g, d, !1, a) && e));
            if (b) {
              for (h = 0; !a.ga && h < b.length; h++) {
                g = a.currentTarget = b[h], e = yc(g, d, !1, a) && e;
              }
            }
            return e;
          };
          f.u = function () {
            R.pa.u.call(this);
            this.W && this.W.Xa(void 0);
            this.tb = null;
          };
          f.Ra = function (a, b, c, d) {
            return this.W.add(String(a), b, !1, c, d);
          };
          f.vb = function (a, b, c, d) {
            return this.W.remove(String(a), b, c, d);
          };
          function yc(a, b, c, d) {
            b = a.W.s[String(b)];
            if (!b) {
              return !0;
            }
            b = bb(b);
            for (var e = !0, g = 0; g < b.length; ++g) {
              var h = b[g];
              if (h && !h.na && h.capture == c) {
                var k = h.fa, u = h.Oa || h.src;
                h.Ia && gc(a.W, h);
                e = !1 !== k.call(u, d) && e;
              }
            }
            return e && !1 != d.Yb;
          }

          f.ya = function (a, b, c, d) {
            return this.W.ya(String(a), b, c, d);
          };
          function zc(a, b) {
            R.call(this);
            this.ea = a || 1;
            this.ra = b || l;
            this.ib = p(this.Gc, this);
            this.sb = q();
          }

          s(zc, R);
          f = zc.prototype;
          f.enabled = !1;
          f.l = null;
          f.setInterval = function (a) {
            this.ea = a;
            this.l && this.enabled ? (this.stop(), this.start()) : this.l && this.stop();
          };
          f.Gc = function () {
            if (this.enabled) {
              var a = q() - this.sb;
              0 < a && a < 0.8 * this.ea ? this.l = this.ra.setTimeout(this.ib, this.ea - a) : (this.l && (this.ra.clearTimeout(this.l), this.l = null), this.dispatchEvent(Ac), this.enabled && (this.l = this.ra.setTimeout(this.ib, this.ea), this.sb = q()));
            }
          };
          f.start = function () {
            this.enabled = !0;
            this.l || (this.l = this.ra.setTimeout(this.ib, this.ea), this.sb = q());
          };
          f.stop = function () {
            this.enabled = !1;
            this.l && (this.ra.clearTimeout(this.l), this.l = null);
          };
          f.u = function () {
            zc.pa.u.call(this);
            this.stop();
            delete this.ra;
          };
          var Ac = "tick";

          function Bc(a, b, c) {
            if (fa(a)) {
              c && (a = p(a, c));
            } else {
              if (a && "function" == typeof a.handleEvent) {
                a = p(a.handleEvent, a);
              } else {
                throw Error("Invalid listener argument");
              }
            }
            return 2147483647 < b ? -1 : l.setTimeout(a, b || 0);
          }
          ;
          function Cc() {
          }

          Cc.prototype.Ab = null;
          function Dc(a) {
            var b;
            (b = a.Ab) || (b = {}, Ec(a) && (b[0] = !0, b[1] = !0), b = a.Ab = b);
            return b;
          }
          ;
          var Fc;

          function Gc() {
          }

          s(Gc, Cc);
          function Hc(a) {
            return (a = Ec(a)) ? new ActiveXObject(a) : new XMLHttpRequest;
          }

          function Ec(a) {
            if (!a.Kb && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
              for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                var d = b[c];
                try {
                  return new ActiveXObject(d), a.Kb = d;
                } catch (e) {
                }
              }
              throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
            }
            return a.Kb;
          }

          Fc = new Gc;
          function Ic(a) {
            R.call(this);
            this.headers = new cb;
            this.gb = a || null;
            this.T = !1;
            this.fb = this.f = null;
            this.Mb = this.Qa = "";
            this.ka = 0;
            this.q = "";
            this.da = this.qb = this.Pa = this.nb = !1;
            this.Fa = 0;
            this.bb = null;
            this.Xb = Jc;
            this.cb = this.dc = !1;
          }

          s(Ic, R);
          var Jc = "";
          Ic.prototype.r = Tb("goog.net.XhrIo");
          var Kc = /^https?$/i, Lc = ["POST", "PUT"];
          f = Ic.prototype;
          f.send = function (a, b, c, d) {
            if (this.f) {
              throw Error("[goog.net.XhrIo] Object is active with another request=" + this.Qa + "; newUri=" + a);
            }
            b = b ? b.toUpperCase() : "GET";
            this.Qa = a;
            this.q = "";
            this.ka = 0;
            this.Mb = b;
            this.nb = !1;
            this.T = !0;
            this.f = this.gb ? Hc(this.gb) : Hc(Fc);
            this.fb = this.gb ? Dc(this.gb) : Dc(Fc);
            this.f.onreadystatechange = p(this.Qb, this);
            try {
              M(this.r, S(this, "Opening Xhr")), this.qb = !0, this.f.open(b, a, !0), this.qb = !1;
            } catch (e) {
              M(this.r, S(this, "Error opening Xhr: " + e.message));
              Mc(this, e);
              return;
            }
            a = c || "";
            var g = this.headers.n();
            d && D(d, function (a, b) {
              g.set(b, a);
            });
            d = Za(g.ca());
            c = l.FormData && a instanceof l.FormData;
            !(0 <= Xa(Lc, b)) || d || c || g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
            D(g, function (a, b) {
              this.f.setRequestHeader(b, a);
            }, this);
            this.Xb && (this.f.responseType = this.Xb);
            "withCredentials" in this.f && (this.f.withCredentials = this.dc);
            try {
              Nc(this), 0 < this.Fa && (this.cb = Oc(this.f), M(this.r, S(this, "Will abort after " + this.Fa + "ms if incomplete, xhr2 " + this.cb)), this.cb ? (this.f.timeout = this.Fa, this.f.ontimeout = p(this.qa, this)) : this.bb = Bc(this.qa, this.Fa, this)), M(this.r, S(this, "Sending request")), this.Pa = !0, this.f.send(a), this.Pa = !1;
            } catch (h) {
              M(this.r, S(this, "Send error: " + h.message)), Mc(this, h);
            }
          };
          function Oc(a) {
            return y && A(9) && "number" == typeof a.timeout && void 0 !== a.ontimeout;
          }

          function $a(a) {
            return "content-type" == a.toLowerCase();
          }

          f.qa = function () {
            "undefined" != typeof aa && this.f && (this.q = "Timed out after " + this.Fa + "ms, aborting", this.ka = 8, M(this.r, S(this, this.q)), this.dispatchEvent("timeout"), this.abort(8));
          };
          function Mc(a, b) {
            a.T = !1;
            a.f && (a.da = !0, a.f.abort(), a.da = !1);
            a.q = b;
            a.ka = 5;
            Pc(a);
            Qc(a);
          }

          function Pc(a) {
            a.nb || (a.nb = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"));
          }

          f.abort = function (a) {
            this.f && this.T && (M(this.r, S(this, "Aborting")), this.T = !1, this.da = !0, this.f.abort(), this.da = !1, this.ka = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Qc(this));
          };
          f.u = function () {
            this.f && (this.T && (this.T = !1, this.da = !0, this.f.abort(), this.da = !1), Qc(this, !0));
            Ic.pa.u.call(this);
          };
          f.Qb = function () {
            this.mb || (this.qb || this.Pa || this.da ? Rc(this) : this.uc());
          };
          f.uc = function () {
            Rc(this);
          };
          function Rc(a) {
            if (a.T && "undefined" != typeof aa) {
              if (a.fb[1] && 4 == T(a) && 2 == Sc(a)) {
                M(a.r, S(a, "Local request error detected and ignored"));
              } else {
                if (a.Pa && 4 == T(a)) {
                  Bc(a.Qb, 0, a);
                } else {
                  if (a.dispatchEvent("readystatechange"), 4 == T(a)) {
                    M(a.r, S(a, "Request complete"));
                    a.T = !1;
                    try {
                      var b = Sc(a), c, d;
                      a: {
                        switch (b) {
                          case 200:
                            ;
                          case 201:
                            ;
                          case 202:
                            ;
                          case 204:
                            ;
                          case 206:
                            ;
                          case 304:
                            ;
                          case 1223:
                            d = !0;
                            break a;
                          default:
                            d = !1;
                        }
                      }
                      if (!(c = d)) {
                        var e;
                        if (e = 0 === b) {
                          var g = Ra(String(a.Qa))[1] || null;
                          if (!g && self.location) {
                            var h = self.location.protocol, g = h.substr(0, h.length - 1)
                          }
                          e = !Kc.test(g ? g.toLowerCase() : "");
                        }
                        c = e;
                      }
                      if (c) {
                        a.dispatchEvent("complete"), a.dispatchEvent("success");
                      } else {
                        a.ka = 6;
                        var k;
                        try {
                          k = 2 < T(a) ? a.f.statusText : "";
                        } catch (u) {
                          M(a.r, "Can not get status: " + u.message), k = "";
                        }
                        a.q = k + " [" + Sc(a) + "]";
                        Pc(a);
                      }
                    } finally {
                      Qc(a);
                    }
                  }
                }
              }
            }
          }

          function Qc(a, b) {
            if (a.f) {
              Nc(a);
              var c = a.f, d = a.fb[0] ? ca : null;
              a.f = null;
              a.fb = null;
              b || a.dispatchEvent("ready");
              try {
                c.onreadystatechange = d;
              } catch (e) {
                (c = a.r) && c.J("Problem encountered resetting onreadystatechange: " + e.message, void 0);
              }
            }
          }

          function Nc(a) {
            a.f && a.cb && (a.f.ontimeout = null);
            "number" == typeof a.bb && (l.clearTimeout(a.bb), a.bb = null);
          }

          f.isActive = function () {
            return !!this.f;
          };
          function T(a) {
            return a.f ? a.f.readyState : 0;
          }

          function Sc(a) {
            try {
              return 2 < T(a) ? a.f.status : -1;
            } catch (b) {
              return (a = a.r) && a.Z("Can not get status: " + b.message, void 0), -1;
            }
          }

          function Tc(a) {
            try {
              return a.f ? a.f.responseText : "";
            } catch (b) {
              return M(a.r, "Can not get responseText: " + b.message), "";
            }
          }

          f.Ib = function () {
            return n(this.q) ? this.q : String(this.q);
          };
          function S(a, b) {
            return b + " [" + a.Mb + " " + a.Qa + " " + Sc(a) + "]";
          }
          ;
          function Uc() {
            this.Wb = q();
          }

          new Uc;
          Uc.prototype.set = function (a) {
            this.Wb = a;
          };
          Uc.prototype.reset = function () {
            this.set(q());
          };
          Uc.prototype.get = function () {
            return this.Wb;
          };
          function Vc(a) {
            O.call(this);
            this.e = a;
            this.j = {};
          }

          s(Vc, O);
          var Wc = [];
          f = Vc.prototype;
          f.Ra = function (a, b, c, d) {
            m(b) || (Wc[0] = b, b = Wc);
            for (var e = 0; e < b.length; e++) {
              var g = oc(a, b[e], c || this.handleEvent, d || !1, this.e || this);
              if (!g) {
                break;
              }
              this.j[g.key] = g;
            }
            return this;
          };
          f.vb = function (a, b, c, d, e) {
            if (m(b)) {
              for (var g = 0; g < b.length; g++) {
                this.vb(a, b[g], c, d, e);
              }
            } else {
              c = c || this.handleEvent, e = e || this.e || this, c = pc(c), d = !!d, b = bc(a) ? a.ya(b, c, d, e) : a ? (a = qc(a)) ? a.ya(b, c, d, e) : null : null, b && (uc(b), delete this.j[b.key]);
            }
            return this;
          };
          f.Xa = function () {
            var a = this.j, b = uc, c;
            for (c in a) {
              b.call(void 0, a[c], c, a);
            }
            this.j = {};
          };
          f.u = function () {
            Vc.pa.u.call(this);
            this.Xa();
          };
          f.handleEvent = function () {
            throw Error("EventHandler.handleEvent not implemented");
          };
          function Xc(a, b, c) {
            O.call(this);
            this.pc = a;
            this.ea = b;
            this.e = c;
            this.jc = p(this.vc, this);
          }

          s(Xc, O);
          f = Xc.prototype;
          f.Za = !1;
          f.Vb = 0;
          f.l = null;
          f.stop = function () {
            this.l && (l.clearTimeout(this.l), this.l = null, this.Za = !1);
          };
          f.u = function () {
            Xc.pa.u.call(this);
            this.stop();
          };
          f.vc = function () {
            this.l = null;
            this.Za && !this.Vb && (this.Za = !1, Yc(this));
          };
          function Yc(a) {
            a.l = Bc(a.jc, a.ea);
            a.pc.call(a.e);
          }
          ;
          function U(a, b, c, d, e) {
            this.b = a;
            this.a = b;
            this.Y = c;
            this.B = d;
            this.Ea = e || 1;
            this.qa = Zc;
            this.ob = new Vc(this);
            this.Ta = new zc;
            this.Ta.setInterval($c);
          }

          f = U.prototype;
          f.v = null;
          f.F = !1;
          f.ua = null;
          f.xb = null;
          f.Da = null;
          f.sa = null;
          f.U = null;
          f.w = null;
          f.X = null;
          f.k = null;
          f.Ha = 0;
          f.K = null;
          f.ta = null;
          f.q = null;
          f.g = -1;
          f.Zb = !0;
          f.$ = !1;
          f.ma = 0;
          f.Va = null;
          var Zc = 45E3, $c = 250;

          function ad(a, b) {
            switch (a) {
              case 0:
                return "Non-200 return code (" + b + ")";
              case 1:
                return "XMLHTTP failure (no data)";
              case 2:
                return "HttpConnection timeout";
              default:
                return "Unknown error";
            }
          }

          var bd = {}, dd = {};

          function ed() {
            return !y || y && 10 <= Ma;
          }

          f = U.prototype;
          f.S = function (a) {
            this.v = a;
          };
          f.setTimeout = function (a) {
            this.qa = a;
          };
          f.bc = function (a) {
            this.ma = a;
          };
          function fd(a, b, c) {
            a.sa = 1;
            a.U = H(b.n());
            a.X = c;
            a.Cb = !0;
            gd(a, null);
          }

          function hd(a, b, c, d, e) {
            a.sa = 1;
            a.U = H(b.n());
            a.X = null;
            a.Cb = c;
            e && (a.Zb = !1);
            gd(a, d);
          }

          function gd(a, b) {
            a.Da = q();
            id(a);
            a.w = a.U.n();
            rb(a.w, "t", a.Ea);
            a.Ha = 0;
            a.k = a.b.lb(a.b.$a() ? b : null);
            0 < a.ma && (a.Va = new Xc(p(a.ec, a, a.k), a.ma));
            a.ob.Ra(a.k, "readystatechange", a.Bc);
            var c;
            if (a.v) {
              c = a.v;
              var d = {}, e;
              for (e in c) {
                d[e] = c[e];
              }
              c = d;
            } else {
              c = {};
            }
            a.X ? (a.ta = "POST", c["Content-Type"] = "application/x-www-form-urlencoded", a.k.send(a.w, a.ta, a.X, c)) : (a.ta = "GET", a.Zb && !z && (c.Connection = "close"), a.k.send(a.w, a.ta, null, c));
            a.b.H(jd);
            if (d = a.X) {
              for (c = "", d = d.split("&"), e = 0; e < d.length; e++) {
                var g = d[e].split("=");
                if (1 < g.length) {
                  var h = g[0], g = g[1], k = h.split("_");
                  c = 2 <= k.length && "type" == k[1] ? c + (h + "=" + g + "&") : c + (h + "=redacted&");
                }
              }
            } else {
              c = null;
            }
            a.a.info("XMLHTTP REQ (" + a.B + ") [attempt " + a.Ea + "]: " + a.ta + "\n" + a.w + "\n" + c);
          }

          f.Bc = function (a) {
            a = a.target;
            var b = this.Va;
            b && 3 == T(a) ? (this.a.debug("Throttling readystatechange."), b.l || b.Vb ? b.Za = !0 : Yc(b)) : this.ec(a);
          };
          f.ec = function (a) {
            try {
              if (a == this.k) {
                a: {
                  var b = T(this.k), c = this.k.ka, d = Sc(this.k);
                  if (!ed() || z && !A("420+")) {
                    if (4 > b) {
                      break a;
                    }
                  } else {
                    if (3 > b || 3 == b && !Aa && !Tc(this.k)) {
                      break a;
                    }
                  }
                  this.$ || 4 != b || 7 == c || (8 == c || 0 >= d ? this.b.H(kd) : this.b.H(ld));
                  md(this);
                  var e = Sc(this.k);
                  this.g = e;
                  var g = Tc(this.k);
                  g || this.a.debug("No response text for uri " + this.w + " status " + e);
                  this.F = 200 == e;
                  this.a.info("XMLHTTP RESP (" + this.B + ") [ attempt " + this.Ea + "]: " + this.ta + "\n" + this.w + "\n" + b + " " + e);
                  this.F ? (4 == b && V(this), this.Cb ? (nd(this, b, g), Aa && this.F && 3 == b && (this.ob.Ra(this.Ta, Ac, this.Ac), this.Ta.start())) : (Ub(this.a, this.B, g, null), od(this, g)), this.F && !this.$ && (4 == b ? this.b.la(this) : (this.F = !1, id(this)))) : (400 == e && 0 < g.indexOf("Unknown SID") ? (this.q = 3, W(), this.a.Z("XMLHTTP Unknown SID (" + this.B + ")")) : (this.q = 0, W(), this.a.Z("XMLHTTP Bad status " + e + " (" + this.B + ")")), V(this), pd(this));
                }
              } else {
                this.a.Z("Called back with an unexpected xmlhttp");
              }
            } catch (h) {
              this.a.debug("Failed call to OnXmlHttpReadyStateChanged_"), this.k && Tc(this.k) ? Wb(this.a, h, "ResponseText: " + Tc(this.k)) : Wb(this.a, h, "No response text");
            } finally {
            }
          };
          function nd(a, b, c) {
            for (var d = !0; !a.$ && a.Ha < c.length;) {
              var e = qd(a, c);
              if (e == dd) {
                4 == b && (a.q = 4, W(), d = !1);
                Ub(a.a, a.B, null, "[Incomplete Response]");
                break;
              } else {
                if (e == bd) {
                  a.q = 4;
                  W();
                  Ub(a.a, a.B, c, "[Invalid Chunk]");
                  d = !1;
                  break;
                } else {
                  Ub(a.a, a.B, e, null), od(a, e);
                }
              }
            }
            4 == b && 0 == c.length && (a.q = 1, W(), d = !1);
            a.F = a.F && d;
            d || (Ub(a.a, a.B, c, "[Invalid Chunked Response]"), V(a), pd(a));
          }

          f.Ac = function () {
            var a = T(this.k), b = Tc(this.k);
            this.Ha < b.length && (md(this), nd(this, a, b), this.F && 4 != a && id(this));
          };
          function qd(a, b) {
            var c = a.Ha, d = b.indexOf("\n", c);
            if (-1 == d) {
              return dd;
            }
            c = Number(b.substring(c, d));
            if (isNaN(c)) {
              return bd;
            }
            d += 1;
            if (d + c > b.length) {
              return dd;
            }
            var e = b.substr(d, c);
            a.Ha = d + c;
            return e;
          }

          function rd(a, b) {
            a.Da = q();
            id(a);
            var c = b ? window.location.hostname : "";
            a.w = a.U.n();
            G(a.w, "DOMAIN", c);
            G(a.w, "t", a.Ea);
            try {
              a.K = new ActiveXObject("htmlfile");
            } catch (d) {
              a.a.J("ActiveX blocked");
              V(a);
              a.q = 7;
              W();
              pd(a);
              return;
            }
            var e = "<html><body>";
            b && (e += '<script>document.domain="' + c + '"\x3c/script>');
            e += "</body></html>";
            a.K.open();
            a.K.write(e);
            a.K.close();
            a.K.parentWindow.m = p(a.yc, a);
            a.K.parentWindow.d = p(a.Ub, a, !0);
            a.K.parentWindow.rpcClose = p(a.Ub, a, !1);
            c = a.K.createElement("div");
            a.K.parentWindow.document.body.appendChild(c);
            c.innerHTML = '<iframe src="' + a.w + '"></iframe>';
            a.a.info("TRIDENT REQ (" + a.B + ") [ attempt " + a.Ea + "]: GET\n" + a.w);
            a.b.H(jd);
          }

          f.yc = function (a) {
            Y(p(this.xc, this, a), 0);
          };
          f.xc = function (a) {
            if (!this.$) {
              var b = this.a;
              b.info("TRIDENT TEXT (" + this.B + "): " + Vb(b, a));
              md(this);
              od(this, a);
              id(this);
            }
          };
          f.Ub = function (a) {
            Y(p(this.wc, this, a), 0);
          };
          f.wc = function (a) {
            this.$ || (this.a.info("TRIDENT TEXT (" + this.B + "): " + a ? "success" : "failure"), V(this), this.F = a, this.b.la(this), this.b.H(sd));
          };
          f.nc = function () {
            md(this);
            this.b.la(this);
          };
          f.cancel = function () {
            this.$ = !0;
            V(this);
          };
          function id(a) {
            a.xb = q() + a.qa;
            td(a, a.qa);
          }

          function td(a, b) {
            if (null != a.ua) {
              throw Error("WatchDog timer not null");
            }
            a.ua = Y(p(a.zc, a), b);
          }

          function md(a) {
            a.ua && (l.clearTimeout(a.ua), a.ua = null);
          }

          f.zc = function () {
            this.ua = null;
            var a = q();
            0 <= a - this.xb ? (this.F && this.a.J("Received watchdog timeout even though request loaded successfully"), this.a.info("TIMEOUT: " + this.w), 2 != this.sa && this.b.H(kd), V(this), this.q = 2, W(), pd(this)) : (this.a.Z("WatchDog timer called too early"), td(this, this.xb - a));
          };
          function pd(a) {
            a.b.Lb() || a.$ || a.b.la(a);
          }

          function V(a) {
            md(a);
            var b = a.Va;
            b && "function" == typeof b.Ja && b.Ja();
            a.Va = null;
            a.Ta.stop();
            a.ob.Xa();
            a.k && (b = a.k, a.k = null, b.abort(), b.Ja());
            a.K && (a.K = null);
          }

          f.Ib = function () {
            return this.q;
          };
          function od(a, b) {
            try {
              a.b.Rb(a, b), a.b.H(sd);
            } catch (c) {
              Wb(a.a, c, "Error in httprequest callback");
            }
          }
          ;
          function ud(a, b, c, d, e) {
            (new N).debug("TestLoadImageWithRetries: " + e);
            if (0 == d) {
              c(!1);
            } else {
              var g = e || 0;
              d--;
              vd(a, b, function (e) {
                e ? c(!0) : l.setTimeout(function () {
                  ud(a, b, c, d, g);
                }, g);
              });
            }
          }

          function vd(a, b, c) {
            function d(a, b) {
              return function () {
                try {
                  e.debug("TestLoadImage: " + b), g.onload = null, g.onerror = null, g.onabort = null, g.ontimeout = null, l.clearTimeout(h), c(a);
                } catch (d) {
                  Wb(e, d);
                }
              };
            }

            var e = new N;
            e.debug("TestLoadImage: loading " + a);
            var g = new Image, h = null;
            g.onload = d(!0, "loaded");
            g.onerror = d(!1, "error");
            g.onabort = d(!1, "abort");
            g.ontimeout = d(!1, "timeout");
            h = l.setTimeout(function () {
              if (g.ontimeout) {
                g.ontimeout();
              }
            }, b);
            g.src = a;
          }
          ;
          function wd(a, b) {
            this.b = a;
            this.a = b;
            this.P = new Yb(0, !0);
          }

          f = wd.prototype;
          f.v = null;
          f.A = null;
          f.Wa = !1;
          f.cc = null;
          f.La = null;
          f.rb = null;
          f.I = null;
          f.c = null;
          f.g = -1;
          f.L = null;
          f.va = null;
          f.S = function (a) {
            this.v = a;
          };
          f.ac = function (a) {
            this.P = a;
          };
          f.kb = function (a) {
            this.I = a;
            a = xd(this.b, this.I);
            W();
            this.cc = q();
            var b = this.b.Gb;
            null != b ? (this.L = this.b.correctHostPrefix(b[0]), (this.va = b[1]) ? (this.c = 1, yd(this)) : (this.c = 2, zd(this))) : (rb(a, "MODE", "init"), this.A = new U(this, this.a, void 0, void 0, void 0), this.A.S(this.v), hd(this.A, a, !1, null, !0), this.c = 0);
          };
          function yd(a) {
            var b = Ad(a.b, a.va, "/mail/images/cleardot.gif");
            H(b);
            ud(b.toString(), 5E3, p(a.kc, a), 3, 2E3);
            a.H(jd);
          }

          f.kc = function (a) {
            if (a) {
              this.c = 2, zd(this);
            } else {
              W();
              var b = this.b;
              b.a.debug("Test Connection Blocked");
              b.g = b.V.g;
              Z(b, 9);
            }
            a && this.H(ld);
          };
          function zd(a) {
            a.a.debug("TestConnection: starting stage 2");
            var b = a.b.Dc;
            if (null != b) {
              a.a.debug("TestConnection: skipping stage 2, precomputed result is " + b ? "Buffered" : "Unbuffered"), W(), b ? (W(), Bd(a.b, a, !1)) : (W(), Bd(a.b, a, !0));
            } else {
              if (a.A = new U(a, a.a, void 0, void 0, void 0), a.A.S(a.v), b = Cd(a.b, a.L, a.I), W(), ed()) {
                rb(b, "TYPE", "xmlhttp"), hd(a.A, b, !1, a.L, !1);
              } else {
                rb(b, "TYPE", "html");
                var c = a.A;
                a = Boolean(a.L);
                c.sa = 3;
                c.U = H(b.n());
                rd(c, a);
              }
            }
          }

          f.lb = function (a) {
            return this.b.lb(a);
          };
          f.abort = function () {
            this.A && (this.A.cancel(), this.A = null);
            this.g = -1;
          };
          f.Lb = function () {
            return !1;
          };
          f.Rb = function (a, b) {
            this.g = a.g;
            if (0 == this.c) {
              if (this.a.debug("TestConnection: Got data for stage 1"), b) {
                try {
                  var c = this.P.parse(b);
                } catch (d) {
                  Wb(this.a, d);
                  Dd(this.b, this);
                  return;
                }
                this.L = this.b.correctHostPrefix(c[0]);
                this.va = c[1];
              } else {
                this.a.debug("TestConnection: Null responseText"), Dd(this.b, this);
              }
            } else {
              if (2 == this.c) {
                if (this.Wa) {
                  W(), this.rb = q();
                } else {
                  if ("11111" == b) {
                    if (W(), this.Wa = !0, this.La = q(), c = this.La - this.cc, ed() || 500 > c) {
                      this.g = 200, this.A.cancel(), this.a.debug("Test connection succeeded; using streaming connection"), W(), Bd(this.b, this, !0);
                    }
                  } else {
                    W(), this.La = this.rb = q(), this.Wa = !1;
                  }
                }
              }
            }
          };
          f.la = function () {
            this.g = this.A.g;
            if (!this.A.F) {
              this.a.debug("TestConnection: request failed, in state " + this.c), 0 == this.c ? W() : 2 == this.c && W(), Dd(this.b, this);
            } else {
              if (0 == this.c) {
                this.a.debug("TestConnection: request complete for initial check"), this.va ? (this.c = 1, yd(this)) : (this.c = 2, zd(this));
              } else {
                if (2 == this.c) {
                  this.a.debug("TestConnection: request complete for stage 2");
                  var a = !1;
                  (a = ed() ? this.Wa : 200 > this.rb - this.La ? !1 : !0) ? (this.a.debug("Test connection succeeded; using streaming connection"), W(), Bd(this.b, this, !0)) : (this.a.debug("Test connection failed; not using streaming"), W(), Bd(this.b, this, !1));
                }
              }
            }
          };
          f.$a = function () {
            return this.b.$a();
          };
          f.isActive = function () {
            return this.b.isActive();
          };
          f.H = function (a) {
            this.b.H(a);
          };
          function Ed(a, b, c) {
            this.Bb = a || null;
            this.c = Fd;
            this.t = [];
            this.Q = [];
            this.a = new N;
            this.P = new Yb(0, !0);
            this.Gb = b || null;
            this.Dc = null != c ? c : null;
          }

          function Gd(a, b) {
            this.Ob = a;
            this.map = b;
          }

          f = Ed.prototype;
          f.v = null;
          f.xa = null;
          f.p = null;
          f.i = null;
          f.I = null;
          f.Ma = null;
          f.zb = null;
          f.L = null;
          f.hc = !0;
          f.Ba = 0;
          f.sc = 0;
          f.Ka = !1;
          f.e = null;
          f.G = null;
          f.M = null;
          f.aa = null;
          f.V = null;
          f.wb = null;
          f.gc = !0;
          f.za = -1;
          f.Nb = -1;
          f.g = -1;
          f.ba = 0;
          f.ha = 0;
          f.ic = 5E3;
          f.Cc = 1E4;
          f.pb = 2;
          f.Hb = 2E4;
          f.ma = 0;
          f.ab = !1;
          f.ia = 8;
          var Fd = 1, Hd = new R;

          function Id(a) {
            Q.call(this, "statevent", a);
          }

          s(Id, Q);
          function Jd(a, b) {
            Q.call(this, "timingevent", a);
            this.size = b;
          }

          s(Jd, Q);
          var jd = 1, ld = 2, kd = 3, sd = 4;

          function Kd(a) {
            Q.call(this, "serverreachability", a);
          }

          s(Kd, Q);
          var Xb = "y2f%";
          f = Ed.prototype;
          f.kb = function (a, b, c, d, e) {
            this.a.debug("connect()");
            W();
            this.I = b;
            this.xa = c || {};
            d && void 0 !== e && (this.xa.OSID = d, this.xa.OAID = e);
            this.a.debug("connectTest_()");
            Ld(this) && (this.V = new wd(this, this.a), this.V.S(this.v), this.V.ac(this.P), this.V.kb(a));
          };
          f.disconnect = function () {
            this.a.debug("disconnect()");
            Md(this);
            if (3 == this.c) {
              var a = this.Ba++, b = this.Ma.n();
              G(b, "SID", this.Y);
              G(b, "RID", a);
              G(b, "TYPE", "terminate");
              Nd(this, b);
              a = new U(this, this.a, this.Y, a, void 0);
              a.sa = 2;
              a.U = H(b.n());
              b = new Image;
              b.src = a.U;
              b.onload = b.onerror = p(a.nc, a);
              a.Da = q();
              id(a);
            }
            Od(this);
          };
          function Md(a) {
            a.V && (a.V.abort(), a.V = null);
            a.i && (a.i.cancel(), a.i = null);
            a.M && (l.clearTimeout(a.M), a.M = null);
            Pd(a);
            a.p && (a.p.cancel(), a.p = null);
            a.G && (l.clearTimeout(a.G), a.G = null);
          }

          f.S = function (a) {
            this.v = a;
          };
          f.bc = function (a) {
            this.ma = a;
          };
          f.Lb = function () {
            return 0 == this.c;
          };
          f.ac = function (a) {
            this.P = a;
          };
          function Qd(a) {
            a.p || a.G || (a.G = Y(p(a.Tb, a), 0), a.ba = 0);
          }

          f.Tb = function (a) {
            this.G = null;
            this.a.debug("startForwardChannel_");
            if (Ld(this)) {
              if (this.c == Fd) {
                if (a) {
                  this.a.J("Not supposed to retry the open");
                } else {
                  this.a.debug("open_()");
                  this.Ba = Math.floor(1E5 * Math.random());
                  a = this.Ba++;
                  var b = new U(this, this.a, "", a, void 0);
                  b.S(this.v);
                  var c = Rd(this), d = this.Ma.n();
                  G(d, "RID", a);
                  this.Bb && G(d, "CVER", this.Bb);
                  Nd(this, d);
                  fd(b, d, c);
                  this.p = b;
                  this.c = 2;
                }
              } else {
                3 == this.c && (a ? Sd(this, a) : 0 == this.t.length ? this.a.debug("startForwardChannel_ returned: nothing to send") : this.p ? this.a.J("startForwardChannel_ returned: connection already in progress") : (Sd(this), this.a.debug("startForwardChannel_ finished, sent request")));
              }
            }
          };
          function Sd(a, b) {
            var c, d;
            b ? 6 < a.ia ? (a.t = a.Q.concat(a.t), a.Q.length = 0, c = a.Ba - 1, d = Rd(a)) : (c = b.B, d = b.X) : (c = a.Ba++, d = Rd(a));
            var e = a.Ma.n();
            G(e, "SID", a.Y);
            G(e, "RID", c);
            G(e, "AID", a.za);
            Nd(a, e);
            c = new U(a, a.a, a.Y, c, a.ba + 1);
            c.S(a.v);
            c.setTimeout(Math.round(0.5 * a.Hb) + Math.round(0.5 * a.Hb * Math.random()));
            a.p = c;
            fd(c, e, d);
          }

          function Nd(a, b) {
            if (a.e) {
              var c = a.e.getAdditionalParams(a);
              c && D(c, function (a, c) {
                G(b, c, a);
              });
            }
          }

          function Rd(a) {
            var b = Math.min(a.t.length, 1E3), c = ["count=" + b], d;
            6 < a.ia && 0 < b ? (d = a.t[0].Ob, c.push("ofs=" + d)) : d = 0;
            for (var e = 0; e < b; e++) {
              var g = a.t[e].Ob, h = a.t[e].map, g = 6 >= a.ia ? e : g - d;
              try {
                D(h, function (a, b) {
                  c.push("req" + g + "_" + b + "=" + encodeURIComponent(a));
                });
              } catch (k) {
                c.push("req" + g + "_type=" + encodeURIComponent("_badmap")), a.e && a.e.badMapError(a, h);
              }
            }
            a.Q = a.Q.concat(a.t.splice(0, b));
            return c.join("&");
          }

          function Td(a) {
            a.i || a.M || (a.yb = 1, a.M = Y(p(a.Sb, a), 0), a.ha = 0);
          }

          function Ud(a) {
            if (a.i || a.M) {
              return a.a.J("Request already in progress"), !1;
            }
            if (3 <= a.ha) {
              return !1;
            }
            a.a.debug("Going to retry GET");
            a.yb++;
            a.M = Y(p(a.Sb, a), Vd(a, a.ha));
            a.ha++;
            return !0;
          }

          f.Sb = function () {
            this.M = null;
            if (Ld(this)) {
              this.a.debug("Creating new HttpRequest");
              this.i = new U(this, this.a, this.Y, "rpc", this.yb);
              this.i.S(this.v);
              this.i.bc(this.ma);
              var a = this.zb.n();
              G(a, "RID", "rpc");
              G(a, "SID", this.Y);
              G(a, "CI", this.wb ? "0" : "1");
              G(a, "AID", this.za);
              Nd(this, a);
              if (ed()) {
                G(a, "TYPE", "xmlhttp"), hd(this.i, a, !0, this.L, !1);
              } else {
                G(a, "TYPE", "html");
                var b = this.i, c = Boolean(this.L);
                b.sa = 3;
                b.U = H(a.n());
                rd(b, c);
              }
              this.a.debug("New Request created");
            }
          };
          function Ld(a) {
            if (a.e) {
              var b = a.e.okToMakeRequest(a);
              if (0 != b) {
                return a.a.debug("Handler returned error code from okToMakeRequest"), Z(a, b), !1;
              }
            }
            return !0;
          }

          function Bd(a, b, c) {
            a.a.debug("Test Connection Finished");
            a.wb = a.gc && c;
            a.g = b.g;
            a.a.debug("connectChannel_()");
            a.lc(Fd, 0);
            a.Ma = xd(a, a.I);
            Qd(a);
          }

          function Dd(a, b) {
            a.a.debug("Test Connection Failed");
            a.g = b.g;
            Z(a, 2);
          }

          f.Rb = function (a, b) {
            if (0 != this.c && (this.i == a || this.p == a)) {
              if (this.g = a.g, this.p == a && 3 == this.c) {
                if (7 < this.ia) {
                  var c;
                  try {
                    c = this.P.parse(b);
                  } catch (d) {
                    c = null;
                  }
                  if (m(c) && 3 == c.length) {
                    var e = c;
                    if (0 == e[0]) {
                      a: {
                        if (this.a.debug("Server claims our backchannel is missing."), this.M) {
                          this.a.debug("But we are currently starting the request.");
                        } else {
                          if (this.i) {
                            if (this.i.Da + 3E3 < this.p.Da) {
                              Pd(this), this.i.cancel(), this.i = null;
                            } else {
                              break a;
                            }
                          } else {
                            this.a.Z("We do not have a BackChannel established");
                          }
                          Ud(this);
                          W();
                        }
                      }
                    } else {
                      this.Nb = e[1], c = this.Nb - this.za, 0 < c && (e = e[2], this.a.debug(e + " bytes (in " + c + " arrays) are outstanding on the BackChannel"), 37500 > e && this.wb && 0 == this.ha && !this.aa && (this.aa = Y(p(this.tc, this), 6E3)));
                    }
                  } else {
                    this.a.debug("Bad POST response data returned"), Z(this, 11);
                  }
                } else {
                  b != Xb && (this.a.debug("Bad data returned - missing/invald magic cookie"), Z(this, 11));
                }
              } else {
                if (this.i == a && Pd(this), !/^[\s\xa0]*$/.test(b)) {
                  c = this.P.parse(b);
                  for (var e = this.e && this.e.channelHandleMultipleArrays ? [] : null, g = 0; g < c.length; g++) {
                    var h = c[g];
                    this.za = h[0];
                    h = h[1];
                    2 == this.c ? "c" == h[0] ? (this.Y = h[1], this.L = this.correctHostPrefix(h[2]), h = h[3], this.ia = null != h ? h : 6, this.c = 3, this.e && this.e.channelOpened(this), this.zb = Cd(this, this.L, this.I), Td(this)) : "stop" == h[0] && Z(this, 7) : 3 == this.c && ("stop" == h[0] ? (e && 0 != e.length && (this.e.channelHandleMultipleArrays(this, e), e.length = 0), Z(this, 7)) : "noop" != h[0] && (e ? e.push(h) : this.e && this.e.channelHandleArray(this, h)), this.ha = 0);
                  }
                  e && 0 != e.length && this.e.channelHandleMultipleArrays(this, e);
                }
              }
            }
          };
          f.correctHostPrefix = function (a) {
            return this.hc ? this.e ? this.e.correctHostPrefix(a) : a : null;
          };
          f.tc = function () {
            null != this.aa && (this.aa = null, this.i.cancel(), this.i = null, Ud(this), W());
          };
          function Pd(a) {
            null != a.aa && (l.clearTimeout(a.aa), a.aa = null);
          }

          f.la = function (a) {
            this.a.debug("Request complete");
            var b;
            if (this.i == a) {
              Pd(this), this.i = null, b = 2;
            } else {
              if (this.p == a) {
                this.p = null, b = 1;
              } else {
                return;
              }
            }
            this.g = a.g;
            if (0 != this.c) {
              if (a.F) {
                1 == b ? (q(), Hd.dispatchEvent(new Jd(Hd, a.X ? a.X.length : 0)), Qd(this), this.Q.length = 0) : Td(this);
              } else {
                var c = a.Ib();
                if (3 == c || 7 == c || 0 == c && 0 < this.g) {
                  this.a.debug("Not retrying due to error type");
                } else {
                  this.a.debug("Maybe retrying, last error: " + ad(c, this.g));
                  var d;
                  if (d = 1 == b) {
                    this.p || this.G ? (this.a.J("Request already in progress"), d = !1) : this.c == Fd || this.ba >= (this.Ka ? 0 : this.pb) ? d = !1 : (this.a.debug("Going to retry POST"), this.G = Y(p(this.Tb, this, a), Vd(this, this.ba)), this.ba++, d = !0);
                  }
                  if (d || 2 == b && Ud(this)) {
                    return;
                  }
                  this.a.debug("Exceeded max number of retries");
                }
                this.a.debug("Error: HTTP request failed");
                switch (c) {
                  case 1:
                    Z(this, 5);
                    break;
                  case 4:
                    Z(this, 10);
                    break;
                  case 3:
                    Z(this, 6);
                    break;
                  case 7:
                    Z(this, 12);
                    break;
                  default:
                    Z(this, 2);
                }
              }
            }
          };
          function Vd(a, b) {
            var c = a.ic + Math.floor(Math.random() * a.Cc);
            a.isActive() || (a.a.debug("Inactive channel"), c *= 2);
            return c * b;
          }

          f.lc = function (a) {
            if (!(0 <= Xa(arguments, this.c))) {
              throw Error("Unexpected channel state: " + this.c);
            }
          };
          function Z(a, b) {
            a.a.info("Error code " + b);
            if (2 == b || 9 == b) {
              var c = null;
              a.e && (c = a.e.getNetworkTestImageUri(a));
              var d = p(a.Fc, a);
              c || (c = new E("//www.google.com/images/cleardot.gif"), H(c));
              vd(c.toString(), 1E4, d);
            } else {
              W();
            }
            Wd(a, b);
          }

          f.Fc = function (a) {
            a ? (this.a.info("Successfully pinged google.com"), W()) : (this.a.info("Failed to ping google.com"), W(), Wd(this, 8));
          };
          function Wd(a, b) {
            a.a.debug("HttpChannel: error - " + b);
            a.c = 0;
            a.e && a.e.channelError(a, b);
            Od(a);
            Md(a);
          }

          function Od(a) {
            a.c = 0;
            a.g = -1;
            if (a.e) {
              if (0 == a.Q.length && 0 == a.t.length) {
                a.e.channelClosed(a);
              } else {
                a.a.debug("Number of undelivered maps, pending: " + a.Q.length + ", outgoing: " + a.t.length);
                var b = bb(a.Q), c = bb(a.t);
                a.Q.length = 0;
                a.t.length = 0;
                a.e.channelClosed(a, b, c);
              }
            }
          }

          function xd(a, b) {
            var c = Ad(a, null, b);
            a.a.debug("GetForwardChannelUri: " + c);
            return c;
          }

          function Cd(a, b, c) {
            b = Ad(a, a.$a() ? b : null, c);
            a.a.debug("GetBackChannelUri: " + b);
            return b;
          }

          function Ad(a, b, c) {
            var d = tb(c);
            if ("" != d.ja) {
              b && gb(d, b + "." + d.ja), hb(d, d.Ca);
            } else {
              var e = window.location, d = ub(e.protocol, b ? b + "." + e.hostname : e.hostname, e.port, c)
            }
            a.xa && D(a.xa, function (a, b) {
              G(d, b, a);
            });
            G(d, "VER", a.ia);
            Nd(a, d);
            return d;
          }

          f.lb = function (a) {
            if (a && !this.ab) {
              throw Error("Can't create secondary domain capable XhrIo object.");
            }
            a = new Ic;
            a.dc = this.ab;
            return a;
          };
          f.isActive = function () {
            return !!this.e && this.e.isActive(this);
          };
          function Y(a, b) {
            if (!fa(a)) {
              throw Error("Fn must not be null and must be a function");
            }
            return l.setTimeout(function () {
              a();
            }, b);
          }

          f.H = function () {
            Hd.dispatchEvent(new Kd(Hd));
          };
          function W() {
            Hd.dispatchEvent(new Id(Hd));
          }

          f.$a = function () {
            return this.ab || !ed();
          };
          function Xd() {
          }

          f = Xd.prototype;
          f.channelHandleMultipleArrays = null;
          f.okToMakeRequest = function () {
            return 0;
          };
          f.channelOpened = function () {
          };
          f.channelHandleArray = function () {
          };
          f.channelError = function () {
          };
          f.channelClosed = function () {
          };
          f.getAdditionalParams = function () {
            return {};
          };
          f.getNetworkTestImageUri = function () {
            return null;
          };
          f.isActive = function () {
            return !0;
          };
          f.badMapError = function () {
          };
          f.correctHostPrefix = function (a) {
            return a;
          };
          var $, Yd;
          Yd = {
            0: "Ok",
            4: "User is logging out",
            6: "Unknown session ID",
            7: "Stopped by server",
            8: "General network error",
            2: "Request failed",
            9: "Blocked by a network administrator",
            5: "No data from server",
            10: "Got bad data from the server",
            11: "Got a bad response from the server"
          };
          $ = function (a, b) {
            var c, d, e, g, h, k, u, K, v, r, Ka, w, X, cd;
            if (!(this instanceof $)) {
              return new $(a, b);
            }
            r = this;
            a || (a = "channel");
            a.match(/:\/\//) && a.replace(/^ws/, "http");
            b || (b = {});
            m(b || "string" === typeof b) && (b = {});
            K = b.reconnectTime || 3E3;
            c = b.extraHeaders || null;
            d = b.extraParams || null;
            null !== b.affinity && (d || (d = {}), b.affinityParam || (b.affinityParam = "a"), this.affinity = b.affinity || sa(), d[b.affinityParam] = this.affinity);
            X = function (a) {
              r.readyState = r.readyState = a;
            };
            X(this.CLOSED);
            w = null;
            k = null != (cd = b.prev) ? cd.Ec : void 0;
            e = function (a, b, c, d, e) {
              try {
                return "function" === typeof r[a] ? r[a](c, d, e) : void 0;
              } catch (g) {
                throw "undefined" !== typeof console && null !== console && console.error(g.stack), g;
              }
            };
            g = new Xd;
            g.channelOpened = function () {
              k = w;
              X($.OPEN);
              return e("onopen");
            };
            h = null;
            g.channelError = function (a, b) {
              var c;
              c = Yd[b];
              h = b;
              r.readyState !== $.CLOSED && X($.hb);
              return e("onerror", 0, c, b);
            };
            v = null;
            g.channelClosed = function (a, c, d) {
              var g;
              if (r.readyState !== $.CLOSED) {
                return w = null, a = h ? Yd[h] : "Closed", X($.CLOSED), b.reconnect && 7 !== h && 0 !== h && (g = 6 === h ? 0 : K, clearTimeout(v), v = setTimeout(u, g)), e("onclose", 0, a, c, d), h = null;
              }
            };
            g.channelHandleArray = function (a, b) {
              return e("onmessage", 0, {type: "message", data: b});
            };
            u = function () {
              if (w) {
                throw Error("Reconnect() called from invalid state");
              }
              X($.CONNECTING);
              e("onconnecting");
              clearTimeout(v);
              r.Ec = w = new Ed(b.appVersion, null != k ? k.Gb : void 0);
              b.crossDomainXhr && (w.ab = !0);
              w.e = g;
              c && w.S(c);
              h = null;
              if (b.failFast) {
                var t = w;
                t.Ka = !0;
                t.a.info("setFailFast: true");
                (t.p || t.G) && t.ba > (t.Ka ? 0 : t.pb) && (t.a.info("Retry count " + t.ba + " > new maxRetries " + (t.Ka ? 0 : t.pb) + ". Fail immediately!"), t.p ? (t.p.cancel(), t.la(t.p)) : (l.clearTimeout(t.G), t.G = null, Z(t, 2)));
              }
              return w.kb("" + a + "/test", "" + a + "/bind", d, null != k ? k.Y : void 0, null != k ? k.za : void 0);
            };
            this.open = function () {
              if (r.readyState !== r.CLOSED) {
                throw Error("Already open");
              }
              return u();
            };
            this.close = function () {
              clearTimeout(v);
              h = 0;
              if (r.readyState !== $.CLOSED) {
                return X($.hb), w.disconnect();
              }
            };
            this.sendMap = Ka = function (a) {
              var b;
              if ((b = r.readyState) !== $.hb && b !== $.CLOSED) {
                b = w;
                if (0 == b.c) {
                  throw Error("Invalid operation: sending map when state is closed");
                }
                1E3 == b.t.length && b.a.J("Already have 1000 queued maps upon queueing " + yb(a));
                b.t.push(new Gd(b.sc++, a));
                2 != b.c && 3 != b.c || Qd(b);
              }
            };
            this.send = function (a) {
              return "string" === typeof a ? Ka({_S: a}) : Ka({JSON: yb(a)});
            };
            u();
          };
          $.prototype.canSendWhileConnecting = $.canSendWhileConnecting = !0;
          $.prototype.canSendJSON = $.canSendJSON = !0;
          $.prototype.CONNECTING = $.CONNECTING = $.CONNECTING = 0;
          $.prototype.OPEN = $.OPEN = $.OPEN = 1;
          $.prototype.CLOSING = $.CLOSING = $.hb = 2;
          $.prototype.CLOSED = $.CLOSED = $.CLOSED = 3;
          ("undefined" !== typeof exports && null !== exports ? exports : window).BCSocket = $;

        })();

      }, {}],
      3: [function (require, module, exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

        function EventEmitter() {
          this._events = this._events || {};
          this._maxListeners = this._maxListeners || undefined;
        }

        module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
        EventEmitter.EventEmitter = EventEmitter;

        EventEmitter.prototype._events = undefined;
        EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
        EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
        EventEmitter.prototype.setMaxListeners = function (n) {
          if (!isNumber(n) || n < 0 || isNaN(n))
            throw TypeError('n must be a positive number');
          this._maxListeners = n;
          return this;
        };

        EventEmitter.prototype.emit = function (type) {
          var er, handler, len, args, i, listeners;

          if (!this._events)
            this._events = {};

          // If there is no 'error' event listener then throw.
          if (type === 'error') {
            if (!this._events.error ||
                (isObject(this._events.error) && !this._events.error.length)) {
              er = arguments[1];
              if (er instanceof Error) {
                throw er; // Unhandled 'error' event
              } else {
                // At least give some kind of context to the user
                var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
                err.context = er;
                throw err;
              }
            }
          }

          handler = this._events[type];

          if (isUndefined(handler))
            return false;

          if (isFunction(handler)) {
            switch (arguments.length) {
                // fast cases
              case 1:
                handler.call(this);
                break;
              case 2:
                handler.call(this, arguments[1]);
                break;
              case 3:
                handler.call(this, arguments[1], arguments[2]);
                break;
                // slower
              default:
                args = Array.prototype.slice.call(arguments, 1);
                handler.apply(this, args);
            }
          } else if (isObject(handler)) {
            args = Array.prototype.slice.call(arguments, 1);
            listeners = handler.slice();
            len = listeners.length;
            for (i = 0; i < len; i++)
              listeners[i].apply(this, args);
          }

          return true;
        };

        EventEmitter.prototype.addListener = function (type, listener) {
          var m;

          if (!isFunction(listener))
            throw TypeError('listener must be a function');

          if (!this._events)
            this._events = {};

          // To avoid recursion in the case that type === "newListener"! Before
          // adding it to the listeners, first emit "newListener".
          if (this._events.newListener)
            this.emit('newListener', type,
                isFunction(listener.listener) ?
                    listener.listener : listener);

          if (!this._events[type])
          // Optimize the case of one listener. Don't need the extra array object.
            this._events[type] = listener;
          else if (isObject(this._events[type]))
          // If we've already got an array, just append.
            this._events[type].push(listener);
          else
          // Adding the second element, need to change to array.
            this._events[type] = [this._events[type], listener];

          // Check for listener leak
          if (isObject(this._events[type]) && !this._events[type].warned) {
            if (!isUndefined(this._maxListeners)) {
              m = this._maxListeners;
            } else {
              m = EventEmitter.defaultMaxListeners;
            }

            if (m && m > 0 && this._events[type].length > m) {
              this._events[type].warned = true;
              console.error('(node) warning: possible EventEmitter memory ' +
                  'leak detected. %d listeners added. ' +
                  'Use emitter.setMaxListeners() to increase limit.',
                  this._events[type].length);
              if (typeof console.trace === 'function') {
                // not supported in IE 10
                console.trace();
              }
            }
          }

          return this;
        };

        EventEmitter.prototype.on = EventEmitter.prototype.addListener;

        EventEmitter.prototype.once = function (type, listener) {
          if (!isFunction(listener))
            throw TypeError('listener must be a function');

          var fired = false;

          function g() {
            this.removeListener(type, g);

            if (!fired) {
              fired = true;
              listener.apply(this, arguments);
            }
          }

          g.listener = listener;
          this.on(type, g);

          return this;
        };

// emits a 'removeListener' event iff the listener was removed
        EventEmitter.prototype.removeListener = function (type, listener) {
          var list, position, length, i;

          if (!isFunction(listener))
            throw TypeError('listener must be a function');

          if (!this._events || !this._events[type])
            return this;

          list = this._events[type];
          length = list.length;
          position = -1;

          if (list === listener ||
              (isFunction(list.listener) && list.listener === listener)) {
            delete this._events[type];
            if (this._events.removeListener)
              this.emit('removeListener', type, listener);

          } else if (isObject(list)) {
            for (i = length; i-- > 0;) {
              if (list[i] === listener ||
                  (list[i].listener && list[i].listener === listener)) {
                position = i;
                break;
              }
            }

            if (position < 0)
              return this;

            if (list.length === 1) {
              list.length = 0;
              delete this._events[type];
            } else {
              list.splice(position, 1);
            }

            if (this._events.removeListener)
              this.emit('removeListener', type, listener);
          }

          return this;
        };

        EventEmitter.prototype.removeAllListeners = function (type) {
          var key, listeners;

          if (!this._events)
            return this;

          // not listening for removeListener, no need to emit
          if (!this._events.removeListener) {
            if (arguments.length === 0)
              this._events = {};
            else if (this._events[type])
              delete this._events[type];
            return this;
          }

          // emit removeListener for all listeners on all events
          if (arguments.length === 0) {
            for (key in this._events) {
              if (key === 'removeListener') continue;
              this.removeAllListeners(key);
            }
            this.removeAllListeners('removeListener');
            this._events = {};
            return this;
          }

          listeners = this._events[type];

          if (isFunction(listeners)) {
            this.removeListener(type, listeners);
          } else if (listeners) {
            // LIFO order
            while (listeners.length)
              this.removeListener(type, listeners[listeners.length - 1]);
          }
          delete this._events[type];

          return this;
        };

        EventEmitter.prototype.listeners = function (type) {
          var ret;
          if (!this._events || !this._events[type])
            ret = [];
          else if (isFunction(this._events[type]))
            ret = [this._events[type]];
          else
            ret = this._events[type].slice();
          return ret;
        };

        EventEmitter.prototype.listenerCount = function (type) {
          if (this._events) {
            var evlistener = this._events[type];

            if (isFunction(evlistener))
              return 1;
            else if (evlistener)
              return evlistener.length;
          }
          return 0;
        };

        EventEmitter.listenerCount = function (emitter, type) {
          return emitter.listenerCount(type);
        };

        function isFunction(arg) {
          return typeof arg === 'function';
        }

        function isNumber(arg) {
          return typeof arg === 'number';
        }

        function isObject(arg) {
          return typeof arg === 'object' && arg !== null;
        }

        function isUndefined(arg) {
          return arg === void 0;
        }

      }, {}],
      4: [function (require, module, exports) {
// shim for using process in browser
        var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

        var cachedSetTimeout;
        var cachedClearTimeout;

        function defaultSetTimout() {
          throw new Error('setTimeout has not been defined');
        }

        function defaultClearTimeout() {
          throw new Error('clearTimeout has not been defined');
        }

        (function () {
          try {
            if (typeof setTimeout === 'function') {
              cachedSetTimeout = setTimeout;
            } else {
              cachedSetTimeout = defaultSetTimout;
            }
          } catch (e) {
            cachedSetTimeout = defaultSetTimout;
          }
          try {
            if (typeof clearTimeout === 'function') {
              cachedClearTimeout = clearTimeout;
            } else {
              cachedClearTimeout = defaultClearTimeout;
            }
          } catch (e) {
            cachedClearTimeout = defaultClearTimeout;
          }
        }())
        function runTimeout(fun) {
          if (cachedSetTimeout === setTimeout) {
            //normal enviroments in sane situations
            return setTimeout(fun, 0);
          }
          // if setTimeout wasn't available but was latter defined
          if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
            cachedSetTimeout = setTimeout;
            return setTimeout(fun, 0);
          }
          try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return cachedSetTimeout(fun, 0);
          } catch (e) {
            try {
              // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
              return cachedSetTimeout.call(null, fun, 0);
            } catch (e) {
              // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
              return cachedSetTimeout.call(this, fun, 0);
            }
          }


        }

        function runClearTimeout(marker) {
          if (cachedClearTimeout === clearTimeout) {
            //normal enviroments in sane situations
            return clearTimeout(marker);
          }
          // if clearTimeout wasn't available but was latter defined
          if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
            cachedClearTimeout = clearTimeout;
            return clearTimeout(marker);
          }
          try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return cachedClearTimeout(marker);
          } catch (e) {
            try {
              // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
              return cachedClearTimeout.call(null, marker);
            } catch (e) {
              // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
              // Some versions of I.E. have different rules for clearTimeout vs setTimeout
              return cachedClearTimeout.call(this, marker);
            }
          }


        }

        var queue = [];
        var draining = false;
        var currentQueue;
        var queueIndex = -1;

        function cleanUpNextTick() {
          if (!draining || !currentQueue) {
            return;
          }
          draining = false;
          if (currentQueue.length) {
            queue = currentQueue.concat(queue);
          } else {
            queueIndex = -1;
          }
          if (queue.length) {
            drainQueue();
          }
        }

        function drainQueue() {
          if (draining) {
            return;
          }
          var timeout = runTimeout(cleanUpNextTick);
          draining = true;

          var len = queue.length;
          while (len) {
            currentQueue = queue;
            queue = [];
            while (++queueIndex < len) {
              if (currentQueue) {
                currentQueue[queueIndex].run();
              }
            }
            queueIndex = -1;
            len = queue.length;
          }
          currentQueue = null;
          draining = false;
          runClearTimeout(timeout);
        }

        process.nextTick = function (fun) {
          var args = new Array(arguments.length - 1);
          if (arguments.length > 1) {
            for (var i = 1; i < arguments.length; i++) {
              args[i - 1] = arguments[i];
            }
          }
          queue.push(new Item(fun, args));
          if (queue.length === 1 && !draining) {
            runTimeout(drainQueue);
          }
        };

// v8 likes predictible objects
        function Item(fun, array) {
          this.fun = fun;
          this.array = array;
        }

        Item.prototype.run = function () {
          this.fun.apply(null, this.array);
        };
        process.title = 'browser';
        process.browser = true;
        process.env = {};
        process.argv = [];
        process.version = ''; // empty string to avoid regexp issues
        process.versions = {};

        function noop() {
        }

        process.on = noop;
        process.addListener = noop;
        process.once = noop;
        process.off = noop;
        process.removeListener = noop;
        process.removeAllListeners = noop;
        process.emit = noop;

        process.binding = function (name) {
          throw new Error('process.binding is not supported');
        };

        process.cwd = function () {
          return '/'
        };
        process.chdir = function (dir) {
          throw new Error('process.chdir is not supported');
        };
        process.umask = function () {
          return 0;
        };

      }, {}],
      5: [function (require, module, exports) {
        module.exports = CollectionCounter;

        function CollectionCounter() {
          this.reset();
        }

        CollectionCounter.prototype.reset = function () {
          this.collections = {};
        };
        CollectionCounter.prototype.get = function (collectionName, id) {
          var collection = this.collections[collectionName];
          return collection && collection[id];
        };
        CollectionCounter.prototype.increment = function (collectionName, id) {
          var collection = this.collections[collectionName] ||
              (this.collections[collectionName] = {});
          var count = (collection[id] || 0) + 1;
          collection[id] = count;
          return count;
        };
        CollectionCounter.prototype.decrement = function (collectionName, id) {
          var collection = this.collections[collectionName];
          var count = collection && collection[id];
          if (count == null) return;
          if (count > 1) {
            count--;
            collection[id] = count;
            return count;
          }
          delete collection[id];
          // Check if the collection still has any keys
          // eslint-disable-next-line no-unused-vars
          for (var key in collection) return 0;
          delete this.collections[collection];
          return 0;
        };
        CollectionCounter.prototype.toJSON = function () {
          // Check to see if we have any keys
          // eslint-disable-next-line no-unused-vars
          for (var key in this.collections) {
            return this.collections;
          }
          return;
        };

      }, {}],
      6: [function (require, module, exports) {
        module.exports = Doc;

        function Doc(model, collectionName, id) {
          this.collectionName = collectionName;
          this.id = id;
          this.collectionData = model && model.data[collectionName];
        }

        Doc.prototype.path = function (segments) {
          var path = this.collectionName + '.' + this.id;
          if (segments && segments.lenth) path += '.' + segments.join('.');
          return path;
        };

        Doc.prototype._errorMessage = function (description, segments, value) {
          return description + ' at ' + this.path(segments) + ': ' +
              JSON.stringify(value, null, 2);
        };

      }, {}],
      7: [function (require, module, exports) {
        var Doc = require('./Doc');
        var util = require('../util');

        module.exports = LocalDoc;

        function LocalDoc(model, collectionName, id, data) {
          Doc.call(this, model, collectionName, id);
          this.data = data;
          this._updateCollectionData();
        }

        LocalDoc.prototype = new Doc();

        LocalDoc.prototype._updateCollectionData = function () {
          this.collectionData[this.id] = this.data;
        };

        LocalDoc.prototype.create = function (value, cb) {
          if (this.data !== undefined) {
            var message = this._errorMessage('create on local document with data', null, this.data);
            var err = new Error(message);
            return cb(err);
          }
          this.data = value;
          this._updateCollectionData();
          cb();
        };

        LocalDoc.prototype.set = function (segments, value, cb) {
          function set(node, key) {
            var previous = node[key];
            node[key] = value;
            return previous;
          }

          return this._apply(segments, set, cb);
        };

        LocalDoc.prototype.del = function (segments, cb) {
          // Don't do anything if the value is already undefined, since
          // apply creates objects as it traverses, and the del method
          // should not create anything
          var previous = this.get(segments);
          if (previous === undefined) {
            cb();
            return;
          }
          function del(node, key) {
            delete node[key];
            return previous;
          }

          return this._apply(segments, del, cb);
        };

        LocalDoc.prototype.increment = function (segments, byNumber, cb) {
          var self = this;

          function validate(value) {
            if (typeof value === 'number' || value == null) return;
            return new TypeError(self._errorMessage(
                'increment on non-number', segments, value
            ));
          }

          function increment(node, key) {
            var value = (node[key] || 0) + byNumber;
            node[key] = value;
            return value;
          }

          return this._validatedApply(segments, validate, increment, cb);
        };

        LocalDoc.prototype.push = function (segments, value, cb) {
          function push(arr) {
            return arr.push(value);
          }

          return this._arrayApply(segments, push, cb);
        };

        LocalDoc.prototype.unshift = function (segments, value, cb) {
          function unshift(arr) {
            return arr.unshift(value);
          }

          return this._arrayApply(segments, unshift, cb);
        };

        LocalDoc.prototype.insert = function (segments, index, values, cb) {
          function insert(arr) {
            arr.splice.apply(arr, [index, 0].concat(values));
            return arr.length;
          }

          return this._arrayApply(segments, insert, cb);
        };

        LocalDoc.prototype.pop = function (segments, cb) {
          function pop(arr) {
            return arr.pop();
          }

          return this._arrayApply(segments, pop, cb);
        };

        LocalDoc.prototype.shift = function (segments, cb) {
          function shift(arr) {
            return arr.shift();
          }

          return this._arrayApply(segments, shift, cb);
        };

        LocalDoc.prototype.remove = function (segments, index, howMany, cb) {
          function remove(arr) {
            return arr.splice(index, howMany);
          }

          return this._arrayApply(segments, remove, cb);
        };

        LocalDoc.prototype.move = function (segments, from, to, howMany, cb) {
          function move(arr) {
            // Remove from old location
            var values = arr.splice(from, howMany);
            // Insert in new location
            arr.splice.apply(arr, [to, 0].concat(values));
            return values;
          }

          return this._arrayApply(segments, move, cb);
        };

        LocalDoc.prototype.stringInsert = function (segments, index, value, cb) {
          var self = this;

          function validate(value) {
            if (typeof value === 'string' || value == null) return;
            return new TypeError(self._errorMessage(
                'stringInsert on non-string', segments, value
            ));
          }

          function stringInsert(node, key) {
            var previous = node[key];
            if (previous == null) {
              node[key] = value;
              return previous;
            }
            node[key] = previous.slice(0, index) + value + previous.slice(index);
            return previous;
          }

          return this._validatedApply(segments, validate, stringInsert, cb);
        };

        LocalDoc.prototype.stringRemove = function (segments, index, howMany, cb) {
          var self = this;

          function validate(value) {
            if (typeof value === 'string' || value == null) return;
            return new TypeError(self._errorMessage(
                'stringRemove on non-string', segments, value
            ));
          }

          function stringRemove(node, key) {
            var previous = node[key];
            if (previous == null) return previous;
            if (index < 0) index += previous.length;
            node[key] = previous.slice(0, index) + previous.slice(index + howMany);
            return previous;
          }

          return this._validatedApply(segments, validate, stringRemove, cb);
        };

        LocalDoc.prototype.get = function (segments) {
          return util.lookup(segments, this.data);
        };

        /**
         * @param {Array} segments is the array representing a path
         * @param {Function} fn(node, key) applies a mutation on node[key]
         * @return {Object} returns the return value of fn(node, key)
         */
        LocalDoc.prototype._createImplied = function (segments, fn) {
          var node = this;
          var key = 'data';
          var i = 0;
          var nextKey = segments[i++];
          while (nextKey != null) {
            // Get or create implied object or array
            node = node[key] || (node[key] = /^\d+$/.test(nextKey) ? [] : {});
            key = nextKey;
            nextKey = segments[i++];
          }
          return fn(node, key);
        };

        LocalDoc.prototype._apply = function (segments, fn, cb) {
          var out = this._createImplied(segments, fn);
          this._updateCollectionData();
          cb();
          return out;
        };

        LocalDoc.prototype._validatedApply = function (segments, validate, fn, cb) {
          var out = this._createImplied(segments, function (node, key) {
            var err = validate(node[key]);
            if (err) return cb(err);
            return fn(node, key);
          });
          this._updateCollectionData();
          cb();
          return out;
        };

        LocalDoc.prototype._arrayApply = function (segments, fn, cb) {
          // Lookup a pointer to the property or nested property &
          // return the current value or create a new array
          var arr = this._createImplied(segments, nodeCreateArray);

          if (!Array.isArray(arr)) {
            var message = this._errorMessage(fn.name + ' on non-array', segments, arr);
            var err = new TypeError(message);
            return cb(err);
          }
          var out = fn(arr);
          this._updateCollectionData();
          cb();
          return out;
        };

        function nodeCreateArray(node, key) {
          var node = node[key] || (node[key] = []);
          return node;
        }

      }, {"../util": 27, "./Doc": 6}],
      8: [function (require, module, exports) {
        var uuid = require('uuid');

        Model.INITS = [];

        module.exports = Model;

        function Model(options) {
          this.root = this;

          var inits = Model.INITS;
          if (!options) options = {};
          this.debug = options.debug || {};
          for (var i = 0; i < inits.length; i++) {
            inits[i](this, options);
          }
        }

        Model.prototype.id = function () {
          return uuid.v4();
        };

        Model.prototype._child = function () {
          return new ChildModel(this);
        };

        Model.ChildModel = ChildModel;

        function ChildModel(model) {
          // Shared properties should be accessed via the root. This makes inheritance
          // cheap and easily extensible
          this.root = model.root;

          // EventEmitter methods access these properties directly, so they must be
          // inherited manually instead of via the root
          this._events = model._events;
          this._maxListeners = model._maxListeners;

          // Properties specific to a child instance
          this._context = model._context;
          this._at = model._at;
          this._pass = model._pass;
          this._silent = model._silent;
          this._eventContext = model._eventContext;
          this._preventCompose = model._preventCompose;
        }

        ChildModel.prototype = new Model();

      }, {"uuid": 44}],
      9: [function (require, module, exports) {
        (function (process) {
          var util = require('../util');
          var Model = require('./Model');
          var defaultType = require('sharedb/lib/client').types.defaultType;

          module.exports = Query;

          Model.INITS.push(function (model) {
            model.root._queries = new Queries();
          });

          Model.prototype.query = function (collectionName, expression, options) {
            expression = this.sanitizeQuery(expression);
            // DEPRECATED: Passing in a string as the third argument specifies the db
            // option for backward compatibility
            if (typeof options === 'string') {
              options = {db: options};
            }
            var query = this.root._queries.get(collectionName, expression, options);
            if (query) return query;
            query = new Query(this, collectionName, expression, options);
            this.root._queries.add(query);
            return query;
          };

// This method replaces undefined in query objects with null, because
// undefined properties are removed in JSON stringify. This can be dangerous
// in queries, where presenece of a property may indicate that it should be a
// filter and absence means that all values are accepted. We aren't checking
// for cycles, which aren't allowed in JSON, so this could throw a max call
// stack error
          Model.prototype.sanitizeQuery = function (expression) {
            if (expression && typeof expression === 'object') {
              for (var key in expression) {
                if (expression.hasOwnProperty(key)) {
                  var value = expression[key];
                  if (value === undefined) {
                    expression[key] = null;
                  } else {
                    this.sanitizeQuery(value);
                  }
                }
              }
            }
            return expression;
          };

// Called during initialization of the bundle on page load.
          Model.prototype._initQueries = function (items) {
            var queries = this.root._queries;
            for (var i = 0; i < items.length; i++) {
              var item = items[i];
              var counts = item[0];
              var collectionName = item[1];
              var expression = item[2];
              var ids = item[3] || [];
              var results = item[4] || [];
              var options = item[5];
              var extra = item[6];
              var query = new Query(this, collectionName, expression, options);
              queries.add(query);

              query._addMapIds(ids);
              this._set(query.idsSegments, ids);
              query._setExtra(extra);

              for (var resultIndex = 0; resultIndex < results.length; resultIndex++) {
                var result = results[resultIndex];
                if (!result) continue;
                var id = ids[resultIndex];
                var snapshot = {
                  data: result[0],
                  v: result[1],
                  type: result[2]
                };
                this.getOrCreateDoc(collectionName, id, snapshot);
              }

              for (var countIndex = 0; countIndex < counts.length; countIndex++) {
                var count = counts[countIndex];
                var subscribed = count[0] || 0;
                var fetched = count[1] || 0;
                var contextId = count[2];
                if (contextId) query.model.setContext(contextId);
                while (subscribed--) {
                  query.subscribe();
                }
                query.fetchCount += fetched;
                while (fetched--) {
                  query.model._context.fetchQuery(query);
                }
              }
            }
          };

          function Queries() {
            // Map is a flattened map of queries by hash. Currently used in contexts
            this.map = {};
            // Collections is a nested map of queries by collection then hash
            this.collections = {};
          }

          Queries.prototype.add = function (query) {
            this.map[query.hash] = query;
            var collection = this.collections[query.collectionName] ||
                (this.collections[query.collectionName] = {});
            collection[query.hash] = query;
          };
          Queries.prototype.remove = function (query) {
            delete this.map[query.hash];
            var collection = this.collections[query.collectionName];
            if (!collection) return;
            delete collection[query.hash];
            // Check if the collection still has any keys
            // eslint-disable-next-line no-unused-vars
            for (var key in collection) return;
            delete this.collections[collection];
          };
          Queries.prototype.get = function (collectionName, expression, options) {
            var hash = queryHash(collectionName, expression, options);
            return this.map[hash];
          };
          Queries.prototype.toJSON = function () {
            var out = [];
            for (var hash in this.map) {
              var query = this.map[hash];
              if (query.subscribeCount || query.fetchCount) {
                out.push(query.serialize());
              }
            }
            return out;
          };

          function Query(model, collectionName, expression, options) {
            this.model = model.pass({$query: this});
            this.collectionName = collectionName;
            this.expression = expression;
            this.options = options;
            this.hash = queryHash(collectionName, expression, options);
            this.segments = ['$queries', this.hash];
            this.idsSegments = ['$queries', this.hash, 'ids'];
            this.extraSegments = ['$queries', this.hash, 'extra'];

            this._pendingSubscribeCallbacks = [];

            // These are used to help cleanup appropriately when calling unsubscribe and
            // unfetch. A query won't be fully cleaned up until unfetch and unsubscribe
            // are called the same number of times that fetch and subscribe were called.
            this.subscribeCount = 0;
            this.fetchCount = 0;

            this.created = false;
            this.shareQuery = null;

            // idMap is checked in maybeUnload to see if the query is currently holding
            // a reference to an id in its results set. This map is duplicative of the
            // actual results id list stored in the model, but we are maintaining it,
            // because otherwise maybeUnload would be looping through the entire results
            // set of each query on the same collection for every doc checked
            //
            // Map of id -> true
            this.idMap = {};
          }

          Query.prototype.create = function () {
            this.created = true;
            this.model.root._queries.add(this);
          };

          Query.prototype.destroy = function () {
            var ids = this.getIds();
            this.created = false;
            if (this.shareQuery) {
              this.shareQuery.destroy();
              this.shareQuery = null;
            }
            this.model.root._queries.remove(this);
            this.idMap = {};
            this.model._del(this.segments);
            this._maybeUnloadDocs(ids);
          };

          Query.prototype.fetch = function (cb) {
            cb = this.model.wrapCallback(cb);
            this.model._context.fetchQuery(this);

            this.fetchCount++;

            if (!this.created) this.create();

            var query = this;

            function fetchCb(err, results, extra) {
              if (err) return cb(err);
              query._setExtra(extra);
              query._setResults(results);
              cb();
            }

            this.model.root.connection.createFetchQuery(
                this.collectionName,
                this.expression,
                this.options,
                fetchCb
            );
            return this;
          };

          Query.prototype.subscribe = function (cb) {
            cb = this.model.wrapCallback(cb);
            this.model._context.subscribeQuery(this);

            if (this.subscribeCount++) {
              var query = this;
              process.nextTick(function () {
                var data = query.model._get(query.segments);
                if (data) {
                  cb();
                } else {
                  query._pendingSubscribeCallbacks.push(cb);
                }
              });
              return this;
            }

            if (!this.created) this.create();

            var options = (this.options) ? util.copy(this.options) : {};
            options.results = this._getShareResults();

            // When doing server-side rendering, we actually do a fetch the first time
            // that subscribe is called, but keep track of the state as if subscribe
            // were called for proper initialization in the client
            if (this.model.root.fetchOnly) {
              this._shareFetchedSubscribe(options, cb);
            } else {
              this._shareSubscribe(options, cb);
            }

            return this;
          };

          Query.prototype._subscribeCb = function (cb) {
            var query = this;
            return function subscribeCb(err, results, extra) {
              if (err) return query._flushSubscribeCallbacks(err, cb);
              query._setExtra(extra);
              query._setResults(results);
              query._flushSubscribeCallbacks(null, cb);
            };
          };

          Query.prototype._shareFetchedSubscribe = function (options, cb) {
            this.model.root.connection.createFetchQuery(
                this.collectionName,
                this.expression,
                options,
                this._subscribeCb(cb)
            );
          };

          Query.prototype._shareSubscribe = function (options, cb) {
            var query = this;
            // Sanity check, though this shouldn't happen
            if (this.shareQuery) {
              this.shareQuery.destroy();
            }
            this.shareQuery = this.model.root.connection.createSubscribeQuery(
                this.collectionName,
                this.expression,
                options,
                this._subscribeCb(cb)
            );
            this.shareQuery.on('insert', function (shareDocs, index) {
              var ids = resultsIds(shareDocs);
              query._addMapIds(ids);
              query.model._insert(query.idsSegments, index, ids);
            });
            this.shareQuery.on('remove', function (shareDocs, index) {
              var ids = resultsIds(shareDocs);
              query._removeMapIds(ids);
              query.model._remove(query.idsSegments, index, shareDocs.length);
            });
            this.shareQuery.on('move', function (shareDocs, from, to) {
              query.model._move(query.idsSegments, from, to, shareDocs.length);
            });
            this.shareQuery.on('extra', function (extra) {
              query.model._setDiffDeep(query.extraSegments, extra);
            });
            this.shareQuery.on('error', function (err) {
              query.model._emitError(err, query.hash);
            });
          };

          Query.prototype._removeMapIds = function (ids) {
            for (var i = ids.length; i--;) {
              var id = ids[i];
              delete this.idMap[id];
            }
            // Technically this isn't quite right and we might not wait the full unload
            // delay if someone else calls maybeUnload for the same doc id. However,
            // it is a lot easier to implement than delaying the removal until later and
            // dealing with adds that might happen in the meantime. This will probably
            // work to avoid thrashing subscribe/unsubscribe in expected cases
            if (this.model.root.unloadDelay) {
              var query = this;
              setTimeout(function () {
                query._maybeUnloadDocs(ids);
              }, this.model.root.unloadDelay);
              return;
            }
            this._maybeUnloadDocs(ids);
          };
          Query.prototype._addMapIds = function (ids) {
            for (var i = ids.length; i--;) {
              var id = ids[i];
              this.idMap[id] = true;
            }
          };
          Query.prototype._diffMapIds = function (ids) {
            var addedIds = [];
            var removedIds = [];
            var newMap = {};
            for (var i = ids.length; i--;) {
              var id = ids[i];
              newMap[id] = true;
              if (this.idMap[id]) continue;
              addedIds.push(id);
            }
            for (var id in this.idMap) {
              if (newMap[id]) continue;
              removedIds.push(id);
            }
            if (addedIds.length) this._addMapIds(addedIds);
            if (removedIds.length) this._removeMapIds(removedIds);
          };
          Query.prototype._setExtra = function (extra) {
            if (extra === undefined) return;
            this.model._setDiffDeep(this.extraSegments, extra);
          };
          Query.prototype._setResults = function (results) {
            var ids = resultsIds(results);
            this._setResultIds(ids);
          };
          Query.prototype._setResultIds = function (ids) {
            this._diffMapIds(ids);
            this.model._setArrayDiff(this.idsSegments, ids);
          };
          Query.prototype._maybeUnloadDocs = function (ids) {
            for (var i = 0; i < ids.length; i++) {
              var id = ids[i];
              this.model._maybeUnloadDoc(this.collectionName, id);
            }
          };

// Flushes `_pendingSubscribeCallbacks`, calling each callback in the array,
// with an optional error to pass into each. `_pendingSubscribeCallbacks` will
// be empty after this runs.
          Query.prototype._flushSubscribeCallbacks = function (err, cb) {
            cb(err);
            var pendingCallback;
            while ((pendingCallback = this._pendingSubscribeCallbacks.shift())) {
              pendingCallback(err);
            }
          };

          Query.prototype.unfetch = function (cb) {
            cb = this.model.wrapCallback(cb);
            this.model._context.unfetchQuery(this);

            // No effect if the query is not currently fetched
            if (!this.fetchCount) {
              cb();
              return this;
            }

            var query = this;
            if (this.model.root.unloadDelay) {
              setTimeout(finishUnfetchQuery, this.model.root.unloadDelay);
            } else {
              finishUnfetchQuery();
            }
            function finishUnfetchQuery() {
              var count = --query.fetchCount;
              if (count) return cb(null, count);
              // Cleanup when no fetches or subscribes remain
              if (!query.subscribeCount) query.destroy();
              cb(null, 0);
            }

            return this;
          };

          Query.prototype.unsubscribe = function (cb) {
            cb = this.model.wrapCallback(cb);
            this.model._context.unsubscribeQuery(this);

            // No effect if the query is not currently subscribed
            if (!this.subscribeCount) {
              cb();
              return this;
            }

            var query = this;
            if (this.model.root.unloadDelay) {
              setTimeout(finishUnsubscribeQuery, this.model.root.unloadDelay);
            } else {
              finishUnsubscribeQuery();
            }
            function finishUnsubscribeQuery() {
              var count = --query.subscribeCount;
              if (count) return cb(null, count);

              if (query.shareQuery) {
                query.shareQuery.destroy();
                query.shareQuery = null;
              }

              unsubscribeQueryCallback();
            }

            function unsubscribeQueryCallback(err) {
              if (err) return cb(err);
              // Cleanup when no fetches or subscribes remain
              if (!query.fetchCount) query.destroy();
              cb(null, 0);
            }

            return this;
          };

          Query.prototype._getShareResults = function () {
            var ids = this.model._get(this.idsSegments);
            if (!ids) return;

            var collection = this.model.getCollection(this.collectionName);
            if (!collection) return;

            var results = [];
            for (var i = 0; i < ids.length; i++) {
              var id = ids[i];
              var doc = collection.docs[id];
              results.push(doc && doc.shareDoc);
            }
            return results;
          };

          Query.prototype.get = function () {
            var results = [];
            var data = this.model._get(this.segments);
            if (!data) {
              console.warn('You must fetch or subscribe to a query before getting its results.');
              return results;
            }
            var ids = data.ids;
            if (!ids) return results;

            var collection = this.model.getCollection(this.collectionName);
            for (var i = 0, l = ids.length; i < l; i++) {
              var id = ids[i];
              var doc = collection && collection.docs[id];
              results.push(doc && doc.get());
            }
            return results;
          };

          Query.prototype.getIds = function () {
            return this.model._get(this.idsSegments) || [];
          };

          Query.prototype.getExtra = function () {
            return this.model._get(this.extraSegments);
          };

          Query.prototype.ref = function (from) {
            var idsPath = this.idsSegments.join('.');
            return this.model.refList(from, this.collectionName, idsPath);
          };

          Query.prototype.refIds = function (from) {
            var idsPath = this.idsSegments.join('.');
            return this.model.root.ref(from, idsPath);
          };

          Query.prototype.refExtra = function (from, relPath) {
            var extraPath = this.extraSegments.join('.');
            if (relPath) extraPath += '.' + relPath;
            return this.model.root.ref(from, extraPath);
          };

          Query.prototype.serialize = function () {
            var ids = this.getIds();
            var collection = this.model.getCollection(this.collectionName);
            var results;
            if (collection) {
              results = [];
              for (var i = 0; i < ids.length; i++) {
                var id = ids[i];
                var doc = collection.docs[id];
                if (doc) {
                  collection.remove(id);
                  var result = [doc.shareDoc.data, doc.shareDoc.version];
                  if (doc.shareDoc.type !== defaultType) {
                    result.push(doc.shareDoc.type && doc.shareDoc.type.name);
                  }
                  results.push(result);
                } else {
                  results.push(0);
                }
              }
            }
            var counts = [];
            var contexts = this.model.root._contexts;
            for (var key in contexts) {
              var context = contexts[key];
              var subscribed = context.subscribedQueries[this.hash] || 0;
              var fetched = context.fetchedQueries[this.hash] || 0;
              if (subscribed || fetched) {
                if (key !== 'root') {
                  counts.push([subscribed, fetched, key]);
                } else if (fetched) {
                  counts.push([subscribed, fetched]);
                } else {
                  counts.push([subscribed]);
                }
              }
            }
            var serialized = [
              counts,
              this.collectionName,
              this.expression,
              ids,
              results,
              this.options,
              this.getExtra()
            ];
            while (serialized[serialized.length - 1] == null) {
              serialized.pop();
            }
            return serialized;
          };

          function queryHash(collectionName, expression, options) {
            var args = [collectionName, expression, options];
            return JSON.stringify(args).replace(/\./g, '|');
          }

          function resultsIds(results) {
            var ids = [];
            for (var i = 0; i < results.length; i++) {
              var shareDoc = results[i];
              ids.push(shareDoc.id);
            }
            return ids;
          }

        }).call(this, require('_process'))

      }, {"../util": 27, "./Model": 8, "_process": 4, "sharedb/lib/client": 32}],
      10: [function (require, module, exports) {
        /**
         * RemoteDoc adapts the ShareJS operation protocol to Racer's mutator
         * interface.
         *
         * 1. It maps Racer's mutator methods to outgoing ShareJS operations.
         * 2. It maps incoming ShareJS operations to Racer events.
         */

        var Doc = require('./Doc');
        var util = require('../util');

        module.exports = RemoteDoc;

        function RemoteDoc(model, collectionName, id, snapshot, collection) {
          // This is a bit messy, but we have to immediately register this doc on the
          // collection that added it, so that when we create the shareDoc and the
          // connection emits the 'doc' event, we'll find this doc instead of
          // creating a new one
          if (collection) collection.docs[id] = this;

          Doc.call(this, model, collectionName, id);
          this.model = model.pass({$remote: true});
          this.debugMutations = model.root.debug.remoteMutations;

          // Get or create the Share document. Note that we must have already added
          // this doc to the collection to avoid creating a duplicate doc
          this.shareDoc = model.root.connection.get(collectionName, id);
          this.shareDoc.ingestSnapshot(snapshot);
          this._initShareDoc();
        }

        RemoteDoc.prototype = new Doc();

        RemoteDoc.prototype._initShareDoc = function () {
          var doc = this;
          var model = this.model;
          var collectionName = this.collectionName;
          var id = this.id;
          var shareDoc = this.shareDoc;
          // Override submitOp to disable all writes and perform a dry-run
          if (model.root.debug.disableSubmit) {
            shareDoc.submitOp = function () {
            };
            shareDoc.create = function () {
            };
            shareDoc.del = function () {
            };
          }
          // Subscribe to doc events
          shareDoc.on('op', function (op, isLocal) {
            // Don't emit on local operations, since they are emitted in the mutator
            if (isLocal) return;
            doc._updateCollectionData();
            doc._onOp(op);
          });
          shareDoc.on('del', function (previous, isLocal) {
            // Calling the shareDoc.del method does not emit an operation event,
            // so we create the appropriate event here.
            if (isLocal) return;
            delete doc.collectionData[id];
            model.emit('change', [collectionName, id], [undefined, previous, model._pass]);
          });
          shareDoc.on('create', function (isLocal) {
            // Local creates should not emit an event, since they only happen
            // implicitly as a result of another mutation, and that operation will
            // emit the appropriate event. Remote creates can set the snapshot data
            // without emitting an operation event, so an event needs to be emitted
            // for them.
            if (isLocal) return;
            doc._updateCollectionData();
            var value = shareDoc.data;
            model.emit('change', [collectionName, id], [value, undefined, model._pass]);
          });
          shareDoc.on('error', function (err) {
            model._emitError(err, collectionName + '.' + id);
          });
          shareDoc.on('load', function () {
            doc._updateCollectionData();
            var value = shareDoc.data;
            // If we subscribe to an uncreated document, no need to emit 'load' event
            if (value === undefined) return;
            model.emit('load', [collectionName, id], [value, model._pass]);
          });
          this._updateCollectionData();
        };

        RemoteDoc.prototype._updateCollectionData = function () {
          var data = this.shareDoc.data;
          if (typeof data === 'object' && !Array.isArray(data) && data !== null) {
            data.id = this.id;
          }
          this.collectionData[this.id] = data;
        };

        RemoteDoc.prototype.create = function (value, cb) {
          if (this.debugMutations) {
            console.log('RemoteDoc create', this.path(), value);
          }
          // We copy the snapshot data at time of create to prevent the id added
          // outside of ShareJS from getting stored in the data
          var data = util.deepCopy(value);
          if (data) delete data.id;
          this.shareDoc.create(data, cb);
          // The id value will get added to the data that was passed in
          this.shareDoc.data = value;
          this._updateCollectionData();
          this.model._context.createDoc(this.collectionName, this.id);
          return;
        };

        RemoteDoc.prototype.set = function (segments, value, cb) {
          if (this.debugMutations) {
            console.log('RemoteDoc set', this.path(segments), value);
          }
          var previous = this._createImplied(segments);
          var lastSegment = segments[segments.length - 1];
          if (previous instanceof ImpliedOp) {
            previous.value[lastSegment] = value;
            this.shareDoc.submitOp(previous.op, cb);
            this._updateCollectionData();
            return;
          }
          var op = (util.isArrayIndex(lastSegment)) ?
              [new ListReplaceOp(segments.slice(0, -1), lastSegment, previous, value)] :
              [new ObjectReplaceOp(segments, previous, value)];
          this.shareDoc.submitOp(op, cb);
          this._updateCollectionData();
          return previous;
        };

        RemoteDoc.prototype.del = function (segments, cb) {
          if (this.debugMutations) {
            console.log('RemoteDoc del', this.path(segments));
          }
          if (segments.length === 0) {
            var previous = this.get();
            this.shareDoc.del(cb);
            delete this.collectionData[this.id];
            return previous;
          }
          // Don't do anything if the value is already undefined, since
          // the del method should not create anything
          var previous = this.get(segments);
          if (previous === undefined) {
            cb();
            return;
          }
          var op = [new ObjectDeleteOp(segments, previous)];
          this.shareDoc.submitOp(op, cb);
          this._updateCollectionData();
          return previous;
        };

        RemoteDoc.prototype.increment = function (segments, byNumber, cb) {
          if (this.debugMutations) {
            console.log('RemoteDoc increment', this.path(segments), byNumber);
          }
          var previous = this._createImplied(segments);
          if (previous instanceof ImpliedOp) {
            var lastSegment = segments[segments.length - 1];
            previous.value[lastSegment] = byNumber;
            this.shareDoc.submitOp(previous.op, cb);
            this._updateCollectionData();
            return byNumber;
          }
          if (previous == null) {
            var lastSegment = segments[segments.length - 1];
            var op = (util.isArrayIndex(lastSegment)) ?
                [new ListInsertOp(segments.slice(0, -1), lastSegment, byNumber)] :
                [new ObjectInsertOp(segments, byNumber)];
            this.shareDoc.submitOp(op, cb);
            this._updateCollectionData();
            return byNumber;
          }
          var op = [new IncrementOp(segments, byNumber)];
          this.shareDoc.submitOp(op, cb);
          this._updateCollectionData();
          return previous + byNumber;
        };

        RemoteDoc.prototype.push = function (segments, value, cb) {
          if (this.debugMutations) {
            console.log('RemoteDoc push', this.path(segments), value);
          }
          var shareDoc = this.shareDoc;

          function push(arr, fnCb) {
            var op = [new ListInsertOp(segments, arr.length, value)];
            shareDoc.submitOp(op, fnCb);
            return arr.length;
          }

          return this._arrayApply(segments, push, cb);
        };

        RemoteDoc.prototype.unshift = function (segments, value, cb) {
          if (this.debugMutations) {
            console.log('RemoteDoc unshift', this.path(segments), value);
          }
          var shareDoc = this.shareDoc;

          function unshift(arr, fnCb) {
            var op = [new ListInsertOp(segments, 0, value)];
            shareDoc.submitOp(op, fnCb);
            return arr.length;
          }

          return this._arrayApply(segments, unshift, cb);
        };

        RemoteDoc.prototype.insert = function (segments, index, values, cb) {
          if (this.debugMutations) {
            console.log('RemoteDoc insert', this.path(segments), index, values);
          }
          var shareDoc = this.shareDoc;

          function insert(arr, fnCb) {
            var op = createInsertOp(segments, index, values);
            shareDoc.submitOp(op, fnCb);
            return arr.length;
          }

          return this._arrayApply(segments, insert, cb);
        };

        function createInsertOp(segments, index, values) {
          if (!Array.isArray(values)) {
            return [new ListInsertOp(segments, index, values)];
          }
          var op = [];
          for (var i = 0, len = values.length; i < len; i++) {
            op.push(new ListInsertOp(segments, index++, values[i]));
          }
          return op;
        }

        RemoteDoc.prototype.pop = function (segments, cb) {
          if (this.debugMutations) {
            console.log('RemoteDoc pop', this.path(segments));
          }
          var shareDoc = this.shareDoc;

          function pop(arr, fnCb) {
            var index = arr.length - 1;
            var value = arr[index];
            var op = [new ListRemoveOp(segments, index, value)];
            shareDoc.submitOp(op, fnCb);
            return value;
          }

          return this._arrayApply(segments, pop, cb);
        };

        RemoteDoc.prototype.shift = function (segments, cb) {
          if (this.debugMutations) {
            console.log('RemoteDoc shift', this.path(segments));
          }
          var shareDoc = this.shareDoc;

          function shift(arr, fnCb) {
            var value = arr[0];
            var op = [new ListRemoveOp(segments, 0, value)];
            shareDoc.submitOp(op, fnCb);
            return value;
          }

          return this._arrayApply(segments, shift, cb);
        };

        RemoteDoc.prototype.remove = function (segments, index, howMany, cb) {
          if (this.debugMutations) {
            console.log('RemoteDoc remove', this.path(segments), index, howMany);
          }
          var shareDoc = this.shareDoc;

          function remove(arr, fnCb) {
            var values = arr.slice(index, index + howMany);
            var op = [];
            for (var i = 0, len = values.length; i < len; i++) {
              op.push(new ListRemoveOp(segments, index, values[i]));
            }
            shareDoc.submitOp(op, fnCb);
            return values;
          }

          return this._arrayApply(segments, remove, cb);
        };

        RemoteDoc.prototype.move = function (segments, from, to, howMany, cb) {
          if (this.debugMutations) {
            console.log('RemoteDoc move', this.path(segments), from, to, howMany);
          }
          var shareDoc = this.shareDoc;

          function move(arr, fnCb) {
            // Get the return value
            var values = arr.slice(from, from + howMany);

            // Build an op that moves each item individually
            var op = [];
            for (var i = 0; i < howMany; i++) {
              op.push(new ListMoveOp(segments, (from < to) ? from : from + howMany - 1, (from < to) ? to + howMany - 1 : to));
            }
            shareDoc.submitOp(op, fnCb);

            return values;
          }

          return this._arrayApply(segments, move, cb);
        };

        RemoteDoc.prototype.stringInsert = function (segments, index, value, cb) {
          if (this.debugMutations) {
            console.log('RemoteDoc stringInsert', this.path(segments), index, value);
          }
          var previous = this._createImplied(segments);
          if (previous instanceof ImpliedOp) {
            var lastSegment = segments[segments.length - 1];
            previous.value[lastSegment] = value;
            this.shareDoc.submitOp(previous.op, cb);
            this._updateCollectionData();
            return;
          }
          if (previous == null) {
            var lastSegment = segments[segments.length - 1];
            var op = (util.isArrayIndex(lastSegment)) ?
                [new ListInsertOp(segments.slice(0, -1), lastSegment, value)] :
                [new ObjectInsertOp(segments, value)];
            this.shareDoc.submitOp(op, cb);
            this._updateCollectionData();
            return previous;
          }
          var op = [new StringInsertOp(segments, index, value)];
          this.shareDoc.submitOp(op, cb);
          this._updateCollectionData();
          return previous;
        };

        RemoteDoc.prototype.stringRemove = function (segments, index, howMany, cb) {
          if (this.debugMutations) {
            console.log('RemoteDoc stringRemove', this.path(segments), index, howMany);
          }
          var previous = this._createImplied(segments);
          if (previous instanceof ImpliedOp) return;
          if (previous == null) return previous;
          var removed = previous.slice(index, index + howMany);
          var op = [new StringRemoveOp(segments, index, removed)];
          this.shareDoc.submitOp(op, cb);
          this._updateCollectionData();
          return previous;
        };

        RemoteDoc.prototype.subtypeSubmit = function (segments, subtype, subtypeOp, cb) {
          if (this.debugMutations) {
            console.log('RemoteDoc subtypeSubmit', this.path(segments), subtype, subtypeOp);
          }
          var previous = this._createImplied(segments);
          if (previous instanceof ImpliedOp) {
            this.shareDoc.submitOp(previous.op);
            previous = undefined;
          }
          var op = new SubtypeOp(segments, subtype, subtypeOp);
          this.shareDoc.submitOp(op, cb);
          this._updateCollectionData();
          return previous;
        };

        RemoteDoc.prototype.get = function (segments) {
          return util.lookup(segments, this.shareDoc.data);
        };

        RemoteDoc.prototype._createImplied = function (segments) {
          if (!this.shareDoc.type) {
            throw new Error('Mutation on uncreated remote document');
          }
          var parent = this.shareDoc;
          var key = 'data';
          var node = parent[key];
          var i = 0;
          var nextKey = segments[i++];
          var op, value;
          while (nextKey != null) {
            if (!node) {
              if (op) {
                value = value[key] = util.isArrayIndex(nextKey) ? [] : {};
              } else {
                value = util.isArrayIndex(nextKey) ? [] : {};
                if (Array.isArray(parent)) {
                  if (key >= parent.length) {
                    op = new ListInsertOp(segments.slice(0, i - 2), key, value);
                  } else {
                    op = new ListReplaceOp(segments.slice(0, i - 2), key, node, value);
                  }
                } else {
                  op = new ObjectInsertOp(segments.slice(0, i - 1), value);
                }
              }
              node = value;
            }
            parent = node;
            key = nextKey;
            node = parent[key];
            nextKey = segments[i++];
          }
          if (op) return new ImpliedOp(op, value);
          return node;
        };

        function ImpliedOp(op, value) {
          this.op = op;
          this.value = value;
        }

        RemoteDoc.prototype._arrayApply = function (segments, fn, cb) {
          var arr = this._createImplied(segments);
          if (arr instanceof ImpliedOp) {
            this.shareDoc.submitOp(arr.op);
            arr = this.get(segments);
          }
          if (arr == null) {
            var lastSegment = segments[segments.length - 1];
            var op = (util.isArrayIndex(lastSegment)) ?
                [new ListInsertOp(segments.slice(0, -1), lastSegment, [])] :
                [new ObjectInsertOp(segments, [])];
            this.shareDoc.submitOp(op);
            arr = this.get(segments);
          }

          if (!Array.isArray(arr)) {
            var message = this._errorMessage(fn.name + ' on non-array', segments, arr);
            var err = new TypeError(message);
            return cb(err);
          }
          var out = fn(arr, cb);
          this._updateCollectionData();
          return out;
        };

        RemoteDoc.prototype._onOp = function (op) {
          var item;
          if (op.length === 1) {
            // ShareDB docs shatter json0 ops into single components during apply
            item = op[0];
          } else if (op.length === 0) {
            // Ignore no-ops
            return;
          } else {
            try {
              op = JSON.stringify(op);
            } catch (err) {
            }
            throw new Error('Received op with multiple components from ShareDB ' + op);
          }
          var segments = [this.collectionName, this.id].concat(item.p);
          var model = this.model;

          // ObjectReplaceOp, ObjectInsertOp, or ObjectDeleteOp
          if (defined(item.oi) || defined(item.od)) {
            var value = item.oi;
            var previous = item.od;
            model.emit('change', segments, [value, previous, model._pass]);

            // ListReplaceOp
          } else if (defined(item.li) && defined(item.ld)) {
            var value = item.li;
            var previous = item.ld;
            model.emit('change', segments, [value, previous, model._pass]);

            // ListInsertOp
          } else if (defined(item.li)) {
            var index = segments[segments.length - 1];
            var values = [item.li];
            model.emit('insert', segments.slice(0, -1), [index, values, model._pass]);

            // ListRemoveOp
          } else if (defined(item.ld)) {
            var index = segments[segments.length - 1];
            var removed = [item.ld];
            model.emit('remove', segments.slice(0, -1), [index, removed, model._pass]);

            // ListMoveOp
          } else if (defined(item.lm)) {
            var from = segments[segments.length - 1];
            var to = item.lm;
            var howMany = 1;
            model.emit('move', segments.slice(0, -1), [from, to, howMany, model._pass]);

            // StringInsertOp
          } else if (defined(item.si)) {
            var index = segments[segments.length - 1];
            var text = item.si;
            segments = segments.slice(0, -1);
            var value = model._get(segments);
            var previous = value.slice(0, index) + value.slice(index + text.length);
            var pass = model.pass({$stringInsert: {index: index, text: text}})._pass;
            model.emit('change', segments, [value, previous, pass]);

            // StringRemoveOp
          } else if (defined(item.sd)) {
            var index = segments[segments.length - 1];
            var text = item.sd;
            var howMany = text.length;
            segments = segments.slice(0, -1);
            var value = model._get(segments);
            var previous = value.slice(0, index) + text + value.slice(index);
            var pass = model.pass({$stringRemove: {index: index, howMany: howMany}})._pass;
            model.emit('change', segments, [value, previous, pass]);

            // IncrementOp
          } else if (defined(item.na)) {
            var value = this.get(item.p);
            var previous = value - item.na;
            model.emit('change', segments, [value, previous, model._pass]);

            // SubtypeOp
          } else if (defined(item.t)) {
            var value = this.get(item.p);
            // Since this is generic to all subtypes, we don't know how to get a copy
            // of the previous value efficiently. We could make a copy eagerly, but
            // given that embedded types are likely to be used for custom editors,
            // we'll assume they primarily use the returned op and are unlikely to
            // need the previous snapshot data
            var previous = undefined;
            var type = item.t;
            var op = item.o;
            var pass = model.pass({$subtype: {type: type, op: op}})._pass;
            model.emit('change', segments, [value, previous, pass]);
          }
        };

        function ObjectReplaceOp(segments, before, after) {
          this.p = util.castSegments(segments);
          this.od = before;
          this.oi = (after === undefined) ? null : after;
        }

        function ObjectInsertOp(segments, value) {
          this.p = util.castSegments(segments);
          this.oi = (value === undefined) ? null : value;
        }

        function ObjectDeleteOp(segments, value) {
          this.p = util.castSegments(segments);
          this.od = (value === undefined) ? null : value;
        }

        function ListReplaceOp(segments, index, before, after) {
          this.p = util.castSegments(segments.concat(index));
          this.ld = before;
          this.li = (after === undefined) ? null : after;
        }

        function ListInsertOp(segments, index, value) {
          this.p = util.castSegments(segments.concat(index));
          this.li = (value === undefined) ? null : value;
        }

        function ListRemoveOp(segments, index, value) {
          this.p = util.castSegments(segments.concat(index));
          this.ld = (value === undefined) ? null : value;
        }

        function ListMoveOp(segments, from, to) {
          this.p = util.castSegments(segments.concat(from));
          this.lm = to;
        }

        function StringInsertOp(segments, index, value) {
          this.p = util.castSegments(segments.concat(index));
          this.si = value;
        }

        function StringRemoveOp(segments, index, value) {
          this.p = util.castSegments(segments.concat(index));
          this.sd = value;
        }

        function IncrementOp(segments, byNumber) {
          this.p = util.castSegments(segments);
          this.na = byNumber;
        }

        function SubtypeOp(segments, subtype, subtypeOp) {
          this.p = util.castSegments(segments);
          this.t = subtype;
          this.o = subtypeOp;
        }

        function defined(value) {
          return value !== undefined;
        }

      }, {"../util": 27, "./Doc": 6}],
      11: [function (require, module, exports) {
        var Model = require('./Model');
        var LocalDoc = require('./LocalDoc');
        var util = require('../util');

        function CollectionMap() {
        }

        function ModelData() {
        }

        function DocMap() {
        }

        function CollectionData() {
        }

        Model.INITS.push(function (model) {
          model.root.collections = new CollectionMap();
          model.root.data = new ModelData();
        });

        Model.prototype.getCollection = function (collectionName) {
          return this.root.collections[collectionName];
        };
        Model.prototype.getDoc = function (collectionName, id) {
          var collection = this.root.collections[collectionName];
          return collection && collection.docs[id];
        };
        Model.prototype.get = function (subpath) {
          var segments = this._splitPath(subpath);
          return this._get(segments);
        };
        Model.prototype._get = function (segments) {
          return util.lookup(segments, this.root.data);
        };
        Model.prototype.getCopy = function (subpath) {
          var segments = this._splitPath(subpath);
          return this._getCopy(segments);
        };
        Model.prototype._getCopy = function (segments) {
          var value = this._get(segments);
          return util.copy(value);
        };
        Model.prototype.getDeepCopy = function (subpath) {
          var segments = this._splitPath(subpath);
          return this._getDeepCopy(segments);
        };
        Model.prototype._getDeepCopy = function (segments) {
          var value = this._get(segments);
          return util.deepCopy(value);
        };
        Model.prototype.getOrCreateCollection = function (name) {
          var collection = this.root.collections[name];
          if (collection) return collection;
          var Doc = this._getDocConstructor(name);
          collection = new Collection(this.root, name, Doc);
          this.root.collections[name] = collection;
          return collection;
        };
        Model.prototype._getDocConstructor = function () {
          // Only create local documents. This is overriden in ./connection.js, so that
          // the RemoteDoc behavior can be selectively included
          return LocalDoc;
        };

        /**
         * Returns an existing document with id in a collection. If the document does
         * not exist, then creates the document with id in a collection and returns the
         * new document.
         * @param {String} collectionName
         * @param {String} id
         * @param {Object} [data] data to create if doc with id does not exist in collection
         */
        Model.prototype.getOrCreateDoc = function (collectionName, id, data) {
          var collection = this.getOrCreateCollection(collectionName);
          return collection.docs[id] || collection.add(id, data);
        };

        /**
         * @param {String} subpath
         */
        Model.prototype.destroy = function (subpath) {
          var segments = this._splitPath(subpath);
          // Silently remove all types of listeners within subpath
          var silentModel = this.silent();
          silentModel.removeAllListeners(null, subpath);
          silentModel._removeAllRefs(segments);
          silentModel._stopAll(segments);
          silentModel._removeAllFilters(segments);
          // Silently remove all model data within subpath
          if (segments.length === 0) {
            this.root.collections = new CollectionMap();
            // Delete each property of data instead of creating a new object so that
            // it is possible to continue using a reference to the original data object
            var data = this.root.data;
            for (var key in data) {
              delete data[key];
            }
          } else if (segments.length === 1) {
            var collection = this.getCollection(segments[0]);
            collection && collection.destroy();
          } else {
            silentModel._del(segments);
          }
        };

        function Collection(model, name, Doc) {
          this.model = model;
          this.name = name;
          this.Doc = Doc;
          this.docs = new DocMap();
          this.data = model.data[name] = new CollectionData();
        }

        /**
         * Adds a document with `id` and `data` to `this` Collection.
         * @param {String} id
         * @param {Object} data
         * @return {LocalDoc|RemoteDoc} doc
         */
        Collection.prototype.add = function (id, data) {
          var doc = new this.Doc(this.model, this.name, id, data, this);
          this.docs[id] = doc;
          return doc;
        };
        Collection.prototype.destroy = function () {
          delete this.model.collections[this.name];
          delete this.model.data[this.name];
        };

        /**
         * Removes the document with `id` from `this` Collection. If there are no more
         * documents in the Collection after the given document is removed, then this
         * also destroys the Collection.
         * @param {String} id
         */
        Collection.prototype.remove = function (id) {
          delete this.docs[id];
          delete this.data[id];
          if (noKeys(this.docs)) this.destroy();
        };

        /**
         * Returns an object that maps doc ids to fully resolved documents.
         * @return {Object}
         */
        Collection.prototype.get = function () {
          return this.data;
        };

        function noKeys(object) {
          // eslint-disable-next-line no-unused-vars
          for (var key in object) {
            return false;
          }
          return true;
        }

      }, {"../util": 27, "./LocalDoc": 7, "./Model": 8}],
      12: [function (require, module, exports) {
        var Connection = require('sharedb/lib/client').Connection;
        var Model = require('./Model');
        var LocalDoc = require('./LocalDoc');
        var RemoteDoc = require('./RemoteDoc');

        Model.INITS.push(function (model) {
          model.root._preventCompose = false;
        });

        Model.prototype.preventCompose = function () {
          var model = this._child();
          model._preventCompose = true;
          return model;
        };

        Model.prototype.allowCompose = function () {
          var model = this._child();
          model._preventCompose = false;
          return model;
        };

        Model.prototype.createConnection = function (bundle) {
          // Model::_createSocket should be defined by the socket plugin
          this.root.socket = this._createSocket(bundle);

          // The Share connection will bind to the socket by defining the onopen,
          // onmessage, etc. methods
          var model = this;
          this.root.connection = new Connection(this.root.socket);
          this.root.connection.on('state', function (state, reason) {
            model._setDiff(['$connection', 'state'], state);
            model._setDiff(['$connection', 'reason'], reason);
          });
          this._set(['$connection', 'state'], 'connected');

          this._finishCreateConnection();
        };

        Model.prototype._finishCreateConnection = function () {
          var model = this;
          this.root.connection.on('error', function (err) {
            model._emitError(err);
          });
          // Share docs can be created by queries, so we need to register them
          // with Racer as soon as they are created to capture their events
          this.root.connection.on('doc', function (shareDoc) {
            model.getOrCreateDoc(shareDoc.collection, shareDoc.id);
          });
        };

        Model.prototype.connect = function () {
          this.root.socket.open();
        };
        Model.prototype.disconnect = function () {
          this.root.socket.close();
        };
        Model.prototype.reconnect = function () {
          this.disconnect();
          this.connect();
        };
// Clean delayed disconnect
        Model.prototype.close = function (cb) {
          cb = this.wrapCallback(cb);
          var model = this;
          this.whenNothingPending(function () {
            model.root.socket.close();
            cb();
          });
        };

// Returns a reference to the ShareDB agent if it is connected directly on the
// server. Will return null if the ShareDB connection has been disconnected or
// if we are not in the same process and we do not have a reference to the
// server-side agent object
        Model.prototype.getAgent = function () {
          return this.root.connection.agent;
        };

        Model.prototype._isLocal = function (name) {
          // Whether the collection is local or remote is determined by its name.
          // Collections starting with an underscore ('_') are for user-defined local
          // collections, those starting with a dollar sign ('$'') are for
          // framework-defined local collections, and all others are remote.
          var firstCharcter = name.charAt(0);
          return firstCharcter === '_' || firstCharcter === '$';
        };

        Model.prototype._getDocConstructor = function (name) {
          return (this._isLocal(name)) ? LocalDoc : RemoteDoc;
        };

        Model.prototype.hasPending = function () {
          return this.root.connection.hasPending();
        };
        Model.prototype.hasWritePending = function () {
          return this.root.connection.hasWritePending();
        };
        Model.prototype.whenNothingPending = function (cb) {
          return this.root.connection.whenNothingPending(cb);
        };

      }, {"./LocalDoc": 7, "./Model": 8, "./RemoteDoc": 10, "sharedb/lib/client": 32}],
      13: [function (require, module, exports) {
        /**
         * Contexts are useful for keeping track of the origin of subscribes.
         */

        var Model = require('./Model');
        var CollectionCounter = require('./CollectionCounter');

        Model.INITS.push(function (model) {
          model.root._contexts = new Contexts();
          model.root.setContext('root');
        });

        Model.prototype.context = function (id) {
          var model = this._child();
          model.setContext(id);
          return model;
        };

        Model.prototype.setContext = function (id) {
          this._context = this.getOrCreateContext(id);
        };

        Model.prototype.getOrCreateContext = function (id) {
          var context = this.root._contexts[id] ||
              (this.root._contexts[id] = new Context(this, id));
          return context;
        };

        Model.prototype.unload = function (id) {
          var context = (id) ? this.root._contexts[id] : this._context;
          context && context.unload();
        };

        Model.prototype.unloadAll = function () {
          var contexts = this.root._contexts;
          for (var key in contexts) {
            contexts[key].unload();
          }
        };

        function Contexts() {
        }

        function FetchedQueries() {
        }

        function SubscribedQueries() {
        }

        function Context(model, id) {
          this.model = model;
          this.id = id;
          this.fetchedDocs = new CollectionCounter();
          this.subscribedDocs = new CollectionCounter();
          this.createdDocs = new CollectionCounter();
          this.fetchedQueries = new FetchedQueries();
          this.subscribedQueries = new SubscribedQueries();
        }

        Context.prototype.toJSON = function () {
          var fetchedDocs = this.fetchedDocs.toJSON();
          var subscribedDocs = this.subscribedDocs.toJSON();
          var createdDocs = this.createdDocs.toJSON();
          if (!fetchedDocs && !subscribedDocs && !createdDocs) return;
          return {
            fetchedDocs: fetchedDocs,
            subscribedDocs: subscribedDocs,
            createdDocs: createdDocs
          };
        };

        Context.prototype.fetchDoc = function (collectionName, id) {
          this.fetchedDocs.increment(collectionName, id);
        };
        Context.prototype.subscribeDoc = function (collectionName, id) {
          this.subscribedDocs.increment(collectionName, id);
        };
        Context.prototype.unfetchDoc = function (collectionName, id) {
          this.fetchedDocs.decrement(collectionName, id);
        };
        Context.prototype.unsubscribeDoc = function (collectionName, id) {
          this.subscribedDocs.decrement(collectionName, id);
        };
        Context.prototype.createDoc = function (collectionName, id) {
          this.createdDocs.increment(collectionName, id);
        };
        Context.prototype.fetchQuery = function (query) {
          mapIncrement(this.fetchedQueries, query.hash);
        };
        Context.prototype.subscribeQuery = function (query) {
          mapIncrement(this.subscribedQueries, query.hash);
        };
        Context.prototype.unfetchQuery = function (query) {
          mapDecrement(this.fetchedQueries, query.hash);
        };
        Context.prototype.unsubscribeQuery = function (query) {
          mapDecrement(this.subscribedQueries, query.hash);
        };
        function mapIncrement(map, key) {
          map[key] = (map[key] || 0) + 1;
        }

        function mapDecrement(map, key) {
          map[key] && map[key]--;
          if (!map[key]) delete map[key];
        }

        Context.prototype.unload = function () {
          var model = this.model;
          for (var hash in this.fetchedQueries) {
            var query = model.root._queries.map[hash];
            if (!query) continue;
            var count = this.fetchedQueries[hash];
            while (count--) query.unfetch();
          }
          for (var hash in this.subscribedQueries) {
            var query = model.root._queries.map[hash];
            if (!query) continue;
            var count = this.subscribedQueries[hash];
            while (count--) query.unsubscribe();
          }
          for (var collectionName in this.fetchedDocs.collections) {
            var collection = this.fetchedDocs.collections[collectionName];
            for (var id in collection) {
              var count = collection[id];
              while (count--) model.unfetchDoc(collectionName, id);
            }
          }
          for (var collectionName in this.subscribedDocs.collections) {
            var collection = this.subscribedDocs.collections[collectionName];
            for (var id in collection) {
              var count = collection[id];
              while (count--) model.unsubscribeDoc(collectionName, id);
            }
          }
          for (var collectionName in this.createdDocs.collections) {
            var collection = this.createdDocs.collections[collectionName];
            for (var id in collection) {
              model._maybeUnloadDoc(collectionName, id);
            }
          }
          this.createdDocs.reset();
        };

      }, {"./CollectionCounter": 5, "./Model": 8}],
      14: [function (require, module, exports) {
        var defaultFns = module.exports = new DefaultFns();

        defaultFns.reverse = new FnPair(getReverse, setReverse);
        defaultFns.asc = asc;
        defaultFns.desc = desc;

        function DefaultFns() {
        }

        function FnPair(get, set) {
          this.get = get;
          this.set = set;
        }

        function getReverse(array) {
          return array && array.slice().reverse();
        }

        function setReverse(values) {
          return {0: getReverse(values)};
        }

        function asc(a, b) {
          if (a < b) return -1;
          if (a > b) return 1;
          return 0;
        }

        function desc(a, b) {
          if (a > b) return -1;
          if (a < b) return 1;
          return 0;
        }

      }, {}],
      15: [function (require, module, exports) {
        var EventEmitter = require('events').EventEmitter;
        var util = require('../util');
        var Model = require('./Model');

// These events are re-emitted as 'all' events, and they are queued up and
// emitted in sequence, so that events generated by other events are not
// seen in a different order by later listeners
        Model.MUTATOR_EVENTS = {
          change: true,
          insert: true,
          remove: true,
          move: true,
          load: true,
          unload: true
        };

        Model.INITS.push(function (model) {
          EventEmitter.call(this);

          // Set max listeners to unlimited
          model.setMaxListeners(0);

          // Used in async methods to emit an error event if a callback is not supplied.
          // This will throw if there is no handler for model.on('error')
          model.root._defaultCallback = defaultCallback;
          function defaultCallback(err) {
            if (err) model._emitError(err);
          }

          model.root._mutatorEventQueue = null;
          model.root._pass = new Passed({}, {});
          model.root._silent = null;
          model.root._eventContext = null;
        });

        util.mergeInto(Model.prototype, EventEmitter.prototype);

        Model.prototype.wrapCallback = function (cb) {
          if (!cb) return this.root._defaultCallback;
          var model = this;
          return function wrappedCallback() {
            try {
              return cb.apply(this, arguments);
            } catch (err) {
              model._emitError(err);
            }
          };
        };

        Model.prototype._emitError = function (err, context) {
          var message = (err.message) ? err.message :
              (typeof err === 'string') ? err :
                  'Unknown model error';
          if (context) {
            message += ' ' + context;
          }
          if (err.data) {
            try {
              message += ' ' + JSON.stringify(err.data);
            } catch (stringifyErr) {
            }
          }
          if (err instanceof Error) {
            err.message = message;
          } else {
            err = new Error(message);
          }
          this.emit('error', err);
        };

// EventEmitter.prototype.on, EventEmitter.prototype.addListener, and
// EventEmitter.prototype.once return `this`. The Model equivalents return
// the listener instead, since it is made internally for method subscriptions
// and may need to be passed to removeListener.

        Model.prototype._emit = EventEmitter.prototype.emit;
        Model.prototype.emit = function (type) {
          if (type === 'error') {
            return this._emit.apply(this, arguments);
          }
          if (Model.MUTATOR_EVENTS[type]) {
            if (this._silent) return this;
            var segments = arguments[1];
            var eventArgs = arguments[2];
            this._emit(type + 'Immediate', segments, eventArgs);
            if (this.root._mutatorEventQueue) {
              this.root._mutatorEventQueue.push([type, segments, eventArgs]);
              return this;
            }
            this.root._mutatorEventQueue = [];
            this._emit(type, segments, eventArgs);
            this._emit('all', segments, [type].concat(eventArgs));
            while (this.root._mutatorEventQueue.length) {
              var queued = this.root._mutatorEventQueue.shift();
              type = queued[0];
              segments = queued[1];
              eventArgs = queued[2];
              this._emit(type, segments, eventArgs);
              this._emit('all', segments, [type].concat(eventArgs));
            }
            this.root._mutatorEventQueue = null;
            return this;
          }
          return this._emit.apply(this, arguments);
        };

        Model.prototype._on = EventEmitter.prototype.on;
        Model.prototype.addListener =
            Model.prototype.on = function (type, pattern, cb) {
              var listener = eventListener(this, pattern, cb);
              this._on(type, listener);
              return listener;
            };

        Model.prototype.once = function (type, pattern, cb) {
          var listener = eventListener(this, pattern, cb);

          function g() {
            var matches = listener.apply(null, arguments);
            if (matches) this.removeListener(type, g);
          }

          this._on(type, g);
          return g;
        };

        Model.prototype._removeAllListeners = EventEmitter.prototype.removeAllListeners;
        Model.prototype.removeAllListeners = function (type, subpattern) {
          // If a pattern is specified without an event type, remove all model event
          // listeners under that pattern for all events
          if (!type) {
            for (var key in this._events) {
              this.removeAllListeners(key, subpattern);
            }
            return this;
          }

          var pattern = this.path(subpattern);
          // If no pattern is specified, remove all listeners like normal
          if (!pattern) {
            if (arguments.length === 0) {
              return this._removeAllListeners();
            }
            return this._removeAllListeners(type);
          }

          // Remove all listeners for an event under a pattern
          var listeners = this.listeners(type);
          var segments = pattern.split('.');
          // Make sure to iterate in reverse, since the array might be
          // mutated as listeners are removed
          for (var i = listeners.length; i--;) {
            var listener = listeners[i];
            if (patternContained(pattern, segments, listener)) {
              this.removeListener(type, listener);
            }
          }
          return this;
        };

        function patternContained(pattern, segments, listener) {
          var listenerSegments = listener.patternSegments;
          if (!listenerSegments) return false;
          if (pattern === listener.pattern || pattern === '**') return true;
          var len = segments.length;
          if (len > listenerSegments.length) return false;
          for (var i = 0; i < len; i++) {
            if (segments[i] !== listenerSegments[i]) return false;
          }
          return true;
        }

        Model.prototype.pass = function (object, invert) {
          var model = this._child();
          model._pass = (invert) ?
              new Passed(object, this._pass) :
              new Passed(this._pass, object);
          return model;
        };

        function Passed(previous, value) {
          for (var key in previous) {
            this[key] = previous[key];
          }
          for (var key in value) {
            this[key] = value[key];
          }
        }

        /**
         * The returned Model will or won't trigger event handlers when the model emits
         * events, depending on `value`
         * @param {Boolean|Null} value defaults to true
         * @return {Model}
         */
        Model.prototype.silent = function (value) {
          var model = this._child();
          model._silent = (value == null) ? true : value;
          return model;
        };

        Model.prototype.eventContext = function (value) {
          var model = this._child();
          model._eventContext = value;
          return model;
        };

        Model.prototype.removeContextListeners = function (value) {
          if (arguments.length === 0) {
            value = this._eventContext;
          }
          // Remove all events created within a given context
          for (var type in this._events) {
            var listeners = this.listeners(type);
            // Make sure to iterate in reverse, since the array might be
            // mutated as listeners are removed
            for (var i = listeners.length; i--;) {
              var listener = listeners[i];
              if (listener.eventContext === value) {
                this.removeListener(type, listener);
              }
            }
          }
          return this;
        };

        function eventListener(model, subpattern, cb) {
          if (cb) {
            // For signatures:
            // model.on('change', 'example.subpath', callback)
            // model.at('example').on('change', 'subpath', callback)
            var pattern = model.path(subpattern);
            return modelEventListener(pattern, cb, model._eventContext);
          }
          var path = model.path();
          cb = arguments[1];
          // For signature:
          // model.at('example').on('change', callback)
          if (path) return modelEventListener(path, cb, model._eventContext);
          // For signature:
          // model.on('normalEvent', callback)
          return cb;
        }

        function modelEventListener(pattern, cb, eventContext) {
          var patternSegments = util.castSegments(pattern.split('.'));
          var testFn = testPatternFn(pattern, patternSegments);

          function modelListener(segments, eventArgs) {
            var captures = testFn(segments);
            if (!captures) return;

            var args = (captures.length) ? captures.concat(eventArgs) : eventArgs;
            cb.apply(null, args);
            return true;
          }

          // Used in Model#removeAllListeners
          modelListener.pattern = pattern;
          modelListener.patternSegments = patternSegments;
          modelListener.eventContext = eventContext;

          return modelListener;
        }

        function testPatternFn(pattern, patternSegments) {
          if (pattern === '**') {
            return function testPattern(segments) {
              return [segments.join('.')];
            };
          }

          var endingRest = stripRestWildcard(patternSegments);

          return function testPattern(segments) {
            // Any pattern with more segments does not match
            var patternLen = patternSegments.length;
            if (patternLen > segments.length) return;

            // A pattern with the same number of segments matches if each
            // of the segments are wildcards or equal. A shorter pattern matches
            // if it ends in a rest wildcard and each of the corresponding
            // segments are wildcards or equal.
            if (patternLen === segments.length || endingRest) {
              var captures = [];
              for (var i = 0; i < patternLen; i++) {
                var patternSegment = patternSegments[i];
                var segment = segments[i];
                if (patternSegment === '*' || patternSegment === '**') {
                  captures.push(segment);
                  continue;
                }
                if (patternSegment !== segment) return;
              }
              if (endingRest) {
                var remainder = segments.slice(i).join('.');
                captures.push(remainder);
              }
              return captures;
            }
          };
        }

        function stripRestWildcard(segments) {
          // ['example', '**'] -> ['example']; return true
          var lastIndex = segments.length - 1;
          if (segments[lastIndex] === '**') {
            segments.pop();
            return true;
          }
          // ['example', 'subpath**'] -> ['example', 'subpath']; return true
          var match = /^([^\*]+)\*\*$/.exec(segments[lastIndex]);
          if (!match) return false;
          segments[lastIndex] = match[1];
          return true;
        }

      }, {"../util": 27, "./Model": 8, "events": 3}],
      16: [function (require, module, exports) {
        var util = require('../util');
        var Model = require('./Model');
        var defaultFns = require('./defaultFns');

        Model.INITS.push(function (model) {
          model.root._filters = new Filters(model);
          model.on('all', filterListener);
          function filterListener(segments, eventArgs) {
            var pass = eventArgs[eventArgs.length - 1];
            var map = model.root._filters.fromMap;
            for (var path in map) {
              var filter = map[path];
              if (pass.$filter === filter) continue;
              if (
                  util.mayImpact(filter.segments, segments) ||
                  (filter.inputsSegments && util.mayImpactAny(filter.inputsSegments, segments))
              ) {
                filter.update(pass);
              }
            }
          }
        });

        function parseFilterArguments(model, args) {
          var fn = args.pop();
          var options;
          if (!model.isPath(args[args.length - 1])) {
            options = args.pop();
          }
          var path = model.path(args.shift());
          var i = args.length;
          while (i--) {
            args[i] = model.path(args[i]);
          }
          return {
            path: path,
            inputPaths: (args.length) ? args : null,
            options: options,
            fn: fn
          };
        }

        Model.prototype.filter = function () {
          var args = Array.prototype.slice.call(arguments);
          var parsed = parseFilterArguments(this, args);
          return this.root._filters.add(
              parsed.path,
              parsed.fn,
              null,
              parsed.inputPaths,
              parsed.options
          );
        };

        Model.prototype.sort = function () {
          var args = Array.prototype.slice.call(arguments);
          var parsed = parseFilterArguments(this, args);
          return this.root._filters.add(
              parsed.path,
              null,
              parsed.fn || 'asc',
              parsed.inputPaths,
              parsed.options
          );
        };

        Model.prototype.removeAllFilters = function (subpath) {
          var segments = this._splitPath(subpath);
          this._removeAllFilters(segments);
        };
        Model.prototype._removeAllFilters = function (segments) {
          var filters = this.root._filters.fromMap;
          for (var from in filters) {
            if (util.contains(segments, filters[from].fromSegments)) {
              filters[from].destroy();
            }
          }
        };

        function FromMap() {
        }

        function Filters(model) {
          this.model = model;
          this.fromMap = new FromMap();
        }

        Filters.prototype.add = function (path, filterFn, sortFn, inputPaths, options) {
          return new Filter(this, path, filterFn, sortFn, inputPaths, options);
        };

        Filters.prototype.toJSON = function () {
          var out = [];
          for (var from in this.fromMap) {
            var filter = this.fromMap[from];
            // Don't try to bundle if functions were passed directly instead of by name
            if (!filter.bundle) continue;
            var args = [from, filter.path, filter.filterName, filter.sortName, filter.inputPaths];
            if (filter.options) args.push(filter.options);
            out.push(args);
          }
          return out;
        };

        function Filter(filters, path, filterFn, sortFn, inputPaths, options) {
          this.filters = filters;
          this.model = filters.model.pass({$filter: this});
          this.path = path;
          this.segments = path.split('.');
          this.filterName = null;
          this.sortName = null;
          this.bundle = true;
          this.filterFn = null;
          this.sortFn = null;
          this.inputPaths = inputPaths;
          this.inputsSegments = null;
          if (inputPaths) {
            this.inputsSegments = [];
            for (var i = 0; i < this.inputPaths.length; i++) {
              var segments = this.inputPaths[i].split('.');
              this.inputsSegments.push(segments);
            }
          }
          this.options = options;
          this.skip = options && options.skip;
          this.limit = options && options.limit;
          if (filterFn) this.filter(filterFn);
          if (sortFn) this.sort(sortFn);
          this.idsSegments = null;
          this.from = null;
          this.fromSegments = null;
        }

        Filter.prototype.filter = function (fn) {
          if (typeof fn === 'function') {
            this.filterFn = fn;
            this.bundle = false;
            return this;
          } else if (typeof fn === 'string') {
            this.filterName = fn;
            this.filterFn = this.model.root._namedFns[fn] || defaultFns[fn];
            if (!this.filterFn) {
              throw new TypeError('Filter function not found: ' + fn);
            }
          }
          return this;
        };

        Filter.prototype.sort = function (fn) {
          if (!fn) fn = 'asc';
          if (typeof fn === 'function') {
            this.sortFn = fn;
            this.bundle = false;
            return this;
          } else if (typeof fn === 'string') {
            this.sortName = fn;
            this.sortFn = this.model.root._namedFns[fn] || defaultFns[fn];
            if (!this.sortFn) {
              throw new TypeError('Sort function not found: ' + fn);
            }
          }
          return this;
        };

        Filter.prototype._slice = function (results) {
          if (this.skip == null && this.limit == null) return results;
          var begin = this.skip || 0;
          // A limit of zero is equivalent to setting no limit
          var end;
          if (this.limit) end = begin + this.limit;
          return results.slice(begin, end);
        };

        Filter.prototype.getInputs = function () {
          if (!this.inputsSegments) return;
          var inputs = [];
          for (var i = 0, len = this.inputsSegments.length; i < len; i++) {
            var input = this.model._get(this.inputsSegments[i]);
            inputs.push(input);
          }
          return inputs;
        };

        Filter.prototype.callFilter = function (items, key, inputs) {
          var item = items[key];
          return (inputs) ?
              this.filterFn.apply(this.model, [item, key, items].concat(inputs)) :
              this.filterFn.call(this.model, item, key, items);
        };

        Filter.prototype.ids = function () {
          var items = this.model._get(this.segments);
          var ids = [];
          if (!items) return ids;
          if (Array.isArray(items)) {
            throw new Error('model.filter is not currently supported on arrays');
          }
          if (this.filterFn) {
            var inputs = this.getInputs();
            for (var key in items) {
              if (items.hasOwnProperty(key) && this.callFilter(items, key, inputs)) {
                ids.push(key);
              }
            }
          } else {
            ids = Object.keys(items);
          }
          var sortFn = this.sortFn;
          if (sortFn) {
            ids.sort(function (a, b) {
              return sortFn(items[a], items[b]);
            });
          }
          return this._slice(ids);
        };

        Filter.prototype.get = function () {
          var items = this.model._get(this.segments);
          var results = [];
          if (Array.isArray(items)) {
            throw new Error('model.filter is not currently supported on arrays');
          }
          if (this.filterFn) {
            var inputs = this.getInputs();
            for (var key in items) {
              if (items.hasOwnProperty(key) && this.callFilter(items, key, inputs)) {
                results.push(items[key]);
              }
            }
          } else {
            for (var key in items) {
              if (items.hasOwnProperty(key)) {
                results.push(items[key]);
              }
            }
          }
          if (this.sortFn) results.sort(this.sortFn);
          return this._slice(results);
        };

        Filter.prototype.update = function (pass) {
          var ids = this.ids();
          this.model.pass(pass, true)._setArrayDiff(this.idsSegments, ids);
        };

        Filter.prototype.ref = function (from) {
          from = this.model.path(from);
          this.from = from;
          this.fromSegments = from.split('.');
          this.filters.fromMap[from] = this;
          this.idsSegments = ['$filters', from.replace(/\./g, '|')];
          this.update();
          return this.model.refList(from, this.path, this.idsSegments.join('.'));
        };

        Filter.prototype.destroy = function () {
          delete this.filters.fromMap[this.from];
          this.model._removeRef(this.idsSegments);
          this.model._del(this.idsSegments);
        };

      }, {"../util": 27, "./Model": 8, "./defaultFns": 14}],
      17: [function (require, module, exports) {
        var util = require('../util');
        var Model = require('./Model');
        var defaultFns = require('./defaultFns');

        function NamedFns() {
        }

        Model.INITS.push(function (model) {
          model.root._namedFns = new NamedFns();
          model.root._fns = new Fns(model);
          model.on('all', fnListener);
          function fnListener(segments, eventArgs) {
            var pass = eventArgs[eventArgs.length - 1];
            var map = model.root._fns.fromMap;
            for (var path in map) {
              var fn = map[path];
              if (pass.$fn === fn) continue;
              if (util.mayImpactAny(fn.inputsSegments, segments)) {
                // Mutation affecting input path
                fn.onInput(pass);
              } else if (util.mayImpact(fn.fromSegments, segments)) {
                // Mutation affecting output path
                fn.onOutput(pass);
              }
            }
          }
        });

        Model.prototype.fn = function (name, fns) {
          this.root._namedFns[name] = fns;
        };

        function parseStartArguments(model, args, hasPath) {
          var last = args.pop();
          var fns, name;
          if (typeof last === 'string') {
            name = last;
          } else {
            fns = last;
          }
          var path;
          if (hasPath) {
            path = model.path(args.shift());
          }
          var options;
          if (!model.isPath(args[args.length - 1])) {
            options = args.pop();
          }
          var i = args.length;
          while (i--) {
            args[i] = model.path(args[i]);
          }
          return {
            name: name,
            path: path,
            inputPaths: args,
            fns: fns,
            options: options
          };
        }

        Model.prototype.evaluate = function () {
          var args = Array.prototype.slice.call(arguments);
          var parsed = parseStartArguments(this, args, false);
          return this.root._fns.get(parsed.name, parsed.inputPaths, parsed.fns, parsed.options);
        };

        Model.prototype.start = function () {
          var args = Array.prototype.slice.call(arguments);
          var parsed = parseStartArguments(this, args, true);
          return this.root._fns.start(parsed.name, parsed.path, parsed.inputPaths, parsed.fns, parsed.options);
        };

        Model.prototype.stop = function (subpath) {
          var path = this.path(subpath);
          this._stop(path);
        };
        Model.prototype._stop = function (fromPath) {
          this.root._fns.stop(fromPath);
        };

        Model.prototype.stopAll = function (subpath) {
          var segments = this._splitPath(subpath);
          this._stopAll(segments);
        };
        Model.prototype._stopAll = function (segments) {
          var fns = this.root._fns.fromMap;
          for (var from in fns) {
            var fromSegments = fns[from].fromSegments;
            if (util.contains(segments, fromSegments)) {
              this._stop(from);
            }
          }
        };

        function FromMap() {
        }

        function Fns(model) {
          this.model = model;
          this.nameMap = model.root._namedFns;
          this.fromMap = new FromMap();
        }

        Fns.prototype.get = function (name, inputPaths, fns, options) {
          fns || (fns = this.nameMap[name] || defaultFns[name]);
          var fn = new Fn(this.model, name, null, inputPaths, fns, options);
          return fn.get();
        };

        Fns.prototype.start = function (name, path, inputPaths, fns, options) {
          fns || (fns = this.nameMap[name] || defaultFns[name]);
          var fn = new Fn(this.model, name, path, inputPaths, fns, options);
          this.fromMap[path] = fn;
          return fn.onInput();
        };

        Fns.prototype.stop = function (path) {
          var fn = this.fromMap[path];
          delete this.fromMap[path];
          return fn;
        };

        Fns.prototype.toJSON = function () {
          var out = [];
          for (var from in this.fromMap) {
            var fn = this.fromMap[from];
            // Don't try to bundle non-named functions that were started via
            // model.start directly instead of by name
            if (!fn.name) continue;
            var args = [fn.from].concat(fn.inputPaths);
            if (fn.options) args.push(fn.options);
            args.push(fn.name);
            out.push(args);
          }
          return out;
        };

        function Fn(model, name, from, inputPaths, fns, options) {
          this.model = model.pass({$fn: this});
          this.name = name;
          this.from = from;
          this.inputPaths = inputPaths;
          this.options = options;
          if (!fns) {
            throw new TypeError('Model function not found: ' + name);
          }
          this.getFn = fns.get || fns;
          this.setFn = fns.set;
          this.fromSegments = from && from.split('.');
          this.inputsSegments = [];
          for (var i = 0; i < this.inputPaths.length; i++) {
            var segments = this.inputPaths[i].split('.');
            this.inputsSegments.push(segments);
          }

          // Copy can be 'output', 'input', 'both', or 'none'
          var copy = (options && options.copy) || 'output';
          this.copyInput = (copy === 'input' || copy === 'both');
          this.copyOutput = (copy === 'output' || copy === 'both');

          // Mode can be 'diffDeep', 'diff', 'arrayDeep', or 'array'
          this.mode = (options && options.mode) || 'diffDeep';
        }

        Fn.prototype.apply = function (fn, inputs) {
          for (var i = 0, len = this.inputsSegments.length; i < len; i++) {
            var input = this.model._get(this.inputsSegments[i]);
            inputs.push(this.copyInput ? util.deepCopy(input) : input);
          }
          return fn.apply(this.model, inputs);
        };

        Fn.prototype.get = function () {
          return this.apply(this.getFn, []);
        };

        Fn.prototype.set = function (value, pass) {
          if (!this.setFn) return;
          var out = this.apply(this.setFn, [value]);
          if (!out) return;
          var inputsSegments = this.inputsSegments;
          var model = this.model.pass(pass, true);
          for (var key in out) {
            var value = (this.copyOutput) ? util.deepCopy(out[key]) : out[key];
            this._setValue(model, inputsSegments[key], value);
          }
        };

        Fn.prototype.onInput = function (pass) {
          var value = (this.copyOutput) ? util.deepCopy(this.get()) : this.get();
          this._setValue(this.model.pass(pass, true), this.fromSegments, value);
          return value;
        };

        Fn.prototype.onOutput = function (pass) {
          var value = this.model._get(this.fromSegments);
          return this.set(value, pass);
        };

        Fn.prototype._setValue = function (model, segments, value) {
          if (this.mode === 'diffDeep') {
            model._setDiffDeep(segments, value);
          } else if (this.mode === 'arrayDeep') {
            model._setArrayDiffDeep(segments, value);
          } else if (this.mode === 'array') {
            model._setArrayDiff(segments, value);
          } else {
            model._setDiff(segments, value);
          }
        };

      }, {"../util": 27, "./Model": 8, "./defaultFns": 14}],
      18: [function (require, module, exports) {
        module.exports = require('./Model');
        var util = require('../util');

// Extend model on both server and client //
        require('./unbundle');
        require('./events');
        require('./paths');
        require('./collections');
        require('./mutators');
        require('./setDiff');

        require('./connection');
        require('./subscriptions');
        require('./Query');
        require('./contexts');

        require('./fn');
        require('./filter');
        require('./refList');
        require('./ref');

// Extend model for server //
        util.serverRequire(module, './bundle');
        util.serverRequire(module, './connection.server');

      }, {
        "../util": 27,
        "./Model": 8,
        "./Query": 9,
        "./collections": 11,
        "./connection": 12,
        "./contexts": 13,
        "./events": 15,
        "./filter": 16,
        "./fn": 17,
        "./mutators": 19,
        "./paths": 20,
        "./ref": 21,
        "./refList": 22,
        "./setDiff": 23,
        "./subscriptions": 24,
        "./unbundle": 25
      }],
      19: [function (require, module, exports) {
        var util = require('../util');
        var Model = require('./Model');

        Model.prototype._mutate = function (segments, fn, cb) {
          cb = this.wrapCallback(cb);
          var collectionName = segments[0];
          var id = segments[1];
          if (!collectionName || !id) {
            var message = fn.name + ' must be performed under a collection ' +
                'and document id. Invalid path: ' + segments.join('.');
            return cb(new Error(message));
          }
          var doc = this.getOrCreateDoc(collectionName, id);
          var docSegments = segments.slice(2);
          if (this._preventCompose && doc.shareDoc) {
            var oldPreventCompose = doc.shareDoc.preventCompose;
            doc.shareDoc.preventCompose = true;
            var out = fn(doc, docSegments, cb);
            doc.shareDoc.preventCompose = oldPreventCompose;
            return out;
          }
          return fn(doc, docSegments, cb);
        };

        Model.prototype.set = function () {
          var subpath, value, cb;
          if (arguments.length === 1) {
            value = arguments[0];
          } else if (arguments.length === 2) {
            subpath = arguments[0];
            value = arguments[1];
          } else {
            subpath = arguments[0];
            value = arguments[1];
            cb = arguments[2];
          }
          var segments = this._splitPath(subpath);
          return this._set(segments, value, cb);
        };
        Model.prototype._set = function (segments, value, cb) {
          segments = this._dereference(segments);
          var model = this;

          function set(doc, docSegments, fnCb) {
            var previous = doc.set(docSegments, value, fnCb);
            // On setting the entire doc, remote docs sometimes do a copy to add the
            // id without it being stored in the database by ShareJS
            if (docSegments.length === 0) value = doc.get(docSegments);
            model.emit('change', segments, [value, previous, model._pass]);
            return previous;
          }

          return this._mutate(segments, set, cb);
        };

        Model.prototype.setNull = function () {
          var subpath, value, cb;
          if (arguments.length === 1) {
            value = arguments[0];
          } else if (arguments.length === 2) {
            subpath = arguments[0];
            value = arguments[1];
          } else {
            subpath = arguments[0];
            value = arguments[1];
            cb = arguments[2];
          }
          var segments = this._splitPath(subpath);
          return this._setNull(segments, value, cb);
        };
        Model.prototype._setNull = function (segments, value, cb) {
          segments = this._dereference(segments);
          var model = this;

          function setNull(doc, docSegments, fnCb) {
            var previous = doc.get(docSegments);
            if (previous != null) {
              fnCb();
              return previous;
            }
            doc.set(docSegments, value, fnCb);
            model.emit('change', segments, [value, previous, model._pass]);
            return value;
          }

          return this._mutate(segments, setNull, cb);
        };

        Model.prototype.setEach = function () {
          var subpath, object, cb;
          if (arguments.length === 1) {
            object = arguments[0];
          } else if (arguments.length === 2) {
            subpath = arguments[0];
            object = arguments[1];
          } else {
            subpath = arguments[0];
            object = arguments[1];
            cb = arguments[2];
          }
          var segments = this._splitPath(subpath);
          return this._setEach(segments, object, cb);
        };
        Model.prototype._setEach = function (segments, object, cb) {
          segments = this._dereference(segments);
          var group = util.asyncGroup(this.wrapCallback(cb));
          for (var key in object) {
            var value = object[key];
            this._set(segments.concat(key), value, group());
          }
        };

        Model.prototype.create = function () {
          var subpath, value, cb;
          if (arguments.length === 0) {
            value = {};
          } else if (arguments.length === 1) {
            if (typeof arguments[0] === 'function') {
              value = {};
              cb = arguments[0];
            } else {
              value = arguments[0];
            }
          } else if (arguments.length === 2) {
            if (typeof arguments[1] === 'function') {
              value = arguments[0];
              cb = arguments[1];
            } else {
              subpath = arguments[0];
              value = arguments[1];
            }
          } else {
            subpath = arguments[0];
            value = arguments[1];
            cb = arguments[2];
          }
          var segments = this._splitPath(subpath);
          return this._create(segments, value, cb);
        };
        Model.prototype._create = function (segments, value, cb) {
          segments = this._dereference(segments);
          if (segments.length !== 2) {
            var message = 'create may only be used on a document path. ' +
                'Invalid path: ' + segments.join('.');
            cb = this.wrapCallback(cb);
            return cb(new Error(message));
          }
          var model = this;

          function create(doc, docSegments, fnCb) {
            var previous;
            doc.create(value, fnCb);
            // On creating the doc, remote docs do a copy to add the id without
            // it being stored in the database by ShareJS
            value = doc.get();
            model.emit('change', segments, [value, previous, model._pass]);
          }

          this._mutate(segments, create, cb);
        };

        Model.prototype.createNull = function () {
          var subpath, value, cb;
          if (arguments.length === 0) {
            value = {};
          } else if (arguments.length === 1) {
            if (typeof arguments[0] === 'function') {
              value = {};
              cb = arguments[0];
            } else {
              value = arguments[0];
            }
          } else if (arguments.length === 2) {
            if (typeof arguments[1] === 'function') {
              value = arguments[0];
              cb = arguments[1];
            } else {
              subpath = arguments[0];
              value = arguments[1];
            }
          } else {
            subpath = arguments[0];
            value = arguments[1];
            cb = arguments[2];
          }
          var segments = this._splitPath(subpath);
          return this._createNull(segments, value, cb);
        };
        Model.prototype._createNull = function (segments, value, cb) {
          segments = this._dereference(segments);
          var doc = this.getDoc(segments[0], segments[1]);
          if (doc && doc.get() != null) return;
          this._create(segments, value, cb);
        };

        Model.prototype.add = function () {
          var subpath, value, cb;
          if (arguments.length === 0) {
            value = {};
          } else if (arguments.length === 1) {
            if (typeof arguments[0] === 'function') {
              value = {};
              cb = arguments[0];
            } else {
              value = arguments[0];
            }
          } else if (arguments.length === 2) {
            if (typeof arguments[1] === 'function') {
              value = arguments[0];
              cb = arguments[1];
            } else {
              subpath = arguments[0];
              value = arguments[1];
            }
          } else {
            subpath = arguments[0];
            value = arguments[1];
            cb = arguments[2];
          }
          var segments = this._splitPath(subpath);
          return this._add(segments, value, cb);
        };
        Model.prototype._add = function (segments, value, cb) {
          if (typeof value !== 'object') {
            var message = 'add requires an object value. Invalid value: ' + value;
            cb = this.wrapCallback(cb);
            return cb(new Error(message));
          }
          var id = value.id || this.id();
          value.id = id;
          segments = this._dereference(segments.concat(id));
          var model = this;

          function add(doc, docSegments, fnCb) {
            var previous;
            if (docSegments.length) {
              previous = doc.set(docSegments, value, fnCb);
            } else {
              doc.create(value, fnCb);
              // On creating the doc, remote docs do a copy to add the id without
              // it being stored in the database by ShareJS
              value = doc.get();
            }
            model.emit('change', segments, [value, previous, model._pass]);
          }

          this._mutate(segments, add, cb);
          return id;
        };

        Model.prototype.del = function () {
          var subpath, cb;
          if (arguments.length === 1) {
            if (typeof arguments[0] === 'function') {
              cb = arguments[0];
            } else {
              subpath = arguments[0];
            }
          } else {
            subpath = arguments[0];
            cb = arguments[1];
          }
          var segments = this._splitPath(subpath);
          return this._del(segments, cb);
        };
        Model.prototype._del = function (segments, cb) {
          segments = this._dereference(segments);
          var model = this;

          function del(doc, docSegments, fnCb) {
            var previous = doc.del(docSegments, fnCb);
            // When deleting an entire document, also remove the reference to the
            // document object from its collection
            if (segments.length === 2) {
              var collectionName = segments[0];
              var id = segments[1];
              model.root.collections[collectionName].remove(id);
            }
            model.emit('change', segments, [undefined, previous, model._pass]);
            return previous;
          }

          return this._mutate(segments, del, cb);
        };

        Model.prototype.increment = function () {
          var subpath, byNumber, cb;
          if (arguments.length === 1) {
            if (typeof arguments[0] === 'function') {
              cb = arguments[0];
            } else if (typeof arguments[0] === 'number') {
              byNumber = arguments[0];
            } else {
              subpath = arguments[0];
            }
          } else if (arguments.length === 2) {
            if (typeof arguments[1] === 'function') {
              cb = arguments[1];
              if (typeof arguments[0] === 'number') {
                byNumber = arguments[0];
              } else {
                subpath = arguments[0];
              }
            } else {
              subpath = arguments[0];
              byNumber = arguments[1];
            }
          } else {
            subpath = arguments[0];
            byNumber = arguments[1];
            cb = arguments[2];
          }
          var segments = this._splitPath(subpath);
          return this._increment(segments, byNumber, cb);
        };
        Model.prototype._increment = function (segments, byNumber, cb) {
          segments = this._dereference(segments);
          if (byNumber == null) byNumber = 1;
          var model = this;

          function increment(doc, docSegments, fnCb) {
            var value = doc.increment(docSegments, byNumber, fnCb);
            var previous = value - byNumber;
            model.emit('change', segments, [value, previous, model._pass]);
            return value;
          }

          return this._mutate(segments, increment, cb);
        };

        Model.prototype.push = function () {
          var subpath, value, cb;
          if (arguments.length === 1) {
            value = arguments[0];
          } else if (arguments.length === 2) {
            subpath = arguments[0];
            value = arguments[1];
          } else {
            subpath = arguments[0];
            value = arguments[1];
            cb = arguments[2];
          }
          var segments = this._splitPath(subpath);
          return this._push(segments, value, cb);
        };
        Model.prototype._push = function (segments, value, cb) {
          var forArrayMutator = true;
          segments = this._dereference(segments, forArrayMutator);
          var model = this;

          function push(doc, docSegments, fnCb) {
            var length = doc.push(docSegments, value, fnCb);
            model.emit('insert', segments, [length - 1, [value], model._pass]);
            return length;
          }

          return this._mutate(segments, push, cb);
        };

        Model.prototype.unshift = function () {
          var subpath, value, cb;
          if (arguments.length === 1) {
            value = arguments[0];
          } else if (arguments.length === 2) {
            subpath = arguments[0];
            value = arguments[1];
          } else {
            subpath = arguments[0];
            value = arguments[1];
            cb = arguments[2];
          }
          var segments = this._splitPath(subpath);
          return this._unshift(segments, value, cb);
        };
        Model.prototype._unshift = function (segments, value, cb) {
          var forArrayMutator = true;
          segments = this._dereference(segments, forArrayMutator);
          var model = this;

          function unshift(doc, docSegments, fnCb) {
            var length = doc.unshift(docSegments, value, fnCb);
            model.emit('insert', segments, [0, [value], model._pass]);
            return length;
          }

          return this._mutate(segments, unshift, cb);
        };

        Model.prototype.insert = function () {
          var subpath, index, values, cb;
          if (arguments.length < 2) {
            throw new Error('Not enough arguments for insert');
          } else if (arguments.length === 2) {
            index = arguments[0];
            values = arguments[1];
          } else if (arguments.length === 3) {
            subpath = arguments[0];
            index = arguments[1];
            values = arguments[2];
          } else {
            subpath = arguments[0];
            index = arguments[1];
            values = arguments[2];
            cb = arguments[3];
          }
          var segments = this._splitPath(subpath);
          return this._insert(segments, +index, values, cb);
        };
        Model.prototype._insert = function (segments, index, values, cb) {
          var forArrayMutator = true;
          segments = this._dereference(segments, forArrayMutator);
          var model = this;

          function insert(doc, docSegments, fnCb) {
            var inserted = (Array.isArray(values)) ? values : [values];
            var length = doc.insert(docSegments, index, inserted, fnCb);
            model.emit('insert', segments, [index, inserted, model._pass]);
            return length;
          }

          return this._mutate(segments, insert, cb);
        };

        Model.prototype.pop = function () {
          var subpath, cb;
          if (arguments.length === 1) {
            if (typeof arguments[0] === 'function') {
              cb = arguments[0];
            } else {
              subpath = arguments[0];
            }
          } else {
            subpath = arguments[0];
            cb = arguments[1];
          }
          var segments = this._splitPath(subpath);
          return this._pop(segments, cb);
        };
        Model.prototype._pop = function (segments, cb) {
          var forArrayMutator = true;
          segments = this._dereference(segments, forArrayMutator);
          var model = this;

          function pop(doc, docSegments, fnCb) {
            var arr = doc.get(docSegments);
            var length = arr && arr.length;
            if (!length) {
              fnCb();
              return;
            }
            var value = doc.pop(docSegments, fnCb);
            model.emit('remove', segments, [length - 1, [value], model._pass]);
            return value;
          }

          return this._mutate(segments, pop, cb);
        };

        Model.prototype.shift = function () {
          var subpath, cb;
          if (arguments.length === 1) {
            if (typeof arguments[0] === 'function') {
              cb = arguments[0];
            } else {
              subpath = arguments[0];
            }
          } else {
            subpath = arguments[0];
            cb = arguments[1];
          }
          var segments = this._splitPath(subpath);
          return this._shift(segments, cb);
        };
        Model.prototype._shift = function (segments, cb) {
          var forArrayMutator = true;
          segments = this._dereference(segments, forArrayMutator);
          var model = this;

          function shift(doc, docSegments, fnCb) {
            var arr = doc.get(docSegments);
            var length = arr && arr.length;
            if (!length) {
              fnCb();
              return;
            }
            var value = doc.shift(docSegments, fnCb);
            model.emit('remove', segments, [0, [value], model._pass]);
            return value;
          }

          return this._mutate(segments, shift, cb);
        };

        Model.prototype.remove = function () {
          var subpath, index, howMany, cb;
          if (arguments.length < 2) {
            index = arguments[0];
          } else if (arguments.length === 2) {
            if (typeof arguments[1] === 'function') {
              cb = arguments[1];
              if (typeof arguments[0] === 'number') {
                index = arguments[0];
              } else {
                subpath = arguments[0];
              }
            } else {
              // eslint-disable-next-line no-lonely-if
              if (typeof arguments[0] === 'number') {
                index = arguments[0];
                howMany = arguments[1];
              } else {
                subpath = arguments[0];
                index = arguments[1];
              }
            }
          } else if (arguments.length === 3) {
            if (typeof arguments[2] === 'function') {
              cb = arguments[2];
              if (typeof arguments[0] === 'number') {
                index = arguments[0];
                howMany = arguments[1];
              } else {
                subpath = arguments[0];
                index = arguments[1];
              }
            } else {
              subpath = arguments[0];
              index = arguments[1];
              howMany = arguments[2];
            }
          } else {
            subpath = arguments[0];
            index = arguments[1];
            howMany = arguments[2];
            cb = arguments[3];
          }
          var segments = this._splitPath(subpath);
          if (index == null) index = segments.pop();
          return this._remove(segments, +index, howMany, cb);
        };
        Model.prototype._remove = function (segments, index, howMany, cb) {
          var forArrayMutator = true;
          segments = this._dereference(segments, forArrayMutator);
          if (howMany == null) howMany = 1;
          var model = this;

          function remove(doc, docSegments, fnCb) {
            var removed = doc.remove(docSegments, index, howMany, fnCb);
            model.emit('remove', segments, [index, removed, model._pass]);
            return removed;
          }

          return this._mutate(segments, remove, cb);
        };

        Model.prototype.move = function () {
          var subpath, from, to, howMany, cb;
          if (arguments.length < 2) {
            throw new Error('Not enough arguments for move');
          } else if (arguments.length === 2) {
            from = arguments[0];
            to = arguments[1];
          } else if (arguments.length === 3) {
            if (typeof arguments[2] === 'function') {
              from = arguments[0];
              to = arguments[1];
              cb = arguments[2];
            } else if (typeof arguments[0] === 'number') {
              from = arguments[0];
              to = arguments[1];
              howMany = arguments[2];
            } else {
              subpath = arguments[0];
              from = arguments[1];
              to = arguments[2];
            }
          } else if (arguments.length === 4) {
            if (typeof arguments[3] === 'function') {
              cb = arguments[3];
              if (typeof arguments[0] === 'number') {
                from = arguments[0];
                to = arguments[1];
                howMany = arguments[2];
              } else {
                subpath = arguments[0];
                from = arguments[1];
                to = arguments[2];
              }
            } else {
              subpath = arguments[0];
              from = arguments[1];
              to = arguments[2];
              howMany = arguments[3];
            }
          } else {
            subpath = arguments[0];
            from = arguments[1];
            to = arguments[2];
            howMany = arguments[3];
            cb = arguments[4];
          }
          var segments = this._splitPath(subpath);
          return this._move(segments, from, to, howMany, cb);
        };
        Model.prototype._move = function (segments, from, to, howMany, cb) {
          var forArrayMutator = true;
          segments = this._dereference(segments, forArrayMutator);
          if (howMany == null) howMany = 1;
          var model = this;

          function move(doc, docSegments, fnCb) {
            // Cast to numbers
            from = +from;
            to = +to;
            // Convert negative indices into positive
            if (from < 0 || to < 0) {
              var len = doc.get(docSegments).length;
              if (from < 0) from += len;
              if (to < 0) to += len;
            }
            var moved = doc.move(docSegments, from, to, howMany, fnCb);
            model.emit('move', segments, [from, to, moved.length, model._pass]);
            return moved;
          }

          return this._mutate(segments, move, cb);
        };

        Model.prototype.stringInsert = function () {
          var subpath, index, text, cb;
          if (arguments.length < 2) {
            throw new Error('Not enough arguments for stringInsert');
          } else if (arguments.length === 2) {
            index = arguments[0];
            text = arguments[1];
          } else if (arguments.length === 3) {
            if (typeof arguments[2] === 'function') {
              index = arguments[0];
              text = arguments[1];
              cb = arguments[2];
            } else {
              subpath = arguments[0];
              index = arguments[1];
              text = arguments[2];
            }
          } else {
            subpath = arguments[0];
            index = arguments[1];
            text = arguments[2];
            cb = arguments[3];
          }
          var segments = this._splitPath(subpath);
          return this._stringInsert(segments, index, text, cb);
        };
        Model.prototype._stringInsert = function (segments, index, text, cb) {
          segments = this._dereference(segments);
          var model = this;

          function stringInsert(doc, docSegments, fnCb) {
            var previous = doc.stringInsert(docSegments, index, text, fnCb);
            var value = doc.get(docSegments);
            var pass = model.pass({$stringInsert: {index: index, text: text}})._pass;
            model.emit('change', segments, [value, previous, pass]);
            return;
          }

          return this._mutate(segments, stringInsert, cb);
        };

        Model.prototype.stringRemove = function () {
          var subpath, index, howMany, cb;
          if (arguments.length < 2) {
            throw new Error('Not enough arguments for stringRemove');
          } else if (arguments.length === 2) {
            index = arguments[0];
            howMany = arguments[1];
          } else if (arguments.length === 3) {
            if (typeof arguments[2] === 'function') {
              index = arguments[0];
              howMany = arguments[1];
              cb = arguments[2];
            } else {
              subpath = arguments[0];
              index = arguments[1];
              howMany = arguments[2];
            }
          } else {
            subpath = arguments[0];
            index = arguments[1];
            howMany = arguments[2];
            cb = arguments[3];
          }
          var segments = this._splitPath(subpath);
          return this._stringRemove(segments, index, howMany, cb);
        };
        Model.prototype._stringRemove = function (segments, index, howMany, cb) {
          segments = this._dereference(segments);
          var model = this;

          function stringRemove(doc, docSegments, fnCb) {
            var previous = doc.stringRemove(docSegments, index, howMany, fnCb);
            var value = doc.get(docSegments);
            var pass = model.pass({$stringRemove: {index: index, howMany: howMany}})._pass;
            model.emit('change', segments, [value, previous, pass]);
            return;
          }

          return this._mutate(segments, stringRemove, cb);
        };

        Model.prototype.subtypeSubmit = function () {
          var subpath, subtype, subtypeOp, cb;
          if (arguments.length < 2) {
            throw new Error('Not enough arguments for subtypeSubmit');
          } else if (arguments.length === 2) {
            subtype = arguments[0];
            subtypeOp = arguments[1];
          } else if (arguments.length === 3) {
            if (typeof arguments[2] === 'function') {
              subtype = arguments[0];
              subtypeOp = arguments[1];
              cb = arguments[2];
            } else {
              subpath = arguments[0];
              subtype = arguments[1];
              subtypeOp = arguments[2];
            }
          } else {
            subpath = arguments[0];
            subtype = arguments[1];
            subtypeOp = arguments[2];
            cb = arguments[3];
          }
          var segments = this._splitPath(subpath);
          return this._subtypeSubmit(segments, subtype, subtypeOp, cb);
        };

        Model.prototype._subtypeSubmit = function (segments, subtype, subtypeOp, cb) {
          segments = this._dereference(segments);
          var model = this;

          function subtypeSubmit(doc, docSegments, fnCb) {
            var previous = doc.subtypeSubmit(docSegments, subtype, subtypeOp, fnCb);
            var value = doc.get(docSegments);
            var pass = model.pass({$subtype: {type: subtype, op: subtypeOp}})._pass;
            // Emit undefined for the previous value, since we don't really know
            // whether or not the previous value returned by the subtypeSubmit is the
            // same object returned by reference or not. This may cause change
            // listeners to over-trigger, but that is usually going to be better than
            // under-triggering
            model.emit('change', segments, [value, undefined, pass]);
            return previous;
          }

          return this._mutate(segments, subtypeSubmit, cb);
        };

      }, {"../util": 27, "./Model": 8}],
      20: [function (require, module, exports) {
        var Model = require('./Model');

        exports.mixin = {};

        Model.prototype._splitPath = function (subpath) {
          var path = this.path(subpath);
          return (path && path.split('.')) || [];
        };

        /**
         * Returns the path equivalent to the path of the current scoped model plus
         * (optionally) a suffix subpath
         *
         * @optional @param {String} subpath
         * @return {String} absolute path
         * @api public
         */
        Model.prototype.path = function (subpath) {
          if (subpath == null || subpath === '') return (this._at) ? this._at : '';
          if (typeof subpath === 'string' || typeof subpath === 'number') {
            return (this._at) ? this._at + '.' + subpath : '' + subpath;
          }
          if (typeof subpath.path === 'function') return subpath.path();
        };

        Model.prototype.isPath = function (subpath) {
          return this.path(subpath) != null;
        };

        Model.prototype.scope = function (path) {
          var model = this._child();
          model._at = path;
          return model;
        };

        /**
         * Create a model object scoped to a particular path.
         * Example:
         *     var user = model.at('users.1');
         *     user.set('username', 'brian');
         *     user.on('push', 'todos', function(todo) {
 *       // ...
 *     });
         *
         *  @param {String} segment
         *  @return {Model} a scoped model
         *  @api public
         */
        Model.prototype.at = function (subpath) {
          var path = this.path(subpath);
          return this.scope(path);
        };

        /**
         * Returns a model scope that is a number of levels above the current scoped
         * path. Number of levels defaults to 1, so this method called without
         * arguments returns the model scope's parent model scope.
         *
         * @optional @param {Number} levels
         * @return {Model} a scoped model
         */
        Model.prototype.parent = function (levels) {
          if (levels == null) levels = 1;
          var segments = this._splitPath();
          var len = Math.max(0, segments.length - levels);
          var path = segments.slice(0, len).join('.');
          return this.scope(path);
        };

        /**
         * Returns the last property segment of the current model scope path
         *
         * @optional @param {String} path
         * @return {String}
         */
        Model.prototype.leaf = function (path) {
          if (!path) path = this.path();
          var i = path.lastIndexOf('.');
          return path.slice(i + 1);
        };

      }, {"./Model": 8}],
      21: [function (require, module, exports) {
        var util = require('../util');
        var Model = require('./Model');

        Model.INITS.push(function (model) {
          var root = model.root;
          root._refs = new Refs();
          addIndexListeners(root);
          addListener(root, 'change', refChange);
          addListener(root, 'load', refLoad);
          addListener(root, 'unload', refUnload);
          addListener(root, 'insert', refInsert);
          addListener(root, 'remove', refRemove);
          addListener(root, 'move', refMove);
        });

        function addIndexListeners(model) {
          model.on('insertImmediate', function refInsertIndex(segments, eventArgs) {
            var index = eventArgs[0];
            var howMany = eventArgs[1].length;

            function patchInsert(refIndex) {
              return (index <= refIndex) ? refIndex + howMany : refIndex;
            }

            onIndexChange(segments, patchInsert);
          });
          model.on('removeImmediate', function refRemoveIndex(segments, eventArgs) {
            var index = eventArgs[0];
            var howMany = eventArgs[1].length;

            function patchRemove(refIndex) {
              return (index <= refIndex) ? refIndex - howMany : refIndex;
            }

            onIndexChange(segments, patchRemove);
          });
          model.on('moveImmediate', function refMoveIndex(segments, eventArgs) {
            var from = eventArgs[0];
            var to = eventArgs[1];
            var howMany = eventArgs[2];

            function patchMove(refIndex) {
              // If the index was moved itself
              if (from <= refIndex && refIndex < from + howMany) {
                return refIndex + to - from;
              }
              // Remove part of a move
              if (from <= refIndex) refIndex -= howMany;
              // Insert part of a move
              if (to <= refIndex) refIndex += howMany;
              return refIndex;
            }

            onIndexChange(segments, patchMove);
          });
          function onIndexChange(segments, patch) {
            var fromMap = model._refs.fromMap;
            for (var from in fromMap) {
              var ref = fromMap[from];
              if (!(ref.updateIndices &&
                  util.contains(segments, ref.toSegments) &&
                  ref.toSegments.length > segments.length)) continue;
              var index = +ref.toSegments[segments.length];
              var patched = patch(index);
              if (index === patched) continue;
              model._refs.remove(from);
              ref.toSegments[segments.length] = '' + patched;
              ref.to = ref.toSegments.join('.');
              model._refs.add(ref);
            }
          }
        }

        function refChange(model, dereferenced, eventArgs, segments) {
          var value = eventArgs[0];
          // Detect if we are deleting vs. setting to undefined
          if (value === undefined) {
            var parentSegments = segments.slice();
            var last = parentSegments.pop();
            var parent = model._get(parentSegments);
            if (!parent || !(last in parent)) {
              model._del(dereferenced);
              return;
            }
          }
          model._set(dereferenced, value);
        }

        function refLoad(model, dereferenced, eventArgs) {
          var value = eventArgs[0];
          model._set(dereferenced, value);
        }

        function refUnload(model, dereferenced) {
          model._del(dereferenced);
        }

        function refInsert(model, dereferenced, eventArgs) {
          var index = eventArgs[0];
          var values = eventArgs[1];
          model._insert(dereferenced, index, values);
        }

        function refRemove(model, dereferenced, eventArgs) {
          var index = eventArgs[0];
          var howMany = eventArgs[1].length;
          model._remove(dereferenced, index, howMany);
        }

        function refMove(model, dereferenced, eventArgs) {
          var from = eventArgs[0];
          var to = eventArgs[1];
          var howMany = eventArgs[2];
          model._move(dereferenced, from, to, howMany);
        }

        function addListener(model, type, fn) {
          model.on(type + 'Immediate', refListener);
          function refListener(segments, eventArgs) {
            var pass = eventArgs[eventArgs.length - 1];
            // Find cases where an event is emitted on a path where a reference
            // is pointing. All original mutations happen on the fully dereferenced
            // location, so this detection only needs to happen in one direction
            var toMap = model._refs.toMap;
            var subpath;
            for (var i = 0, len = segments.length; i < len; i++) {
              subpath = (subpath) ? subpath + '.' + segments[i] : segments[i];
              // If a ref is found pointing to a matching subpath, re-emit on the
              // place where the reference is coming from as if the mutation also
              // occured at that path
              var refs = toMap[subpath];
              if (!refs) continue;
              var remaining = segments.slice(i + 1);
              for (var refIndex = 0, numRefs = refs.length; refIndex < numRefs; refIndex++) {
                var ref = refs[refIndex];
                var dereferenced = ref.fromSegments.concat(remaining);
                // The value may already be up to date via object reference. If so,
                // simply re-emit the event. Otherwise, perform the same mutation on
                // the ref's path
                if (model._get(dereferenced) === model._get(segments)) {
                  model.emit(type, dereferenced, eventArgs);
                } else {
                  var setterModel = ref.model.pass(pass, true);
                  setterModel._dereference = noopDereference;
                  fn(setterModel, dereferenced, eventArgs, segments);
                }
              }
            }
            // If a ref points to a child of a matching subpath, get the value in
            // case it has changed and set if different
            var parentToMap = model._refs.parentToMap;
            var refs = parentToMap[subpath];
            if (!refs) return;
            for (var refIndex = 0, numRefs = refs.length; refIndex < numRefs; refIndex++) {
              var ref = refs[refIndex];
              var value = model._get(ref.toSegments);
              var previous = model._get(ref.fromSegments);
              if (previous !== value) {
                var setterModel = ref.model.pass(pass, true);
                setterModel._dereference = noopDereference;
                setterModel._set(ref.fromSegments, value);
              }
            }
          }
        }

        Model.prototype._canRefTo = function (value) {
          return this.isPath(value) || (value && typeof value.ref === 'function');
        };

        Model.prototype.ref = function () {
          var from, to, options;
          if (arguments.length === 1) {
            to = arguments[0];
          } else if (arguments.length === 2) {
            if (this._canRefTo(arguments[1])) {
              from = arguments[0];
              to = arguments[1];
            } else {
              to = arguments[0];
              options = arguments[1];
            }
          } else {
            from = arguments[0];
            to = arguments[1];
            options = arguments[2];
          }
          var fromPath = this.path(from);
          var toPath = this.path(to);
          // Make ref to reffable object, such as query or filter
          if (!toPath) return to.ref(fromPath);
          var ref = new Ref(this.root, fromPath, toPath, options);
          if (ref.fromSegments.length < 2) {
            throw new Error('ref must be performed under a collection ' +
                'and document id. Invalid path: ' + fromPath);
          }
          this.root._refs.remove(fromPath);
          this.root._refLists.remove(fromPath);
          var value = this.get(to);
          ref.model._set(ref.fromSegments, value);
          this.root._refs.add(ref);
          return this.scope(fromPath);
        };

        Model.prototype.removeRef = function (subpath) {
          var segments = this._splitPath(subpath);
          var fromPath = segments.join('.');
          this._removeRef(segments, fromPath);
        };
        Model.prototype._removeRef = function (segments, fromPath) {
          this.root._refs.remove(fromPath);
          this.root._refLists.remove(fromPath);
          this._del(segments);
        };

        Model.prototype.removeAllRefs = function (subpath) {
          var segments = this._splitPath(subpath);
          this._removeAllRefs(segments);
        };
        Model.prototype._removeAllRefs = function (segments) {
          this._removeMapRefs(segments, this.root._refs.fromMap);
          this._removeMapRefs(segments, this.root._refLists.fromMap);
        };
        Model.prototype._removeMapRefs = function (segments, map) {
          for (var from in map) {
            var fromSegments = map[from].fromSegments;
            if (util.contains(segments, fromSegments)) {
              this._removeRef(fromSegments, from);
            }
          }
        };

        Model.prototype.dereference = function (subpath) {
          var segments = this._splitPath(subpath);
          return this._dereference(segments).join('.');
        };

        Model.prototype._dereference = function (segments, forArrayMutator, ignore) {
          if (segments.length === 0) return segments;
          var refs = this.root._refs.fromMap;
          var refLists = this.root._refLists.fromMap;
          var doAgain;
          do {
            var subpath = '';
            doAgain = false;
            for (var i = 0, len = segments.length; i < len; i++) {
              subpath = (subpath) ? subpath + '.' + segments[i] : segments[i];

              var ref = refs[subpath];
              if (ref) {
                var remaining = segments.slice(i + 1);
                segments = ref.toSegments.concat(remaining);
                doAgain = true;
                break;
              }

              var refList = refLists[subpath];
              if (refList && refList !== ignore) {
                var belowDescendant = i + 2 < len;
                var belowChild = i + 1 < len;
                if (!(belowDescendant || forArrayMutator && belowChild)) continue;
                segments = refList.dereference(segments, i);
                doAgain = true;
                break;
              }
            }
          } while (doAgain);
          // If a dereference fails, return a path that will result in a null value
          // instead of a path to everything in the model
          if (segments.length === 0) return ['$null'];
          return segments;
        };

        function noopDereference(segments) {
          return segments;
        }

        function Ref(model, from, to, options) {
          this.model = model && model.pass({$ref: this});
          this.from = from;
          this.to = to;
          this.fromSegments = from.split('.');
          this.toSegments = to.split('.');
          this.parentTos = [];
          for (var i = 1, len = this.toSegments.length; i < len; i++) {
            var parentTo = this.toSegments.slice(0, i).join('.');
            this.parentTos.push(parentTo);
          }
          this.updateIndices = options && options.updateIndices;
        }

        function FromMap() {
        }

        function ToMap() {
        }

        function Refs() {
          this.fromMap = new FromMap();
          this.toMap = new ToMap();
          this.parentToMap = new ToMap();
        }

        Refs.prototype.add = function (ref) {
          this.fromMap[ref.from] = ref;
          listMapAdd(this.toMap, ref.to, ref);
          for (var i = 0, len = ref.parentTos.length; i < len; i++) {
            listMapAdd(this.parentToMap, ref.parentTos[i], ref);
          }
        };

        Refs.prototype.remove = function (from) {
          var ref = this.fromMap[from];
          if (!ref) return;
          delete this.fromMap[from];
          listMapRemove(this.toMap, ref.to, ref);
          for (var i = 0, len = ref.parentTos.length; i < len; i++) {
            listMapRemove(this.parentToMap, ref.parentTos[i], ref);
          }
          return ref;
        };

        Refs.prototype.toJSON = function () {
          var out = [];
          for (var from in this.fromMap) {
            var ref = this.fromMap[from];
            out.push([ref.from, ref.to]);
          }
          return out;
        };

        function listMapAdd(map, name, item) {
          map[name] || (map[name] = []);
          map[name].push(item);
        }

        function listMapRemove(map, name, item) {
          var items = map[name];
          if (!items) return;
          var index = items.indexOf(item);
          if (index === -1) return;
          items.splice(index, 1);
          if (!items.length) delete map[name];
        }

      }, {"../util": 27, "./Model": 8}],
      22: [function (require, module, exports) {
        var util = require('../util');
        var Model = require('./Model');

        Model.INITS.push(function (model) {
          var root = model.root;
          root._refLists = new RefLists();
          for (var type in Model.MUTATOR_EVENTS) {
            addListener(root, type);
          }
        });

        function addListener(model, type) {
          model.on(type + 'Immediate', refListListener);
          function refListListener(segments, eventArgs) {
            var pass = eventArgs[eventArgs.length - 1];
            // Check for updates on or underneath paths
            var fromMap = model._refLists.fromMap;
            for (var from in fromMap) {
              var refList = fromMap[from];
              if (pass.$refList === refList) continue;
              refList.onMutation(type, segments, eventArgs);
            }
          }
        }

        /**
         * @param {String} type
         * @param {Array} segments
         * @param {Array} eventArgs
         * @param {RefList} refList
         */
        function patchFromEvent(type, segments, eventArgs, refList) {
          var fromLength = refList.fromSegments.length;
          var segmentsLength = segments.length;
          var pass = eventArgs[eventArgs.length - 1];
          var model = refList.model.pass(pass, true);

          // Mutation on the `from` output itself
          if (segmentsLength === fromLength) {
            if (type === 'insert') {
              var index = eventArgs[0];
              var values = eventArgs[1];
              var ids = setNewToValues(model, refList, values);
              model._insert(refList.idsSegments, index, ids);
              return;
            }

            if (type === 'remove') {
              var index = eventArgs[0];
              var howMany = eventArgs[1].length;
              var ids = model._remove(refList.idsSegments, index, howMany);
              // Delete the appropriate items underneath `to` if the `deleteRemoved`
              // option was set true
              if (refList.deleteRemoved) {
                for (var i = 0; i < ids.length; i++) {
                  var item = refList.itemById(ids[i]);
                  model._del(refList.toSegmentsByItem(item));
                }
              }
              return;
            }

            if (type === 'move') {
              var from = eventArgs[0];
              var to = eventArgs[1];
              var howMany = eventArgs[2];
              model._move(refList.idsSegments, from, to, howMany);
              return;
            }

            // Change of the entire output
            var values = (type === 'change') ?
                eventArgs[0] : model._get(refList.fromSegments);
            // Set ids to empty list if output is set to null
            if (!values) {
              model._set(refList.idsSegments, []);
              return;
            }
            // If the entire output is set, create a list of ids based on the output,
            // and update the corresponding items
            var ids = setNewToValues(model, refList, values);
            model._set(refList.idsSegments, ids);
            return;
          }

          // If mutation is on a parent of `from`, we might need to re-create the
          // entire refList output
          if (segmentsLength < fromLength) {
            model._setArrayDiff(refList.fromSegments, refList.get());
            return;
          }

          var index = segments[fromLength];
          var value = model._get(refList.fromSegments.concat(index));
          var toSegments = refList.toSegmentsByItem(value);

          // Mutation underneath a child of the `from` object.
          if (segmentsLength > fromLength + 1) {
            throw new Error('Mutation on descendant of refList `from`' +
                ' should have been dereferenced: ' + segments.join('.'));
          }

          // Otherwise, mutation of a child of the `from` object

          // If changing the item itself, it will also have to be re-set on the
          // original object
          if (type === 'change') {
            model._set(toSegments, value);
            updateIdForValue(model, refList, index, value);
            return;
          }
          if (type === 'insert' || type === 'remove' || type === 'move') {
            throw new Error('Array mutation on child of refList `from`' +
                'should have been dereferenced: ' + segments.join('.'));
          }
        }

        /**
         * @private
         * @param {Model} model
         * @param {RefList} refList
         * @param {Array} values
         */
        function setNewToValues(model, refList, values) {
          var ids = [];
          for (var i = 0; i < values.length; i++) {
            var value = values[i];
            var id = refList.idByItem(value);
            if (id === undefined && typeof value === 'object') {
              id = value.id = model.id();
            }
            var toSegments = refList.toSegmentsByItem(value);
            if (id === undefined || toSegments === undefined) {
              throw new Error('Unable to add item to refList: ' + value);
            }
            if (model._get(toSegments) !== value) {
              model._set(toSegments, value);
            }
            ids.push(id);
          }
          return ids;
        }

        function updateIdForValue(model, refList, index, value) {
          var id = refList.idByItem(value);
          var outSegments = refList.idsSegments.concat(index);
          model._set(outSegments, id);
        }

        function patchToEvent(type, segments, eventArgs, refList) {
          var toLength = refList.toSegments.length;
          var segmentsLength = segments.length;
          var pass = eventArgs[eventArgs.length - 1];
          var model = refList.model.pass(pass, true);

          // Mutation on the `to` object itself
          if (segmentsLength === toLength) {
            if (type === 'insert') {
              var values = eventArgs[1];
              for (var i = 0; i < values.length; i++) {
                var value = values[i];
                var indices = refList.indicesByItem(value);
                if (!indices) continue;
                for (var j = 0; j < indices.length; j++) {
                  var outSegments = refList.fromSegments.concat(indices[j]);
                  model._set(outSegments, value);
                }
              }
              return;
            }

            if (type === 'remove') {
              var removeIndex = eventArgs[0];
              var values = eventArgs[1];
              var howMany = values.length;
              for (var i = removeIndex, len = removeIndex + howMany; i < len; i++) {
                var indices = refList.indicesByItem(values[i]);
                if (!indices) continue;
                for (var j = 0, indicesLen = indices.length; j < indicesLen; j++) {
                  var outSegments = refList.fromSegments.concat(indices[j]);
                  model._set(outSegments, undefined);
                }
              }
              return;
            }

            if (type === 'move') {
              // Moving items in the `to` object should have no effect on the output
              return;
            }
          }

          // Mutation on or above the `to` object
          if (segmentsLength <= toLength) {
            // If the entire `to` object is updated, we need to re-create the
            // entire refList output and apply what is different
            model._setArrayDiff(refList.fromSegments, refList.get());
            return;
          }

          // Mutation underneath a child of the `to` object. The item will already
          // be up to date, since it is under an object reference. Just re-emit
          if (segmentsLength > toLength + 1) {
            var value = model._get(segments.slice(0, toLength + 1));
            var indices = refList.indicesByItem(value);
            if (!indices) return;
            var remaining = segments.slice(toLength + 1);
            for (var i = 0; i < indices.length; i++) {
              var index = indices[i];
              var dereferenced = refList.fromSegments.concat(index, remaining);
              dereferenced = model._dereference(dereferenced, null, refList);
              eventArgs = eventArgs.slice();
              eventArgs[eventArgs.length - 1] = model._pass;
              model.emit(type, dereferenced, eventArgs);
            }
            return;
          }

          // Otherwise, mutation of a child of the `to` object

          // If changing the item itself, it will also have to be re-set on the
          // array created by the refList
          if (type === 'change' || type === 'load' || type === 'unload') {
            var value, previous;
            if (type === 'change') {
              value = eventArgs[0];
              previous = eventArgs[1];
            } else if (type === 'load') {
              value = eventArgs[0];
              previous = undefined;
            } else if (type === 'unload') {
              value = undefined;
              previous = eventArgs[0];
            }
            var newIndices = refList.indicesByItem(value);
            var oldIndices = refList.indicesByItem(previous);
            if (!newIndices && !oldIndices) return;
            if (oldIndices && !equivalentArrays(oldIndices, newIndices)) {
              // The changed item used to refer to some indices, but no longer does
              for (var i = 0; i < oldIndices.length; i++) {
                var outSegments = refList.fromSegments.concat(oldIndices[i]);
                model._set(outSegments, undefined);
              }
            }
            if (newIndices) {
              for (var i = 0; i < newIndices.length; i++) {
                var outSegments = refList.fromSegments.concat(newIndices[i]);
                model._set(outSegments, value);
              }
            }
            return;
          }

          var value = model._get(segments.slice(0, toLength + 1));
          var indices = refList.indicesByItem(value);
          if (!indices) return;

          if (type === 'insert' || type === 'remove' || type === 'move') {
            // Array mutations will have already been updated via an object
            // reference, so only re-emit
            for (var i = 0; i < indices.length; i++) {
              var dereferenced = refList.fromSegments.concat(indices[i]);
              dereferenced = model._dereference(dereferenced, null, refList);
              eventArgs = eventArgs.slice();
              eventArgs[eventArgs.length - 1] = model._pass;
              model.emit(type, dereferenced, eventArgs);
            }
          }
        }

        function equivalentArrays(a, b) {
          if (!a || !b) return false;
          if (a.length !== b.length) return false;
          for (var i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) return false;
          }
          return true;
        }

        function patchIdsEvent(type, segments, eventArgs, refList) {
          var idsLength = refList.idsSegments.length;
          var segmentsLength = segments.length;
          var pass = eventArgs[eventArgs.length - 1];
          var model = refList.model.pass(pass, true);

          // An array mutation of the ids should be mirrored with a like change in
          // the output array
          if (segmentsLength === idsLength) {
            if (type === 'insert') {
              var index = eventArgs[0];
              var inserted = eventArgs[1];
              var values = [];
              for (var i = 0; i < inserted.length; i++) {
                var value = refList.itemById(inserted[i]);
                values.push(value);
              }
              model._insert(refList.fromSegments, index, values);
              return;
            }

            if (type === 'remove') {
              var index = eventArgs[0];
              var howMany = eventArgs[1].length;
              model._remove(refList.fromSegments, index, howMany);
              return;
            }

            if (type === 'move') {
              var from = eventArgs[0];
              var to = eventArgs[1];
              var howMany = eventArgs[2];
              model._move(refList.fromSegments, from, to, howMany);
              return;
            }
          }

          // Mutation on the `ids` list itself
          if (segmentsLength <= idsLength) {
            // If the entire `ids` array is updated, we need to re-create the
            // entire refList output and apply what is different
            model._setArrayDiff(refList.fromSegments, refList.get());
            return;
          }

          // Otherwise, direct mutation of a child in the `ids` object or mutation
          // underneath an item in the `ids` list. Update the item for the appropriate
          // id if it has changed
          var index = segments[idsLength];
          var id = refList.idByIndex(index);
          var item = refList.itemById(id);
          var itemSegments = refList.fromSegments.concat(index);
          if (model._get(itemSegments) !== item) {
            model._set(itemSegments, item);
          }
        }

        Model.prototype.refList = function () {
          var from, to, ids, options;
          if (arguments.length === 2) {
            to = arguments[0];
            ids = arguments[1];
          } else if (arguments.length === 3) {
            if (this.isPath(arguments[2])) {
              from = arguments[0];
              to = arguments[1];
              ids = arguments[2];
            } else {
              to = arguments[0];
              ids = arguments[1];
              options = arguments[2];
            }
          } else {
            from = arguments[0];
            to = arguments[1];
            ids = arguments[2];
            options = arguments[3];
          }
          var fromPath = this.path(from);
          var toPath;
          if (Array.isArray(to)) {
            toPath = [];
            for (var i = 0; i < to.length; i++) {
              toPath.push(this.path(to[i]));
            }
          } else {
            toPath = this.path(to);
          }
          var idsPath = this.path(ids);
          var refList = new RefList(this.root, fromPath, toPath, idsPath, options);
          this.root._refLists.remove(fromPath);
          refList.model._setArrayDiff(refList.fromSegments, refList.get());
          this.root._refLists.add(refList);
          return this.scope(fromPath);
        };

        function RefList(model, from, to, ids, options) {
          this.model = model && model.pass({$refList: this});
          this.from = from;
          this.to = to;
          this.ids = ids;
          this.fromSegments = from && from.split('.');
          this.toSegments = to && to.split('.');
          this.idsSegments = ids && ids.split('.');
          this.options = options;
          this.deleteRemoved = options && options.deleteRemoved;
        }

// The default implementation assumes that the ids array is a flat list of
// keys on the to object. Ideally, this mapping could be customized via
// inheriting from RefList and overriding these methods without having to
// modify the above event handling code.
//
// In the default refList implementation, `key` and `id` are equal.
//
// Terms in the below methods:
//   `item`  - Object on the `to` path, which gets mirrored on the `from` path
//   `key`   - The property under `to` at which an item is located
//   `id`    - String or object in the array at the `ids` path
//   `index` - The index of an id, which corresponds to an index on `from`
        RefList.prototype.get = function () {
          var ids = this.model._get(this.idsSegments);
          if (!ids) return [];
          var items = this.model._get(this.toSegments);
          var out = [];
          for (var i = 0; i < ids.length; i++) {
            var key = ids[i];
            out.push(items && items[key]);
          }
          return out;
        };
        RefList.prototype.dereference = function (segments, i) {
          var remaining = segments.slice(i + 1);
          var key = this.idByIndex(remaining[0]);
          if (key == null) return [];
          remaining[0] = key;
          return this.toSegments.concat(remaining);
        };
        RefList.prototype.toSegmentsByItem = function (item) {
          var key = this.idByItem(item);
          if (key === undefined) return;
          return this.toSegments.concat(key);
        };
        RefList.prototype.idByItem = function (item) {
          if (item && item.id) return item.id;
          var items = this.model._get(this.toSegments);
          for (var key in items) {
            if (item === items[key]) return key;
          }
        };
        RefList.prototype.indicesByItem = function (item) {
          var id = this.idByItem(item);
          var ids = this.model._get(this.idsSegments);
          if (!ids) return;
          var indices;
          var index = -1;
          for (; ;) {
            index = ids.indexOf(id, index + 1);
            if (index === -1) break;
            if (indices) {
              indices.push(index);
            } else {
              indices = [index];
            }
          }
          return indices;
        };
        RefList.prototype.itemById = function (id) {
          return this.model._get(this.toSegments.concat(id));
        };
        RefList.prototype.idByIndex = function (index) {
          return this.model._get(this.idsSegments.concat(index));
        };
        RefList.prototype.onMutation = function (type, segments, eventArgs) {
          if (util.mayImpact(this.toSegments, segments)) {
            patchToEvent(type, segments, eventArgs, this);
          } else if (util.mayImpact(this.idsSegments, segments)) {
            patchIdsEvent(type, segments, eventArgs, this);
          } else if (util.mayImpact(this.fromSegments, segments)) {
            patchFromEvent(type, segments, eventArgs, this);
          }
        };

        function FromMap() {
        }

        function RefLists() {
          this.fromMap = new FromMap();
        }

        RefLists.prototype.add = function (refList) {
          this.fromMap[refList.from] = refList;
        };

        RefLists.prototype.remove = function (from) {
          var refList = this.fromMap[from];
          delete this.fromMap[from];
          return refList;
        };

        RefLists.prototype.toJSON = function () {
          var out = [];
          for (var from in this.fromMap) {
            var refList = this.fromMap[from];
            out.push([refList.from, refList.to, refList.ids, refList.options]);
          }
          return out;
        };

      }, {"../util": 27, "./Model": 8}],
      23: [function (require, module, exports) {
        var util = require('../util');
        var Model = require('./Model');
        var arrayDiff = require('arraydiff');

        Model.prototype.setDiff = function () {
          var subpath, value, cb;
          if (arguments.length === 1) {
            value = arguments[0];
          } else if (arguments.length === 2) {
            subpath = arguments[0];
            value = arguments[1];
          } else {
            subpath = arguments[0];
            value = arguments[1];
            cb = arguments[2];
          }
          var segments = this._splitPath(subpath);
          return this._setDiff(segments, value, cb);
        };
        Model.prototype._setDiff = function (segments, value, cb) {
          segments = this._dereference(segments);
          var model = this;

          function setDiff(doc, docSegments, fnCb) {
            var previous = doc.get(docSegments);
            if (util.equal(previous, value)) {
              fnCb();
              return previous;
            }
            doc.set(docSegments, value, fnCb);
            model.emit('change', segments, [value, previous, model._pass]);
            return previous;
          }

          return this._mutate(segments, setDiff, cb);
        };

        Model.prototype.setDiffDeep = function () {
          var subpath, value, cb;
          if (arguments.length === 1) {
            value = arguments[0];
          } else if (arguments.length === 2) {
            subpath = arguments[0];
            value = arguments[1];
          } else {
            subpath = arguments[0];
            value = arguments[1];
            cb = arguments[2];
          }
          var segments = this._splitPath(subpath);
          return this._setDiffDeep(segments, value, cb);
        };
        Model.prototype._setDiffDeep = function (segments, value, cb) {
          var before = this._get(segments);
          cb = this.wrapCallback(cb);
          var group = util.asyncGroup(cb);
          var finished = group();
          diffDeep(this, segments, before, value, group);
          finished();
        };
        function diffDeep(model, segments, before, after, group) {
          if (typeof before !== 'object' || !before ||
              typeof after !== 'object' || !after) {
            // Set the entire value if not diffable
            model._set(segments, after, group());
            return;
          }
          if (Array.isArray(before) && Array.isArray(after)) {
            var diff = arrayDiff(before, after, util.deepEqual);
            if (!diff.length) return;
            // If the only change is a single item replacement, diff the item instead
            if (
                diff.length === 2 &&
                diff[0].index === diff[1].index &&
                diff[0] instanceof arrayDiff.RemoveDiff &&
                diff[0].howMany === 1 &&
                diff[1] instanceof arrayDiff.InsertDiff &&
                diff[1].values.length === 1
            ) {
              var index = diff[0].index;
              var itemSegments = segments.concat(index);
              diffDeep(model, itemSegments, before[index], after[index], group);
              return;
            }
            model._applyArrayDiff(segments, diff, group());
            return;
          }

          // Delete keys that were in before but not after
          for (var key in before) {
            if (key in after) continue;
            var itemSegments = segments.concat(key);
            model._del(itemSegments, group());
          }

          // Diff each property in after
          for (var key in after) {
            if (util.deepEqual(before[key], after[key])) continue;
            var itemSegments = segments.concat(key);
            diffDeep(model, itemSegments, before[key], after[key], group);
          }
        }

        Model.prototype.setArrayDiff = function () {
          var subpath, value, cb;
          if (arguments.length === 1) {
            value = arguments[0];
          } else if (arguments.length === 2) {
            subpath = arguments[0];
            value = arguments[1];
          } else {
            subpath = arguments[0];
            value = arguments[1];
            cb = arguments[2];
          }
          var segments = this._splitPath(subpath);
          return this._setArrayDiff(segments, value, cb);
        };
        Model.prototype.setArrayDiffDeep = function () {
          var subpath, value, cb;
          if (arguments.length === 1) {
            value = arguments[0];
          } else if (arguments.length === 2) {
            subpath = arguments[0];
            value = arguments[1];
          } else {
            subpath = arguments[0];
            value = arguments[1];
            cb = arguments[2];
          }
          var segments = this._splitPath(subpath);
          return this._setArrayDiffDeep(segments, value, cb);
        };
        Model.prototype._setArrayDiffDeep = function (segments, value, cb) {
          return this._setArrayDiff(segments, value, cb, util.deepEqual);
        };
        Model.prototype._setArrayDiff = function (segments, value, cb, _equalFn) {
          var before = this._get(segments);
          if (before === value) return this.wrapCallback(cb)();
          if (!Array.isArray(before) || !Array.isArray(value)) {
            this._set(segments, value, cb);
            return;
          }
          var diff = arrayDiff(before, value, _equalFn);
          this._applyArrayDiff(segments, diff, cb);
        };
        Model.prototype._applyArrayDiff = function (segments, diff, cb) {
          if (!diff.length) return this.wrapCallback(cb)();
          segments = this._dereference(segments);
          var model = this;

          function applyArrayDiff(doc, docSegments, fnCb) {
            var group = util.asyncGroup(fnCb);
            for (var i = 0, len = diff.length; i < len; i++) {
              var item = diff[i];
              if (item instanceof arrayDiff.InsertDiff) {
                // Insert
                doc.insert(docSegments, item.index, item.values, group());
                model.emit('insert', segments, [item.index, item.values, model._pass]);
              } else if (item instanceof arrayDiff.RemoveDiff) {
                // Remove
                var removed = doc.remove(docSegments, item.index, item.howMany, group());
                model.emit('remove', segments, [item.index, removed, model._pass]);
              } else if (item instanceof arrayDiff.MoveDiff) {
                // Move
                var moved = doc.move(docSegments, item.from, item.to, item.howMany, group());
                model.emit('move', segments, [item.from, item.to, moved.length, model._pass]);
              }
            }
          }

          return this._mutate(segments, applyArrayDiff, cb);
        };

      }, {"../util": 27, "./Model": 8, "arraydiff": 28}],
      24: [function (require, module, exports) {
        (function (process) {
          var util = require('../util');
          var Model = require('./Model');
          var Query = require('./Query');
          var CollectionCounter = require('./CollectionCounter');

          Model.INITS.push(function (model, options) {
            model.root.fetchOnly = options.fetchOnly;
            model.root.unloadDelay = options.unloadDelay || (util.isServer) ? 0 : 1000;

            // Track the total number of active fetches per doc
            model.root._fetchedDocs = new CollectionCounter();
            // Track the total number of active susbscribes per doc
            model.root._subscribedDocs = new CollectionCounter();
          });

          Model.prototype.fetch = function () {
            this._forSubscribable(arguments, 'fetch');
            return this;
          };
          Model.prototype.unfetch = function () {
            this._forSubscribable(arguments, 'unfetch');
            return this;
          };
          Model.prototype.subscribe = function () {
            this._forSubscribable(arguments, 'subscribe');
            return this;
          };
          Model.prototype.unsubscribe = function () {
            this._forSubscribable(arguments, 'unsubscribe');
            return this;
          };

          Model.prototype._forSubscribable = function (argumentsObject, method) {
            var args, cb;
            if (!argumentsObject.length) {
              // Use this model's scope if no arguments
              args = [null];
            } else if (typeof argumentsObject[0] === 'function') {
              // Use this model's scope if the first argument is a callback
              args = [null];
              cb = argumentsObject[0];
            } else if (Array.isArray(argumentsObject[0])) {
              // Items can be passed in as an array
              args = argumentsObject[0];
              cb = argumentsObject[1];
            } else {
              // Or as multiple arguments
              args = Array.prototype.slice.call(argumentsObject);
              var last = args[args.length - 1];
              if (typeof last === 'function') cb = args.pop();
            }

            var group = util.asyncGroup(this.wrapCallback(cb));
            var finished = group();
            var docMethod = method + 'Doc';

            this.root.connection.startBulk();
            for (var i = 0; i < args.length; i++) {
              var item = args[i];
              if (item instanceof Query) {
                item[method](group());
              } else {
                var segments = this._dereference(this._splitPath(item));
                if (segments.length === 2) {
                  // Do the appropriate method for a single document.
                  this[docMethod](segments[0], segments[1], group());
                } else {
                  var message = 'Cannot ' + method + ' to path: ' + segments.join('.');
                  group()(new Error(message));
                }
              }
            }
            this.root.connection.endBulk();
            process.nextTick(finished);
          };

          Model.prototype.fetchDoc = function (collectionName, id, cb) {
            cb = this.wrapCallback(cb);

            // Maintain a count of fetches so that we can unload the document
            // when there are no remaining fetches or subscribes for that document
            this._context.fetchDoc(collectionName, id);
            this.root._fetchedDocs.increment(collectionName, id);

            // Fetch
            var doc = this.getOrCreateDoc(collectionName, id);
            doc.shareDoc.fetch(cb);
          };

          Model.prototype.subscribeDoc = function (collectionName, id, cb) {
            cb = this.wrapCallback(cb);

            // Maintain a count of subscribes so that we can unload the document
            // when there are no remaining fetches or subscribes for that document
            this._context.subscribeDoc(collectionName, id);
            this.root._subscribedDocs.increment(collectionName, id);

            var doc = this.getOrCreateDoc(collectionName, id);
            // Early return if we know we are already subscribed
            if (doc.shareDoc.subscribed) {
              return cb();
            }
            // Subscribe
            if (this.root.fetchOnly) {
              doc.shareDoc.fetch(cb);
            } else {
              doc.shareDoc.subscribe(cb);
            }
          };

          Model.prototype.unfetchDoc = function (collectionName, id, cb) {
            cb = this.wrapCallback(cb);
            this._context.unfetchDoc(collectionName, id);

            // No effect if the document is not currently fetched
            if (!this.root._fetchedDocs.get(collectionName, id)) return cb();

            var model = this;
            if (this.root.unloadDelay) {
              setTimeout(finishUnfetchDoc, this.root.unloadDelay);
            } else {
              finishUnfetchDoc();
            }
            function finishUnfetchDoc() {
              var count = model.root._fetchedDocs.decrement(collectionName, id);
              if (count) return cb(null, count);
              model._maybeUnloadDoc(collectionName, id);
              cb(null, 0);
            }
          };

          Model.prototype.unsubscribeDoc = function (collectionName, id, cb) {
            cb = this.wrapCallback(cb);
            this._context.unsubscribeDoc(collectionName, id);

            // No effect if the document is not currently subscribed
            if (!this.root._subscribedDocs.get(collectionName, id)) return cb();

            var model = this;
            if (this.root.unloadDelay) {
              setTimeout(finishUnsubscribeDoc, this.root.unloadDelay);
            } else {
              finishUnsubscribeDoc();
            }
            function finishUnsubscribeDoc() {
              var count = model.root._subscribedDocs.decrement(collectionName, id);
              // If there are more remaining subscriptions, only decrement the count
              // and callback with how many subscriptions are remaining
              if (count) return cb(null, count);

              // If there is only one remaining subscription, actually unsubscribe
              if (model.root.fetchOnly) {
                unsubscribeDocCallback();
              } else {
                var doc = model.getDoc(collectionName, id);
                var shareDoc = doc && doc.shareDoc;
                if (!shareDoc) return unsubscribeDocCallback();
                shareDoc.unsubscribe(unsubscribeDocCallback);
              }
            }

            function unsubscribeDocCallback(err) {
              model._maybeUnloadDoc(collectionName, id);
              if (err) return cb(err);
              cb(null, 0);
            }
          };

// Removes the document from the local model if the model no longer has any
// remaining fetches or subscribes via a query or direct loading
          Model.prototype._maybeUnloadDoc = function (collectionName, id) {
            var doc = this.getDoc(collectionName, id);
            if (!doc) return;

            if (this._hasDocReferences(collectionName, id)) return;

            var previous = doc.get();

            // Remove doc from Racer
            this.root.collections[collectionName].remove(id);
            // Remove doc from Share
            if (doc.shareDoc) doc.shareDoc.destroy();

            this.emit('unload', [collectionName, id], [previous, this._pass]);
          };

          Model.prototype._hasDocReferences = function (collectionName, id) {
            // Check if any fetched or subscribed queries currently have the
            // id in their results
            var queries = this.root._queries.collections[collectionName];
            if (queries) {
              for (var hash in queries) {
                var query = queries[hash];
                if (!query.subscribeCount && !query.fetchCount) continue;
                if (query.idMap[id]) return true;
              }
            }

            // Check if document currently has direct fetch or subscribe
            if (
                this.root._fetchedDocs.get(collectionName, id) ||
                this.root._subscribedDocs.get(collectionName, id)
            ) return true;

            return false;
          };

        }).call(this, require('_process'))

      }, {"../util": 27, "./CollectionCounter": 5, "./Model": 8, "./Query": 9, "_process": 4}],
      25: [function (require, module, exports) {
        var Model = require('./Model');

        Model.prototype.unbundle = function (data) {
          if (this.connection) this.connection.startBulk();

          // Re-create and subscribe queries; re-create documents associated with queries
          this._initQueries(data.queries);

          // Re-create other documents
          for (var collectionName in data.collections) {
            var collection = data.collections[collectionName];
            for (var id in collection) {
              this.getOrCreateDoc(collectionName, id, collection[id]);
            }
          }

          for (var contextId in data.contexts) {
            var contextData = data.contexts[contextId];
            var contextModel = this.context(contextId);
            // Re-init fetchedDocs counts
            for (var collectionName in contextData.fetchedDocs) {
              var collection = contextData.fetchedDocs[collectionName];
              for (var id in collection) {
                var count = collection[id];
                while (count--) {
                  contextModel._context.fetchDoc(collectionName, id);
                  this._fetchedDocs.increment(collectionName, id);
                }
              }
            }
            // Subscribe to document subscriptions
            for (var collectionName in contextData.subscribedDocs) {
              var collection = contextData.subscribedDocs[collectionName];
              for (var id in collection) {
                var count = collection[id];
                while (count--) {
                  contextModel.subscribeDoc(collectionName, id);
                }
              }
            }
            // Re-init createdDocs counts
            for (var collectionName in contextData.createdDocs) {
              var collection = contextData.createdDocs[collectionName];
              for (var id in collection) {
                // Count value doesn't matter for tracking creates
                contextModel._context.createDoc(collectionName, id);
              }
            }
          }

          if (this.connection) this.connection.endBulk();

          // Re-create refs
          for (var i = 0; i < data.refs.length; i++) {
            var item = data.refs[i];
            this.ref(item[0], item[1]);
          }
          // Re-create refLists
          for (var i = 0; i < data.refLists.length; i++) {
            var item = data.refLists[i];
            this.refList(item[0], item[1], item[2], item[3]);
          }
          // Re-create fns
          for (var i = 0; i < data.fns.length; i++) {
            var item = data.fns[i];
            this.start.apply(this, item);
          }
          // Re-create filters
          for (var i = 0; i < data.filters.length; i++) {
            var item = data.filters[i];
            var filter = this._filters.add(item[1], item[2], item[3], item[4], item[5]);
            filter.ref(item[0]);
          }
        };

      }, {"./Model": 8}],
      26: [function (require, module, exports) {
        var EventEmitter = require('events').EventEmitter;
        var Model = require('./Model');
        var util = require('./util');

        module.exports = Racer;

        function Racer() {
          EventEmitter.call(this);
        }

        util.mergeInto(Racer.prototype, EventEmitter.prototype);

// Make classes accessible for use by plugins and tests
        Racer.prototype.Model = Model;
        Racer.prototype.util = util;

// Support plugins on racer instances
        Racer.prototype.use = util.use;
        Racer.prototype.serverUse = util.serverUse;

        Racer.prototype.createModel = function (data) {
          var model = new Model();
          if (data) {
            model.createConnection(data);
            model.unbundle(data);
          }
          return model;
        };

        util.serverRequire(module, './Racer.server');

      }, {"./Model": 18, "./util": 27, "events": 3}],
      27: [function (require, module, exports) {
        (function (process) {
          var deepIs = require('deep-is');

          var isServer = process.title !== 'browser';
          exports.isServer = isServer;

          exports.asyncGroup = asyncGroup;
          exports.castSegments = castSegments;
          exports.contains = contains;
          exports.copy = copy;
          exports.copyObject = copyObject;
          exports.deepCopy = deepCopy;
          exports.deepEqual = deepIs;
          exports.equal = equal;
          exports.equalsNaN = equalsNaN;
          exports.isArrayIndex = isArrayIndex;
          exports.lookup = lookup;
          exports.mergeInto = mergeInto;
          exports.mayImpact = mayImpact;
          exports.mayImpactAny = mayImpactAny;
          exports.serverRequire = serverRequire;
          exports.serverUse = serverUse;
          exports.use = use;

          function asyncGroup(cb) {
            var group = new AsyncGroup(cb);
            return function asyncGroupAdd() {
              return group.add();
            };
          }

          /**
           * @constructor
           * @param {Function} cb(err)
           */
          function AsyncGroup(cb) {
            this.cb = cb;
            this.isDone = false;
            this.count = 0;
          }

          AsyncGroup.prototype.add = function () {
            this.count++;
            var self = this;
            return function (err) {
              self.count--;
              if (self.isDone) return;
              if (err) {
                self.isDone = true;
                self.cb(err);
                return;
              }
              if (self.count > 0) return;
              self.isDone = true;
              self.cb();
            };
          };

          function castSegments(segments) {
            // Cast number path segments from strings to numbers
            for (var i = segments.length; i--;) {
              var segment = segments[i];
              if (typeof segment === 'string' && isArrayIndex(segment)) {
                segments[i] = +segment;
              }
            }
            return segments;
          }

          function contains(segments, testSegments) {
            for (var i = 0; i < segments.length; i++) {
              if (segments[i] !== testSegments[i]) return false;
            }
            return true;
          }

          function copy(value) {
            if (value instanceof Date) return new Date(value);
            if (typeof value === 'object') {
              if (value === null) return null;
              if (Array.isArray(value)) return value.slice();
              return copyObject(value);
            }
            return value;
          }

          function copyObject(object) {
            var out = new object.constructor();
            for (var key in object) {
              if (object.hasOwnProperty(key)) {
                out[key] = object[key];
              }
            }
            return out;
          }

          function deepCopy(value) {
            if (value instanceof Date) return new Date(value);
            if (typeof value === 'object') {
              if (value === null) return null;
              if (Array.isArray(value)) {
                var array = [];
                for (var i = value.length; i--;) {
                  array[i] = deepCopy(value[i]);
                }
                return array;
              }
              var object = new value.constructor();
              for (var key in value) {
                if (value.hasOwnProperty(key)) {
                  object[key] = deepCopy(value[key]);
                }
              }
              return object;
            }
            return value;
          }

          function equal(a, b) {
            return (a === b) || (equalsNaN(a) && equalsNaN(b));
          }

          function equalsNaN(x) {
            // eslint-disable-next-line no-self-compare
            return x !== x;
          }

          function isArrayIndex(segment) {
            return (/^[0-9]+$/).test(segment);
          }

          function lookup(segments, value) {
            if (!segments) return value;

            for (var i = 0, len = segments.length; i < len; i++) {
              if (value == null) return value;
              value = value[segments[i]];
            }
            return value;
          }

          function mayImpactAny(segmentsList, testSegments) {
            for (var i = 0, len = segmentsList.length; i < len; i++) {
              if (mayImpact(segmentsList[i], testSegments)) return true;
            }
            return false;
          }

          function mayImpact(segments, testSegments) {
            var len = Math.min(segments.length, testSegments.length);
            for (var i = 0; i < len; i++) {
              if (segments[i] !== testSegments[i]) return false;
            }
            return true;
          }

          function mergeInto(to, from) {
            for (var key in from) {
              to[key] = from[key];
            }
            return to;
          }

          function serverRequire(module, id) {
            if (!isServer) return;
            return module.require(id);
          }

          function serverUse(module, id, options) {
            if (!isServer) return this;
            var plugin = module.require(id);
            return this.use(plugin, options);
          }

          function use(plugin, options) {
            // Don't include a plugin more than once
            var plugins = this._plugins || (this._plugins = []);
            if (plugins.indexOf(plugin) === -1) {
              plugins.push(plugin);
              plugin(this, options);
            }
            return this;
          }

        }).call(this, require('_process'))

      }, {"_process": 4, "deep-is": 29}],
      28: [function (require, module, exports) {
        module.exports = arrayDiff;

// Based on some rough benchmarking, this algorithm is about O(2n) worst case,
// and it can compute diffs on random arrays of length 1024 in about 34ms,
// though just a few changes on an array of length 1024 takes about 0.5ms

        arrayDiff.InsertDiff = InsertDiff;
        arrayDiff.RemoveDiff = RemoveDiff;
        arrayDiff.MoveDiff = MoveDiff;

        function InsertDiff(index, values) {
          this.index = index;
          this.values = values;
        }

        InsertDiff.prototype.type = 'insert';
        InsertDiff.prototype.toJSON = function () {
          return {
            type: this.type,
            index: this.index,
            values: this.values
          };
        };

        function RemoveDiff(index, howMany) {
          this.index = index;
          this.howMany = howMany;
        }

        RemoveDiff.prototype.type = 'remove';
        RemoveDiff.prototype.toJSON = function () {
          return {
            type: this.type,
            index: this.index,
            howMany: this.howMany
          };
        };

        function MoveDiff(from, to, howMany) {
          this.from = from;
          this.to = to;
          this.howMany = howMany;
        }

        MoveDiff.prototype.type = 'move';
        MoveDiff.prototype.toJSON = function () {
          return {
            type: this.type,
            from: this.from,
            to: this.to,
            howMany: this.howMany
          };
        };

        function strictEqual(a, b) {
          return a === b;
        }

        function arrayDiff(before, after, equalFn) {
          if (!equalFn) equalFn = strictEqual;

          // Find all items in both the before and after array, and represent them
          // as moves. Many of these "moves" may end up being discarded in the last
          // pass if they are from an index to the same index, but we don't know this
          // up front, since we haven't yet offset the indices.
          //
          // Also keep a map of all the indices accounted for in the before and after
          // arrays. These maps are used next to create insert and remove diffs.
          var beforeLength = before.length;
          var afterLength = after.length;
          var moves = [];
          var beforeMarked = {};
          var afterMarked = {};
          for (var beforeIndex = 0; beforeIndex < beforeLength; beforeIndex++) {
            var beforeItem = before[beforeIndex];
            for (var afterIndex = 0; afterIndex < afterLength; afterIndex++) {
              if (afterMarked[afterIndex]) continue;
              if (!equalFn(beforeItem, after[afterIndex])) continue;
              var from = beforeIndex;
              var to = afterIndex;
              var howMany = 0;
              do {
                beforeMarked[beforeIndex++] = afterMarked[afterIndex++] = true;
                howMany++;
              } while (
              beforeIndex < beforeLength &&
              afterIndex < afterLength &&
              equalFn(before[beforeIndex], after[afterIndex]) && !afterMarked[afterIndex]
                  );
              moves.push(new MoveDiff(from, to, howMany));
              beforeIndex--;
              break;
            }
          }

          // Create a remove for all of the items in the before array that were
          // not marked as being matched in the after array as well
          var removes = [];
          for (beforeIndex = 0; beforeIndex < beforeLength;) {
            if (beforeMarked[beforeIndex]) {
              beforeIndex++;
              continue;
            }
            var index = beforeIndex;
            var howMany = 0;
            while (beforeIndex < beforeLength && !beforeMarked[beforeIndex++]) {
              howMany++;
            }
            removes.push(new RemoveDiff(index, howMany));
          }

          // Create an insert for all of the items in the after array that were
          // not marked as being matched in the before array as well
          var inserts = [];
          for (var afterIndex = 0; afterIndex < afterLength;) {
            if (afterMarked[afterIndex]) {
              afterIndex++;
              continue;
            }
            var index = afterIndex;
            var howMany = 0;
            while (afterIndex < afterLength && !afterMarked[afterIndex++]) {
              howMany++;
            }
            var values = after.slice(index, index + howMany);
            inserts.push(new InsertDiff(index, values));
          }

          var insertsLength = inserts.length;
          var removesLength = removes.length;
          var movesLength = moves.length;
          var i, j;

          // Offset subsequent removes and moves by removes
          var count = 0;
          for (i = 0; i < removesLength; i++) {
            var remove = removes[i];
            remove.index -= count;
            count += remove.howMany;
            for (j = 0; j < movesLength; j++) {
              var move = moves[j];
              if (move.from >= remove.index) move.from -= remove.howMany;
            }
          }

          // Offset moves by inserts
          for (i = insertsLength; i--;) {
            var insert = inserts[i];
            var howMany = insert.values.length;
            for (j = movesLength; j--;) {
              var move = moves[j];
              if (move.to >= insert.index) move.to -= howMany;
            }
          }

          // Offset the to of moves by later moves
          for (i = movesLength; i-- > 1;) {
            var move = moves[i];
            if (move.to === move.from) continue;
            for (j = i; j--;) {
              var earlier = moves[j];
              if (earlier.to >= move.to) earlier.to -= move.howMany;
              if (earlier.to >= move.from) earlier.to += move.howMany;
            }
          }

          // Only output moves that end up having an effect after offsetting
          var outputMoves = [];

          // Offset the from of moves by earlier moves
          for (i = 0; i < movesLength; i++) {
            var move = moves[i];
            if (move.to === move.from) continue;
            outputMoves.push(move);
            for (j = i + 1; j < movesLength; j++) {
              var later = moves[j];
              if (later.from >= move.from) later.from -= move.howMany;
              if (later.from >= move.to) later.from += move.howMany;
            }
          }

          return removes.concat(outputMoves, inserts);
        }

      }, {}],
      29: [function (require, module, exports) {
        var pSlice = Array.prototype.slice;
        var Object_keys = typeof Object.keys === 'function'
                ? Object.keys
                : function (obj) {
              var keys = [];
              for (var key in obj) keys.push(key);
              return keys;
            }
            ;

        var deepEqual = module.exports = function (actual, expected) {
          // enforce Object.is +0 !== -0
          if (actual === 0 && expected === 0) {
            return areZerosEqual(actual, expected);

            // 7.1. All identical values are equivalent, as determined by ===.
          } else if (actual === expected) {
            return true;

          } else if (actual instanceof Date && expected instanceof Date) {
            return actual.getTime() === expected.getTime();

          } else if (isNumberNaN(actual)) {
            return isNumberNaN(expected);

            // 7.3. Other pairs that do not both pass typeof value == 'object',
            // equivalence is determined by ==.
          } else if (typeof actual != 'object' && typeof expected != 'object') {
            return actual == expected;

            // 7.4. For all other Object pairs, including Array objects, equivalence is
            // determined by having the same number of owned properties (as verified
            // with Object.prototype.hasOwnProperty.call), the same set of keys
            // (although not necessarily the same order), equivalent values for every
            // corresponding key, and an identical 'prototype' property. Note: this
            // accounts for both named and indexed properties on Arrays.
          } else {
            return objEquiv(actual, expected);
          }
        };

        function isUndefinedOrNull(value) {
          return value === null || value === undefined;
        }

        function isArguments(object) {
          return Object.prototype.toString.call(object) == '[object Arguments]';
        }

        function isNumberNaN(value) {
          // NaN === NaN -> false
          return typeof value == 'number' && value !== value;
        }

        function areZerosEqual(zeroA, zeroB) {
          // (1 / +0|0) -> Infinity, but (1 / -0) -> -Infinity and (Infinity !== -Infinity)
          return (1 / zeroA) === (1 / zeroB);
        }

        function objEquiv(a, b) {
          if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
            return false;

          // an identical 'prototype' property.
          if (a.prototype !== b.prototype) return false;
          //~~~I've managed to break Object.keys through screwy arguments passing.
          //   Converting to array solves the problem.
          if (isArguments(a)) {
            if (!isArguments(b)) {
              return false;
            }
            a = pSlice.call(a);
            b = pSlice.call(b);
            return deepEqual(a, b);
          }
          try {
            var ka = Object_keys(a),
                kb = Object_keys(b),
                key, i;
          } catch (e) {//happens when one is a string literal and the other isn't
            return false;
          }
          // having the same number of owned properties (keys incorporates
          // hasOwnProperty)
          if (ka.length != kb.length)
            return false;
          //the same set of keys (although not necessarily the same order),
          ka.sort();
          kb.sort();
          //~~~cheap key test
          for (i = ka.length - 1; i >= 0; i--) {
            if (ka[i] != kb[i])
              return false;
          }
          //equivalent values for every corresponding key, and
          //~~~possibly expensive deep test
          for (i = ka.length - 1; i >= 0; i--) {
            key = ka[i];
            if (!deepEqual(a[key], b[key])) return false;
          }
          return true;
        }

      }, {}],
      30: [function (require, module, exports) {
        (function (process) {
          var Doc = require('./doc');
          var Query = require('./query');
          var emitter = require('../emitter');
          var ShareDBError = require('../error');
          var types = require('../types');
          var util = require('../util');

          /**
           * Handles communication with the sharejs server and provides queries and
           * documents.
           *
           * We create a connection with a socket object
           *   connection = new sharejs.Connection(sockset)
           * The socket may be any object handling the websocket protocol. See the
           * documentation of bindToSocket() for details. We then wait for the connection
           * to connect
           *   connection.on('connected', ...)
           * and are finally able to work with shared documents
           *   connection.get('food', 'steak') // Doc
           *
           * @param socket @see bindToSocket
           */
          module.exports = Connection;
          function Connection(socket) {
            emitter.EventEmitter.call(this);

            // Map of collection -> id -> doc object for created documents.
            // (created documents MUST BE UNIQUE)
            this.collections = {};

            // Each query is created with an id that the server uses when it sends us
            // info about the query (updates, etc)
            this.nextQueryId = 1;

            // Map from query ID -> query object.
            this.queries = {};

            // A unique message number for the given id
            this.seq = 1;

            // Equals agent.clientId on the server
            this.id = null;

            // This direct reference from connection to agent is not used internal to
            // ShareDB, but it is handy for server-side only user code that may cache
            // state on the agent and read it in middleware
            this.agent = null;

            this.debug = false;

            this.bindToSocket(socket);
          }

          emitter.mixin(Connection);


          /**
           * Use socket to communicate with server
           *
           * Socket is an object that can handle the websocket protocol. This method
           * installs the onopen, onclose, onmessage and onerror handlers on the socket to
           * handle communication and sends messages by calling socket.send(message). The
           * sockets `readyState` property is used to determine the initaial state.
           *
           * @param socket Handles the websocket protocol
           * @param socket.readyState
           * @param socket.close
           * @param socket.send
           * @param socket.onopen
           * @param socket.onclose
           * @param socket.onmessage
           * @param socket.onerror
           */
          Connection.prototype.bindToSocket = function (socket) {
            if (this.socket) {
              this.socket.close();
              this.socket.onmessage = null;
              this.socket.onopen = null;
              this.socket.onerror = null;
              this.socket.onclose = null;
            }

            this.socket = socket;

            // State of the connection. The correspoding events are emmited when this changes
            //
            // - 'connecting'   The connection is still being established, or we are still
            //                    waiting on the server to send us the initialization message
            // - 'connected'    The connection is open and we have connected to a server
            //                    and recieved the initialization message
            // - 'disconnected' Connection is closed, but it will reconnect automatically
            // - 'closed'       The connection was closed by the client, and will not reconnect
            // - 'stopped'      The connection was closed by the server, and will not reconnect
            this.state = (socket.readyState === 0 || socket.readyState === 1) ? 'connecting' : 'disconnected';

            // This is a helper variable the document uses to see whether we're
            // currently in a 'live' state. It is true if and only if we're connected
            this.canSend = false;

            var connection = this;

            socket.onmessage = function (event) {
              try {
                var data = (typeof event.data === 'string') ?
                    JSON.parse(event.data) : event.data;
              } catch (err) {
                console.warn('Failed to parse message', event);
                return;
              }

              if (connection.debug) console.log('RECV', JSON.stringify(data));

              var request = {data: data};
              connection.emit('receive', request);
              if (!request.data) return;

              try {
                connection.handleMessage(request.data);
              } catch (err) {
                process.nextTick(function () {
                  connection.emit('error', err);
                });
              }
            };

            socket.onopen = function () {
              connection._setState('connecting');
            };

            socket.onerror = function (err) {
              // This isn't the same as a regular error, because it will happen normally
              // from time to time. Your connection should probably automatically
              // reconnect anyway, but that should be triggered off onclose not onerror.
              // (onclose happens when onerror gets called anyway).
              connection.emit('connection error', err);
            };

            socket.onclose = function (reason) {
              // node-browserchannel reason values:
              //   'Closed' - The socket was manually closed by calling socket.close()
              //   'Stopped by server' - The server sent the stop message to tell the client not to try connecting
              //   'Request failed' - Server didn't respond to request (temporary, usually offline)
              //   'Unknown session ID' - Server session for client is missing (temporary, will immediately reestablish)

              if (reason === 'closed' || reason === 'Closed') {
                connection._setState('closed', reason);

              } else if (reason === 'stopped' || reason === 'Stopped by server') {
                connection._setState('stopped', reason);

              } else {
                connection._setState('disconnected', reason);
              }
            };
          };

          /**
           * @param {object} message
           * @param {String} message.a action
           */
          Connection.prototype.handleMessage = function (message) {
            var err = null;
            if (message.error) {
              // wrap in Error object so can be passed through event emitters
              err = new Error(message.error.message);
              err.code = message.error.code;
              // Add the message data to the error object for more context
              err.data = message;
              delete message.error;
            }
            // Switch on the message action. Most messages are for documents and are
            // handled in the doc class.
            switch (message.a) {
              case 'init':
                // Client initialization packet
                if (message.protocol !== 1) {
                  err = new ShareDBError(4019, 'Invalid protocol version');
                  return this.emit('error', err);
                }
                if (types.map[message.type] !== types.defaultType) {
                  err = new ShareDBError(4020, 'Invalid default type');
                  return this.emit('error', err);
                }
                if (typeof message.id !== 'string') {
                  err = new ShareDBError(4021, 'Invalid client id');
                  return this.emit('error', err);
                }
                this.id = message.id;

                this._setState('connected');
                return;

              case 'qf':
                var query = this.queries[message.id];
                if (query) query._handleFetch(err, message.data, message.extra);
                return;
              case 'qs':
                var query = this.queries[message.id];
                if (query) query._handleSubscribe(err, message.data, message.extra);
                return;
              case 'qu':
                // Queries are removed immediately on calls to destroy, so we ignore
                // replies to query unsubscribes. Perhaps there should be a callback for
                // destroy, but this is currently unimplemented
                return;
              case 'q':
                // Query message. Pass this to the appropriate query object.
                var query = this.queries[message.id];
                if (!query) return;
                if (err) return query._handleError(err);
                if (message.diff) query._handleDiff(message.diff);
                if (message.hasOwnProperty('extra')) query._handleExtra(message.extra);
                return;

              case 'bf':
                return this._handleBulkMessage(message, '_handleFetch');
              case 'bs':
                return this._handleBulkMessage(message, '_handleSubscribe');
              case 'bu':
                return this._handleBulkMessage(message, '_handleUnsubscribe');

              case 'f':
                var doc = this.getExisting(message.c, message.d);
                if (doc) doc._handleFetch(err, message.data);
                return;
              case 's':
                var doc = this.getExisting(message.c, message.d);
                if (doc) doc._handleSubscribe(err, message.data);
                return;
              case 'u':
                var doc = this.getExisting(message.c, message.d);
                if (doc) doc._handleUnsubscribe(err);
                return;
              case 'op':
                var doc = this.getExisting(message.c, message.d);
                if (doc) doc._handleOp(err, message);
                return;

              default:
                console.warn('Ignorning unrecognized message', message);
            }
          };

          Connection.prototype._handleBulkMessage = function (message, method) {
            if (message.data) {
              for (var id in message.data) {
                var doc = this.getExisting(message.c, id);
                if (doc) doc[method](message.error, message.data[id]);
              }
            } else if (Array.isArray(message.b)) {
              for (var i = 0; i < message.b.length; i++) {
                var id = message.b[i];
                var doc = this.getExisting(message.c, id);
                if (doc) doc[method](message.error);
              }
            } else if (message.b) {
              for (var id in message.b) {
                var doc = this.getExisting(message.c, id);
                if (doc) doc[method](message.error);
              }
            } else {
              console.error('Invalid bulk message', message);
            }
          };

          Connection.prototype._reset = function () {
            this.seq = 1;
            this.id = null;
            this.agent = null;
          };

// Set the connection's state. The connection is basically a state machine.
          Connection.prototype._setState = function (newState, reason) {
            if (this.state === newState) return;

            // I made a state diagram. The only invalid transitions are getting to
            // 'connecting' from anywhere other than 'disconnected' and getting to
            // 'connected' from anywhere other than 'connecting'.
            if (
                (newState === 'connecting' && this.state !== 'disconnected' && this.state !== 'stopped' && this.state !== 'closed') ||
                (newState === 'connected' && this.state !== 'connecting')
            ) {
              var err = new ShareDBError(5007, 'Cannot transition directly from ' + this.state + ' to ' + newState);
              return this.emit('error', err);
            }

            this.state = newState;
            this.canSend = (newState === 'connected');

            if (newState === 'disconnected' || newState === 'stopped' || newState === 'closed') this._reset();

            // Group subscribes together to help server make more efficient calls
            this.startBulk();
            // Emit the event to all queries
            for (var id in this.queries) {
              var query = this.queries[id];
              query._onConnectionStateChanged();
            }
            // Emit the event to all documents
            for (var collection in this.collections) {
              var docs = this.collections[collection];
              for (var id in docs) {
                docs[id]._onConnectionStateChanged();
              }
            }
            this.endBulk();

            this.emit(newState, reason);
            this.emit('state', newState, reason);
          };

          Connection.prototype.startBulk = function () {
            if (!this.bulk) this.bulk = {};
          };

          Connection.prototype.endBulk = function () {
            if (this.bulk) {
              for (var collection in this.bulk) {
                var actions = this.bulk[collection];
                this._sendBulk('f', collection, actions.f);
                this._sendBulk('s', collection, actions.s);
                this._sendBulk('u', collection, actions.u);
              }
            }
            this.bulk = null;
          };

          Connection.prototype._sendBulk = function (action, collection, values) {
            if (!values) return;
            var ids = [];
            var versions = {};
            var versionsCount = 0;
            var versionId;
            for (var id in values) {
              var value = values[id];
              if (value == null) {
                ids.push(id);
              } else {
                versions[id] = value;
                versionId = id;
                versionsCount++;
              }
            }
            if (ids.length === 1) {
              var id = ids[0];
              this.send({a: action, c: collection, d: id});
            } else if (ids.length) {
              this.send({a: 'b' + action, c: collection, b: ids});
            }
            if (versionsCount === 1) {
              var version = versions[versionId];
              this.send({a: action, c: collection, d: versionId, v: version});
            } else if (versionsCount) {
              this.send({a: 'b' + action, c: collection, b: versions});
            }
          };

          Connection.prototype._sendAction = function (action, doc, version) {
            // Ensure the doc is registered so that it receives the reply message
            this._addDoc(doc);
            if (this.bulk) {
              // Bulk subscribe
              var actions = this.bulk[doc.collection] || (this.bulk[doc.collection] = {});
              var versions = actions[action] || (actions[action] = {});
              var isDuplicate = versions.hasOwnProperty(doc.id);
              versions[doc.id] = version;
              return isDuplicate;
            } else {
              // Send single doc subscribe message
              var message = {a: action, c: doc.collection, d: doc.id, v: version};
              this.send(message);
            }
          };

          Connection.prototype.sendFetch = function (doc) {
            return this._sendAction('f', doc, doc.version);
          };

          Connection.prototype.sendSubscribe = function (doc) {
            return this._sendAction('s', doc, doc.version);
          };

          Connection.prototype.sendUnsubscribe = function (doc) {
            return this._sendAction('u', doc);
          };

          Connection.prototype.sendOp = function (doc, op) {
            // Ensure the doc is registered so that it receives the reply message
            this._addDoc(doc);
            var message = {
              a: 'op',
              c: doc.collection,
              d: doc.id,
              v: doc.version,
              src: op.src,
              seq: op.seq
            };
            if (op.op) message.op = op.op;
            if (op.create) message.create = op.create;
            if (op.del) message.del = op.del;
            this.send(message);
          };


          /**
           * Sends a message down the socket
           */
          Connection.prototype.send = function (message) {
            if (this.debug) console.log('SEND', JSON.stringify(message));

            this.emit('send', message);
            this.socket.send(JSON.stringify(message));
          };


          /**
           * Closes the socket and emits 'closed'
           */
          Connection.prototype.close = function () {
            this.socket.close();
          };

          Connection.prototype.getExisting = function (collection, id) {
            if (this.collections[collection]) return this.collections[collection][id];
          };


          /**
           * Get or create a document.
           *
           * @param collection
           * @param id
           * @return {Doc}
           */
          Connection.prototype.get = function (collection, id) {
            var docs = this.collections[collection] ||
                (this.collections[collection] = {});

            var doc = docs[id];
            if (!doc) {
              doc = docs[id] = new Doc(this, collection, id);
              this.emit('doc', doc);
            }

            return doc;
          };


          /**
           * Remove document from this.collections
           *
           * @private
           */
          Connection.prototype._destroyDoc = function (doc) {
            var docs = this.collections[doc.collection];
            if (!docs) return;

            delete docs[doc.id];

            // Delete the collection container if its empty. This could be a source of
            // memory leaks if you slowly make a billion collections, which you probably
            // won't do anyway, but whatever.
            if (!util.hasKeys(docs)) {
              delete this.collections[doc.collection];
            }
          };

          Connection.prototype._addDoc = function (doc) {
            var docs = this.collections[doc.collection];
            if (!docs) {
              docs = this.collections[doc.collection] = {};
            }
            if (docs[doc.id] !== doc) {
              docs[doc.id] = doc;
            }
          };

// Helper for createFetchQuery and createSubscribeQuery, below.
          Connection.prototype._createQuery = function (action, collection, q, options, callback) {
            var id = this.nextQueryId++;
            var query = new Query(action, this, id, collection, q, options, callback);
            this.queries[id] = query;
            query.send();
            return query;
          };

// Internal function. Use query.destroy() to remove queries.
          Connection.prototype._destroyQuery = function (query) {
            delete this.queries[query.id];
          };

// The query options object can contain the following fields:
//
// db: Name of the db for the query. You can attach extraDbs to ShareDB and
//   pick which one the query should hit using this parameter.

// Create a fetch query. Fetch queries are only issued once, returning the
// results directly into the callback.
//
// The callback should have the signature function(error, results, extra)
// where results is a list of Doc objects.
          Connection.prototype.createFetchQuery = function (collection, q, options, callback) {
            return this._createQuery('qf', collection, q, options, callback);
          };

// Create a subscribe query. Subscribe queries return with the initial data
// through the callback, then update themselves whenever the query result set
// changes via their own event emitter.
//
// If present, the callback should have the signature function(error, results, extra)
// where results is a list of Doc objects.
          Connection.prototype.createSubscribeQuery = function (collection, q, options, callback) {
            return this._createQuery('qs', collection, q, options, callback);
          };

          Connection.prototype.hasPending = function () {
            return !!(
                this._firstDoc(hasPending) ||
                this._firstQuery(hasPending)
            );
          };
          function hasPending(object) {
            return object.hasPending();
          }

          Connection.prototype.hasWritePending = function () {
            return !!this._firstDoc(hasWritePending);
          };
          function hasWritePending(object) {
            return object.hasWritePending();
          }

          Connection.prototype.whenNothingPending = function (callback) {
            var doc = this._firstDoc(hasPending);
            if (doc) {
              // If a document is found with a pending operation, wait for it to emit
              // that nothing is pending anymore, and then recheck all documents again.
              // We have to recheck all documents, just in case another mutation has
              // been made in the meantime as a result of an event callback
              doc.once('nothing pending', this._nothingPendingRetry(callback));
              return;
            }
            var query = this._firstQuery(hasPending);
            if (query) {
              query.once('ready', this._nothingPendingRetry(callback));
              return;
            }
            // Call back when no pending operations
            process.nextTick(callback);
          };
          Connection.prototype._nothingPendingRetry = function (callback) {
            var connection = this;
            return function () {
              process.nextTick(function () {
                connection.whenNothingPending(callback);
              });
            };
          };

          Connection.prototype._firstDoc = function (fn) {
            for (var collection in this.collections) {
              var docs = this.collections[collection];
              for (var id in docs) {
                var doc = docs[id];
                if (fn(doc)) {
                  return doc;
                }
              }
            }
          };

          Connection.prototype._firstQuery = function (fn) {
            for (var id in this.queries) {
              var query = this.queries[id];
              if (fn(query)) {
                return query;
              }
            }
          };

        }).call(this, require('_process'))

      }, {"../emitter": 34, "../error": 35, "../types": 36, "../util": 37, "./doc": 31, "./query": 33, "_process": 4}],
      31: [function (require, module, exports) {
        (function (process) {
          var emitter = require('../emitter');
          var ShareDBError = require('../error');
          var types = require('../types');

          /**
           * A Doc is a client's view on a sharejs document.
           *
           * It is is uniquely identified by its `id` and `collection`.  Documents
           * should not be created directly. Create them with connection.get()
           *
           *
           * Subscriptions
           * -------------
           *
           * We can subscribe a document to stay in sync with the server.
           *   doc.subscribe(function(error) {
 *     doc.subscribed // = true
 *   })
           * The server now sends us all changes concerning this document and these are
           * applied to our data. If the subscription was successful the initial
           * data and version sent by the server are loaded into the document.
           *
           * To stop listening to the changes we call `doc.unsubscribe()`.
           *
           * If we just want to load the data but not stay up-to-date, we call
           *   doc.fetch(function(error) {
 *     doc.data // sent by server
 *   })
           *
           *
           * Events
           * ------
           *
           * You can use doc.on(eventName, callback) to subscribe to the following events:
           * - `before op (op, source)` Fired before a partial operation is applied to the data.
           *   It may be used to read the old data just before applying an operation
           * - `op (op, source)` Fired after every partial operation with this operation as the
           *   first argument
           * - `create (source)` The document was created. That means its type was
           *   set and it has some initial data.
           * - `del (data, source)` Fired after the document is deleted, that is
           *   the data is null. It is passed the data before delteion as an
           *   arguments
           * - `load ()` Fired when a new snapshot is ingested from a fetch, subscribe, or query
           */

          module.exports = Doc;
          function Doc(connection, collection, id) {
            emitter.EventEmitter.call(this);

            this.connection = connection;

            this.collection = collection;
            this.id = id;

            this.version = null;
            this.type = null;
            this.data = undefined;

            // Array of callbacks or nulls as placeholders
            this.inflightFetch = [];
            this.inflightSubscribe = [];
            this.inflightUnsubscribe = [];
            this.pendingFetch = [];

            // Whether we think we are subscribed on the server. Synchronously set to
            // false on calls to unsubscribe and disconnect. Should never be true when
            // this.wantSubscribe is false
            this.subscribed = false;
            // Whether to re-establish the subscription on reconnect
            this.wantSubscribe = false;

            // The op that is currently roundtripping to the server, or null.
            //
            // When the connection reconnects, the inflight op is resubmitted.
            //
            // This has the same format as an entry in pendingOps
            this.inflightOp = null;

            // All ops that are waiting for the server to acknowledge this.inflightOp
            // This used to just be a single operation, but creates & deletes can't be
            // composed with regular operations.
            //
            // This is a list of {[create:{...}], [del:true], [op:...], callbacks:[...]}
            this.pendingOps = [];

            // The OT type of this document. An uncreated document has type `null`
            this.type = null;

            // The applyStack enables us to track any ops submitted while we are
            // applying an op incrementally. This value is an array when we are
            // performing an incremental apply and null otherwise. When it is an array,
            // all submitted ops should be pushed onto it. The `_otApply` method will
            // reset it back to null when all incremental apply loops are complete.
            this.applyStack = null;

            // Disable the default behavior of composing submitted ops. This is read at
            // the time of op submit, so it may be toggled on before submitting a
            // specifc op and toggled off afterward
            this.preventCompose = false;
          }

          emitter.mixin(Doc);

          Doc.prototype.destroy = function (callback) {
            var doc = this;
            doc.whenNothingPending(function () {
              doc.connection._destroyDoc(doc);
              if (doc.wantSubscribe) {
                return doc.unsubscribe(callback);
              }
              if (callback) callback();
            });
          };


// ****** Manipulating the document data, version and type.

// Set the document's type, and associated properties. Most of the logic in
// this function exists to update the document based on any added & removed API
// methods.
//
// @param newType OT type provided by the ottypes library or its name or uri
          Doc.prototype._setType = function (newType) {
            if (typeof newType === 'string') {
              newType = types.map[newType];
            }

            if (newType) {
              this.type = newType;

            } else if (newType === null) {
              this.type = newType;
              // If we removed the type from the object, also remove its data
              this.data = undefined;

            } else {
              var err = new ShareDBError(4008, 'Missing type ' + newType);
              return this.emit('error', err);
            }
          };

// Ingest snapshot data. This data must include a version, snapshot and type.
// This is used both to ingest data that was exported with a webpage and data
// that was received from the server during a fetch.
//
// @param snapshot.v    version
// @param snapshot.data
// @param snapshot.type
// @param callback
          Doc.prototype.ingestSnapshot = function (snapshot, callback) {
            if (!snapshot) return callback && callback();

            if (typeof snapshot.v !== 'number') {
              var err = new ShareDBError(5008, 'Missing version in ingested snapshot. ' + this.collection + '.' + this.id);
              if (callback) return callback(err);
              return this.emit('error', err);
            }

            // If the doc is already created or there are ops pending, we cannot use the
            // ingested snapshot and need ops in order to update the document
            if (this.type || this.hasWritePending()) {
              // The version should only be null on a created document when it was
              // created locally without fetching
              if (this.version == null) {
                if (this.hasWritePending()) {
                  // If we have pending ops and we get a snapshot for a locally created
                  // document, we have to wait for the pending ops to complete, because
                  // we don't know what version to fetch ops from. It is possible that
                  // the snapshot came from our local op, but it is also possible that
                  // the doc was created remotely (which would conflict and be an error)
                  return callback && this.once('no write pending', callback);
                }
                // Otherwise, we've encounted an error state
                var err = new ShareDBError(5009, 'Cannot ingest snapshot in doc with null version. ' + this.collection + '.' + this.id);
                if (callback) return callback(err);
                return this.emit('error', err);
              }
              // If we got a snapshot for a version further along than the document is
              // currently, issue a fetch to get the latest ops and catch us up
              if (snapshot.v > this.version) return this.fetch(callback);
              return callback && callback();
            }

            // Ignore the snapshot if we are already at a newer version. Under no
            // circumstance should we ever set the current version backward
            if (this.version > snapshot.v) return callback && callback();

            this.version = snapshot.v;
            this.data = snapshot.data;
            var type = (snapshot.type === undefined) ? types.defaultType : snapshot.type;
            this._setType(type);
            this.emit('load');
            callback && callback();
          };

          Doc.prototype.whenNothingPending = function (callback) {
            if (this.hasPending()) {
              this.once('nothing pending', callback);
              return;
            }
            callback();
          };

          Doc.prototype.hasPending = function () {
            return !!(
                this.inflightOp ||
                this.pendingOps.length ||
                this.inflightFetch.length ||
                this.inflightSubscribe.length ||
                this.inflightUnsubscribe.length ||
                this.pendingFetch.length
            );
          };

          Doc.prototype.hasWritePending = function () {
            return !!(this.inflightOp || this.pendingOps.length);
          };

          Doc.prototype._emitNothingPending = function () {
            if (this.hasWritePending()) return;
            this.emit('no write pending');
            if (this.hasPending()) return;
            this.emit('nothing pending');
          };

// **** Helpers for network messages

          Doc.prototype._emitResponseError = function (err, callback) {
            if (callback) {
              callback(err);
              this._emitNothingPending();
              return;
            }
            this._emitNothingPending();
            this.emit('error', err);
          };

          Doc.prototype._handleFetch = function (err, snapshot) {
            var callback = this.inflightFetch.shift();
            if (err) return this._emitResponseError(err, callback);
            this.ingestSnapshot(snapshot, callback);
            this._emitNothingPending();
          };

          Doc.prototype._handleSubscribe = function (err, snapshot) {
            var callback = this.inflightSubscribe.shift();
            if (err) return this._emitResponseError(err, callback);
            // Indicate we are subscribed only if the client still wants to be. In the
            // time since calling subscribe and receiving a response from the server,
            // unsubscribe could have been called and we might already be unsubscribed
            // but not have received the response. Also, because requests from the
            // client are not serialized and may take different async time to process,
            // it is possible that we could hear responses back in a different order
            // from the order originally sent
            if (this.wantSubscribe) this.subscribed = true;
            this.ingestSnapshot(snapshot, callback);
            this._emitNothingPending();
          };

          Doc.prototype._handleUnsubscribe = function (err) {
            var callback = this.inflightUnsubscribe.shift();
            if (err) return this._emitResponseError(err, callback);
            if (callback) callback();
            this._emitNothingPending();
          };

          Doc.prototype._handleOp = function (err, message) {
            if (err) {
              if (this.inflightOp) {
                // The server has rejected submission of the current operation. If we get
                // an error code 4002 "Op submit rejected", this was done intentionally
                // and we should roll back but not return an error to the user.
                if (err.code === 4002) err = null;
                return this._rollback(err);
              }
              return this.emit('error', err);
            }

            if (this.inflightOp &&
                message.src === this.inflightOp.src &&
                message.seq === this.inflightOp.seq) {
              // The op has already been applied locally. Just update the version
              // and pending state appropriately
              this._opAcknowledged(message);
              return;
            }

            if (this.version == null || message.v > this.version) {
              // This will happen in normal operation if we become subscribed to a
              // new document via a query. It can also happen if we get an op for
              // a future version beyond the version we are expecting next. This
              // could happen if the server doesn't publish an op for whatever reason
              // or because of a race condition. In any case, we can send a fetch
              // command to catch back up.
              //
              // Fetch only sends a new fetch command if no fetches are inflight, which
              // will act as a natural debouncing so we don't send multiple fetch
              // requests for many ops received at once.
              this.fetch();
              return;
            }

            if (message.v < this.version) {
              // We can safely ignore the old (duplicate) operation.
              return;
            }

            if (this.inflightOp) {
              var transformErr = transformX(this.inflightOp, message);
              if (transformErr) return this._hardRollback(transformErr);
            }

            for (var i = 0; i < this.pendingOps.length; i++) {
              var transformErr = transformX(this.pendingOps[i], message);
              if (transformErr) return this._hardRollback(transformErr);
            }

            this.version++;
            this._otApply(message, false);
            return;
          };

// Called whenever (you guessed it!) the connection state changes. This will
// happen when we get disconnected & reconnect.
          Doc.prototype._onConnectionStateChanged = function () {
            if (this.connection.canSend) {
              this.flush();
              this._resubscribe();
            } else {
              if (this.inflightOp) {
                this.pendingOps.unshift(this.inflightOp);
                this.inflightOp = null;
              }
              this.subscribed = false;
              if (this.inflightFetch.length || this.inflightSubscribe.length) {
                this.pendingFetch = this.pendingFetch.concat(this.inflightFetch, this.inflightSubscribe);
                this.inflightFetch.length = 0;
                this.inflightSubscribe.length = 0;
              }
              if (this.inflightUnsubscribe.length) {
                var callbacks = this.inflightUnsubscribe;
                this.inflightUnsubscribe = [];
                callEach(callbacks);
              }
            }
          };

          Doc.prototype._resubscribe = function () {
            var callbacks = this.pendingFetch;
            this.pendingFetch = [];

            if (this.wantSubscribe) {
              if (callbacks.length) {
                this.subscribe(function (err) {
                  callEach(callbacks, err);
                });
                return;
              }
              this.subscribe();
              return;
            }

            if (callbacks.length) {
              this.fetch(function (err) {
                callEach(callbacks, err);
              });
            }
          };

// Request the current document snapshot or ops that bring us up to date
          Doc.prototype.fetch = function (callback) {
            if (this.connection.canSend) {
              var isDuplicate = this.connection.sendFetch(this);
              pushActionCallback(this.inflightFetch, isDuplicate, callback);
              return;
            }
            this.pendingFetch.push(callback);
          };

// Fetch the initial document and keep receiving updates
          Doc.prototype.subscribe = function (callback) {
            this.wantSubscribe = true;
            if (this.connection.canSend) {
              var isDuplicate = this.connection.sendSubscribe(this);
              pushActionCallback(this.inflightSubscribe, isDuplicate, callback);
              return;
            }
            this.pendingFetch.push(callback);
          };

// Unsubscribe. The data will stay around in local memory, but we'll stop
// receiving updates
          Doc.prototype.unsubscribe = function (callback) {
            this.wantSubscribe = false;
            // The subscribed state should be conservative in indicating when we are
            // subscribed on the server. We'll actually be unsubscribed some time
            // between sending the message and hearing back, but we cannot know exactly
            // when. Thus, immediately mark us as not subscribed
            this.subscribed = false;
            if (this.connection.canSend) {
              var isDuplicate = this.connection.sendUnsubscribe(this);
              pushActionCallback(this.inflightUnsubscribe, isDuplicate, callback);
              return;
            }
            if (callback) process.nextTick(callback);
          };

          function pushActionCallback(inflight, isDuplicate, callback) {
            if (isDuplicate) {
              var lastCallback = inflight.pop();
              inflight.push(function (err) {
                lastCallback && lastCallback(err);
                callback && callback(err);
              });
            } else {
              inflight.push(callback);
            }
          }


// Operations //

// Send the next pending op to the server, if we can.
//
// Only one operation can be in-flight at a time. If an operation is already on
// its way, or we're not currently connected, this method does nothing.
          Doc.prototype.flush = function () {
            // Ignore if we can't send or we are already sending an op
            if (!this.connection.canSend || this.inflightOp) return;

            // Send first pending op unless paused
            if (!this.paused && this.pendingOps.length) {
              this._sendOp();
            }
          };

// Helper function to set op to contain a no-op.
          function setNoOp(op) {
            delete op.op;
            delete op.create;
            delete op.del;
          }

// Transform server op data by a client op, and vice versa. Ops are edited in place.
          function transformX(client, server) {
            // Order of statements in this function matters. Be especially careful if
            // refactoring this function

            // A client delete op should dominate if both the server and the client
            // delete the document. Thus, any ops following the client delete (such as a
            // subsequent create) will be maintained, since the server op is transformed
            // to a no-op
            if (client.del) return setNoOp(server);

            if (server.del) {
              return new ShareDBError(4017, 'Document was deleted');
            }
            if (server.create) {
              return new ShareDBError(4018, 'Document alredy created');
            }

            // Ignore no-op coming from server
            if (!server.op) return;

            // I believe that this should not occur, but check just in case
            if (client.create) {
              return new ShareDBError(4018, 'Document already created');
            }

            // They both edited the document. This is the normal case for this function -
            // as in, most of the time we'll end up down here.
            //
            // You should be wondering why I'm using client.type instead of this.type.
            // The reason is, if we get ops at an old version of the document, this.type
            // might be undefined or a totally different type. By pinning the type to the
            // op data, we make sure the right type has its transform function called.
            if (client.type.transformX) {
              var result = client.type.transformX(client.op, server.op);
              client.op = result[0];
              server.op = result[1];
            } else {
              var clientOp = client.type.transform(client.op, server.op, 'left');
              var serverOp = client.type.transform(server.op, client.op, 'right');
              client.op = clientOp;
              server.op = serverOp;
            }
          };

          /**
           * Applies the operation to the snapshot
           *
           * If the operation is create or delete it emits `create` or `del`. Then the
           * operation is applied to the snapshot and `op` and `after op` are emitted.
           * If the type supports incremental updates and `this.incremental` is true we
           * fire `op` after every small operation.
           *
           * This is the only function to fire the above mentioned events.
           *
           * @private
           */
          Doc.prototype._otApply = function (op, source) {
            if (op.op) {
              if (!this.type) {
                var err = new ShareDBError(4015, 'Cannot apply op to uncreated document. ' + this.collection + '.' + this.id);
                return this.emit('error', err);
              }

              // Iteratively apply multi-component remote operations and rollback ops
              // (source === false) for the default JSON0 OT type. It could use
              // type.shatter(), but since this code is so specific to use cases for the
              // JSON0 type and ShareDB explicitly bundles the default type, we might as
              // well write it this way and save needing to iterate through the op
              // components twice.
              //
              // Ideally, we would not need this extra complexity. However, it is
              // helpful for implementing bindings that update DOM nodes and other
              // stateful objects by translating op events directly into corresponding
              // mutations. Such bindings are most easily written as responding to
              // individual op components one at a time in order, and it is important
              // that the snapshot only include updates from the particular op component
              // at the time of emission. Eliminating this would require rethinking how
              // such external bindings are implemented.
              if (!source && this.type === types.defaultType && op.op.length > 1) {
                if (!this.applyStack) this.applyStack = [];
                var stackLength = this.applyStack.length;
                for (var i = 0; i < op.op.length; i++) {
                  var component = op.op[i];
                  var componentOp = {op: [component]};
                  // Transform componentOp against any ops that have been submitted
                  // sychronously inside of an op event handler since we began apply of
                  // our operation
                  for (var j = stackLength; j < this.applyStack.length; j++) {
                    var transformErr = transformX(this.applyStack[j], componentOp);
                    if (transformErr) return this._hardRollback(transformErr);
                  }
                  // Apply the individual op component
                  this.emit('before op', componentOp.op, source);
                  this.data = this.type.apply(this.data, componentOp.op);
                  this.emit('op', componentOp.op, source);
                }
                // Pop whatever was submitted since we started applying this op
                this._popApplyStack(stackLength);
                return;
              }

              // The 'before op' event enables clients to pull any necessary data out of
              // the snapshot before it gets changed
              this.emit('before op', op.op, source);
              // Apply the operation to the local data, mutating it in place
              this.data = this.type.apply(this.data, op.op);
              // Emit an 'op' event once the local data includes the changes from the
              // op. For locally submitted ops, this will be synchronously with
              // submission and before the server or other clients have received the op.
              // For ops from other clients, this will be after the op has been
              // committed to the database and published
              this.emit('op', op.op, source);
              return;
            }

            if (op.create) {
              this._setType(op.create.type);
              this.data = this.type.create(op.create.data);
              this.emit('create', source);
              return;
            }

            if (op.del) {
              var oldData = this.data;
              this._setType(null);
              this.emit('del', oldData, source);
              return;
            }
          };


// ***** Sending operations

// Actually send op to the server.
          Doc.prototype._sendOp = function () {
            // Wait until we have a src id from the server
            var src = this.connection.id;
            if (!src) return;

            // When there is no inflightOp, send the first item in pendingOps. If
            // there is inflightOp, try sending it again
            if (!this.inflightOp) {
              // Send first pending op
              this.inflightOp = this.pendingOps.shift();
            }
            var op = this.inflightOp;
            if (!op) {
              var err = new ShareDBError(5010, 'No op to send on call to _sendOp');
              return this.emit('error', err);
            }

            // Track data for retrying ops
            op.sentAt = Date.now();
            op.retries = (op.retries == null) ? 0 : op.retries + 1;

            // The src + seq number is a unique ID representing this operation. This tuple
            // is used on the server to detect when ops have been sent multiple times and
            // on the client to match acknowledgement of an op back to the inflightOp.
            // Note that the src could be different from this.connection.id after a
            // reconnect, since an op may still be pending after the reconnection and
            // this.connection.id will change. In case an op is sent multiple times, we
            // also need to be careful not to override the original seq value.
            if (op.seq == null) op.seq = this.connection.seq++;

            this.connection.sendOp(this, op);

            // src isn't needed on the first try, since the server session will have the
            // same id, but it must be set on the inflightOp in case it is sent again
            // after a reconnect and the connection's id has changed by then
            if (op.src == null) op.src = src;
          };


// Queues the operation for submission to the server and applies it locally.
//
// Internal method called to do the actual work for submit(), create() and del().
// @private
//
// @param op
// @param [op.op]
// @param [op.del]
// @param [op.create]
// @param [callback] called when operation is submitted
          Doc.prototype._submit = function (op, source, callback) {
            // Locally submitted ops must always have a truthy source
            if (!source) source = true;

            // The op contains either op, create, delete, or none of the above (a no-op).
            if (op.op) {
              if (!this.type) {
                var err = new ShareDBError(4015, 'Cannot submit op. Document has not been created. ' + this.collection + '.' + this.id);
                if (callback) return callback(err);
                return this.emit('error', err);
              }
              // Try to normalize the op. This removes trailing skip:0's and things like that.
              if (this.type.normalize) op.op = this.type.normalize(op.op);
            }

            this._pushOp(op, callback);
            this._otApply(op, source);

            // The call to flush is delayed so if submit() is called multiple times
            // synchronously, all the ops are combined before being sent to the server.
            var doc = this;
            process.nextTick(function () {
              doc.flush();
            });
          };

          Doc.prototype._pushOp = function (op, callback) {
            if (this.applyStack) {
              // If we are in the process of incrementally applying an operation, don't
              // compose the op and push it onto the applyStack so it can be transformed
              // against other components from the op or ops being applied
              this.applyStack.push(op);
            } else {
              // If the type supports composes, try to compose the operation onto the
              // end of the last pending operation.
              var composed = this._tryCompose(op);
              if (composed) {
                composed.callbacks.push(callback);
                return;
              }
            }
            // Push on to the pendingOps queue of ops to submit if we didn't compose
            op.type = this.type;
            op.callbacks = [callback];
            this.pendingOps.push(op);
          };

          Doc.prototype._popApplyStack = function (to) {
            if (to > 0) {
              this.applyStack.length = to;
              return;
            }
            // Once we have completed the outermost apply loop, reset to null and no
            // longer add ops to the applyStack as they are submitted
            var op = this.applyStack[0];
            this.applyStack = null;
            if (!op) return;
            // Compose the ops added since the beginning of the apply stack, since we
            // had to skip compose when they were originally pushed
            var i = this.pendingOps.indexOf(op);
            if (i === -1) return;
            var ops = this.pendingOps.splice(i);
            for (var i = 0; i < ops.length; i++) {
              var op = ops[i];
              var composed = this._tryCompose(op);
              if (composed) {
                composed.callbacks = composed.callbacks.concat(op.callbacks);
              } else {
                this.pendingOps.push(op);
              }
            }
          };

// Try to compose a submitted op into the last pending op. Returns the
// composed op if it succeeds, undefined otherwise
          Doc.prototype._tryCompose = function (op) {
            if (this.preventCompose) return;

            // We can only compose into the last pending op. Inflight ops have already
            // been sent to the server, so we can't modify them
            var last = this.pendingOps[this.pendingOps.length - 1];
            if (!last) return;

            // Compose an op into a create by applying it. This effectively makes the op
            // invisible, as if the document were created including the op originally
            if (last.create && op.op) {
              last.create.data = this.type.apply(last.create.data, op.op);
              return last;
            }

            // Compose two ops into a single op if supported by the type. Types that
            // support compose must be able to compose any two ops together
            if (last.op && op.op && this.type.compose) {
              last.op = this.type.compose(last.op, op.op);
              return last;
            }
          };

// *** Client OT entrypoints.

// Submit an operation to the document.
//
// @param operation handled by the OT type
// @param options  {source: ...}
// @param [callback] called after operation submitted
//
// @fires before op, op, after op
          Doc.prototype.submitOp = function (component, options, callback) {
            if (typeof options === 'function') {
              callback = options;
              options = null;
            }
            var op = {op: component};
            var source = options && options.source;
            this._submit(op, source, callback);
          };

// Create the document, which in ShareJS semantics means to set its type. Every
// object implicitly exists in the database but has no data and no type. Create
// sets the type of the object and can optionally set some initial data on the
// object, depending on the type.
//
// @param data  initial
// @param type  OT type
// @param options  {source: ...}
// @param callback  called when operation submitted
          Doc.prototype.create = function (data, type, options, callback) {
            if (typeof type === 'function') {
              callback = type;
              options = null;
              type = null;
            } else if (typeof options === 'function') {
              callback = options;
              options = null;
            }
            if (!type) {
              type = types.defaultType.uri;
            }
            if (this.type) {
              var err = new ShareDBError(4016, 'Document already exists');
              if (callback) return callback(err);
              return this.emit('error', err);
            }
            var op = {create: {type: type, data: data}};
            var source = options && options.source;
            this._submit(op, source, callback);
          };

// Delete the document. This creates and submits a delete operation to the
// server. Deleting resets the object's type to null and deletes its data. The
// document still exists, and still has the version it used to have before you
// deleted it (well, old version +1).
//
// @param options  {source: ...}
// @param callback  called when operation submitted
          Doc.prototype.del = function (options, callback) {
            if (typeof options === 'function') {
              callback = options;
              options = null;
            }
            if (!this.type) {
              var err = new ShareDBError(4015, 'Document does not exist');
              if (callback) return callback(err);
              return this.emit('error', err);
            }
            var op = {del: true};
            var source = options && options.source;
            this._submit(op, source, callback);
          };


// Stops the document from sending any operations to the server.
          Doc.prototype.pause = function () {
            this.paused = true;
          };

// Continue sending operations to the server
          Doc.prototype.resume = function () {
            this.paused = false;
            this.flush();
          };


// *** Receiving operations

// This is called when the server acknowledges an operation from the client.
          Doc.prototype._opAcknowledged = function (message) {
            if (this.inflightOp.create) {
              this.version = message.v;

            } else if (message.v !== this.version) {
              // We should already be at the same version, because the server should
              // have sent all the ops that have happened before acknowledging our op
              console.warn('Invalid version from server. Expected: ' + this.version + ' Received: ' + message.v, message);

              // Fetching should get us back to a working document state
              return this.fetch();
            }

            // The op was committed successfully. Increment the version number
            this.version++;

            this._clearInflightOp();
          };

          Doc.prototype._rollback = function (err) {
            // The server has rejected submission of the current operation. Invert by
            // just the inflight op if possible. If not possible to invert, cancel all
            // pending ops and fetch the latest from the server to get us back into a
            // working state, then call back
            var op = this.inflightOp;

            if (op.op && op.type.invert) {
              op.op = op.type.invert(op.op);

              // Transform the undo operation by any pending ops.
              for (var i = 0; i < this.pendingOps.length; i++) {
                var transformErr = transformX(this.pendingOps[i], op);
                if (transformErr) return this._hardRollback(transformErr);
              }

              // ... and apply it locally, reverting the changes.
              //
              // This operation is applied to look like it comes from a remote source.
              // I'm still not 100% sure about this functionality, because its really a
              // local op. Basically, the problem is that if the client's op is rejected
              // by the server, the editor window should update to reflect the undo.
              this._otApply(op, false);

              this._clearInflightOp(err);
              return;
            }

            this._hardRollback(err);
          };

          Doc.prototype._hardRollback = function (err) {
            // Cancel all pending ops and reset if we can't invert
            var op = this.inflightOp;
            var pending = this.pendingOps;
            this._setType(null);
            this.version = null;
            this.inflightOp = null;
            this.pendingOps = [];

            // Fetch the latest from the server to get us back into a working state
            var doc = this;
            this.fetch(function () {
              var called = op && callEach(op.callbacks, err);
              for (var i = 0; i < pending.length; i++) {
                callEach(pending[i].callbacks, err);
              }
              if (err && !called) return doc.emit('error', err);
            });
          };

          Doc.prototype._clearInflightOp = function (err) {
            var called = callEach(this.inflightOp.callbacks, err);

            this.inflightOp = null;
            this.flush();
            this._emitNothingPending();

            if (err && !called) return this.emit('error', err);
          };

          function callEach(callbacks, err) {
            var called = false;
            for (var i = 0; i < callbacks.length; i++) {
              var callback = callbacks[i];
              if (callback) {
                callback(err);
                called = true;
              }
            }
            return called;
          }

        }).call(this, require('_process'))

      }, {"../emitter": 34, "../error": 35, "../types": 36, "_process": 4}],
      32: [function (require, module, exports) {
        exports.Connection = require('./connection');
        exports.Doc = require('./doc');
        exports.Error = require('../error');
        exports.Query = require('./query');
        exports.types = require('../types');

      }, {"../error": 35, "../types": 36, "./connection": 30, "./doc": 31, "./query": 33}],
      33: [function (require, module, exports) {
        (function (process) {
          var emitter = require('../emitter');

// Queries are live requests to the database for particular sets of fields.
//
// The server actively tells the client when there's new data that matches
// a set of conditions.
          module.exports = Query;
          function Query(action, connection, id, collection, query, options, callback) {
            emitter.EventEmitter.call(this);

            // 'qf' or 'qs'
            this.action = action;

            this.connection = connection;
            this.id = id;
            this.collection = collection;

            // The query itself. For mongo, this should look something like {"data.x":5}
            this.query = query;

            // A list of resulting documents. These are actual documents, complete with
            // data and all the rest. It is possible to pass in an initial results set,
            // so that a query can be serialized and then re-established
            this.results = null;
            if (options && options.results) {
              this.results = options.results;
              delete options.results;
            }
            this.extra = undefined;

            // Options to pass through with the query
            this.options = options;

            this.callback = callback;
            this.ready = false;
            this.sent = false;
          }

          emitter.mixin(Query);

          Query.prototype.hasPending = function () {
            return !this.ready;
          };

// Helper for subscribe & fetch, since they share the same message format.
//
// This function actually issues the query.
          Query.prototype.send = function () {
            if (!this.connection.canSend) return;

            var message = {
              a: this.action,
              id: this.id,
              c: this.collection,
              q: this.query
            };
            if (this.options) {
              message.o = this.options;
            }
            if (this.results) {
              // Collect the version of all the documents in the current result set so we
              // don't need to be sent their snapshots again.
              var results = [];
              for (var i = 0; i < this.results.length; i++) {
                var doc = this.results[i];
                results.push([doc.id, doc.version]);
              }
              message.r = results;
            }

            this.connection.send(message);
            this.sent = true;
          };

// Destroy the query object. Any subsequent messages for the query will be
// ignored by the connection.
          Query.prototype.destroy = function (callback) {
            if (this.connection.canSend && this.action === 'qs') {
              this.connection.send({a: 'qu', id: this.id});
            }
            this.connection._destroyQuery(this);
            // There is a callback for consistency, but we don't actually wait for the
            // server's unsubscribe message currently
            if (callback) process.nextTick(callback);
          };

          Query.prototype._onConnectionStateChanged = function () {
            if (this.connection.canSend && !this.sent) {
              this.send();
            } else {
              this.sent = false;
            }
          };

          Query.prototype._handleFetch = function (err, data, extra) {
            // Once a fetch query gets its data, it is destroyed.
            this.connection._destroyQuery(this);
            this._handleResponse(err, data, extra);
          };

          Query.prototype._handleSubscribe = function (err, data, extra) {
            this._handleResponse(err, data, extra);
          };

          Query.prototype._handleResponse = function (err, data, extra) {
            var callback = this.callback;
            this.callback = null;
            if (err) return this._finishResponse(err, callback);
            if (!data) return this._finishResponse(null, callback);

            var query = this;
            var wait = 1;
            var finish = function (err) {
              if (err) return query._finishResponse(err, callback);
              if (--wait) return;
              query._finishResponse(null, callback);
            };

            if (Array.isArray(data)) {
              wait += data.length;
              this.results = this._ingestSnapshots(data, finish);
              this.extra = extra;

            } else {
              for (var id in data) {
                wait++;
                var snapshot = data[id];
                var doc = this.connection.get(snapshot.c || this.collection, id);
                doc.ingestSnapshot(snapshot, finish);
              }
            }

            finish();
          };

          Query.prototype._ingestSnapshots = function (snapshots, finish) {
            var results = [];
            for (var i = 0; i < snapshots.length; i++) {
              var snapshot = snapshots[i];
              var doc = this.connection.get(snapshot.c || this.collection, snapshot.d);
              doc.ingestSnapshot(snapshot, finish);
              results.push(doc);
            }
            return results;
          };

          Query.prototype._finishResponse = function (err, callback) {
            this.emit('ready');
            this.ready = true;
            if (err) {
              this.connection._destroyQuery(this);
              if (callback) return callback(err);
              return this.emit('error', err);
            }
            if (callback) callback(null, this.results, this.extra);
          };

          Query.prototype._handleError = function (err) {
            this.emit('error', err);
          };

          Query.prototype._handleDiff = function (diff) {
            // We need to go through the list twice. First, we'll ingest all the new
            // documents. After that we'll emit events and actually update our list.
            // This avoids race conditions around setting documents to be subscribed &
            // unsubscribing documents in event callbacks.
            for (var i = 0; i < diff.length; i++) {
              var d = diff[i];
              if (d.type === 'insert') d.values = this._ingestSnapshots(d.values);
            }

            for (var i = 0; i < diff.length; i++) {
              var d = diff[i];
              switch (d.type) {
                case 'insert':
                  var newDocs = d.values;
                  Array.prototype.splice.apply(this.results, [d.index, 0].concat(newDocs));
                  this.emit('insert', newDocs, d.index);
                  break;
                case 'remove':
                  var howMany = d.howMany || 1;
                  var removed = this.results.splice(d.index, howMany);
                  this.emit('remove', removed, d.index);
                  break;
                case 'move':
                  var howMany = d.howMany || 1;
                  var docs = this.results.splice(d.from, howMany);
                  Array.prototype.splice.apply(this.results, [d.to, 0].concat(docs));
                  this.emit('move', docs, d.from, d.to);
                  break;
              }
            }

            this.emit('changed', this.results);
          };

          Query.prototype._handleExtra = function (extra) {
            this.extra = extra;
            this.emit('extra', extra);
          };

        }).call(this, require('_process'))

      }, {"../emitter": 34, "_process": 4}],
      34: [function (require, module, exports) {
        var EventEmitter = require('events').EventEmitter;

        exports.EventEmitter = EventEmitter;
        exports.mixin = mixin;

        function mixin(Constructor) {
          for (var key in EventEmitter.prototype) {
            Constructor.prototype[key] = EventEmitter.prototype[key];
          }
        }

      }, {"events": 3}],
      35: [function (require, module, exports) {
        var makeError = require('make-error');

        function ShareDBError(code, message) {
          ShareDBError.super.call(this, message);
          this.code = code;
        };

        makeError(ShareDBError);

        module.exports = ShareDBError;

      }, {"make-error": 38}],
      36: [function (require, module, exports) {

        exports.defaultType = require('ot-json0').type;

        exports.map = {};

        exports.register = function (type) {
          if (type.name) exports.map[type.name] = type;
          if (type.uri) exports.map[type.uri] = type;
        };

        exports.register(exports.defaultType);

      }, {"ot-json0": 40}],
      37: [function (require, module, exports) {

        exports.doNothing = doNothing;
        function doNothing() {
        }

        exports.hasKeys = function (object) {
          for (var key in object) return true;
          return false;
        };

      }, {}],
      38: [function (require, module, exports) {
// ISC @ Julien Fontanet

        'use strict'

// ===================================================================

        var defineProperty = Object.defineProperty

// -------------------------------------------------------------------

        var captureStackTrace = Error.captureStackTrace
        if (!captureStackTrace) {
          captureStackTrace = function captureStackTrace(error) {
            var container = new Error()

            defineProperty(error, 'stack', {
              configurable: true,
              get: function getStack() {
                var stack = container.stack

                // Replace property with value for faster future accesses.
                defineProperty(this, 'stack', {
                  value: stack
                })

                return stack
              },
              set: function setStack(stack) {
                defineProperty(error, 'stack', {
                  configurable: true,
                  value: stack,
                  writable: true
                })
              }
            })
          }
        }

// -------------------------------------------------------------------

        function BaseError(message) {
          if (message) {
            defineProperty(this, 'message', {
              configurable: true,
              value: message,
              writable: true
            })
          }

          var cname = this.constructor.name
          if (
              cname &&
              cname !== this.name
          ) {
            defineProperty(this, 'name', {
              configurable: true,
              value: cname,
              writable: true
            })
          }

          captureStackTrace(this, this.constructor)
        }

        BaseError.prototype = Object.create(Error.prototype, {
          // See: https://github.com/JsCommunity/make-error/issues/4
          constructor: {
            configurable: true,
            value: BaseError,
            writable: true
          }
        })

// -------------------------------------------------------------------

// Sets the name of a function if possible (depends of the JS engine).
        var setFunctionName = (function () {
          function setFunctionName(fn, name) {
            return defineProperty(fn, 'name', {
              configurable: true,
              value: name
            })
          }

          try {
            var f = function () {
            }
            setFunctionName(f, 'foo')
            if (f.name === 'foo') {
              return setFunctionName
            }
          } catch (_) {
          }
        })()

// -------------------------------------------------------------------

        function makeError(constructor, super_) {
          if (super_ == null || super_ === Error) {
            super_ = BaseError
          } else if (typeof super_ !== 'function') {
            throw new TypeError('super_ should be a function')
          }

          var name
          if (typeof constructor === 'string') {
            name = constructor
            constructor = function () {
              super_.apply(this, arguments)
            }

            // If the name can be set, do it once and for all.
            if (setFunctionName) {
              setFunctionName(constructor, name)
              name = null
            }
          } else if (typeof constructor !== 'function') {
            throw new TypeError('constructor should be either a string or a function')
          }

          // Also register the super constructor also as `constructor.super_` just
          // like Node's `util.inherits()`.
          constructor.super_ = constructor['super'] = super_

          var properties = {
            constructor: {
              configurable: true,
              value: constructor,
              writable: true
            }
          }

          // If the name could not be set on the constructor, set it on the
          // prototype.
          if (name != null) {
            properties.name = {
              configurable: true,
              value: name,
              writable: true
            }
          }
          constructor.prototype = Object.create(super_.prototype, properties)

          return constructor
        }

        exports = module.exports = makeError
        exports.BaseError = BaseError

      }, {}],
      39: [function (require, module, exports) {
// These methods let you build a transform function from a transformComponent
// function for OT types like JSON0 in which operations are lists of components
// and transforming them requires N^2 work. I find it kind of nasty that I need
// this, but I'm not really sure what a better solution is. Maybe I should do
// this automatically to types that don't have a compose function defined.

// Add transform and transformX functions for an OT type which has
// transformComponent defined.  transformComponent(destination array,
// component, other component, side)
        module.exports = bootstrapTransform
        function bootstrapTransform(type, transformComponent, checkValidOp, append) {
          var transformComponentX = function (left, right, destLeft, destRight) {
            transformComponent(destLeft, left, right, 'left');
            transformComponent(destRight, right, left, 'right');
          };

          var transformX = type.transformX = function (leftOp, rightOp) {
            checkValidOp(leftOp);
            checkValidOp(rightOp);
            var newRightOp = [];

            for (var i = 0; i < rightOp.length; i++) {
              var rightComponent = rightOp[i];

              // Generate newLeftOp by composing leftOp by rightComponent
              var newLeftOp = [];
              var k = 0;
              while (k < leftOp.length) {
                var nextC = [];
                transformComponentX(leftOp[k], rightComponent, newLeftOp, nextC);
                k++;

                if (nextC.length === 1) {
                  rightComponent = nextC[0];
                } else if (nextC.length === 0) {
                  for (var j = k; j < leftOp.length; j++) {
                    append(newLeftOp, leftOp[j]);
                  }
                  rightComponent = null;
                  break;
                } else {
                  // Recurse.
                  var pair = transformX(leftOp.slice(k), nextC);
                  for (var l = 0; l < pair[0].length; l++) {
                    append(newLeftOp, pair[0][l]);
                  }
                  for (var r = 0; r < pair[1].length; r++) {
                    append(newRightOp, pair[1][r]);
                  }
                  rightComponent = null;
                  break;
                }
              }

              if (rightComponent != null) {
                append(newRightOp, rightComponent);
              }
              leftOp = newLeftOp;
            }
            return [leftOp, newRightOp];
          };

          // Transforms op with specified type ('left' or 'right') by otherOp.
          type.transform = function (op, otherOp, type) {
            if (!(type === 'left' || type === 'right'))
              throw new Error("type must be 'left' or 'right'");

            if (otherOp.length === 0) return op;

            if (op.length === 1 && otherOp.length === 1)
              return transformComponent([], op[0], otherOp[0], type);

            if (type === 'left')
              return transformX(op, otherOp)[0];
            else
              return transformX(otherOp, op)[1];
          };
        };

      }, {}],
      40: [function (require, module, exports) {
// Only the JSON type is exported, because the text type is deprecated
// otherwise. (If you want to use it somewhere, you're welcome to pull it out
// into a separate module that json0 can depend on).

        module.exports = {
          type: require('./json0')
        };

      }, {"./json0": 41}],
      41: [function (require, module, exports) {
        /*
         This is the implementation of the JSON OT type.

         Spec is here: https://github.com/josephg/ShareJS/wiki/JSON-Operations

         Note: This is being made obsolete. It will soon be replaced by the JSON2 type.
         */

        /**
         * UTILITY FUNCTIONS
         */

        /**
         * Checks if the passed object is an Array instance. Can't use Array.isArray
         * yet because its not supported on IE8.
         *
         * @param obj
         * @returns {boolean}
         */
        var isArray = function (obj) {
          return Object.prototype.toString.call(obj) == '[object Array]';
        };

        /**
         * Checks if the passed object is an Object instance.
         * No function call (fast) version
         *
         * @param obj
         * @returns {boolean}
         */
        var isObject = function (obj) {
          return (!!obj) && (obj.constructor === Object);
        };

        /**
         * Clones the passed object using JSON serialization (which is slow).
         *
         * hax, copied from test/types/json. Apparently this is still the fastest way
         * to deep clone an object, assuming we have browser support for JSON.  @see
         * http://jsperf.com/cloning-an-object/12
         */
        var clone = function (o) {
          return JSON.parse(JSON.stringify(o));
        };

        /**
         * JSON OT Type
         * @type {*}
         */
        var json = {
          name: 'json0',
          uri: 'http://sharejs.org/types/JSONv0'
        };

// You can register another OT type as a subtype in a JSON document using
// the following function. This allows another type to handle certain
// operations instead of the builtin JSON type.
        var subtypes = {};
        json.registerSubtype = function (subtype) {
          subtypes[subtype.name] = subtype;
        };

        json.create = function (data) {
          // Null instead of undefined if you don't pass an argument.
          return data === undefined ? null : clone(data);
        };

        json.invertComponent = function (c) {
          var c_ = {p: c.p};

          // handle subtype ops
          if (c.t && subtypes[c.t]) {
            c_.t = c.t;
            c_.o = subtypes[c.t].invert(c.o);
          }

          if (c.si !== void 0) c_.sd = c.si;
          if (c.sd !== void 0) c_.si = c.sd;
          if (c.oi !== void 0) c_.od = c.oi;
          if (c.od !== void 0) c_.oi = c.od;
          if (c.li !== void 0) c_.ld = c.li;
          if (c.ld !== void 0) c_.li = c.ld;
          if (c.na !== void 0) c_.na = -c.na;

          if (c.lm !== void 0) {
            c_.lm = c.p[c.p.length - 1];
            c_.p = c.p.slice(0, c.p.length - 1).concat([c.lm]);
          }

          return c_;
        };

        json.invert = function (op) {
          var op_ = op.slice().reverse();
          var iop = [];
          for (var i = 0; i < op_.length; i++) {
            iop.push(json.invertComponent(op_[i]));
          }
          return iop;
        };

        json.checkValidOp = function (op) {
          for (var i = 0; i < op.length; i++) {
            if (!isArray(op[i].p)) throw new Error('Missing path');
          }
        };

        json.checkList = function (elem) {
          if (!isArray(elem))
            throw new Error('Referenced element not a list');
        };

        json.checkObj = function (elem) {
          if (!isObject(elem)) {
            throw new Error("Referenced element not an object (it was " + JSON.stringify(elem) + ")");
          }
        };

// helper functions to convert old string ops to and from subtype ops
        function convertFromText(c) {
          c.t = 'text0';
          var o = {p: c.p.pop()};
          if (c.si != null) o.i = c.si;
          if (c.sd != null) o.d = c.sd;
          c.o = [o];
        }

        function convertToText(c) {
          c.p.push(c.o[0].p);
          if (c.o[0].i != null) c.si = c.o[0].i;
          if (c.o[0].d != null) c.sd = c.o[0].d;
          delete c.t;
          delete c.o;
        }

        json.apply = function (snapshot, op) {
          json.checkValidOp(op);

          op = clone(op);

          var container = {
            data: snapshot
          };

          for (var i = 0; i < op.length; i++) {
            var c = op[i];

            // convert old string ops to use subtype for backwards compatibility
            if (c.si != null || c.sd != null)
              convertFromText(c);

            var parent = null;
            var parentKey = null;
            var elem = container;
            var key = 'data';

            for (var j = 0; j < c.p.length; j++) {
              var p = c.p[j];

              parent = elem;
              parentKey = key;
              elem = elem[key];
              key = p;

              if (parent == null)
                throw new Error('Path invalid');
            }

            // handle subtype ops
            if (c.t && c.o !== void 0 && subtypes[c.t]) {
              elem[key] = subtypes[c.t].apply(elem[key], c.o);

              // Number add
            } else if (c.na !== void 0) {
              if (typeof elem[key] != 'number')
                throw new Error('Referenced element not a number');

              elem[key] += c.na;
            }

            // List replace
            else if (c.li !== void 0 && c.ld !== void 0) {
              json.checkList(elem);
              // Should check the list element matches c.ld
              elem[key] = c.li;
            }

            // List insert
            else if (c.li !== void 0) {
              json.checkList(elem);
              elem.splice(key, 0, c.li);
            }

            // List delete
            else if (c.ld !== void 0) {
              json.checkList(elem);
              // Should check the list element matches c.ld here too.
              elem.splice(key, 1);
            }

            // List move
            else if (c.lm !== void 0) {
              json.checkList(elem);
              if (c.lm != key) {
                var e = elem[key];
                // Remove it...
                elem.splice(key, 1);
                // And insert it back.
                elem.splice(c.lm, 0, e);
              }
            }

            // Object insert / replace
            else if (c.oi !== void 0) {
              json.checkObj(elem);

              // Should check that elem[key] == c.od
              elem[key] = c.oi;
            }

            // Object delete
            else if (c.od !== void 0) {
              json.checkObj(elem);

              // Should check that elem[key] == c.od
              delete elem[key];
            }

            else {
              throw new Error('invalid / missing instruction in op');
            }
          }

          return container.data;
        };

// Helper to break an operation up into a bunch of small ops.
        json.shatter = function (op) {
          var results = [];
          for (var i = 0; i < op.length; i++) {
            results.push([op[i]]);
          }
          return results;
        };

// Helper for incrementally applying an operation to a snapshot. Calls yield
// after each op component has been applied.
        json.incrementalApply = function (snapshot, op, _yield) {
          for (var i = 0; i < op.length; i++) {
            var smallOp = [op[i]];
            snapshot = json.apply(snapshot, smallOp);
            // I'd just call this yield, but thats a reserved keyword. Bah!
            _yield(smallOp, snapshot);
          }

          return snapshot;
        };

// Checks if two paths, p1 and p2 match.
        var pathMatches = json.pathMatches = function (p1, p2, ignoreLast) {
          if (p1.length != p2.length)
            return false;

          for (var i = 0; i < p1.length; i++) {
            if (p1[i] !== p2[i] && (!ignoreLast || i !== p1.length - 1))
              return false;
          }

          return true;
        };

        json.append = function (dest, c) {
          c = clone(c);

          if (dest.length === 0) {
            dest.push(c);
            return;
          }

          var last = dest[dest.length - 1];

          // convert old string ops to use subtype for backwards compatibility
          if ((c.si != null || c.sd != null) && (last.si != null || last.sd != null)) {
            convertFromText(c);
            convertFromText(last);
          }

          if (pathMatches(c.p, last.p)) {
            // handle subtype ops
            if (c.t && last.t && c.t === last.t && subtypes[c.t]) {
              last.o = subtypes[c.t].compose(last.o, c.o);

              // convert back to old string ops
              if (c.si != null || c.sd != null) {
                var p = c.p;
                for (var i = 0; i < last.o.length - 1; i++) {
                  c.o = [last.o.pop()];
                  c.p = p.slice();
                  convertToText(c);
                  dest.push(c);
                }

                convertToText(last);
              }
            } else if (last.na != null && c.na != null) {
              dest[dest.length - 1] = {p: last.p, na: last.na + c.na};
            } else if (last.li !== undefined && c.li === undefined && c.ld === last.li) {
              // insert immediately followed by delete becomes a noop.
              if (last.ld !== undefined) {
                // leave the delete part of the replace
                delete last.li;
              } else {
                dest.pop();
              }
            } else if (last.od !== undefined && last.oi === undefined && c.oi !== undefined && c.od === undefined) {
              last.oi = c.oi;
            } else if (last.oi !== undefined && c.od !== undefined) {
              // The last path component inserted something that the new component deletes (or replaces).
              // Just merge them.
              if (c.oi !== undefined) {
                last.oi = c.oi;
              } else if (last.od !== undefined) {
                delete last.oi;
              } else {
                // An insert directly followed by a delete turns into a no-op and can be removed.
                dest.pop();
              }
            } else if (c.lm !== undefined && c.p[c.p.length - 1] === c.lm) {
              // don't do anything
            } else {
              dest.push(c);
            }
          } else {
            // convert string ops back
            if ((c.si != null || c.sd != null) && (last.si != null || last.sd != null)) {
              convertToText(c);
              convertToText(last);
            }

            dest.push(c);
          }
        };

        json.compose = function (op1, op2) {
          json.checkValidOp(op1);
          json.checkValidOp(op2);

          var newOp = clone(op1);

          for (var i = 0; i < op2.length; i++) {
            json.append(newOp, op2[i]);
          }

          return newOp;
        };

        json.normalize = function (op) {
          var newOp = [];

          op = isArray(op) ? op : [op];

          for (var i = 0; i < op.length; i++) {
            var c = op[i];
            if (c.p == null) c.p = [];

            json.append(newOp, c);
          }

          return newOp;
        };

// Returns the common length of the paths of ops a and b
        json.commonLengthForOps = function (a, b) {
          var alen = a.p.length;
          var blen = b.p.length;
          if (a.na != null || a.t)
            alen++;

          if (b.na != null || b.t)
            blen++;

          if (alen === 0) return -1;
          if (blen === 0) return null;

          alen--;
          blen--;

          for (var i = 0; i < alen; i++) {
            var p = a.p[i];
            if (i >= blen || p !== b.p[i])
              return null;
          }

          return alen;
        };

// Returns true if an op can affect the given path
        json.canOpAffectPath = function (op, path) {
          return json.commonLengthForOps({p: path}, op) != null;
        };

// transform c so it applies to a document with otherC applied.
        json.transformComponent = function (dest, c, otherC, type) {
          c = clone(c);

          var common = json.commonLengthForOps(otherC, c);
          var common2 = json.commonLengthForOps(c, otherC);
          var cplength = c.p.length;
          var otherCplength = otherC.p.length;

          if (c.na != null || c.t)
            cplength++;

          if (otherC.na != null || otherC.t)
            otherCplength++;

          // if c is deleting something, and that thing is changed by otherC, we need to
          // update c to reflect that change for invertibility.
          if (common2 != null && otherCplength > cplength && c.p[common2] == otherC.p[common2]) {
            if (c.ld !== void 0) {
              var oc = clone(otherC);
              oc.p = oc.p.slice(cplength);
              c.ld = json.apply(clone(c.ld), [oc]);
            } else if (c.od !== void 0) {
              var oc = clone(otherC);
              oc.p = oc.p.slice(cplength);
              c.od = json.apply(clone(c.od), [oc]);
            }
          }

          if (common != null) {
            var commonOperand = cplength == otherCplength;

            // backward compatibility for old string ops
            var oc = otherC;
            if ((c.si != null || c.sd != null) && (otherC.si != null || otherC.sd != null)) {
              convertFromText(c);
              oc = clone(otherC);
              convertFromText(oc);
            }

            // handle subtype ops
            if (oc.t && subtypes[oc.t]) {
              if (c.t && c.t === oc.t) {
                var res = subtypes[c.t].transform(c.o, oc.o, type);

                if (res.length > 0) {
                  // convert back to old string ops
                  if (c.si != null || c.sd != null) {
                    var p = c.p;
                    for (var i = 0; i < res.length; i++) {
                      c.o = [res[i]];
                      c.p = p.slice();
                      convertToText(c);
                      json.append(dest, c);
                    }
                  } else {
                    c.o = res;
                    json.append(dest, c);
                  }
                }

                return dest;
              }
            }

            // transform based on otherC
            else if (otherC.na !== void 0) {
              // this case is handled below
            } else if (otherC.li !== void 0 && otherC.ld !== void 0) {
              if (otherC.p[common] === c.p[common]) {
                // noop

                if (!commonOperand) {
                  return dest;
                } else if (c.ld !== void 0) {
                  // we're trying to delete the same element, -> noop
                  if (c.li !== void 0 && type === 'left') {
                    // we're both replacing one element with another. only one can survive
                    c.ld = clone(otherC.li);
                  } else {
                    return dest;
                  }
                }
              }
            } else if (otherC.li !== void 0) {
              if (c.li !== void 0 && c.ld === undefined && commonOperand && c.p[common] === otherC.p[common]) {
                // in li vs. li, left wins.
                if (type === 'right')
                  c.p[common]++;
              } else if (otherC.p[common] <= c.p[common]) {
                c.p[common]++;
              }

              if (c.lm !== void 0) {
                if (commonOperand) {
                  // otherC edits the same list we edit
                  if (otherC.p[common] <= c.lm)
                    c.lm++;
                  // changing c.from is handled above.
                }
              }
            } else if (otherC.ld !== void 0) {
              if (c.lm !== void 0) {
                if (commonOperand) {
                  if (otherC.p[common] === c.p[common]) {
                    // they deleted the thing we're trying to move
                    return dest;
                  }
                  // otherC edits the same list we edit
                  var p = otherC.p[common];
                  var from = c.p[common];
                  var to = c.lm;
                  if (p < to || (p === to && from < to))
                    c.lm--;

                }
              }

              if (otherC.p[common] < c.p[common]) {
                c.p[common]--;
              } else if (otherC.p[common] === c.p[common]) {
                if (otherCplength < cplength) {
                  // we're below the deleted element, so -> noop
                  return dest;
                } else if (c.ld !== void 0) {
                  if (c.li !== void 0) {
                    // we're replacing, they're deleting. we become an insert.
                    delete c.ld;
                  } else {
                    // we're trying to delete the same element, -> noop
                    return dest;
                  }
                }
              }

            } else if (otherC.lm !== void 0) {
              if (c.lm !== void 0 && cplength === otherCplength) {
                // lm vs lm, here we go!
                var from = c.p[common];
                var to = c.lm;
                var otherFrom = otherC.p[common];
                var otherTo = otherC.lm;
                if (otherFrom !== otherTo) {
                  // if otherFrom == otherTo, we don't need to change our op.

                  // where did my thing go?
                  if (from === otherFrom) {
                    // they moved it! tie break.
                    if (type === 'left') {
                      c.p[common] = otherTo;
                      if (from === to) // ugh
                        c.lm = otherTo;
                    } else {
                      return dest;
                    }
                  } else {
                    // they moved around it
                    if (from > otherFrom) c.p[common]--;
                    if (from > otherTo) c.p[common]++;
                    else if (from === otherTo) {
                      if (otherFrom > otherTo) {
                        c.p[common]++;
                        if (from === to) // ugh, again
                          c.lm++;
                      }
                    }

                    // step 2: where am i going to put it?
                    if (to > otherFrom) {
                      c.lm--;
                    } else if (to === otherFrom) {
                      if (to > from)
                        c.lm--;
                    }
                    if (to > otherTo) {
                      c.lm++;
                    } else if (to === otherTo) {
                      // if we're both moving in the same direction, tie break
                      if ((otherTo > otherFrom && to > from) ||
                          (otherTo < otherFrom && to < from)) {
                        if (type === 'right') c.lm++;
                      } else {
                        if (to > from) c.lm++;
                        else if (to === otherFrom) c.lm--;
                      }
                    }
                  }
                }
              } else if (c.li !== void 0 && c.ld === undefined && commonOperand) {
                // li
                var from = otherC.p[common];
                var to = otherC.lm;
                p = c.p[common];
                if (p > from) c.p[common]--;
                if (p > to) c.p[common]++;
              } else {
                // ld, ld+li, si, sd, na, oi, od, oi+od, any li on an element beneath
                // the lm
                //
                // i.e. things care about where their item is after the move.
                var from = otherC.p[common];
                var to = otherC.lm;
                p = c.p[common];
                if (p === from) {
                  c.p[common] = to;
                } else {
                  if (p > from) c.p[common]--;
                  if (p > to) c.p[common]++;
                  else if (p === to && from > to) c.p[common]++;
                }
              }
            }
            else if (otherC.oi !== void 0 && otherC.od !== void 0) {
              if (c.p[common] === otherC.p[common]) {
                if (c.oi !== void 0 && commonOperand) {
                  // we inserted where someone else replaced
                  if (type === 'right') {
                    // left wins
                    return dest;
                  } else {
                    // we win, make our op replace what they inserted
                    c.od = otherC.oi;
                  }
                } else {
                  // -> noop if the other component is deleting the same object (or any parent)
                  return dest;
                }
              }
            } else if (otherC.oi !== void 0) {
              if (c.oi !== void 0 && c.p[common] === otherC.p[common]) {
                // left wins if we try to insert at the same place
                if (type === 'left') {
                  json.append(dest, {p: c.p, od: otherC.oi});
                } else {
                  return dest;
                }
              }
            } else if (otherC.od !== void 0) {
              if (c.p[common] == otherC.p[common]) {
                if (!commonOperand)
                  return dest;
                if (c.oi !== void 0) {
                  delete c.od;
                } else {
                  return dest;
                }
              }
            }
          }

          json.append(dest, c);
          return dest;
        };

        require('./bootstrapTransform')(json, json.transformComponent, json.checkValidOp, json.append);

        /**
         * Register a subtype for string operations, using the text0 type.
         */
        var text = require('./text0');

        json.registerSubtype(text);
        module.exports = json;


      }, {"./bootstrapTransform": 39, "./text0": 42}],
      42: [function (require, module, exports) {
// DEPRECATED!
//
// This type works, but is not exported. Its included here because the JSON0
// embedded string operations use this library.


// A simple text implementation
//
// Operations are lists of components. Each component either inserts or deletes
// at a specified position in the document.
//
// Components are either:
//  {i:'str', p:100}: Insert 'str' at position 100 in the document
//  {d:'str', p:100}: Delete 'str' at position 100 in the document
//
// Components in an operation are executed sequentially, so the position of components
// assumes previous components have already executed.
//
// Eg: This op:
//   [{i:'abc', p:0}]
// is equivalent to this op:
//   [{i:'a', p:0}, {i:'b', p:1}, {i:'c', p:2}]

        var text = module.exports = {
          name: 'text0',
          uri: 'http://sharejs.org/types/textv0',
          create: function (initial) {
            if ((initial != null) && typeof initial !== 'string') {
              throw new Error('Initial data must be a string');
            }
            return initial || '';
          }
        };

        /** Insert s2 into s1 at pos. */
        var strInject = function (s1, pos, s2) {
          return s1.slice(0, pos) + s2 + s1.slice(pos);
        };

        /** Check that an operation component is valid. Throws if its invalid. */
        var checkValidComponent = function (c) {
          if (typeof c.p !== 'number')
            throw new Error('component missing position field');

          if ((typeof c.i === 'string') === (typeof c.d === 'string'))
            throw new Error('component needs an i or d field');

          if (c.p < 0)
            throw new Error('position cannot be negative');
        };

        /** Check that an operation is valid */
        var checkValidOp = function (op) {
          for (var i = 0; i < op.length; i++) {
            checkValidComponent(op[i]);
          }
        };

        /** Apply op to snapshot */
        text.apply = function (snapshot, op) {
          var deleted;

          checkValidOp(op);
          for (var i = 0; i < op.length; i++) {
            var component = op[i];
            if (component.i != null) {
              snapshot = strInject(snapshot, component.p, component.i);
            } else {
              deleted = snapshot.slice(component.p, component.p + component.d.length);
              if (component.d !== deleted)
                throw new Error("Delete component '" + component.d + "' does not match deleted text '" + deleted + "'");

              snapshot = snapshot.slice(0, component.p) + snapshot.slice(component.p + component.d.length);
            }
          }
          return snapshot;
        };

        /**
         * Append a component to the end of newOp. Exported for use by the random op
         * generator and the JSON0 type.
         */
        var append = text._append = function (newOp, c) {
          if (c.i === '' || c.d === '') return;

          if (newOp.length === 0) {
            newOp.push(c);
          } else {
            var last = newOp[newOp.length - 1];

            if (last.i != null && c.i != null && last.p <= c.p && c.p <= last.p + last.i.length) {
              // Compose the insert into the previous insert
              newOp[newOp.length - 1] = {i: strInject(last.i, c.p - last.p, c.i), p: last.p};

            } else if (last.d != null && c.d != null && c.p <= last.p && last.p <= c.p + c.d.length) {
              // Compose the deletes together
              newOp[newOp.length - 1] = {d: strInject(c.d, last.p - c.p, last.d), p: c.p};

            } else {
              newOp.push(c);
            }
          }
        };

        /** Compose op1 and op2 together */
        text.compose = function (op1, op2) {
          checkValidOp(op1);
          checkValidOp(op2);
          var newOp = op1.slice();
          for (var i = 0; i < op2.length; i++) {
            append(newOp, op2[i]);
          }
          return newOp;
        };

        /** Clean up an op */
        text.normalize = function (op) {
          var newOp = [];

          // Normalize should allow ops which are a single (unwrapped) component:
          // {i:'asdf', p:23}.
          // There's no good way to test if something is an array:
          // http://perfectionkills.com/instanceof-considered-harmful-or-how-to-write-a-robust-isarray/
          // so this is probably the least bad solution.
          if (op.i != null || op.p != null) op = [op];

          for (var i = 0; i < op.length; i++) {
            var c = op[i];
            if (c.p == null) c.p = 0;

            append(newOp, c);
          }

          return newOp;
        };

// This helper method transforms a position by an op component.
//
// If c is an insert, insertAfter specifies whether the transform
// is pushed after the insert (true) or before it (false).
//
// insertAfter is optional for deletes.
        var transformPosition = function (pos, c, insertAfter) {
          // This will get collapsed into a giant ternary by uglify.
          if (c.i != null) {
            if (c.p < pos || (c.p === pos && insertAfter)) {
              return pos + c.i.length;
            } else {
              return pos;
            }
          } else {
            // I think this could also be written as: Math.min(c.p, Math.min(c.p -
            // otherC.p, otherC.d.length)) but I think its harder to read that way, and
            // it compiles using ternary operators anyway so its no slower written like
            // this.
            if (pos <= c.p) {
              return pos;
            } else if (pos <= c.p + c.d.length) {
              return c.p;
            } else {
              return pos - c.d.length;
            }
          }
        };

// Helper method to transform a cursor position as a result of an op.
//
// Like transformPosition above, if c is an insert, insertAfter specifies
// whether the cursor position is pushed after an insert (true) or before it
// (false).
        text.transformCursor = function (position, op, side) {
          var insertAfter = side === 'right';
          for (var i = 0; i < op.length; i++) {
            position = transformPosition(position, op[i], insertAfter);
          }

          return position;
        };

// Transform an op component by another op component. Asymmetric.
// The result will be appended to destination.
//
// exported for use in JSON type
        var transformComponent = text._tc = function (dest, c, otherC, side) {
          //var cIntersect, intersectEnd, intersectStart, newC, otherIntersect, s;

          checkValidComponent(c);
          checkValidComponent(otherC);

          if (c.i != null) {
            // Insert.
            append(dest, {i: c.i, p: transformPosition(c.p, otherC, side === 'right')});
          } else {
            // Delete
            if (otherC.i != null) {
              // Delete vs insert
              var s = c.d;
              if (c.p < otherC.p) {
                append(dest, {d: s.slice(0, otherC.p - c.p), p: c.p});
                s = s.slice(otherC.p - c.p);
              }
              if (s !== '')
                append(dest, {d: s, p: c.p + otherC.i.length});

            } else {
              // Delete vs delete
              if (c.p >= otherC.p + otherC.d.length)
                append(dest, {d: c.d, p: c.p - otherC.d.length});
              else if (c.p + c.d.length <= otherC.p)
                append(dest, c);
              else {
                // They overlap somewhere.
                var newC = {d: '', p: c.p};

                if (c.p < otherC.p)
                  newC.d = c.d.slice(0, otherC.p - c.p);

                if (c.p + c.d.length > otherC.p + otherC.d.length)
                  newC.d += c.d.slice(otherC.p + otherC.d.length - c.p);

                // This is entirely optional - I'm just checking the deleted text in
                // the two ops matches
                var intersectStart = Math.max(c.p, otherC.p);
                var intersectEnd = Math.min(c.p + c.d.length, otherC.p + otherC.d.length);
                var cIntersect = c.d.slice(intersectStart - c.p, intersectEnd - c.p);
                var otherIntersect = otherC.d.slice(intersectStart - otherC.p, intersectEnd - otherC.p);
                if (cIntersect !== otherIntersect)
                  throw new Error('Delete ops delete different text in the same region of the document');

                if (newC.d !== '') {
                  newC.p = transformPosition(newC.p, otherC);
                  append(dest, newC);
                }
              }
            }
          }

          return dest;
        };

        var invertComponent = function (c) {
          return (c.i != null) ? {d: c.i, p: c.p} : {i: c.d, p: c.p};
        };

// No need to use append for invert, because the components won't be able to
// cancel one another.
        text.invert = function (op) {
          // Shallow copy & reverse that sucka.
          op = op.slice().reverse();
          for (var i = 0; i < op.length; i++) {
            op[i] = invertComponent(op[i]);
          }
          return op;
        };

        require('./bootstrapTransform')(text, transformComponent, checkValidOp, append);

      }, {"./bootstrapTransform": 39}],
      43: [function (require, module, exports) {
        (function (global) {

          var rng;

          if (global.crypto && crypto.getRandomValues) {
            // WHATWG crypto-based RNG - http://wiki.whatwg.org/wiki/Crypto
            // Moderately fast, high quality
            var _rnds8 = new Uint8Array(16);
            rng = function whatwgRNG() {
              crypto.getRandomValues(_rnds8);
              return _rnds8;
            };
          }

          if (!rng) {
            // Math.random()-based (RNG)
            //
            // If all else fails, use Math.random().  It's fast, but is of unspecified
            // quality.
            var _rnds = new Array(16);
            rng = function () {
              for (var i = 0, r; i < 16; i++) {
                if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
                _rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
              }

              return _rnds;
            };
          }

          module.exports = rng;


        }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

      }, {}],
      44: [function (require, module, exports) {
//     uuid.js
//
//     Copyright (c) 2010-2012 Robert Kieffer
//     MIT License - http://opensource.org/licenses/mit-license.php

// Unique ID creation requires a high quality random # generator.  We feature
// detect to determine the best RNG source, normalizing to a function that
// returns 128-bits of randomness, since that's what's usually required
        var _rng = require('./rng');

// Maps for number <-> hex string conversion
        var _byteToHex = [];
        var _hexToByte = {};
        for (var i = 0; i < 256; i++) {
          _byteToHex[i] = (i + 0x100).toString(16).substr(1);
          _hexToByte[_byteToHex[i]] = i;
        }

// **`parse()` - Parse a UUID into it's component bytes**
        function parse(s, buf, offset) {
          var i = (buf && offset) || 0, ii = 0;

          buf = buf || [];
          s.toLowerCase().replace(/[0-9a-f]{2}/g, function (oct) {
            if (ii < 16) { // Don't overflow!
              buf[i + ii++] = _hexToByte[oct];
            }
          });

          // Zero out remaining bytes if string was short
          while (ii < 16) {
            buf[i + ii++] = 0;
          }

          return buf;
        }

// **`unparse()` - Convert UUID byte array (ala parse()) into a string**
        function unparse(buf, offset) {
          var i = offset || 0, bth = _byteToHex;
          return bth[buf[i++]] + bth[buf[i++]] +
              bth[buf[i++]] + bth[buf[i++]] + '-' +
              bth[buf[i++]] + bth[buf[i++]] + '-' +
              bth[buf[i++]] + bth[buf[i++]] + '-' +
              bth[buf[i++]] + bth[buf[i++]] + '-' +
              bth[buf[i++]] + bth[buf[i++]] +
              bth[buf[i++]] + bth[buf[i++]] +
              bth[buf[i++]] + bth[buf[i++]];
        }

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

// random #'s we need to init node and clockseq
        var _seedBytes = _rng();

// Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
        var _nodeId = [
          _seedBytes[0] | 0x01,
          _seedBytes[1], _seedBytes[2], _seedBytes[3], _seedBytes[4], _seedBytes[5]
        ];

// Per 4.2.2, randomize (14 bit) clockseq
        var _clockseq = (_seedBytes[6] << 8 | _seedBytes[7]) & 0x3fff;

// Previous uuid creation time
        var _lastMSecs = 0, _lastNSecs = 0;

// See https://github.com/broofa/node-uuid for API details
        function v1(options, buf, offset) {
          var i = buf && offset || 0;
          var b = buf || [];

          options = options || {};

          var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

          // UUID timestamps are 100 nano-second units since the Gregorian epoch,
          // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
          // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
          // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
          var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

          // Per 4.2.1.2, use count of uuid's generated during the current clock
          // cycle to simulate higher resolution clock
          var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

          // Time since last uuid creation (in msecs)
          var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs) / 10000;

          // Per 4.2.1.2, Bump clockseq on clock regression
          if (dt < 0 && options.clockseq === undefined) {
            clockseq = clockseq + 1 & 0x3fff;
          }

          // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
          // time interval
          if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
            nsecs = 0;
          }

          // Per 4.2.1.2 Throw error if too many uuids are requested
          if (nsecs >= 10000) {
            throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
          }

          _lastMSecs = msecs;
          _lastNSecs = nsecs;
          _clockseq = clockseq;

          // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
          msecs += 12219292800000;

          // `time_low`
          var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
          b[i++] = tl >>> 24 & 0xff;
          b[i++] = tl >>> 16 & 0xff;
          b[i++] = tl >>> 8 & 0xff;
          b[i++] = tl & 0xff;

          // `time_mid`
          var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
          b[i++] = tmh >>> 8 & 0xff;
          b[i++] = tmh & 0xff;

          // `time_high_and_version`
          b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
          b[i++] = tmh >>> 16 & 0xff;

          // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
          b[i++] = clockseq >>> 8 | 0x80;

          // `clock_seq_low`
          b[i++] = clockseq & 0xff;

          // `node`
          var node = options.node || _nodeId;
          for (var n = 0; n < 6; n++) {
            b[i + n] = node[n];
          }

          return buf ? buf : unparse(b);
        }

// **`v4()` - Generate random UUID**

// See https://github.com/broofa/node-uuid for API details
        function v4(options, buf, offset) {
          // Deprecated - 'format' argument, as supported in v1.2
          var i = buf && offset || 0;

          if (typeof(options) == 'string') {
            buf = options == 'binary' ? new Array(16) : null;
            options = null;
          }
          options = options || {};

          var rnds = options.random || (options.rng || _rng)();

          // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
          rnds[6] = (rnds[6] & 0x0f) | 0x40;
          rnds[8] = (rnds[8] & 0x3f) | 0x80;

          // Copy bytes to buffer, if provided
          if (buf) {
            for (var ii = 0; ii < 16; ii++) {
              buf[i + ii] = rnds[ii];
            }
          }

          return buf || unparse(rnds);
        }

// Export public API
        var uuid = v4;
        uuid.v1 = v1;
        uuid.v4 = v4;
        uuid.parse = parse;
        uuid.unparse = unparse;

        module.exports = uuid;

      }, {"./rng": 43}],
      45: [function (require, module, exports) {

        // function renderForm(value) {
        //   var form = $.parseHTML(value);
        //   $('#rtc-form')[0].innerHTML = form[0].innerHTML;
        // }
        //
        // model.on('change', function(value, previous, passed) {
        //
        //   console.log("Passed: ");
        //   console.log(passed);
        //
        //   if (!passed.$remote) return;
        //   if (!passed.$type) {
        //     renderForm(value || '');
        //     return;
        //   }
        //   //Update the view on model change
        //   renderForm(value);
        // });
        //
        // function onDOMModification() {
        //   var value = pad.outerHTML;
        //   var previous = model.get() || '';
        //   if (value !== previous)  {
        //     model.set(value);
        //   }
        // }
        //
        // $('#rtc-form')[0].addEventListener('DOMSubtreeModified', function () {
        //   setTimeout(onDOMModification, 0);
        // }, false);

        var data = JSON.parse(document.getElementById('data-bundle').innerHTML);
        var MODEL = require('racer').createModel(data);
        window.MODEL = MODEL

// model.at() scopes all model operations underneath a particular path
        model = MODEL.at('_page.room');

        var pad = $('.nicEdit-main');

        model.on('change', function(value, previous, passed) {
          if (!passed.$remote) return;
          if (!passed.$type) {
            pad.value = value || '';
            return;
          }
          var transformCursor, newText;
          if (passed.$type === 'stringInsert') {
            var index = passed.index;
            var text = passed.text;
            transformCursor = function(cursor) {
              return (index < cursor) ? cursor + text.length : cursor;
            };
            newText = previous.slice(0, index) + text + previous.slice(index);
          } else if (passed.$type === 'stringRemove') {
            var index = passed.index;
            var howMany = passed.howMany;
            transformCursor = function(cursor) {
              return (index < cursor) ? Math.max(index, cursor - howMany) : cursor;
            };
            newText = previous.slice(0, index) + previous.slice(index + howMany);
          }
          replaceText(pad, newText, transformCursor);
          if (pad.value !== model.get()) debugger;
        });

        function replaceText(pad, newText, transformCursor) {
          var start = pad.selectionStart;
          var end = pad.selectionEnd;
          var scrollTop = pad.scrollTop;
          pad.value = newText;
          if (pad.scrollTop !== scrollTop) {
            pad.scrollTop = scrollTop;
          }

          if (document.activeElement === pad) {
            pad.selectionStart = transformCursor(start);
            pad.selectionEnd = transformCursor(end);
          }
        }

        function onInput() {
          // IE and Opera replace \n with \r\n
          var value = pad.value.replace(/\r\n/g, '\n');
          var previous = model.get() || '';
          if (value != previous) applyChange(model, previous, value);
          if (pad.value !== model.get()) debugger;
        }
//
// pad.addEventListener('input', function() {
//   setTimeout(onInput, 0);
// }, false);

        pad.on("DOMNodeInserted", function()  {
          setTimeout(onInput, 0);
        }, false);

// Create an op which converts previous -> value.
//
// This function should be called every time the text element is changed.
// Because changes are always localized, the diffing is quite easy.
//
// This algorithm is O(N), but I suspect you could speed it up somehow using
// regular expressions.
        function applyChange(model, previous, value) {
          if (previous === value) return;
          var start = 0;
          while (previous.charAt(start) == value.charAt(start)) {
            start++;
          }
          var end = 0;
          while (
          previous.charAt(previous.length - 1 - end) === value.charAt(value.length - 1 - end) &&
          end + start < previous.length &&
          end + start < value.length
              ) {
            end++;
          }

          if (previous.length !== start + end) {
            var howMany = previous.length - start - end;
            model.stringRemove(start, howMany);
          }
          if (value.length !== start + end) {
            var inserted = value.slice(start, value.length - end);
            model.stringInsert(start, inserted);
          }
        }
      }, {"racer": "racer"}],
      "racer": [function (require, module, exports) {
        var Racer = require('./Racer');
        module.exports = new Racer();

      }, {"./Racer": 26}]
    }, {}, [1, 45])
  };
