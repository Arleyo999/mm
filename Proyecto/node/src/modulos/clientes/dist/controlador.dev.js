"use strict";

var TABLA = 'clientes';

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
    return db.agregar(TABLA, body);
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