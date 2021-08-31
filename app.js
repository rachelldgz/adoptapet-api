//Express
const express = require('express');
const app = express();

//Body Parser​
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

//Configuración de rutas

app.use('/v1', require('./routes'))

//Iniciando Servidor​
const PORT = 4001;
app.listen(PORT, () => {
    console.log('ITS ALIVE!!! Server listening on port ${PORT}')
})