"use strict";

var express = require('express');

var seguridad = require('./seguridad'); //const { eliminar } = require('../../DB/mysql');


var router = express.Router();

var respuesta = require('../../red/respuestas');

var controlador = require('./index');

router.get('/', todos);
router.get('/:id', uno);
router.post('/', agregar);
router.put('/', seguridad(), eliminar);

function todos(req, res) {
  var items;
  return regeneratorRuntime.async(function todos$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(controlador.todos());

        case 3:
          items = _context.sent;
          respuesta.success(req, res, items, 200);
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          respuesta.error(req, res, _context.t0, 500);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
}

;

function uno(req, res) {
  var items;
  return regeneratorRuntime.async(function uno$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(controlador.uno(req.params.id));

        case 3:
          items = _context2.sent;
          respuesta.success(req, res, items, 200);
          _context2.next = 10;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          respuesta.error(req, res, _context2.t0, 500);

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
}

;

function agregar(req, res, next) {
  var items;
  return regeneratorRuntime.async(function agregar$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(controlador.agregar(req.body));

        case 3:
          items = _context3.sent;

          if (req.body.id == 0) {
            mensaje = 'Item guardado con exito';
          } else {
            mensaje = 'Item actualizado con exito';
          }

          respuesta.success(req, res, mensaje, 201);
          _context3.next = 11;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          next(_context3.t0);

        case 11:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 8]]);
}

;

function eliminar(req, res, next) {
  var items;
  return regeneratorRuntime.async(function eliminar$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(controlador.eliminar(req.body));

        case 3:
          items = _context4.sent;
          respuesta.success(req, res, 'Registro eliminado satisfactoriamente!', 200);
          _context4.next = 10;
          break;

        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          next(_context4.t0);

        case 10:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 7]]);
}

;
module.exports = router;