// importamos el modelo de mascota
const Mascota = require('../models/Mascota')

//CRUD

function crearMascota(req, res) {
    var mascota = new Mascota(req.body)
    res.status(201).send(mascota)
}

function obtenerMascota(req, res) {
    var mascota = new Mascota(2, 'Loki', 'perro', 'www.loki.com', 'Cachorro Sharpei', 'Rachel', 'Veracruz')
    res.send(mascota)
}

function modificarMascota(req, res) {
    var mascota = new Mascota(req.params.id, 'Loki', 'perro', 'www.loki.com')
    var modificaciones = req.body
    mascota = {
        ...mascota,
        ...modificaciones
    }
    res.send(mascota)
}

function eliminarMascota(req, res) {
    res.status(200).send(`Mascota ${req.params.id} eliminado`);
}

module.exports = {
    crearMascota,
    obtenerMascota,
    modificarMascota,
    eliminarMascota
}