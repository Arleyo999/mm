"use strict";

var respuesta = require('./respuestas');

function errors(err, req, res, next) {
  console.error('[error', err);
  var message = err.message || 'error interno';
  var status = err.statusCode || 500;
  respuesta.error(req, res, message, status);
}

module.exports = errors;