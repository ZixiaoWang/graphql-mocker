console.log("About to load inject.js");

const script = document.createElement("script");
script.src = chrome.runtime.getURL("/html/dist/content/inject.js");
document.documentElement.appendChild(script);
// script.parentNode.removeChild(script);

console.log("Inject.js has been loaded.")