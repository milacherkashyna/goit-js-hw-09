!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var a=r("6JpON");function i(e,t){var n=Math.random()>.3;return new Promise((function(o,r){setTimeout((function(){n?o({position:e,delay:t}):r({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(function(t){if(t.preventDefault(),""===t.target.elements.delay.value||""===t.target.elements.step.value||""===t.target.elements.amount.value)return void e(a).Notify.failure("Please fill all fields");var n=+t.target.elements.amount.value,o=+t.target.elements.delay.value,r=+t.target.elements.step.value;t.target.reset();for(var l=1;l<=n;l++)i(l,o).then((function(t){var n=t.position,o=t.delay;e(a).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(t){var n=t.position,o=t.delay;e(a).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))})),o+=r}))}();
//# sourceMappingURL=03-promises.a7d0dc75.js.map