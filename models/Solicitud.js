// Solicitud.js
/** Clase que representa una solicitud de adopción */
// class Solicitud {
//     constructor(id, idMascota, fechaDeCreacion, idUsuarioAnunciante, idUsuarioSolicitante, estado) {
//         this.id = id;
//         this.idMascota = idMascota;
//         this.fechaDeCreacion = fechaDeCreacion;
//         this.idUsuarioAnunciante = idUsuarioAnunciante;
//         this.idUsuarioSolicitante = idUsuarioSolicitante;
//         this.estado = estado;
//     }

// }

// module.exports = Solicitud;

const mongoose = require('mongoose');

const SolicitudSchema = new mongoose.Schema({
    idMascota: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Mascota'
    },
    idUsuarioAnunciante: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    idUsuarioSolicitante: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    estado: {
        Type: String,
        enum: ['adoptado', 'disponible', 'pendiente']
    }
}, {
    collection: 'Solicitudes',
    timestamps: true
});

SolicutudSchema.methods.publicData = () => {
    return {
        id: this.id,
        idMascota: this.idMascota,
        idUsuarioAnunciante: this.idUsuarioAnunciante,
        idUsuarioSolicitante: this.idUsuarioSolicitante,
        estado: this.estado,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt
    }
}

mongoose.model('Solicitud', SolicitudSchema);