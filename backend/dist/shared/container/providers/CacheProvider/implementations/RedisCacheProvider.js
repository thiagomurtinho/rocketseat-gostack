"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ioredis = _interopRequireDefault(require("ioredis"));

var _cache = _interopRequireDefault(require("../../../../../config/cache"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class RedisCacheProvider {
  constructor() {
    this.cliente = void 0;
    this.cliente = new _ioredis.default(_cache.default.config.redis);
  }

  async save(key, value) {
    await this.cliente.set(key, JSON.stringify(value));
  }

  async recover(key) {
    const data = await this.cliente.get(key);

    if (!data) {
      return null;
    }

    const parsedData = JSON.parse(data);
    return parsedData;
  }

  async invalidate(key) {
    await this.cliente.del(key);
  }

  async invalidatePrefix(prefix) {
    const keys = await this.cliente.keys(`${prefix}:*`);
    const pipeline = this.cliente.pipeline();
    keys.forEach(key => {
      pipeline.del(key);
    });
    await pipeline.exec();
  }

}

exports.default = RedisCacheProvider;