(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "dep"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("dep"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.dep);
    global.input = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _dep) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _dep.default;
    }
  });
  Object.defineProperty(_exports, "name", {
    enumerable: true,
    get: function () {
      return _dep.name;
    }
  });
  _dep = babelHelpers.interopRequireWildcard(_dep, true);
});
