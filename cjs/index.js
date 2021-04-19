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
exports["default"] = exports.unset = exports.setup = exports.config = exports.init = exports.GET_TOUCH = void 0;

var _media = require("@indlekofer/media");

var GET_TOUCH = '@indlekofer/media_touch/GET_TOUCH';
exports.GET_TOUCH = GET_TOUCH;

var init = function init() {
  try {
    document.createEvent('TouchEvent');
    config(true);
  } catch (e) {
    config(false);
  }
};

exports.init = init;

var config = function config(touch) {
  (0, _media.handleChange)(GET_TOUCH, touch);
};

exports.config = config;

var setup = function setup() {
  init();
};

exports.setup = setup;

var unset = function unset() {};

exports.unset = unset;
setup();
var _default = GET_TOUCH;
exports["default"] = _default;