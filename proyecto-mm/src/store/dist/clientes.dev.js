"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vuex["default"]);

var _default = {
  namespaced: true,
  state: {
    Items: []
  },
  getters: {
    Items: function Items(state) {
      return state.Items;
    }
  },
  mutations: {
    llenarItems: function llenarItems(state, data) {
      state.Items = data;
    }
  },
  actions: {
    cargarClientes: function cargarClientes(_ref) {
      var commit, setting, url, data, json;
      return regeneratorRuntime.async(function cargarClientes$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              commit = _ref.commit;
              _context.prev = 1;
              setting = {
                method: 'GET'
              };
              url = 'http://localhost:4000/api/clientes';
              _context.next = 6;
              return regeneratorRuntime.awrap(fetch(url, setting));

            case 6:
              data = _context.sent;
              _context.next = 9;
              return regeneratorRuntime.awrap(data.json());

            case 9:
              json = _context.sent;
              commit('llenarItems', json);
              _context.next = 16;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](1);
              console.log(_context.t0);

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[1, 13]]);
    }
  }
};
exports["default"] = _default;