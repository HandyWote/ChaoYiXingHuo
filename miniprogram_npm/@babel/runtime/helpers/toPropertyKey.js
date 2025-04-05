var toPrimitive = require("./toPrimitive.js");

function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == typeof i ? i : String(i);
}

module.exports = toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;