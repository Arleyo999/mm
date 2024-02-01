"use strict";

var jwt = require('jsonwebtoken');

var config = require('../config');

var error = require('../middleware/errors');

var secret = config.jwt.secret;

function asignarToken(data) {
  return jwt.sign(data, secret);
}

function verificarToken(token) {
  return jwt.verify(token, secret);
}

var chequearToken = {
  confirmarToken: function confirmarToken(req, id) {
    var decodificado = decodificarCabecera(req);

    if (decodificado.id !== id) {
      throw error('no puedes hacer esto', 401);
    }
  }
};

function obtenerToken(autorizacion) {
  if (!autorizacion) {
    throw error('no viene Token', 401);
  }

  if (autorizacion.indexOf('Bearer') === -1) {
    throw error('Formato invalido', 401);
  }

  var token = autorizacion.replace('Bearer ', '');
  return token;
}

function decodificarCabecera(req) {
  var autorizacion = req.headers.authorization || '';
  var token = obtenerToken(autorizacion);
  var decodificado = verificarToken(token);
  req.user = decodificado;
  return decodificado;
}

module.exports = {
  asignarToken: asignarToken,
  chequearToken: chequearToken
};