"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TABLA = 'auth';

var auth = require('../../auth');

var bcrypt = require('bcrypt');

var _require = require('express'),
    query = _require.query;

module.exports = function (dbInyectada) {
  var db = dbInyectada;

  if (!db) {
    db = require('../../DB/mysql');
  }

  function login(usuario, password) {
    var data;
    return regeneratorRuntime.async(function login$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(db.query(TABLA, {
              usuario: usuario
            }));

          case 2:
            data = _context.sent;
            return _context.abrupt("return", bcrypt.compare(password, data.password).then(function (resultado) {
              if (resultado === true) {
                return auth.asignarToken(_objectSpread({}, data)); //generar token
              } else {
                throw new Error('informacion invalida');
              }
            }));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    });
  }

  function agregar(data) {
    var authData;
    return regeneratorRuntime.async(function agregar$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.log(data);
            authData = {
              id: data.id
            };

            if (data.usuario) {
              authData.usuario = data.usuario;
            }

            if (!data.password) {
              _context2.next = 7;
              break;
            }

            _context2.next = 6;
            return regeneratorRuntime.awrap(bcrypt.hash(data.password.toString(), 5));

          case 6:
            authData.password = _context2.sent;

          case 7:
            return _context2.abrupt("return", db.agregar(TABLA, authData));

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    });
  }

  return {
    agregar: agregar,
    login: login
  };
};