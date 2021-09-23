"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _bcryptjs = require("bcryptjs");

class BCryptHashProvider {
  async generateHash(playload) {
    return (0, _bcryptjs.hash)(playload, 8);
  }

  async compareHash(playload, hashed) {
    return (0, _bcryptjs.compare)(playload, hashed);
  }

}

var _default = BCryptHashProvider;
exports.default = _default;