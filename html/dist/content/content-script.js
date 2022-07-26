!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : ((t = t || self).ajaxProxy = e());
})(this, function () {
  "use strict";
  return new (class {
    constructor() {
      (this.proxyAjax = (t) => {
        if (null == t)
          throw new TypeError("proxyMap can not be undefined or null");
        (this.RealXMLHttpRequest =
          this.RealXMLHttpRequest || window.XMLHttpRequest),
          (this.realXMLHttpRequest =
            this.realXMLHttpRequest || new window.XMLHttpRequest());
        const e = this,
          n = new Proxy(this.RealXMLHttpRequest, {
            construct(n) {
              const o = new n();
              return new Proxy(o, {
                get(n, o, r) {
                  let s = "";
                  try {
                    s = typeof e.realXMLHttpRequest[o];
                  } catch (t) {
                    return console.error(t), n[o];
                  }
                  if ("function" !== s) {
                    const s = e.hasOwnProperty(`_${o.toString()}`)
                        ? e[`_${o.toString()}`]
                        : n[o],
                      i = (t[o] || {}).getter;
                    return ("function" == typeof i && i.call(n, s, r)) || s;
                  }
                  return (...e) => {
                    let s = e;
                    if (t[o]) {
                      const i = t[o].call(n, e, r);
                      if (!0 === i) return;
                      i && (s = "function" == typeof i ? i.call(n, ...e) : i);
                    }
                    return n[o].call(n, ...s);
                  };
                },
                set(n, o, r, s) {
                  let i = "";
                  try {
                    i = typeof e.realXMLHttpRequest[o];
                  } catch (t) {
                    console.error(t);
                  }
                  if ("function" === i)
                    throw new Error(
                      `${o.toString()} in XMLHttpRequest can not be reseted`
                    );
                  if ("function" == typeof t[o])
                    n[o] = () => {
                      t[o].call(n, s) || r.call(s);
                    };
                  else {
                    const i = (t[o] || {}).setter;
                    try {
                      n[o] =
                        ("function" == typeof i && i.call(n, r, s)) ||
                        ("function" == typeof r ? r.bind(s) : r);
                    } catch (t) {
                      if (!0 !== i) throw t;
                      e[`_${o.toString()}`] = r;
                    }
                  }
                  return !0;
                },
              });
            },
          });
        return (window.XMLHttpRequest = n), this.RealXMLHttpRequest;
      }),
        (this.unProxyAjax = () => {
          this.RealXMLHttpRequest &&
            (window.XMLHttpRequest = this.RealXMLHttpRequest),
            (this.RealXMLHttpRequest = void 0);
        });
    }
  })();
});


console.log("XMLHttpRequest has been proxied")

window.addEventListener("message", (data) => {
  console.log(">>> recived data <<<<")
  console.log(data);
})