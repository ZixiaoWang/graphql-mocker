const script = document.createElement("script");
script.src = chrome.runtime.getURL("html/dist/content/inject.js");
document.documentElement.insertBefore(script, document.documentElement.firstChild);
script.parentNode.removeChild(script);