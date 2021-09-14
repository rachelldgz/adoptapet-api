//Express
const express = require('express');
const app = express();

//Body Parser​
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

//configuración de base de datos
const mongoose = require('mongoose');
mongoose.connect(
    "<CREDENCIALES DE DB>"
);

mongoose.set("debug", true);

require('./models/Usuario');
require('./models/Mascota');
require('./models/Solicitud');


//Configuración de rutas
app.use('/v1', require('./routes'))

//Iniciando Servidor​
const PORT = 4001;
app.listen(PORT, () => {
    console.log('ITS ALIVE!!! Server listening on port ${PORT}')
})