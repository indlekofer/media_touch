"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "REDUCER", {
  enumerable: true,
  get: function get() {
    return _media.REDUCER;
  }
});
exports["default"] = exports.GET_TOUCH = exports.unset = exports.setup = exports.config = void 0;

var _media = require("@indlekofer/media");

var GET_TOUCH = '@indlekofer/media_touch/GET_TOUCH';
exports.GET_TOUCH = GET_TOUCH;

var config = function config() {
  var touch = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  (0, _media.handleChange)(GET_TOUCH, touch);
};

exports.config = config;

var setup = function setup() {
  try {
    document.createEvent("TouchEvent");
    config(true);
  } catch (e) {
    config(false);
  }
};

exports.setup = setup;

var unset = function unset() {};

exports.unset = unset;
setup();
var _default = GET_TOUCH;
exports["default"] = _default;