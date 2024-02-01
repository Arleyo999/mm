"use strict";

var TABLA = 'usuarios';

var auth = require('../auth');

module.exports = function (dbInyectada) {
  var db = dbInyectada;

  if (!db) {
    db = require('../../DB/mysql');
  }

  function todos() {
    return db.todos(TABLA);
  }

  function uno(id) {
    return db.uno(TABLA, id);
  }

  function agregar(body) {
    var usuario, respuesta, insertId, respuesta2;
    return regeneratorRuntime.async(function agregar$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            usuario = {
              id: body.id,
              nombre: body.usuario,
              activo: body.activo
            };
            _context.next = 3;
            return regeneratorRuntime.awrap(db.agregar(TABLA, usuario));

          case 3:
            respuesta = _context.sent;
            insertId = 0;

            if (body.id == 0) {
              insertId = respuesta.insertId;
            } else {
              insertId = body.id;
            }

            respuesta2 = '';

            if (!(body.usuario || body.password)) {
              _context.next = 11;
              break;
            }

            _context.next = 10;
            return regeneratorRuntime.awrap(auth.agregar({
              id: insertId,
              usuario: body.usuario,
              password: body.password
            }));

          case 10:
            respuesta2 = _context.sent;

          case 11:
            return _context.abrupt("return", respuesta2);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    });
  }

  function eliminar(body) {
    return db.eliminar(TABLA, body);
  }

  return {
    todos: todos,
    uno: uno,
    agregar: agregar,
    eliminar: eliminar
  };
};