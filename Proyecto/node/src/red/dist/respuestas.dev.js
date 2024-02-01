"use strict";

exports.success = function (req, res) {
  var mensaje = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var status = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 200;
  res.status(status).send({
    error: false,
    status: status,
    body: mensaje
  });
};

exports.error = function (req, res) {
  var mensaje = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'error Interno';
  var status = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 500;
  res.status(status).send({
    error: true,
    status: status,
    body: mensaje
  });
};