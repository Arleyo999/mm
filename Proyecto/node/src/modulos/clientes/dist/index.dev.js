"use strict";

var db = require('../../DB/mysql');

var ctrl = require('./controlador');

module.exports = ctrl(db);