// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"gPSfo":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "42036d7a98ade5a7";
module.bundle.HMR_BUNDLE_ID = "da9d3e561a2cc766";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"es34I":[function(require,module,exports) {
var _preact = require("preact");
var _hooks = require("preact/hooks");
var _components = require("./components");
var _panelPipe = require("./panel.pipe");
var _panelService = require("./panel.service");
var _panelScss = require("./panel.scss");
var _storageService = require("./storage.service");
const DevtoolsPanelApp = ()=>{
    const [focusedConnection, setFocusedConnection] = (0, _hooks.useState)(null);
    const panelService = (0, _panelService.usePanelService)();
    const graphqlReqeusts = panelService.pipe((0, _panelPipe.GRAPHQL_ONLY));
    const onItemClickHandler = (selectedConnection)=>{
        setFocusedConnection(selectedConnection);
    };
    const onDetailPanelCloseHandler = ()=>{
        setFocusedConnection(null);
    };
    return /*#__PURE__*/ (0, _preact.h)("div", {
        className: "connection",
        __source: {
            fileName: "panel/src/panel.tsx",
            lineNumber: 25,
            columnNumber: 9
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _preact.h)((0, _components.ConnectionList), {
        compact: !Boolean(focusedConnection),
        connections: graphqlReqeusts,
        onClick: onItemClickHandler,
        __source: {
            fileName: "panel/src/panel.tsx",
            lineNumber: 26,
            columnNumber: 13
        },
        __self: undefined
    }), focusedConnection && /*#__PURE__*/ (0, _preact.h)((0, _components.ConnectionDetail), {
        key: focusedConnection._request_id,
        connection: focusedConnection,
        onClose: onDetailPanelCloseHandler,
        __source: {
            fileName: "panel/src/panel.tsx",
            lineNumber: 33,
            columnNumber: 17
        },
        __self: undefined
    }));
};
(0, _preact.render)(/*#__PURE__*/ (0, _preact.h)(DevtoolsPanelApp, {
    __source: {
        fileName: "panel/src/panel.tsx",
        lineNumber: 43,
        columnNumber: 8
    },
    __self: undefined
}), document.getElementById("root"));
(0, _storageService.storageService).init("testing");
chrome.devtools.network.onRequestFinished.addListener((networkRequest)=>{
    (0, _panelService.panelService).push(networkRequest);
});

},{"preact":"cwEwC","preact/hooks":"97VL9","./components":"g6522","./panel.pipe":"8bgwM","./panel.service":"8Gwoz","./panel.scss":"ekLgM","./storage.service":"7mNQr"}],"cwEwC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "render", ()=>P);
parcelHelpers.export(exports, "hydrate", ()=>S);
parcelHelpers.export(exports, "createElement", ()=>h);
parcelHelpers.export(exports, "h", ()=>h);
parcelHelpers.export(exports, "Fragment", ()=>p);
parcelHelpers.export(exports, "createRef", ()=>y);
parcelHelpers.export(exports, "isValidElement", ()=>i);
parcelHelpers.export(exports, "Component", ()=>d);
parcelHelpers.export(exports, "cloneElement", ()=>q);
parcelHelpers.export(exports, "createContext", ()=>B);
parcelHelpers.export(exports, "toChildArray", ()=>x);
parcelHelpers.export(exports, "options", ()=>l);
var n, l, u, i, t, o, r, f = {}, e = [], c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function s(n1, l1) {
    for(var u1 in l1)n1[u1] = l1[u1];
    return n1;
}
function a(n2) {
    var l2 = n2.parentNode;
    l2 && l2.removeChild(n2);
}
function h(l3, u2, i1) {
    var t1, o1, r1, f1 = {};
    for(r1 in u2)"key" == r1 ? t1 = u2[r1] : "ref" == r1 ? o1 = u2[r1] : f1[r1] = u2[r1];
    if (arguments.length > 2 && (f1.children = arguments.length > 3 ? n.call(arguments, 2) : i1), "function" == typeof l3 && null != l3.defaultProps) for(r1 in l3.defaultProps)void 0 === f1[r1] && (f1[r1] = l3.defaultProps[r1]);
    return v(l3, f1, t1, o1, null);
}
function v(n3, i2, t2, o2, r2) {
    var f2 = {
        type: n3,
        props: i2,
        key: t2,
        ref: o2,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: null == r2 ? ++u : r2
    };
    return null == r2 && null != l.vnode && l.vnode(f2), f2;
}
function y() {
    return {
        current: null
    };
}
function p(n4) {
    return n4.children;
}
function d(n5, l4) {
    this.props = n5, this.context = l4;
}
function _(n6, l5) {
    if (null == l5) return n6.__ ? _(n6.__, n6.__.__k.indexOf(n6) + 1) : null;
    for(var u3; l5 < n6.__k.length; l5++)if (null != (u3 = n6.__k[l5]) && null != u3.__e) return u3.__e;
    return "function" == typeof n6.type ? _(n6) : null;
}
function k(n7) {
    var l6, u4;
    if (null != (n7 = n7.__) && null != n7.__c) {
        for(n7.__e = n7.__c.base = null, l6 = 0; l6 < n7.__k.length; l6++)if (null != (u4 = n7.__k[l6]) && null != u4.__e) {
            n7.__e = n7.__c.base = u4.__e;
            break;
        }
        return k(n7);
    }
}
function b(n8) {
    (!n8.__d && (n8.__d = !0) && t.push(n8) && !g.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || setTimeout)(g);
}
function g() {
    for(var n9; g.__r = t.length;)n9 = t.sort(function(n10, l7) {
        return n10.__v.__b - l7.__v.__b;
    }), t = [], n9.some(function(n11) {
        var l8, u5, i3, t3, o3, r3;
        n11.__d && (o3 = (t3 = (l8 = n11).__v).__e, (r3 = l8.__P) && (u5 = [], (i3 = s({}, t3)).__v = t3.__v + 1, j(r3, t3, i3, l8.__n, void 0 !== r3.ownerSVGElement, null != t3.__h ? [
            o3
        ] : null, u5, null == o3 ? _(t3) : o3, t3.__h), z(u5, t3), t3.__e != o3 && k(t3)));
    });
}
function w(n12, l9, u6, i4, t4, o4, r4, c1, s1, a1) {
    var h1, y1, d1, k1, b1, g1, w1, x1 = i4 && i4.__k || e, C1 = x1.length;
    for(u6.__k = [], h1 = 0; h1 < l9.length; h1++)if (null != (k1 = u6.__k[h1] = null == (k1 = l9[h1]) || "boolean" == typeof k1 ? null : "string" == typeof k1 || "number" == typeof k1 || "bigint" == typeof k1 ? v(null, k1, null, null, k1) : Array.isArray(k1) ? v(p, {
        children: k1
    }, null, null, null) : k1.__b > 0 ? v(k1.type, k1.props, k1.key, null, k1.__v) : k1)) {
        if (k1.__ = u6, k1.__b = u6.__b + 1, null === (d1 = x1[h1]) || d1 && k1.key == d1.key && k1.type === d1.type) x1[h1] = void 0;
        else for(y1 = 0; y1 < C1; y1++){
            if ((d1 = x1[y1]) && k1.key == d1.key && k1.type === d1.type) {
                x1[y1] = void 0;
                break;
            }
            d1 = null;
        }
        j(n12, k1, d1 = d1 || f, t4, o4, r4, c1, s1, a1), b1 = k1.__e, (y1 = k1.ref) && d1.ref != y1 && (w1 || (w1 = []), d1.ref && w1.push(d1.ref, null, k1), w1.push(y1, k1.__c || b1, k1)), null != b1 ? (null == g1 && (g1 = b1), "function" == typeof k1.type && k1.__k === d1.__k ? k1.__d = s1 = m(k1, s1, n12) : s1 = A(n12, k1, d1, x1, b1, s1), "function" == typeof u6.type && (u6.__d = s1)) : s1 && d1.__e == s1 && s1.parentNode != n12 && (s1 = _(d1));
    }
    for(u6.__e = g1, h1 = C1; h1--;)null != x1[h1] && ("function" == typeof u6.type && null != x1[h1].__e && x1[h1].__e == u6.__d && (u6.__d = _(i4, h1 + 1)), N(x1[h1], x1[h1]));
    if (w1) for(h1 = 0; h1 < w1.length; h1++)M(w1[h1], w1[++h1], w1[++h1]);
}
function m(n13, l10, u7) {
    for(var i5, t5 = n13.__k, o5 = 0; t5 && o5 < t5.length; o5++)(i5 = t5[o5]) && (i5.__ = n13, l10 = "function" == typeof i5.type ? m(i5, l10, u7) : A(u7, i5, i5, t5, i5.__e, l10));
    return l10;
}
function x(n14, l11) {
    return l11 = l11 || [], null == n14 || "boolean" == typeof n14 || (Array.isArray(n14) ? n14.some(function(n15) {
        x(n15, l11);
    }) : l11.push(n14)), l11;
}
function A(n16, l12, u8, i6, t6, o6) {
    var r5, f3, e1;
    if (void 0 !== l12.__d) r5 = l12.__d, l12.__d = void 0;
    else if (null == u8 || t6 != o6 || null == t6.parentNode) n: if (null == o6 || o6.parentNode !== n16) n16.appendChild(t6), r5 = null;
    else {
        for(f3 = o6, e1 = 0; (f3 = f3.nextSibling) && e1 < i6.length; e1 += 2)if (f3 == t6) break n;
        n16.insertBefore(t6, o6), r5 = o6;
    }
    return void 0 !== r5 ? r5 : t6.nextSibling;
}
function C(n17, l13, u9, i7, t7) {
    var o7;
    for(o7 in u9)"children" === o7 || "key" === o7 || o7 in l13 || H(n17, o7, null, u9[o7], i7);
    for(o7 in l13)t7 && "function" != typeof l13[o7] || "children" === o7 || "key" === o7 || "value" === o7 || "checked" === o7 || u9[o7] === l13[o7] || H(n17, o7, l13[o7], u9[o7], i7);
}
function $(n18, l14, u10) {
    "-" === l14[0] ? n18.setProperty(l14, u10) : n18[l14] = null == u10 ? "" : "number" != typeof u10 || c.test(l14) ? u10 : u10 + "px";
}
function H(n19, l15, u11, i8, t8) {
    var o8;
    n: if ("style" === l15) {
        if ("string" == typeof u11) n19.style.cssText = u11;
        else {
            if ("string" == typeof i8 && (n19.style.cssText = i8 = ""), i8) for(l15 in i8)u11 && l15 in u11 || $(n19.style, l15, "");
            if (u11) for(l15 in u11)i8 && u11[l15] === i8[l15] || $(n19.style, l15, u11[l15]);
        }
    } else if ("o" === l15[0] && "n" === l15[1]) o8 = l15 !== (l15 = l15.replace(/Capture$/, "")), l15 = l15.toLowerCase() in n19 ? l15.toLowerCase().slice(2) : l15.slice(2), n19.l || (n19.l = {}), n19.l[l15 + o8] = u11, u11 ? i8 || n19.addEventListener(l15, o8 ? T : I, o8) : n19.removeEventListener(l15, o8 ? T : I, o8);
    else if ("dangerouslySetInnerHTML" !== l15) {
        if (t8) l15 = l15.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("href" !== l15 && "list" !== l15 && "form" !== l15 && "tabIndex" !== l15 && "download" !== l15 && l15 in n19) try {
            n19[l15] = null == u11 ? "" : u11;
            break n;
        } catch (n) {}
        "function" == typeof u11 || (null != u11 && (!1 !== u11 || "a" === l15[0] && "r" === l15[1]) ? n19.setAttribute(l15, u11) : n19.removeAttribute(l15));
    }
}
function I(n20) {
    this.l[n20.type + !1](l.event ? l.event(n20) : n20);
}
function T(n21) {
    this.l[n21.type + !0](l.event ? l.event(n21) : n21);
}
function j(n22, u12, i9, t9, o9, r6, f4, e2, c2) {
    var a2, h2, v1, y2, _1, k2, b2, g2, m1, x2, A1, C2, $1, H1 = u12.type;
    if (void 0 !== u12.constructor) return null;
    null != i9.__h && (c2 = i9.__h, e2 = u12.__e = i9.__e, u12.__h = null, r6 = [
        e2
    ]), (a2 = l.__b) && a2(u12);
    try {
        n: if ("function" == typeof H1) {
            if (g2 = u12.props, m1 = (a2 = H1.contextType) && t9[a2.__c], x2 = a2 ? m1 ? m1.props.value : a2.__ : t9, i9.__c ? b2 = (h2 = u12.__c = i9.__c).__ = h2.__E : ("prototype" in H1 && H1.prototype.render ? u12.__c = h2 = new H1(g2, x2) : (u12.__c = h2 = new d(g2, x2), h2.constructor = H1, h2.render = O), m1 && m1.sub(h2), h2.props = g2, h2.state || (h2.state = {}), h2.context = x2, h2.__n = t9, v1 = h2.__d = !0, h2.__h = []), null == h2.__s && (h2.__s = h2.state), null != H1.getDerivedStateFromProps && (h2.__s == h2.state && (h2.__s = s({}, h2.__s)), s(h2.__s, H1.getDerivedStateFromProps(g2, h2.__s))), y2 = h2.props, _1 = h2.state, v1) null == H1.getDerivedStateFromProps && null != h2.componentWillMount && h2.componentWillMount(), null != h2.componentDidMount && h2.__h.push(h2.componentDidMount);
            else {
                if (null == H1.getDerivedStateFromProps && g2 !== y2 && null != h2.componentWillReceiveProps && h2.componentWillReceiveProps(g2, x2), !h2.__e && null != h2.shouldComponentUpdate && !1 === h2.shouldComponentUpdate(g2, h2.__s, x2) || u12.__v === i9.__v) {
                    h2.props = g2, h2.state = h2.__s, u12.__v !== i9.__v && (h2.__d = !1), h2.__v = u12, u12.__e = i9.__e, u12.__k = i9.__k, u12.__k.forEach(function(n23) {
                        n23 && (n23.__ = u12);
                    }), h2.__h.length && f4.push(h2);
                    break n;
                }
                null != h2.componentWillUpdate && h2.componentWillUpdate(g2, h2.__s, x2), null != h2.componentDidUpdate && h2.__h.push(function() {
                    h2.componentDidUpdate(y2, _1, k2);
                });
            }
            if (h2.context = x2, h2.props = g2, h2.__v = u12, h2.__P = n22, A1 = l.__r, C2 = 0, "prototype" in H1 && H1.prototype.render) h2.state = h2.__s, h2.__d = !1, A1 && A1(u12), a2 = h2.render(h2.props, h2.state, h2.context);
            else do h2.__d = !1, A1 && A1(u12), a2 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s;
            while (h2.__d && ++C2 < 25);
            h2.state = h2.__s, null != h2.getChildContext && (t9 = s(s({}, t9), h2.getChildContext())), v1 || null == h2.getSnapshotBeforeUpdate || (k2 = h2.getSnapshotBeforeUpdate(y2, _1)), $1 = null != a2 && a2.type === p && null == a2.key ? a2.props.children : a2, w(n22, Array.isArray($1) ? $1 : [
                $1
            ], u12, i9, t9, o9, r6, f4, e2, c2), h2.base = u12.__e, u12.__h = null, h2.__h.length && f4.push(h2), b2 && (h2.__E = h2.__ = null), h2.__e = !1;
        } else null == r6 && u12.__v === i9.__v ? (u12.__k = i9.__k, u12.__e = i9.__e) : u12.__e = L(i9.__e, u12, i9, t9, o9, r6, f4, c2);
        (a2 = l.diffed) && a2(u12);
    } catch (n24) {
        u12.__v = null, (c2 || null != r6) && (u12.__e = e2, u12.__h = !!c2, r6[r6.indexOf(e2)] = null), l.__e(n24, u12, i9);
    }
}
function z(n25, u13) {
    l.__c && l.__c(u13, n25), n25.some(function(u14) {
        try {
            n25 = u14.__h, u14.__h = [], n25.some(function(n26) {
                n26.call(u14);
            });
        } catch (n27) {
            l.__e(n27, u14.__v);
        }
    });
}
function L(l16, u15, i10, t10, o10, r7, e3, c3) {
    var s2, h3, v2, y3 = i10.props, p1 = u15.props, d2 = u15.type, k3 = 0;
    if ("svg" === d2 && (o10 = !0), null != r7) {
        for(; k3 < r7.length; k3++)if ((s2 = r7[k3]) && "setAttribute" in s2 == !!d2 && (d2 ? s2.localName === d2 : 3 === s2.nodeType)) {
            l16 = s2, r7[k3] = null;
            break;
        }
    }
    if (null == l16) {
        if (null === d2) return document.createTextNode(p1);
        l16 = o10 ? document.createElementNS("http://www.w3.org/2000/svg", d2) : document.createElement(d2, p1.is && p1), r7 = null, c3 = !1;
    }
    if (null === d2) y3 === p1 || c3 && l16.data === p1 || (l16.data = p1);
    else {
        if (r7 = r7 && n.call(l16.childNodes), h3 = (y3 = i10.props || f).dangerouslySetInnerHTML, v2 = p1.dangerouslySetInnerHTML, !c3) {
            if (null != r7) for(y3 = {}, k3 = 0; k3 < l16.attributes.length; k3++)y3[l16.attributes[k3].name] = l16.attributes[k3].value;
            (v2 || h3) && (v2 && (h3 && v2.__html == h3.__html || v2.__html === l16.innerHTML) || (l16.innerHTML = v2 && v2.__html || ""));
        }
        if (C(l16, p1, y3, o10, c3), v2) u15.__k = [];
        else if (k3 = u15.props.children, w(l16, Array.isArray(k3) ? k3 : [
            k3
        ], u15, i10, t10, o10 && "foreignObject" !== d2, r7, e3, r7 ? r7[0] : i10.__k && _(i10, 0), c3), null != r7) for(k3 = r7.length; k3--;)null != r7[k3] && a(r7[k3]);
        c3 || ("value" in p1 && void 0 !== (k3 = p1.value) && (k3 !== l16.value || "progress" === d2 && !k3 || "option" === d2 && k3 !== y3.value) && H(l16, "value", k3, y3.value, !1), "checked" in p1 && void 0 !== (k3 = p1.checked) && k3 !== l16.checked && H(l16, "checked", k3, y3.checked, !1));
    }
    return l16;
}
function M(n28, u16, i11) {
    try {
        "function" == typeof n28 ? n28(u16) : n28.current = u16;
    } catch (n29) {
        l.__e(n29, i11);
    }
}
function N(n30, u17, i12) {
    var t11, o11;
    if (l.unmount && l.unmount(n30), (t11 = n30.ref) && (t11.current && t11.current !== n30.__e || M(t11, null, u17)), null != (t11 = n30.__c)) {
        if (t11.componentWillUnmount) try {
            t11.componentWillUnmount();
        } catch (n31) {
            l.__e(n31, u17);
        }
        t11.base = t11.__P = null;
    }
    if (t11 = n30.__k) for(o11 = 0; o11 < t11.length; o11++)t11[o11] && N(t11[o11], u17, "function" != typeof n30.type);
    i12 || null == n30.__e || a(n30.__e), n30.__e = n30.__d = void 0;
}
function O(n32, l, u18) {
    return this.constructor(n32, u18);
}
function P(u19, i13, t12) {
    var o12, r8, e4;
    l.__ && l.__(u19, i13), r8 = (o12 = "function" == typeof t12) ? null : t12 && t12.__k || i13.__k, e4 = [], j(i13, u19 = (!o12 && t12 || i13).__k = h(p, null, [
        u19
    ]), r8 || f, f, void 0 !== i13.ownerSVGElement, !o12 && t12 ? [
        t12
    ] : r8 ? null : i13.firstChild ? n.call(i13.childNodes) : null, e4, !o12 && t12 ? t12 : r8 ? r8.__e : i13.firstChild, o12), z(e4, u19);
}
function S(n33, l17) {
    P(n33, l17, S);
}
function q(l18, u20, i14) {
    var t13, o13, r9, f5 = s({}, l18.props);
    for(r9 in u20)"key" == r9 ? t13 = u20[r9] : "ref" == r9 ? o13 = u20[r9] : f5[r9] = u20[r9];
    return arguments.length > 2 && (f5.children = arguments.length > 3 ? n.call(arguments, 2) : i14), v(l18.type, f5, t13 || l18.key, o13 || l18.ref, null);
}
function B(n34, l19) {
    var u21 = {
        __c: l19 = "__cC" + r++,
        __: n34,
        Consumer: function(n35, l20) {
            return n35.children(l20);
        },
        Provider: function(n36) {
            var u22, i15;
            return this.getChildContext || (u22 = [], (i15 = {})[l19] = this, this.getChildContext = function() {
                return i15;
            }, this.shouldComponentUpdate = function(n37) {
                this.props.value !== n37.value && u22.some(b);
            }, this.sub = function(n38) {
                u22.push(n38);
                var l21 = n38.componentWillUnmount;
                n38.componentWillUnmount = function() {
                    u22.splice(u22.indexOf(n38), 1), l21 && l21.call(n38);
                };
            }), n36.children;
        }
    };
    return u21.Provider.__ = u21.Consumer.contextType = u21;
}
n = e.slice, l = {
    __e: function(n39, l22, u, i16) {
        for(var t14, o14, r10; l22 = l22.__;)if ((t14 = l22.__c) && !t14.__) try {
            if ((o14 = t14.constructor) && null != o14.getDerivedStateFromError && (t14.setState(o14.getDerivedStateFromError(n39)), r10 = t14.__d), null != t14.componentDidCatch && (t14.componentDidCatch(n39, i16 || {}), r10 = t14.__d), r10) return t14.__E = t14;
        } catch (l23) {
            n39 = l23;
        }
        throw n39;
    }
}, u = 0, i = function(n40) {
    return null != n40 && void 0 === n40.constructor;
}, d.prototype.setState = function(n41, l24) {
    var u23;
    u23 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = s({}, this.state), "function" == typeof n41 && (n41 = n41(s({}, u23), this.props)), n41 && s(u23, n41), null != n41 && this.__v && (l24 && this.__h.push(l24), b(this));
}, d.prototype.forceUpdate = function(n42) {
    this.__v && (this.__e = !0, n42 && this.__h.push(n42), b(this));
}, d.prototype.render = p, t = [], g.__r = 0, r = 0;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"j7FRh":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"97VL9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useState", ()=>y);
parcelHelpers.export(exports, "useReducer", ()=>d);
parcelHelpers.export(exports, "useEffect", ()=>_);
parcelHelpers.export(exports, "useLayoutEffect", ()=>h);
parcelHelpers.export(exports, "useRef", ()=>s);
parcelHelpers.export(exports, "useImperativeHandle", ()=>A);
parcelHelpers.export(exports, "useMemo", ()=>F);
parcelHelpers.export(exports, "useCallback", ()=>T);
parcelHelpers.export(exports, "useContext", ()=>q);
parcelHelpers.export(exports, "useDebugValue", ()=>x);
parcelHelpers.export(exports, "useErrorBoundary", ()=>V);
var _preact = require("preact");
var t, u, r, o, i = 0, c = [], f = [], e = (0, _preact.options).__b, a = (0, _preact.options).__r, v = (0, _preact.options).diffed, l = (0, _preact.options).__c, m = (0, _preact.options).unmount;
function p(t1, r1) {
    (0, _preact.options).__h && (0, _preact.options).__h(u, t1, i || r1), i = 0;
    var o1 = u.__H || (u.__H = {
        __: [],
        __h: []
    });
    return t1 >= o1.__.length && o1.__.push({
        __V: f
    }), o1.__[t1];
}
function y(n) {
    return i = 1, d(z, n);
}
function d(n1, r2, o2) {
    var i1 = p(t++, 2);
    return i1.t = n1, i1.__c || (i1.__ = [
        o2 ? o2(r2) : z(void 0, r2),
        function(n) {
            var t2 = i1.t(i1.__[0], n);
            i1.__[0] !== t2 && (i1.__ = [
                t2,
                i1.__[1]
            ], i1.__c.setState({}));
        }
    ], i1.__c = u), i1.__;
}
function _(r3, o3) {
    var i2 = p(t++, 3);
    !(0, _preact.options).__s && w(i2.__H, o3) && (i2.__ = r3, i2.u = o3, u.__H.__h.push(i2));
}
function h(r4, o4) {
    var i3 = p(t++, 4);
    !(0, _preact.options).__s && w(i3.__H, o4) && (i3.__ = r4, i3.u = o4, u.__h.push(i3));
}
function s(n) {
    return i = 5, F(function() {
        return {
            current: n
        };
    }, []);
}
function A(n, t3, u1) {
    i = 6, h(function() {
        return "function" == typeof n ? (n(t3()), function() {
            return n(null);
        }) : n ? (n.current = t3(), function() {
            return n.current = null;
        }) : void 0;
    }, null == u1 ? u1 : u1.concat(n));
}
function F(n, u2) {
    var r5 = p(t++, 7);
    return w(r5.__H, u2) ? (r5.__V = n(), r5.u = u2, r5.__h = n, r5.__V) : r5.__;
}
function T(n, t4) {
    return i = 8, F(function() {
        return n;
    }, t4);
}
function q(n) {
    var r6 = u.context[n.__c], o5 = p(t++, 9);
    return o5.c = n, r6 ? (null == o5.__ && (o5.__ = !0, r6.sub(u)), r6.props.value) : n.__;
}
function x(t5, u3) {
    (0, _preact.options).useDebugValue && (0, _preact.options).useDebugValue(u3 ? u3(t5) : t5);
}
function V(n2) {
    var r7 = p(t++, 10), o6 = y();
    return r7.__ = n2, u.componentDidCatch || (u.componentDidCatch = function(n) {
        r7.__ && r7.__(n), o6[1](n);
    }), [
        o6[0],
        function() {
            o6[1](void 0);
        }
    ];
}
function b() {
    for(var t6; t6 = c.shift();)if (t6.__P) try {
        t6.__H.__h.forEach(j), t6.__H.__h.forEach(k), t6.__H.__h = [];
    } catch (u4) {
        t6.__H.__h = [], (0, _preact.options).__e(u4, t6.__v);
    }
}
(0, _preact.options).__b = function(n) {
    u = null, e && e(n);
}, (0, _preact.options).__r = function(n3) {
    a && a(n3), t = 0;
    var o7 = (u = n3.__c).__H;
    o7 && (r === u ? (o7.__h = [], u.__h = [], o7.__.forEach(function(n) {
        n.__V = f, n.u = void 0;
    })) : (o7.__h.forEach(j), o7.__h.forEach(k), o7.__h = [])), r = u;
}, (0, _preact.options).diffed = function(t7) {
    v && v(t7);
    var i4 = t7.__c;
    i4 && i4.__H && (i4.__H.__h.length && (1 !== c.push(i4) && o === (0, _preact.options).requestAnimationFrame || ((o = (0, _preact.options).requestAnimationFrame) || function(n) {
        var t8, u5 = function() {
            clearTimeout(r8), g && cancelAnimationFrame(t8), setTimeout(n);
        }, r8 = setTimeout(u5, 100);
        g && (t8 = requestAnimationFrame(u5));
    })(b)), i4.__H.__.forEach(function(n) {
        n.u && (n.__H = n.u), n.__V !== f && (n.__ = n.__V), n.u = void 0, n.__V = f;
    })), r = u = null;
}, (0, _preact.options).__c = function(t9, u6) {
    u6.some(function(t10) {
        try {
            t10.__h.forEach(j), t10.__h = t10.__h.filter(function(n) {
                return !n.__ || k(n);
            });
        } catch (r9) {
            u6.some(function(n) {
                n.__h && (n.__h = []);
            }), u6 = [], (0, _preact.options).__e(r9, t10.__v);
        }
    }), l && l(t9, u6);
}, (0, _preact.options).unmount = function(t11) {
    m && m(t11);
    var u7, r10 = t11.__c;
    r10 && r10.__H && (r10.__H.__.forEach(function(n) {
        try {
            j(n);
        } catch (n4) {
            u7 = n4;
        }
    }), u7 && (0, _preact.options).__e(u7, r10.__v));
};
var g = "function" == typeof requestAnimationFrame;
function j(n) {
    var t12 = u, r11 = n.__c;
    "function" == typeof r11 && (n.__c = void 0, r11()), u = t12;
}
function k(n) {
    var t13 = u;
    n.__c = n.__(), u = t13;
}
function w(n, t14) {
    return !n || n.length !== t14.length || t14.some(function(t15, u8) {
        return t15 !== n[u8];
    });
}
function z(n, t16) {
    return "function" == typeof t16 ? t16(n) : t16;
}

},{"preact":"cwEwC","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"g6522":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _connectionList = require("./connection-list");
parcelHelpers.exportAll(_connectionList, exports);
var _connectionDetail = require("./connection-detail");
parcelHelpers.exportAll(_connectionDetail, exports);
var _connectionHeader = require("./connection-header");
parcelHelpers.exportAll(_connectionHeader, exports);
parcelHelpers.exportAll(_connectionList, exports);
var _connectionPayload = require("./connection-payload");
parcelHelpers.exportAll(_connectionPayload, exports);
var _connectionRequest = require("./connection-request");
parcelHelpers.exportAll(_connectionRequest, exports);
var _connectionSetting = require("./connection-setting");
parcelHelpers.exportAll(_connectionSetting, exports);
var _jsonEditor = require("./json-editor");
parcelHelpers.exportAll(_jsonEditor, exports);

},{"./connection-list":"7zVZ4","./connection-detail":"5dezv","./connection-header":"9zgEq","./connection-payload":"bDzSx","./connection-request":"cveAZ","./connection-setting":"Begyj","./json-editor":"hQUEq","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"7zVZ4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ConnectionList", ()=>ConnectionList);
var _preact = require("preact");
var _panelHelper = require("../panel.helper");
const ConnectionList = ({ compact , connections , onClick  })=>{
    if (connections.length === 0) return /*#__PURE__*/ (0, _preact.h)("div", {
        __source: {
            fileName: "panel/src/components/connection-list.tsx",
            lineNumber: 14,
            columnNumber: 13
        },
        __self: undefined
    }, "There's no Graphql Reqeusts");
    const onClickHandler = (connection)=>{
        if (onClick && typeof onClick) onClick(connection);
    };
    return /*#__PURE__*/ (0, _preact.h)((0, _preact.Fragment), {
        __source: {
            fileName: "panel/src/components/connection-list.tsx",
            lineNumber: 25,
            columnNumber: 9
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _preact.h)("table", {
        className: "connection-list",
        frameBorder: 1,
        __source: {
            fileName: "panel/src/components/connection-list.tsx",
            lineNumber: 26,
            columnNumber: 13
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _preact.h)("thead", {
        __source: {
            fileName: "panel/src/components/connection-list.tsx",
            lineNumber: 27,
            columnNumber: 17
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _preact.h)("th", {
        __source: {
            fileName: "panel/src/components/connection-list.tsx",
            lineNumber: 28,
            columnNumber: 21
        },
        __self: undefined
    }, "Status"), /*#__PURE__*/ (0, _preact.h)("th", {
        __source: {
            fileName: "panel/src/components/connection-list.tsx",
            lineNumber: 29,
            columnNumber: 21
        },
        __self: undefined
    }, "Query"), compact && /*#__PURE__*/ (0, _preact.h)("th", {
        __source: {
            fileName: "panel/src/components/connection-list.tsx",
            lineNumber: 30,
            columnNumber: 33
        },
        __self: undefined
    }, "Size"), compact && /*#__PURE__*/ (0, _preact.h)("th", {
        __source: {
            fileName: "panel/src/components/connection-list.tsx",
            lineNumber: 31,
            columnNumber: 33
        },
        __self: undefined
    }, "Time")), /*#__PURE__*/ (0, _preact.h)("tbody", {
        __source: {
            fileName: "panel/src/components/connection-list.tsx",
            lineNumber: 33,
            columnNumber: 17
        },
        __self: undefined
    }, connections.map((connection, index)=>{
        const { request , response , time  } = connection;
        const graphqlRequestBodyText = request.postData?.text || "{}";
        const graphqlRequestBody = JSON.parse(graphqlRequestBodyText);
        return /*#__PURE__*/ (0, _preact.h)("tr", {
            className: "connection-list-item",
            onClick: ()=>onClickHandler(connection),
            __source: {
                fileName: "panel/src/components/connection-list.tsx",
                lineNumber: 40,
                columnNumber: 33
            },
            __self: undefined
        }, /*#__PURE__*/ (0, _preact.h)("td", {
            __source: {
                fileName: "panel/src/components/connection-list.tsx",
                lineNumber: 42,
                columnNumber: 37
            },
            __self: undefined
        }, response.status), /*#__PURE__*/ (0, _preact.h)("td", {
            __source: {
                fileName: "panel/src/components/connection-list.tsx",
                lineNumber: 43,
                columnNumber: 37
            },
            __self: undefined
        }, (0, _panelHelper.getQueryName)(graphqlRequestBody.query) || graphqlRequestBody.query_hash), compact && /*#__PURE__*/ (0, _preact.h)("td", {
            __source: {
                fileName: "panel/src/components/connection-list.tsx",
                lineNumber: 44,
                columnNumber: 49
            },
            __self: undefined
        }, response.content.size), compact && /*#__PURE__*/ (0, _preact.h)("td", {
            __source: {
                fileName: "panel/src/components/connection-list.tsx",
                lineNumber: 45,
                columnNumber: 49
            },
            __self: undefined
        }, time));
    }))));
};

},{"preact":"cwEwC","../panel.helper":"dwAkW","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"dwAkW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getQueryName", ()=>getQueryName);
parcelHelpers.export(exports, "getStorageKeyByConnection", ()=>getStorageKeyByConnection);
const getQueryName = (queryString)=>{
    if (!queryString) return null;
    return queryString.split("{")[0].split("(")[0].trim().split(" ")[1] || null;
};
const getStorageKeyByConnection = (connection)=>{
    return [
        connection.request.url,
        connection.request.postData?.text || ""
    ].filter(Boolean).join("::");
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"5dezv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ConnectionDetail", ()=>ConnectionDetail);
var _preact = require("preact");
var _hooks = require("preact/hooks");
var _ = require(".");
var _connectionHeader = require("./connection-header");
var _connectionPayload = require("./connection-payload");
var _connectionSetting = require("./connection-setting");
const tabs = [
    {
        label: "Headers",
        value: "HEADERS"
    },
    {
        label: "Payload",
        value: "PAYLOAD"
    },
    {
        label: "Response",
        value: "RESPONSE"
    },
    {
        label: "Settings",
        value: "SETTINGS"
    }
];
const ConnectionDetail = ({ connection , onClose  })=>{
    const { request , response  } = connection;
    const [focusedTab, setFocusedTab] = (0, _hooks.useState)("HEADERS");
    const onTabClickHandler = (label)=>{
        setFocusedTab(label);
    };
    return /*#__PURE__*/ (0, _preact.h)("div", {
        className: "connection-detail",
        __source: {
            fileName: "panel/src/components/connection-detail.tsx",
            lineNumber: 37,
            columnNumber: 9
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _preact.h)("div", {
        className: "connection-detail-tabs",
        __source: {
            fileName: "panel/src/components/connection-detail.tsx",
            lineNumber: 38,
            columnNumber: 13
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _preact.h)("div", {
        className: "connection-detail-tab is-close",
        onClick: onClose,
        __source: {
            fileName: "panel/src/components/connection-detail.tsx",
            lineNumber: 39,
            columnNumber: 17
        },
        __self: undefined
    }, "\u2573"), tabs.map((tab, index)=>{
        return /*#__PURE__*/ (0, _preact.h)("div", {
            key: index,
            className: "connection-detail-tab",
            onClick: ()=>onTabClickHandler(tab.value),
            __source: {
                fileName: "panel/src/components/connection-detail.tsx",
                lineNumber: 45,
                columnNumber: 29
            },
            __self: undefined
        }, tab.label);
    })), /*#__PURE__*/ (0, _preact.h)("div", {
        className: "connection-detail-panel",
        __source: {
            fileName: "panel/src/components/connection-detail.tsx",
            lineNumber: 54,
            columnNumber: 13
        },
        __self: undefined
    }, focusedTab === "HEADERS" && /*#__PURE__*/ (0, _preact.h)((0, _connectionHeader.ConnectionHeader), {
        requestHeaders: request.headers,
        responseHeaders: response.headers,
        __source: {
            fileName: "panel/src/components/connection-detail.tsx",
            lineNumber: 55,
            columnNumber: 47
        },
        __self: undefined
    }), focusedTab === "PAYLOAD" && /*#__PURE__*/ (0, _preact.h)((0, _.ConnectionRequest), {
        payload: request.postData?.text || "{}",
        __source: {
            fileName: "panel/src/components/connection-detail.tsx",
            lineNumber: 56,
            columnNumber: 47
        },
        __self: undefined
    }), focusedTab === "RESPONSE" && /*#__PURE__*/ (0, _preact.h)((0, _connectionPayload.ConnectionPayload), {
        editable: true,
        connection: connection,
        __source: {
            fileName: "panel/src/components/connection-detail.tsx",
            lineNumber: 57,
            columnNumber: 48
        },
        __self: undefined
    }), focusedTab === "SETTINGS" && /*#__PURE__*/ (0, _preact.h)((0, _connectionSetting.ConnectionSetting), {
        __source: {
            fileName: "panel/src/components/connection-detail.tsx",
            lineNumber: 58,
            columnNumber: 48
        },
        __self: undefined
    })));
};

},{"preact":"cwEwC","preact/hooks":"97VL9",".":"g6522","./connection-header":"9zgEq","./connection-payload":"bDzSx","./connection-setting":"Begyj","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"9zgEq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ConnectionHeader", ()=>ConnectionHeader);
var _preact = require("preact");
var _hooks = require("preact/hooks");
const ConnectionHeader = (props)=>{
    const [requestHeaderCollapsed, setRequestHeaderCollapsed] = (0, _hooks.useState)(false);
    const [responseHeaderCollapsed, setResponseHeaderCollapsed] = (0, _hooks.useState)(false);
    const { requestHeaders , responseHeaders  } = props;
    const renderHeaderDetail = (headers, ifRender)=>{
        if (!ifRender) return null;
        return /*#__PURE__*/ (0, _preact.h)("table", {
            className: "connection-header-body",
            __source: {
                fileName: "panel/src/components/connection-header.tsx",
                lineNumber: 24,
                columnNumber: 13
            },
            __self: undefined
        }, headers.map((headerItem, index)=>{
            return /*#__PURE__*/ (0, _preact.h)("tr", {
                className: "connection-header-item",
                key: index,
                __source: {
                    fileName: "panel/src/components/connection-header.tsx",
                    lineNumber: 28,
                    columnNumber: 29
                },
                __self: undefined
            }, /*#__PURE__*/ (0, _preact.h)("th", {
                className: "connection-header-item-name",
                __source: {
                    fileName: "panel/src/components/connection-header.tsx",
                    lineNumber: 29,
                    columnNumber: 33
                },
                __self: undefined
            }, headerItem.name), /*#__PURE__*/ (0, _preact.h)("td", {
                className: "connection-header-item-value",
                __source: {
                    fileName: "panel/src/components/connection-header.tsx",
                    lineNumber: 30,
                    columnNumber: 33
                },
                __self: undefined
            }, headerItem.value));
        }));
    };
    return /*#__PURE__*/ (0, _preact.h)((0, _preact.Fragment), {
        __source: {
            fileName: "panel/src/components/connection-header.tsx",
            lineNumber: 40,
            columnNumber: 9
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _preact.h)("div", {
        className: "connection-header-group",
        __source: {
            fileName: "panel/src/components/connection-header.tsx",
            lineNumber: 41,
            columnNumber: 13
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _preact.h)("div", {
        className: "connection-header-head",
        __source: {
            fileName: "panel/src/components/connection-header.tsx",
            lineNumber: 42,
            columnNumber: 17
        },
        __self: undefined
    }, "Request Header"), renderHeaderDetail(requestHeaders, !requestHeaderCollapsed)), /*#__PURE__*/ (0, _preact.h)("div", {
        className: "connection-header-group",
        __source: {
            fileName: "panel/src/components/connection-header.tsx",
            lineNumber: 47,
            columnNumber: 13
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _preact.h)("div", {
        className: "connection-header-head",
        __source: {
            fileName: "panel/src/components/connection-header.tsx",
            lineNumber: 48,
            columnNumber: 17
        },
        __self: undefined
    }, "Response Header"), renderHeaderDetail(responseHeaders, !responseHeaderCollapsed)));
};

},{"preact":"cwEwC","preact/hooks":"97VL9","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"bDzSx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ConnectionPayload", ()=>ConnectionPayload);
var _preact = require("preact");
var _hooks = require("preact/hooks");
var _panelHelper = require("../panel.helper");
var _storageService = require("../storage.service");
var _jsonEditor = require("./json-editor");
const ConnectionPayload = (props)=>{
    const { editable , connection  } = props;
    const key = (0, _panelHelper.getStorageKeyByConnection)(connection);
    const [content1, setContent] = (0, _hooks.useState)("{}");
    const [mockedContent, setMockedContent] = (0, _hooks.useState)(content1);
    const [ifMock, setIfMock] = (0, _hooks.useState)((0, _storageService.storageService).hasCacheByKey(key));
    (0, _hooks.useEffect)(()=>{
        if ((0, _storageService.storageService).hasCacheByKey(key)) setMockedContent((0, _storageService.storageService).getCacheByKey(key) || "{}");
    }, []);
    (0, _hooks.useEffect)(()=>{
        connection.getContent((content)=>{
            setContent(content);
        });
    }, [
        connection
    ]);
    const onMockResponseToggleHandler = (event)=>{
        const mock = !ifMock;
        if (mock) {
            if ((0, _storageService.storageService).hasCacheByKey(key)) {
                const presistedMockedContent = (0, _storageService.storageService).getCacheByKey(key) || "{}";
                setMockedContent(presistedMockedContent);
            } else {
                (0, _storageService.storageService).updateCacheByKey(key, content1);
                setMockedContent(content1);
            }
        } else {
            (0, _storageService.storageService).removeCacheByKey(key);
            setMockedContent(content1);
        }
        setIfMock(mock);
    };
    const onMockContentChangeHandler = (mockedContentString)=>{
        try {
            (0, _storageService.storageService).updateCacheByKey(key, mockedContentString);
            setMockedContent(mockedContentString);
        } catch (e) {
            console.error(e);
        }
    };
    return /*#__PURE__*/ (0, _preact.h)("div", {
        className: "connection-payload",
        __source: {
            fileName: "panel/src/components/connection-payload.tsx",
            lineNumber: 58,
            columnNumber: 9
        },
        __self: undefined
    }, editable && /*#__PURE__*/ (0, _preact.h)("div", {
        className: "connection-payload-controls",
        __source: {
            fileName: "panel/src/components/connection-payload.tsx",
            lineNumber: 60,
            columnNumber: 17
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _preact.h)("label", {
        htmlFor: "mock",
        class: "connection-payload-control",
        __source: {
            fileName: "panel/src/components/connection-payload.tsx",
            lineNumber: 61,
            columnNumber: 21
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _preact.h)("input", {
        type: "checkbox",
        name: "mock",
        id: "mock",
        checked: ifMock,
        onChange: onMockResponseToggleHandler,
        __source: {
            fileName: "panel/src/components/connection-payload.tsx",
            lineNumber: 62,
            columnNumber: 25
        },
        __self: undefined
    }), /*#__PURE__*/ (0, _preact.h)("span", {
        __source: {
            fileName: "panel/src/components/connection-payload.tsx",
            lineNumber: 63,
            columnNumber: 25
        },
        __self: undefined
    }, "Mock response"))), /*#__PURE__*/ (0, _preact.h)("div", {
        className: "connection-payload-panel",
        __source: {
            fileName: "panel/src/components/connection-payload.tsx",
            lineNumber: 67,
            columnNumber: 13
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _preact.h)((0, _jsonEditor.JSONEditor), {
        editable: editable && ifMock,
        json: mockedContent,
        onChange: onMockContentChangeHandler,
        __source: {
            fileName: "panel/src/components/connection-payload.tsx",
            lineNumber: 68,
            columnNumber: 17
        },
        __self: undefined
    })));
};

},{"preact":"cwEwC","preact/hooks":"97VL9","../panel.helper":"dwAkW","../storage.service":"7mNQr","./json-editor":"hQUEq","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"7mNQr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "StorageService", ()=>StorageService);
parcelHelpers.export(exports, "storageService", ()=>storageService);
var _baseService = require("./base.service");
var _mockService = require("./mock.service");
var _panelHelper = require("./panel.helper");
class StorageService extends (0, _baseService.BaseService) {
    cache = {};
    domain = "";
    constructor(){
        super();
        window.storageService = this;
    }
    init(domain) {
        this.domain = domain;
        chrome.storage.local.get(this.domain, (item)=>{
            this.cache = item[this.domain] || {};
        });
        Object.keys(this.cache).forEach((urlAndQuery)=>{
            const [url, queryString] = urlAndQuery.split("::");
            const mockedResponse = this.cache[urlAndQuery].value || "{}";
            const queryName = (0, _panelHelper.getQueryName)(JSON.parse(queryString)?.query);
            if (queryName) (0, _mockService.mockService).mockQuery(queryName, mockedResponse);
        });
    }
    hasCacheByKey(key) {
        return Boolean(this.cache[key]);
    }
    updateCacheByKey(key, value, config) {
        this.cache[key] = {
            value,
            config
        };
        chrome.storage.local.set({
            [this.domain]: this.cache
        });
        const [url, queryString] = key.split("::");
        const queryName = (0, _panelHelper.getQueryName)(JSON.parse(queryString)?.query);
        if (queryName) (0, _mockService.mockService).mockQuery(queryName, value);
    }
    getCacheByKey(key) {
        if (this.cache[key]) return this.cache[key].value || "";
        return null;
    }
    removeCacheByKey(key) {
        delete this.cache[key];
        chrome.storage.local.remove(key);
    }
    clear() {
        this.cache = {};
        chrome.storage.local.clear();
    }
}
const storageService = new StorageService();

},{"./base.service":"4DEKG","./mock.service":"4jDmf","./panel.helper":"dwAkW","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"4DEKG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BaseService", ()=>BaseService);
class BaseService {
    callbacks = new Set();
    register(callback) {
        this.callbacks.add(callback);
    }
    unregister(callback) {
        this.callbacks.delete(callback);
    }
    notify(...args) {
        this.callbacks.forEach((callback)=>{
            if (callback && typeof callback === "function") {
                if (args.length === 0) callback(Math.random());
                else callback(...args);
            }
        });
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"4jDmf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mockService", ()=>mockService);
var _baseService = require("./base.service");
class MockService extends (0, _baseService.BaseService) {
    cache = new Set();
    constructor(){
        super();
        window.mockService = this;
    }
    hasMockedQuery(query) {
        return this.cache.has(query);
    }
    hasQueryMocked = this.hasMockedQuery;
    mockQuery(query, mockedResponse) {
        // TODO: it doesn't update window.ah.proxyMap
        // which I don't understand why
        console.log({
            query,
            mockedResponse
        });
        chrome.devtools.inspectedWindow.eval(`
          console.log("Testing result is " + (1 + 1));
          console.log(window);
          console.log(${query})
        `, (result)=>console.log(result));
        chrome.devtools.inspectedWindow.eval(`
            window?.ah?.proxyMap?.mockQuery(
                "${query}",
                "${mockedResponse}",
            );
            console.log("%c${query} has been mocked", "color: white; background-color: green; display: inline-block; padding: 2px 4px; border-radius: 4px;");
        `, (result)=>{
            console.log({
                result
            });
        });
        this.cache.add(query);
    }
    unMockedQuery(query) {
        chrome.devtools.inspectedWindow.eval(`
            window?.ah?.proxyMap?.mockQuery("${query}");
            console.log("%c${query} has been unmocked", "color: white; background-color: grey; display: inline-block; padding: 2px 4px; border-radius: 4px;");
        `);
        this.cache.delete(query);
    }
}
const mockService = new MockService();

},{"./base.service":"4DEKG","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"hQUEq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "JSONEditor", ()=>JSONEditor);
var _preact = require("preact");
const JSONEditor = (props)=>{
    const { json , editable , onChange  } = props;
    const jsonString = typeof json === "string" ? JSON.stringify(JSON.parse(json), null, 4) : JSON.stringify(json, null, 4);
    const jsonRows = jsonString?.split(/\r?\n|\\n/g).map((row)=>row.replace(/\s/g, "\xa0")) || [
        ""
    ];
    const onMockedResponseChangeHandler = (event)=>{
        console.log(event);
        const newValue = event.target.value || "";
        if (onChange && typeof onChange === "function") onChange(newValue);
    };
    if (editable) return /*#__PURE__*/ (0, _preact.h)("div", {
        className: "json-editor",
        __source: {
            fileName: "panel/src/components/json-editor.tsx",
            lineNumber: 28,
            columnNumber: 13
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _preact.h)("textarea", {
        className: "json-content-editor",
        name: "json-content-editor",
        id: "jsoneditor",
        onChange: onMockedResponseChangeHandler,
        value: jsonString,
        __source: {
            fileName: "panel/src/components/json-editor.tsx",
            lineNumber: 29,
            columnNumber: 17
        },
        __self: undefined
    }));
    return /*#__PURE__*/ (0, _preact.h)("div", {
        className: "json-editor",
        __source: {
            fileName: "panel/src/components/json-editor.tsx",
            lineNumber: 41,
            columnNumber: 9
        },
        __self: undefined
    }, jsonRows.map((row, index)=>{
        return /*#__PURE__*/ (0, _preact.h)("div", {
            className: "json-row",
            onChange: (event)=>console.log(event),
            __source: {
                fileName: "panel/src/components/json-editor.tsx",
                lineNumber: 44,
                columnNumber: 21
            },
            __self: undefined
        }, /*#__PURE__*/ (0, _preact.h)("div", {
            className: "json-row-index",
            __source: {
                fileName: "panel/src/components/json-editor.tsx",
                lineNumber: 45,
                columnNumber: 25
            },
            __self: undefined
        }, index + 1), /*#__PURE__*/ (0, _preact.h)("div", {
            className: "json-row-content",
            __source: {
                fileName: "panel/src/components/json-editor.tsx",
                lineNumber: 46,
                columnNumber: 25
            },
            __self: undefined
        }, row));
    }));
};

},{"preact":"cwEwC","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"Begyj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ConnectionSetting", ()=>ConnectionSetting);
var _preact = require("preact");
const ConnectionSetting = ()=>{
    const onButtonClickHandler = ()=>{
        const message = "Setting button + " + Date.now().toString();
        chrome.devtools.inspectedWindow.eval(`
                console.log("message comes from panel setting");
                console.log(window.ah);
            `);
    };
    return /*#__PURE__*/ (0, _preact.h)("div", {
        className: "connection-setting",
        __source: {
            fileName: "panel/src/components/connection-setting.tsx",
            lineNumber: 16,
            columnNumber: 9
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _preact.h)("button", {
        onClick: onButtonClickHandler,
        __source: {
            fileName: "panel/src/components/connection-setting.tsx",
            lineNumber: 17,
            columnNumber: 13
        },
        __self: undefined
    }, "Send message"));
};

},{"preact":"cwEwC","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"cveAZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ConnectionRequest", ()=>ConnectionRequest);
var _preact = require("preact");
var _jsonEditor = require("./json-editor");
const ConnectionRequest = (props)=>{
    const { payload  } = props;
    return /*#__PURE__*/ (0, _preact.h)("div", {
        className: "connection-payload",
        __source: {
            fileName: "panel/src/components/connection-request.tsx",
            lineNumber: 12,
            columnNumber: 9
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _preact.h)("div", {
        className: "connection-payload-panel",
        __source: {
            fileName: "panel/src/components/connection-request.tsx",
            lineNumber: 13,
            columnNumber: 13
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _preact.h)((0, _jsonEditor.JSONEditor), {
        json: payload,
        __source: {
            fileName: "panel/src/components/connection-request.tsx",
            lineNumber: 14,
            columnNumber: 17
        },
        __self: undefined
    })));
};

},{"preact":"cwEwC","./json-editor":"hQUEq","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"8bgwM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GRAPHQL_ONLY", ()=>GRAPHQL_ONLY);
const GRAPHQL_ONLY = (networkRequest)=>{
    const request = networkRequest.request;
    const url = new URL(request.url);
    const method = request.method;
    if (method === "POST" && url.pathname === "/graphql") // console.log(networkRequest)
    return true;
    return false;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"8Gwoz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PanelService", ()=>PanelService);
parcelHelpers.export(exports, "panelService", ()=>panelService);
parcelHelpers.export(exports, "usePanelService", ()=>usePanelService);
var _hooks = require("preact/hooks");
var _baseService = require("./base.service");
class PanelService extends (0, _baseService.BaseService) {
    connections = [];
    constructor(){
        super();
        window.panelService = this;
    }
    push(connection) {
        this.connections.push(connection);
        this.notify();
    }
    pipe(...pipes) {
        let filteredConnections = this.connections;
        for (const pipe of pipes)filteredConnections = filteredConnections.filter(pipe);
        return filteredConnections;
    }
}
const panelService = new PanelService();
const usePanelService = ()=>{
    const [_, setNounce] = (0, _hooks.useState)();
    (0, _hooks.useEffect)(()=>{
        panelService.register(setNounce);
        return ()=>panelService.unregister(setNounce);
    }, []);
    return panelService;
};

},{"preact/hooks":"97VL9","./base.service":"4DEKG","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"ekLgM":[function() {},{}]},["gPSfo","es34I"], "es34I", "parcelRequire1284")

