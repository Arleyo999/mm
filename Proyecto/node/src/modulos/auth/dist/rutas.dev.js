"use strict";

var express = require('express');

var respuesta = require('../../red/respuestas');

var controlador = require('./index');

var router = express.Router();
router.get('/login', login);

function login(req, res, next) {
  var token;
  return regeneratorRuntime.async(function login$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(controlador.login(req.body.usuario, req.body.password));

        case 3:
          token = _context.sent;
          respuesta.success(req, res, token, 200);
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          next(_context.t0);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
}

;
module.exports = router;