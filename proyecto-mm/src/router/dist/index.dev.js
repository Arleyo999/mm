"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _HomeView = _interopRequireDefault(require("../views/HomeView.vue"));

var _Clientes = _interopRequireDefault(require("../views/Clientes.vue"));

var _AboutView = _interopRequireDefault(require("../views/AboutView.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueRouter["default"]);

var routes = [{
  path: '/',
  name: 'home',
  component: _HomeView["default"]
}, {
  path: '/about',
  name: 'about',
  component: _AboutView["default"]
}, {
  path: '/clientes',
  name: 'clientes',
  component: _Clientes["default"]
}];
var router = new _vueRouter["default"]({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
});
var _default = router;
exports["default"] = _default;