"use strict";

var app = require('./app');

app.listen(app.get('port'), function () {
  console.log("servidor escuchando en el puerto: ", app.get("port"));
});