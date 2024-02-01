"use strict";

var express = require('express');

var morgan = require('morgan');

var cors = require('cors');

var config = require('./config');

var auth = require('./modulos/auth/rutas');

var clientes = require('./modulos/clientes/rutas');

var usuarios = require('./modulos/usuarios/rutas');

var error = require('./red/errors');

var app = express();
var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}; //Middleware

app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
})); //configuracion puerto

app.set('port', config.app.port); //rutas

app.use('/api/clientes', clientes);
app.use('/api/usuarios', usuarios);
app.use('/api/auth', auth);
app.use(error);
module.exports = app;