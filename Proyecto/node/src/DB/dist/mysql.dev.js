"use strict";

var mysql = require('mysql');

var config = require('../config');

var dbconfig = {
  host: config.mysql.host,
  user: config.mysql.user,
  password: config.mysql.password,
  database: config.mysql.database
};
var conexion;

function conMysql() {
  conexion = mysql.createConnection(dbconfig);
  conexion.connect(function (err) {
    if (err) {
      console.log('[db err]', err);
      setTimeout(conMysql, 200);
    } else {
      console.log('DB conectada sr Programador millonario ');
    }
  });
  conexion.on('error', function (err) {
    console.log('[db err]', err);

    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      conMysql();
    } else {
      throw err;
    }
  });
}

conMysql();

function todos(tabla) {
  return new Promise(function (resolve, reject) {
    conexion.query("SELECT * FROM ".concat(tabla), function (error, result) {
      return error ? reject(error) : resolve(result);
    });
  });
}

function uno(tabla, id) {
  return new Promise(function (resolve, reject) {
    conexion.query("SELECT * FROM ".concat(tabla, " WHERE id = ").concat(id), function (error, result) {
      return error ? reject(error) : resolve(result);
    });
  });
}

function agregar(tabla, data) {
  return new Promise(function (resolve, reject) {
    conexion.query("INSERT INTO ".concat(tabla, " SET ? ON DUPLICATE KEY UPDATE ?"), [data, data], function (error, result) {
      return error ? reject(error) : resolve(result);
    });
  });
}

function eliminar(tabla, data) {
  return new Promise(function (resolve, reject) {
    conexion.query("DELETE FROM ".concat(tabla, " WHERE id = ?"), data.id, function (error, result) {
      return error ? reject(error) : resolve(result);
    });
  });
}

function query(tabla, consulta) {
  return new Promise(function (resolve, reject) {
    conexion.query("SELECT * FROM ".concat(tabla, " WHERE ?"), consulta, function (error, result) {
      return error ? reject(error) : resolve(result[0]);
    });
  });
}

module.exports = {
  todos: todos,
  uno: uno,
  agregar: agregar,
  eliminar: eliminar,
  query: query
};