!(function (t, e) {
  for (var n in e) t[n] = e[n];
})(
  window,
  (function (t) {
    function e(r) {
      if (n[r]) return n[r].exports;
      var o = (n[r] = { i: r, l: !1, exports: {} });
      return t[r].call(o.exports, o, o.exports, e), (o.l = !0), o.exports;
    }
    var n = {};
    return (
      (e.m = t),
      (e.c = n),
      (e.i = function (t) {
        return t;
      }),
      (e.d = function (t, n, r) {
        e.o(t, n) ||
          Object.defineProperty(t, n, {
            configurable: !1,
            enumerable: !0,
            get: r,
          });
      }),
      (e.n = function (t) {
        var n =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return e.d(n, "a", n), n;
      }),
      (e.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (e.p = ""),
      e((e.s = 3))
    );
  })([
    function (t, e, n) {
      "use strict";
      function r(t, e) {
        var n = {};
        for (var r in t) n[r] = t[r];
        return (n.target = n.currentTarget = e), n;
      }
      function o(t, e) {
        function n(e) {
          return function () {
            var n = this.hasOwnProperty(e + "_") ? this[e + "_"] : this.xhr[e],
              r = (t[e] || {}).getter;
            return (r && r(n, this)) || n;
          };
        }
        function o(e) {
          return function (n) {
            var o = this.xhr,
              i = this,
              s = t[e];
            if ("on" === e.substring(0, 2))
              (i[e + "_"] = n),
                (o[e] = function (s) {
                  (s = r(s, i)), (t[e] && t[e].call(i, o, s)) || n.call(i, s);
                });
            else {
              var u = (s || {}).setter;
              (n = (u && u(n, i)) || n), (this[e + "_"] = n);
              try {
                o[e] = n;
              } catch (t) {}
            }
          };
        }
        function i(e) {
          return function () {
            var n = [].slice.call(arguments);
            if (t[e]) {
              var r = t[e].call(this, n, this.xhr);
              if (r) return r;
            }
            return this.xhr[e].apply(this.xhr, n);
          };
        }
        return (
          (e = e || window),
          (e[u] = e[u] || e.XMLHttpRequest),
          (e.XMLHttpRequest = function () {
            for (var t = new e[u](), r = 0; r < a.length; ++r) {
              var c = "on" + a[r];
              void 0 === t[c] && (t[c] = null);
            }
            for (var f in t) {
              var h = "";
              try {
                h = s(t[f]);
              } catch (t) {}
              "function" === h
                ? (this[f] = i(f))
                : Object.defineProperty(this, f, {
                    get: n(f),
                    set: o(f),
                    enumerable: !0,
                  });
            }
            var d = this;
            (t.getProxy = function () {
              return d;
            }),
              (this.xhr = t);
          }),
          Object.assign(e.XMLHttpRequest, {
            UNSENT: 0,
            OPENED: 1,
            HEADERS_RECEIVED: 2,
            LOADING: 3,
            DONE: 4,
          }),
          e[u]
        );
      }
      function i(t) {
        (t = t || window), t[u] && (t.XMLHttpRequest = t[u]), (t[u] = void 0);
      }
      Object.defineProperty(e, "__esModule", { value: !0 });
      var s =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            };
      (e.configEvent = r), (e.hook = o), (e.unHook = i);
      var u = "__xhr",
        a = (e.events = [
          "load",
          "loadend",
          "timeout",
          "error",
          "readystatechange",
          "abort",
        ]);
    },
    function (t, e, n) {
      "use strict";
      function r(t, e) {
        if (((e = e || window), e.__xhr)) throw "Ajax is already hooked.";
        return f(t, e);
      }
      function o(t) {
        (0, h.unHook)(t);
      }
      function i(t) {
        return t.replace(/^\s+|\s+$/g, "");
      }
      function s(t) {
        return t.watcher || (t.watcher = document.createElement("a"));
      }
      function u(t, e) {
        var n = t.getProxy(),
          r = "on" + e + "_",
          o = (0, h.configEvent)({ type: e }, n);
        n[r] && n[r](o);
        var i;
        "function" == typeof Event
          ? (i = new Event(e, { bubbles: !1 }))
          : ((i = document.createEvent("Event")), i.initEvent(e, !1, !0)),
          s(t).dispatchEvent(i);
      }
      function a(t) {
        (this.xhr = t), (this.xhrProxy = t.getProxy());
      }
      function c(t) {
        function e(t) {
          a.call(this, t);
        }
        return (e[g] = Object.create(a[g])), (e[g].next = t), e;
      }
      function f(t, e) {
        function n(t, e) {
          var n = new w(t),
            r = {
              response: e.response || e.responseText,
              status: e.status,
              statusText: e.statusText,
              config: t.config,
              headers:
                t.resHeader ||
                t
                  .getAllResponseHeaders()
                  .split("\r\n")
                  .reduce(function (t, e) {
                    if ("" === e) return t;
                    var n = e.split(":");
                    return (t[n.shift()] = i(n.join(":"))), t;
                  }, {}),
            };
          if (!d) return n.resolve(r);
          d(r, n);
        }
        function r(t, e, n, r) {
          var o = new E(t);
          (n = { config: t.config, error: n, type: r }),
            v ? v(n, o) : o.next(n);
        }
        function o() {
          return !0;
        }
        function a(t) {
          return function (e, n) {
            return r(e, this, n, t), !0;
          };
        }
        function c(t, e) {
          return (
            4 === t.readyState && 0 !== t.status
              ? n(t, e)
              : 4 !== t.readyState && u(t, y),
            !0
          );
        }
        var f = t.onRequest,
          d = t.onResponse,
          v = t.onError;
        return (0, h.hook)(
          {
            onload: o,
            onloadend: o,
            onerror: a(p),
            ontimeout: a(l),
            onabort: a(x),
            onreadystatechange: function (t) {
              return c(t, this);
            },
            open: function (t, e) {
              var n = this,
                r = (e.config = { headers: {} });
              (r.method = t[0]),
                (r.url = t[1]),
                (r.async = t[2]),
                (r.user = t[3]),
                (r.password = t[4]),
                (r.xhr = e);
              var o = "on" + y;
              if (
                (e[o] ||
                  (e[o] = function () {
                    return c(e, n);
                  }),
                f)
              )
                return !0;
            },
            send: function (t, e) {
              var n = e.config;
              if (
                ((n.withCredentials = e.withCredentials), (n.body = t[0]), f)
              ) {
                var r = function () {
                  f(n, new b(e));
                };
                return !1 === n.async ? r() : setTimeout(r), !0;
              }
            },
            setRequestHeader: function (t, e) {
              if (((e.config.headers[t[0].toLowerCase()] = t[1]), f)) return !0;
            },
            addEventListener: function (t, e) {
              var n = this;
              if (-1 !== h.events.indexOf(t[0])) {
                var r = t[1];
                return (
                  s(e).addEventListener(t[0], function (e) {
                    var o = (0, h.configEvent)(e, n);
                    (o.type = t[0]), (o.isTrusted = !0), r.call(n, o);
                  }),
                  !0
                );
              }
            },
            getAllResponseHeaders: function (t, e) {
              var n = e.resHeader;
              if (n) {
                var r = "";
                for (var o in n) r += o + ": " + n[o] + "\r\n";
                return r;
              }
            },
            getResponseHeader: function (t, e) {
              var n = e.resHeader;
              if (n) return n[(t[0] || "").toLowerCase()];
            },
          },
          e
        );
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.proxy = r),
        (e.unProxy = o);
      var h = n(0),
        d = h.events[0],
        v = h.events[1],
        l = h.events[2],
        p = h.events[3],
        y = h.events[4],
        x = h.events[5],
        g = "prototype";
      a[g] = Object.create({
        resolve: function (t) {
          var e = this.xhrProxy,
            n = this.xhr;
          (e.readyState = 4),
            (n.resHeader = t.headers),
            (e.response = e.responseText = t.response),
            (e.statusText = t.statusText),
            (e.status = t.status),
            u(n, y),
            u(n, d),
            u(n, v);
        },
        reject: function (t) {
          (this.xhrProxy.status = 0), u(this.xhr, t.type), u(this.xhr, v);
        },
      });
      var b = c(function (t) {
          var e = this.xhr;
          (t = t || e.config),
            (e.withCredentials = t.withCredentials),
            e.open(t.method, t.url, !1 !== t.async, t.user, t.password);
          for (var n in t.headers) e.setRequestHeader(n, t.headers[n]);
          e.send(t.body);
        }),
        w = c(function (t) {
          this.resolve(t);
        }),
        E = c(function (t) {
          this.reject(t);
        });
    },
    ,
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.ah = void 0);
      var r = n(0),
        o = n(1);
      e.ah = {
        proxy: o.proxy,
        unProxy: o.unProxy,
        hook: r.hook,
        unHook: r.unHook,
      };
    },
  ])
);

((window) => {
  if (!window.ah) {
    window.ah = {};
  }
  const _fetch = fetch;

  const fetchHandler = {
    next: (config) => _fetch(config.url, config),
    resolve: (resolveConfig) => Promise.resolve(resolveConfig),
    reject: (rejectConfig) => Promise.reject(rejectConfig),
  };

  let globalFetchProxy = {};

  window.fetch = (url, config) => {
    if (
      !globalFetchProxy.onRequest ||
      typeof globalFetchProxy.onRequest !== "function"
    ) {
      return _fetch(url, config);
    } else {
      const globalConfig = { url, ...config };
      const result = globalFetchProxy.onRequest(globalConfig, fetchHandler);
      return result;
    }
  };

  window.ah.fetchProxy = (fetchProxy) => {
    if (fetchProxy && typeof fetchProxy.onRequest === "function") {
      globalFetchProxy = fetchProxy;
    }
  };
})(window);

const getQueryName = (queryString) => {
    if (!queryString) {
        return null;
    }

    return queryString
        .split("{")[0]
        .split("(")[0]
        .trim()
        .split(" ")[1] || null;
}

class ProxyMap {
  constructor() {
    this.map = new Map();
  }

  getQueryFromConfig(config) {
    if (config) {
      try {
        const url = config.url.indexOf("/") === 0 ? { pathname: config.url } : new URL(config.url);
        if (url.pathname === "/graphql" && config.method === "POST") {
          const requestBody = JSON.parse(config.body);
          const query = getQueryName(requestBody.query) || requestBody.query_hash;
          return this.map.get(query);
        }
      } catch (error) {
        return null;
      }
    }

    return null;
  }

  getMockedResponseByQuery(query) {
    if (this.map.has(query)) {
      return this.map.get(query);
    }
    return null;
  }

  hasQuery(query) {
    return this.map.has(query);
  }

  mockQuery(query, response, options = {}) {
    this.map.set(query, response);
  }

  unmockQuery(query) {
    this.map.delete(query);
  }
}

const proxyMap = new ProxyMap();

if (window.ah && window.ah.proxy && typeof window.ah.proxy === "function") {
  console.log("%cXMLHttpRequest has been proxied", "color: white; background-color: green; display: inline-block; padding: 2px 4px; border-radius: 4px;");

  const onRequestHandler = (config, handler) => {
    const query = proxyMap.getQueryFromConfig(config);
    return handler.next(config);
  };

  window.ah.proxyMap = proxyMap;
  window.ah.proxy({ onRequest: onRequestHandler });
  window.ah.fetchProxy({ onRequest: onRequestHandler });
}
