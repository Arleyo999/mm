const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const config = require('./config');
const auth = require('./modulos/auth/rutas')

const clientes = require('./modulos/clientes/rutas');
const usuarios = require('./modulos/usuarios/rutas');
const error = require ('./red/errors');

const app = express();

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

//Middleware
app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true})); 

//configuracion puerto
app.set('port',config.app.port);

//rutas
app.use('/api/clientes',clientes);
app.use('/api/usuarios',usuarios);
app.use('/api/auth',auth);


app.use(error);
module.exports = app;

