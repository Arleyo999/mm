"use strict";

function error(message, code) {
  var e = new Error(message);

  if (code) {
    e.statusCode = code;
  }

  return e;
}

module.exports = error;