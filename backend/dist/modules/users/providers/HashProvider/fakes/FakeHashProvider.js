"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class FakeHashProvider {
  async generateHash(playload) {
    return playload;
  }

  async compareHash(playload, hashed) {
    return playload === hashed;
  }

}

var _default = FakeHashProvider;
exports.default = _default;