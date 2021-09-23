"use strict";

var _tsyringe = require("tsyringe");

var _HandlebarsMailTemplateProvider = _interopRequireDefault(require("./implementations/HandlebarsMailTemplateProvider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const providers = {
  hanflebars: new _HandlebarsMailTemplateProvider.default()
};

_tsyringe.container.registerInstance('MailTemplateProvider', providers.hanflebars);